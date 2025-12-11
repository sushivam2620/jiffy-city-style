import { Store, ShoppingCart, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Store,
    title: "Choose Your Store",
    description: "Browse hundreds of stores near you and find your favorite brands",
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "Pick Your Items",
    description: "Select the products you love and add them to your cart",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Checkout & Pay",
    description: "Secure payment with multiple options including UPI, cards & wallets",
  },
  {
    id: 4,
    icon: Truck,
    title: "Get It in 30 Minutes",
    description: "Our riders pick up and deliver your order lightning fast",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Jiffy Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get your favorite apparel delivered in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {step.id}
                </div>
                
                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-card border border-border flex items-center justify-center group hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
