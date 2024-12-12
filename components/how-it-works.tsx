import { Card } from '@/components/ui/card';
import { CalendarPlus, PackageCheck, Sparkles, ArrowDownToLine } from 'lucide-react';

// How it works steps data
const HOW_IT_WORKS_STEPS = [
  {
    icon: CalendarPlus,
    title: 'Schedule',
    description: 'Book your pickup and delivery times through our easy-to-use app',
  },
  {
    icon: PackageCheck,
    title: 'We Collect',
    description: 'Our drivers pick up your used towels at your preferred time',
  },
  {
    icon: Sparkles,
    title: 'We Clean',
    description: 'Towels are professionally cleaned and sanitized at our facility',
  },
  {
    icon: ArrowDownToLine,
    title: 'We Deliver',
    description: 'Fresh, clean towels are delivered back to your salon',
  },
];

// "How It Works" Section Component
export function HowItWorksSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS_STEPS.map(({ icon: Icon, title, description }, index) => (
            <Card key={index} className="p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
