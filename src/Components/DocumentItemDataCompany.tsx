import { observer } from "mobx-react-lite";
import ImageNewsMock from "../asets/images/newsImagemock.svg";
import moment from "moment";

const DocumentItemDataCompany = (document: any) => {
  const renderBadge = () => {
    const attributes = document.attributes;
    if (attributes.isTechNews) {
      return "Технические новости";
    }
    if (attributes.isAnnouncement) {
      return "Анаонсы и события";
    }
    if (attributes.isDigest) {
      return "Сводки новостей";
    }
    return "Новости";
  };

  const createMarkup = () => {
    return { __html: document.content.markup };
  };

  return (
    <div className="newsWrapper">
      <div className="headerNews">
        <div className="dateNews">
          {moment(document.issueDate).format("DD.MM.YYYY")}
        </div>
        <div className="sourceNews">
          <a href={document.url} target="_blank" rel="noreferrer">
            {document.source.name}
          </a>
        </div>
      </div>
      <div className="titleNews">{document.title.text}</div>
      <div className="badgeNews">{renderBadge()}</div>
      <div className="imageNews">
        <img src={ImageNewsMock} alt="news" className="imageNewsImg" />
      </div>
      <div
        className="digestNews"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
      <div className="buttonAndInfoBlock">
        <button
          className="lightTurquoiseButton"
          onClick={() => window.open(`${document.url}`, "_blank")}
        >
          Читать в источнике
        </button>
        <div className="counterWords">{document.attributes.wordCount}</div>
      </div>
    </div>
  );
};

export default observer(DocumentItemDataCompany);
