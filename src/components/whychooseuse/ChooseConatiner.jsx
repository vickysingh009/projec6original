import React from "react";
import css from "./ChooseConatiner.module.css";
import bgimg from "./img/choose.png";
import overimg from "./img/oveimg.png";
import { Truck, Package, LifeBuoy, Undo2 } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Fast & Free Shipping",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Easy to Shop",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },
  {
    icon: <LifeBuoy className="w-6 h-6" />,
    title: "24/7 Support",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },
  {
    icon: <Undo2 className="w-6 h-6" />,
    title: "Hassle Free Returns",
    description:
      "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex gap-4 items-start p-4">
    <div className="bg-gray-100 rounded-full p-2 shadow">{icon}</div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

function ChooseConatiner() {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full sm:mt-15 mt-6 ${css.CooseContainer}`}
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 bg-[#FFFCF8] p-6">
        <div className="text-left">
          {/* Heading - always visible */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            The Men Behind
          </h1>

          {/* Hidden on mobile (shown on sm and above) */}
          <p className="text-gray-600 text-sm mt-4 max-w-md hidden sm:block">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the
          </p>

          {/* Hidden on mobile */}
          <h3 className="text-sm text-gray-800 font-semibold mt-4 hidden sm:block">
            Easy to Shop
          </h3>

          {/* Feature cards - hidden on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 hidden sm:grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className={`relative w-full lg:w-1/2 h-80 sm:h-[30rem]`}>
        <img
          src={bgimg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-4 sm:left-8 w-32 sm:w-40 md:w-48 lg:w-56">
          <img
            src={overimg}
            alt="Overlay"
            className="rounded border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseConatiner;
