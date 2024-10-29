import { FaCookieBite } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import CookieCTA from "./CookieCTA";

const CookiePopup = () => {
  return (
    <div className="cookie">
      <div className="cookie-icons">
        <FaCookieBite size={40} className="cookie-icons-cookie" />
        <IoMdClose size={20} className="cookie-icons-close" />
      </div>
      <div className="cookie-content">
        <p>We use cookies to improve your user experience.</p>
        <CookieCTA ctatext="I like Cookies" />
      </div>
    </div>
  );
};

export default CookiePopup;
