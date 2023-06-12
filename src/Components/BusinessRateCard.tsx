import { observer } from "mobx-react-lite";
import LogoCardBusiness from "../asets/images/logo-business-card.svg";

const BusinessRateCard = () => {
  return (
    <div>
      <div className="cardWrapper ">
        <div className="cardTitlewrapper cardTitlewrapperBusiness">
          <div className="textCard">
            <div className="cardTitleBusiness cardTitle">Business</div>
            <div className="cardSubtitleBusiness cardSubtitle">
              Для корпоративных клиентов
            </div>
          </div>
          <img
            className="logoCard"
            src={LogoCardBusiness}
            alt="logo Card Business"
          ></img>
        </div>
        <div className="priceCardWrapper priceCardWrapperNobadge">
          <div className="priceWrapper priceWrapperNoMonth">
            <div className="priceOfYear">
              2 379 ₽<div className="saledPrice ">3 700 ₽</div>
            </div>
          </div>
        </div>
        <div className="includedInTariffWrapper">
          В тариф входит:
          <ul className="includedInTarifTitle">
            <li className="includedInTarifPoints">Все пункты тарифа Pro</li>
            <li className="includedInTarifPoints">
              Безлимитное количество запросов
            </li>
            <li className="includedInTarifPoints">Приоритетная поддержка</li>
          </ul>
        </div>
        <div className="action">
          <button className="therdButton secondsryButton">Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default observer(BusinessRateCard);
