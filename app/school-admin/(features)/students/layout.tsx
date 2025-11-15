"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTabs } from "@/hooks/useTabs";
import { tabs } from "./data/constants";

export default function SchoolAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { activeTab, switchTab } = useTabs(tabs,"/school-admin/students");

  return (
    <div className="flex flex-col overflow-clip top-[12.5vh] mt-1 mr-1 ">
      <div className="h-[6vh] flex items-center  justify-start w-full bg-primary/40 py-2 rounded-md ">
        <Tabs value={activeTab} onValueChange={switchTab}>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.icon && <tab.icon className="w-4 h-4" />}{" "}
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-row h-[88vh] bg-custom-white  m-4 rounded-md overflow-hidden">
        <div className="min-h-full w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
