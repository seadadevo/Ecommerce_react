import React from "react";
import {
  Truck,
  Lock,
  RotateCcw,
  Headphones,
} from "lucide-react"; 

const featuresData = [
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "On orders over $100",
  },
  {
    icon: Lock,
    title: "Secure Payment",
    subtitle: "100% protected payments",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "30-day return policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "Dedicated customer service",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-100 py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                  <Icon className="text-red-600 w-6 h-6" strokeWidth={2.5} />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 text-base">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500">{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
