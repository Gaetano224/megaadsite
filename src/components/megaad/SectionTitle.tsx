export function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      )}
      <h2 className="text-4xl md:text-5xl font-semibold text-gold-soft">{title}</h2>
      <div className="mx-auto mt-5 h-px w-32 gold-divider" />
    </div>
  );
}
