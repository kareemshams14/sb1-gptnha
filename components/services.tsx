"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Server, Users, Building2 } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="container py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="mx-auto mb-16 flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
          Comprehensive IT Services
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          From managed services to staffing solutions, we provide end-to-end IT support for your business.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="group relative overflow-hidden border border-primary/10 bg-gradient-to-b from-muted/50 to-muted transition-colors hover:border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          <CardHeader>
            <Server className="h-14 w-14 mb-4 text-primary" />
            <CardTitle>Managed Service Provider</CardTitle>
            <CardDescription>
              Comprehensive IT infrastructure management and support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>24/7 System Monitoring</li>
              <li>Network Security</li>
              <li>Cloud Solutions</li>
              <li>Backup & Recovery</li>
              <li>Help Desk Support</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden border border-primary/10 bg-gradient-to-b from-muted/50 to-muted transition-colors hover:border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          <CardHeader>
            <Users className="h-14 w-14 mb-4 text-primary" />
            <CardTitle>IT Staffing Solutions</CardTitle>
            <CardDescription>
              Expert IT professionals for your specific needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Contract Staffing</li>
              <li>Direct Hire</li>
              <li>Project-Based Teams</li>
              <li>Skill Assessment</li>
              <li>Technical Screening</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="group relative overflow-hidden border border-primary/10 bg-gradient-to-b from-muted/50 to-muted transition-colors hover:border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
          <CardHeader>
            <Building2 className="h-14 w-14 mb-4 text-primary" />
            <CardTitle>EOR/AOR Services</CardTitle>
            <CardDescription>
              Streamlined employment solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Employer of Record</li>
              <li>Agent of Record</li>
              <li>Compliance Management</li>
              <li>Benefits Administration</li>
              <li>Payroll Processing</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}