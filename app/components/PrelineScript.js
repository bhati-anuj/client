"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Remove TypeScript-specific import
// import { IStaticMethods } from "preline/preline";

// Remove TypeScript-specific declaration
// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }, [path]);

  return null;
}
