"use client";

import * as React from "react";
import Link from "next/link";
import { CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <CircuitBoard className="h-6 w-6 text-primary" />
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">BlockchainFL</span>
        </Link>
        <NavigationMenu className="mx-6 hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="grid gap-1">
                    <h4 className="font-medium leading-none text-primary">IT Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive IT services for your business
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Link href="#msp" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      Managed Service Provider
                    </Link>
                    <Link href="#staffing" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      IT Staffing
                    </Link>
                    <Link href="#eor" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      EOR/AOR Services
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#features" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus:bg-muted focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#why-us" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus:bg-muted focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Why Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}