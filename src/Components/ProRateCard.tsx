import { observer } from "mobx-react-lite";
import logoCardPro from "../asets/images/logo-pro-card.svg";

const ProRateCard = () => {
  return (
    <div>
      <div className="cardWrapper ">
        <div className="cardTitlewrapper cardTitlewrapperPro">
          <div className="textCard">
            <div className="cardTitle">Pro</div>
            <div className="cardSubtitle">Для HR и фрилансеров</div>
          </div>
          <img className="logoCard" src={logoCardPro} alt="logo Card Pro"></img>
        </div>
        <div className="priceCardWrapper priceCardWrapperNobadge">
          <div className="priceWrapper">
            <div className="priceOfYear">
              1 299 ₽<div className="saledPrice">2 600 ₽</div>
            </div>
            <div className="priceOfMonth">
              или 279 ₽/мес. при рассрочке на 24 мес.
            </div>
          </div>
        </div>
        <div className="includedInTariffWrapper">
          В тариф входит:
          <ul className="includedInTarifTitle">
            <li className="includedInTarifPoints">
              Все пункты тарифа Beginner
            </li>
            <li className="includedInTarifPoints">Экспорт истории</li>
            <li className="includedInTarifPoints">
              Рекомендации по приоритетам
            </li>
          </ul>
        </div>
        <div className="action">
          <button className="therdButton secondsryButton">Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default observer(ProRateCard);
