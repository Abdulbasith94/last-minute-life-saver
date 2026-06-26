export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-8">

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="text-slate-400 mt-2">
        {subtitle}
      </p>

    </div>
  );
}