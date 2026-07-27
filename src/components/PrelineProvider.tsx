"use client";

import { useEffect } from "react";
import { HSStaticMethods } from "preline";
import type { ReactNode } from "react";

export default function PrelineProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    HSStaticMethods.autoInit(["carousel", "collapse"]);
  }, []);

  return <>{children}</>;
}
