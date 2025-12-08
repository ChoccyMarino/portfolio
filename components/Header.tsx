"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { navItems } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/80 backdrop-blur dark:border-zinc-800/80 dark:bg-black/40">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-950 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-white"
        >
          <Image src="/Logo.png" alt="Logo" width={32} height={32} />
          Portfolio
        </Link>

        <NavigationMenu className="flex flex-1 justify-center">
          <NavigationMenuList className="flex flex-wrap items-center justify-center gap-1 text-sm text-zinc-600 dark:text-zinc-300">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center border-2 border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
