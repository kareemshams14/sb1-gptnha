"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Server, Shield, Award } from "lucide-react";

export function WhyUs() {
  return (
    <section id="why-us" className="container py-24 sm:py-32">
      <div className="mx-auto mb-16 flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Our Impact in Numbers
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Delivering exceptional results through innovative IT solutions
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <Users className="h-12 w-12 text-primary" />
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <Server className="h-12 w-12 text-primary" />
              <div>
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <Shield className="h-12 w-12 text-primary" />
              <div>
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <Award className="h-12 w-12 text-primary" />
              <div>
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}