import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);

  const handleAddMoney = () => {
    setMoney(money + 5000);
  };

  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin asset={asset} name="Luffyy"></Cousin>
        <Cousin name="Aceee"></Cousin>
      </section>
      <button onClick={handleAddMoney}>Add 5000 tk</button>
    </div>
  );
};

export default Aunt;
