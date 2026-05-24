create table public.news_interest (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  consent boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.news_interest enable row level security;

create policy "Anyone can submit interest"
  on public.news_interest
  for insert
  to anon, authenticated
  with check (
    email is not null
    and char_length(email) between 3 and 255
    and (name is null or char_length(name) <= 100)
  );
