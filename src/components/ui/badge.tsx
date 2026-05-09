import { cn } from "@/lib/utils";

export function Badge({ text, tone = "blue" }: { text: string; tone?: "blue" | "orange" | "green" }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
        tone === "blue" && "bg-brand-blue/10 text-brand-blue",
        tone === "orange" && "bg-brand-orange/15 text-brand-orange",
        tone === "green" && "bg-emerald-50 text-emerald-700",
      )}
    >
      {text}
    </span>
  );
}
