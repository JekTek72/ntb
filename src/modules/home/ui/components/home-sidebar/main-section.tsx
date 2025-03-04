"use client";

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Inicio",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Suscripciones",
    url: "/feed/suscripciones",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Tendencias",
    url: "/feed/tendencias",
    icon: FlameIcon,
  },
];

export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                tooltip={item.title} 
                asChild 
                isActive={false} // TODO: Cambiar al mirar el nombre actual
                onClick={() => {}} // TODO: Hacer algo en esta cosa
              >
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};