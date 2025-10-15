import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  //   console.log(pricingData);

  return (
    <div>
      <h2 className="text-5xl my-8 text-cyan-400 text-center">
        Get our Membership
      </h2>
      <div className="grid md:grid-cols-3 gap-6 p-4">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
