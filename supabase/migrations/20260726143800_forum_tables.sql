-- Create forum_questions table
create table public.forum_questions (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  hero_id text not null,
  content text not null,
  created_at timestamptz not null default now(),
  likes integer not null default 0,
  liked_by text[] not null default '{}'
);

-- Create forum_replies table
create table public.forum_replies (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.forum_questions(id) on delete cascade,
  author text not null,
  content text not null,
  created_at timestamptz not null default now(),
  likes integer not null default 0,
  liked_by text[] not null default '{}'
);

-- Enable RLS
alter table public.forum_questions enable row level security;
alter table public.forum_replies enable row level security;

-- Policies for forum_questions
create policy "Anyone can read questions"
  on public.forum_questions
  for select
  to anon, authenticated
  using (true);

create policy "Anyone can post questions"
  on public.forum_questions
  for insert
  to anon, authenticated
  with check (
    author is not null and char_length(trim(author)) > 0 and char_length(author) <= 100
    and hero_id is not null and char_length(trim(hero_id)) > 0 and char_length(hero_id) <= 50
    and content is not null and char_length(trim(content)) > 0
  );

-- Policies for forum_replies
create policy "Anyone can read replies"
  on public.forum_replies
  for select
  to anon, authenticated
  using (true);

create policy "Anyone can post replies"
  on public.forum_replies
  for insert
  to anon, authenticated
  with check (
    question_id is not null
    and author is not null and char_length(trim(author)) > 0 and char_length(author) <= 100
    and content is not null and char_length(trim(content)) > 0
  );

-- Function to toggle question like safely
create or replace function public.toggle_question_like(question_id uuid, visitor_id text)
returns void
language plpgsql
security definer
as $$
begin
  if exists (select 1 from public.forum_questions where id = question_id and visitor_id = any(liked_by)) then
    update public.forum_questions
    set liked_by = array_remove(liked_by, visitor_id),
        likes = likes - 1
    where id = question_id;
  else
    update public.forum_questions
    set liked_by = array_append(liked_by, visitor_id),
        likes = likes + 1
    where id = question_id;
  end if;
end;
$$;

-- Function to toggle reply like safely
create or replace function public.toggle_reply_like(reply_id uuid, visitor_id text)
returns void
language plpgsql
security definer
as $$
begin
  if exists (select 1 from public.forum_replies where id = reply_id and visitor_id = any(liked_by)) then
    update public.forum_replies
    set liked_by = array_remove(liked_by, visitor_id),
        likes = likes - 1
    where id = reply_id;
  else
    update public.forum_replies
    set liked_by = array_append(liked_by, visitor_id),
        likes = likes + 1
    where id = reply_id;
  end if;
end;
$$;

-- Function to delete question with admin password verification
create or replace function public.delete_forum_question(question_id uuid, admin_password text)
returns boolean
language plpgsql
security definer
as $$
begin
  if admin_password = 'megaadadmin' then
    delete from public.forum_questions where id = question_id;
    return true;
  else
    raise exception 'Unauthorized: password errata';
  end if;
end;
$$;

-- Function to delete reply with admin password verification
create or replace function public.delete_forum_reply(reply_id uuid, admin_password text)
returns boolean
language plpgsql
security definer
as $$
begin
  if admin_password = 'megaadadmin' then
    delete from public.forum_replies where id = reply_id;
    return true;
  else
    raise exception 'Unauthorized: password errata';
  end if;
end;
$$;
