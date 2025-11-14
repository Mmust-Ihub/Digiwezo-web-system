"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Tab } from "@school-admin/(features)/students/types/interface";

export function useTabs(tabs: Tab[],route:string) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const [isLoading, setIsLoading] = useState(false);

  async function switchTab(value: string) {
    setIsLoading(true);
    setActiveTab(value);
    router.push(route + value);
    setIsLoading(false);
  }

  return {
    pathname,
    activeTab,
    isLoading,
    switchTab,
  };
}
