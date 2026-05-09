import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("rounded-2xl border border-slate-100 bg-white shadow-sm", className)}>{children}</div>;
}
