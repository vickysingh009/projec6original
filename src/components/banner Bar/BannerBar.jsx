import { Package, Truck, Clock, Shield } from "lucide-react";
import css from "./BannerBar.module.css";

export default function BannerBar() {
  const features = [
    {
      icon: Package,
      title: "Discount",
      description: "Every week new sales",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "100% Free for all orders",
    },
    {
      icon: Clock,
      title: "Great Support 24/7",
      description: "We care your experiences",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% Secure Payment Method",
    },
  ];

  return (
    <div className={css.bannerBarContainer}>
      <div className={`${css.bannerBarContent}`}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-100 rounded-sm shadow-sm flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
