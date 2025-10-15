import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  //   console.log(pricingData);

  return (
    <div>
      <h2 className="text-5xl my-8 text-cyan-400 text-center">
        Get our Membership
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* custom build card */}
        {/* {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}

        {/* Prebuilt card form DaisyUI */}
        {pricingData.map((pricing) => (
          <DaisyPricingCard
            key={pricing.id}
            pricing={pricing}
          ></DaisyPricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
