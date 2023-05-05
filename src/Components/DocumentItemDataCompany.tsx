import { observer } from "mobx-react-lite";
import ImageNewsMock from "../asets/images/newsImagemock.svg";

const DocumentItemDataCompany = () => {
  // const { userStore } = useStore();

  return (
    <div>
      <div className="newsWrapper">
        <div className="headerNews">
          <div className="dateNews">11.11.1234</div>
          <div className="sourceNews">Lorem ipsum dolor</div>
        </div>
        <div className="titleNews">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          vitae ad qui.
        </div>
        <div className="badgeNews">Lorem ipsum dolor</div>
        <div className="imageNews">
          <img src={ImageNewsMock} alt="news" />
        </div>
        <div className="digestNews">
          SkillFactory — школа для всех, кто хочет изменить свою карьеру и
          жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4
          континентов, самому взрослому студенту сейчас 86 лет. Выпускники
          работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru,
          Яндексе, Ozon и других топовых компаниях. <div></div> Принципы
          SkillFactory: акцент на практике, забота о студентах и ориентир на
          трудоустройство. 80% обучения — выполнение упражнений и реальных
          проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и
          комьюнити курса. А карьерный центр помогает составить резюме,
          подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
        </div>
        <button className="lightTurquoiseButton">Читать в источнике</button>
      </div>
    </div>
  );
};

export default observer(DocumentItemDataCompany);
