import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  inverted = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-12", className)}>
      <p
        className={cn(
          "label md:col-span-3",
          inverted ? "text-highlight" : "text-accent",
        )}
      >
        {eyebrow}
      </p>

      <div className="md:col-span-9">
        <h2 className="display max-w-[20ch] text-balance text-4xl sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {intro && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
              inverted ? "text-paper/65" : "text-ink-2",
            )}
          >
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
