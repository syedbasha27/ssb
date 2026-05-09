"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push(searchParams.get("redirect") || "/admin");
    router.refresh();
  }

  return (
    <main className="mx-auto flex w-full max-w-md px-4 py-14 sm:px-6">
      <form action={onSubmit} className="w-full space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-brand-blue">Admin Login</h1>
        <Input name="email" type="email" required placeholder="Email" />
        <Input name="password" type="password" required placeholder="Password" />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button disabled={loading} className="w-full">{loading ? "Signing in..." : "Sign in"}</Button>
      </form>
    </main>
  );
}
