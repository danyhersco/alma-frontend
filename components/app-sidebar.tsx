"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  CircleStar,
  UserRound,
  LibraryBig
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavOtherMenuItems } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Dany Herscovitch",
    email: "dany.herscovitch@gmail.com",
    avatar: "/avatars/dany-herscovitch.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "My Courses",
      url: "#",
      icon: LibraryBig,
      isActive: true,
      items: [
        {
          title: "In Progress",
          url: "#",
        },
        {
          title: "Completed",
          url: "#",
        },
      ],
    },
  ],
  navSec: [
    {
      name: "Certifications",
      url: "#",
      icon: CircleStar,
    },
    {
      name: "Profile",
      url: "#",
      icon: UserRound,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavOtherMenuItems navSec={data.navSec} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
