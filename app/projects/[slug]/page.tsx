type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return (
    <section className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Case Study
      </p>
      <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
        {params.slug.replace(/-/g, " ")}
      </h1>
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        This is a placeholder for the {params.slug} project detail page. Replace
        this copy with the project challenge, solution, tech stack, and assets
        when you are ready to publish the full write-up.
      </p>
    </section>
  );
}
