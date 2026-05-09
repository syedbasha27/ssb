"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function FadeIn({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
