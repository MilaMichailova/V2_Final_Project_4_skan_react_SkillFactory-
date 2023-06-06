import { observer } from "mobx-react-lite";
import BeginnerRateCard from "./BeginnerRateCard";
import ProRateCard from "./ProRateCard";
import BusinessRateCard from "./BusinessRateCard";

const Rates = () => {
  return (
    <section className="mainWrapper mainWrapperPrice">
      <h1 className="primaryTitle therdTittle" id="rates">
        наши тарифы
      </h1>
      <div className="ProductCardList">
        <BeginnerRateCard></BeginnerRateCard>
        <ProRateCard></ProRateCard>
        <BusinessRateCard></BusinessRateCard>
      </div>
    </section>
  );
};

export default observer(Rates);
