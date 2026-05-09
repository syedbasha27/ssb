"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Toast = { id: number; message: string };
type ToastContextType = { pushToast: (message: string) => void };

const ToastContext = createContext<ToastContextType>({
  pushToast: () => {
    throw new Error("useToast must be used inside ToastProvider");
  },
});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const value = useMemo(
    () => ({
      pushToast(message: string) {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message }]);
        setTimeout(() => {
          setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 2500);
      },
    }),
    [],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div key={toast.id} className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white shadow-lg">
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
