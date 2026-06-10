"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Settings,
  Package,
  LogOut,
  ChevronRight,
  MonitorCog,
  BookOpenText, Newspaper,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";

const items = [
  {
    title: "Dashboard",
    url: "/asgard/dashboard",
    icon: Home,
  },
  {
    title: "Content",
    icon: MonitorCog,
    items: [
      {
        title: "Banners",
        url: "/asgard/content/banners",
      },
    ],
  },
  {
    title: "Academics",
    icon: BookOpenText,
    items: [
      {
        title: "Batches",
        url: "/asgard/academics/batches"
      },
      {
        title: "Batch Regions",
        url: "/asgard/academics/batch-regions"
      },
      {
        title: "Courses",
        url: "/asgard/academics/courses"
      }
    ]
  },
  {
    title: "Blogs",
    icon: Newspaper,
    url: "/asgard/blogs",
  }
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-border/40 bg-background/60 backdrop-blur-xl">
      {/* Premium Header */}
      <SidebarHeader className="border-b border-border/40 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-7 w-full shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.svg"
              alt="Asgard Logo"
              width={32}
              height={32}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </SidebarHeader>

      {/* Sleek Navigation */}
      <SidebarContent className="px-4 py-6">
        <nav className="space-y-1">
          {items.map((item) => {
            if (item.items) {
              const isActive = item.items.some((sub) =>
                pathname.startsWith(sub.url)
              );

              return (
                <Collapsible
                  key={item.title}
                  defaultOpen={isActive}
                  className="group/collapsible"
                >
                  <CollapsibleTrigger
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      "hover:bg-muted/60 hover:text-foreground text-muted-foreground",
                      isActive && "bg-muted/40 text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4 shrink-0 opacity-80" />
                    <span className="flex-1 text-left">{item.title}</span>
                    <ChevronRight 
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform duration-200",
                        "group-data-[state=open]/collapsible:rotate-90"
                      )} 
                    />
                  </CollapsibleTrigger>

                  <CollapsibleContent className="mt-1 relative before:absolute before:left-[1.35rem] before:top-0 before:h-full before:w-[1px] before:bg-border/60">
                    <div className="space-y-0.5 py-0.5">
                      {item.items.map((sub) => {
                        const active = pathname === sub.url;

                        return (
                          <Link
                            key={sub.url}
                            href={sub.url}
                            className={cn(
                              "ml-6 flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                              active
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                            )}
                          >
                            {sub.title}
                          </Link>
                        );
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            }

            const active = pathname === item.url;

            return (
              <Link
                key={item.url}
                href={item.url}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/10"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </SidebarContent>

      {/* Minimalist Glass Footer */}
      <SidebarFooter className="border-t border-border/40 p-4">
        <div className="flex items-center gap-3 rounded-2xl border border-border/20 bg-muted/20 p-3 backdrop-blur-md group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 text-xs font-semibold text-primary border border-primary/20">
            A
          </div>

          <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden animate-in fade-in duration-300">
            <p className="text-xs font-semibold text-foreground truncate">
              Admin Portal
            </p>
            <p className="text-[11px] text-muted-foreground/60 truncate">
              admin@example.com
            </p>
          </div>

          <button className="rounded-lg p-1.5 text-muted-foreground/60 transition-colors hover:bg-destructive/10 hover:text-destructive group-data-[collapsible=icon]:hidden">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}