"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full border-b border-gray-400 mb-4">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/">Home</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/projects">Projects</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem></NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/posts">Posts</Link>}
              />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
