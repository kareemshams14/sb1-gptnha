"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Workflow } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
            Modern IT Solutions for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
              Forward-Thinking
            </span>{" "}
            Businesses
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Empowering Florida businesses with cutting-edge IT staffing, managed services, and
            innovative EOR/AOR solutions.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="#contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10" asChild>
            <Link href="#services">Learn More</Link>
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16">
          <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10">
            <Shield className="h-6 w-6 text-primary" />
            <p className="text-sm font-medium">Enterprise-Grade Security</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
            <p className="text-sm font-medium">Expert IT Staffing</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10">
            <Workflow className="h-6 w-6 text-primary" />
            <p className="text-sm font-medium">Streamlined Solutions</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
}