"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Zap, Clock, Cloud } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="mx-auto mb-16 flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
          Why Choose BlockchainFL
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Discover the features that make us the leading IT solutions provider in Florida
        </p>
      </div>
      <Tabs defaultValue="security" className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
          <TabsTrigger value="cloud">Cloud</TabsTrigger>
        </TabsList>
        <TabsContent value="security" className="mt-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground mb-4">
                State-of-the-art security measures to protect your business data and infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Advanced Threat Protection
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4" /> 24/7 Security Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Compliance Management
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-muted rounded-lg p-8">
              {/* Security illustration or image would go here */}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="performance" className="mt-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Optimized Performance</h3>
              <p className="text-muted-foreground mb-4">
                Maximize efficiency with our performance-optimized solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4" /> Load Balancing
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4" /> Resource Optimization
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4" /> Performance Monitoring
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-muted rounded-lg p-8">
              {/* Performance illustration or image would go here */}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="support" className="mt-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
              <p className="text-muted-foreground mb-4">
                Round-the-clock support for your IT infrastructure needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Dedicated Support Team
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Rapid Response Time
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Proactive Monitoring
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-muted rounded-lg p-8">
              {/* Support illustration or image would go here */}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="cloud" className="mt-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Scalable cloud infrastructure for modern businesses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Cloud className="h-4 w-4" /> Cloud Migration
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="h-4 w-4" /> Hybrid Solutions
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="h-4 w-4" /> Auto-scaling
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-muted rounded-lg p-8">
              {/* Cloud illustration or image would go here */}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}