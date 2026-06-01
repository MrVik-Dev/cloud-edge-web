"use client"

// app/dashboard/layout.tsx

import { AppSidebar } from "@/components/shared/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isLogin = path.startsWith("/asgard/login")

  if (!isLogin) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="p-2">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    )
  }
  return (
    <>
      {
        children
      }
    </>
  );
}