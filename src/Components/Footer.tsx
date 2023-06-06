import { observer } from "mobx-react-lite";
import logoFooter from "../asets/images/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img className="logoFooter" src={logoFooter} alt="logo"></img>
      </div>
      <div className="infoFooterWrapper">
        <div className="infoFooter">
          г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru
        </div>
        <div className="footerCopyright">Copyright. 2022</div>
      </div>
    </footer>
  );
};

export default observer(Footer);
