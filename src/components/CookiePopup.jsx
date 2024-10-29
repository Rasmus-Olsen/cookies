import { FaCookieBite } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  return (
    <div className="cookie">
      <div className="cookie-icons">
        <FaCookieBite size={50} className="cookie-icons-cookie" />
        <IoMdClose size={20} className="cookie-icons-close" />
      </div>
      <div className="cookie-content">
        <p>We use cookies to improve your user experience.</p>
        <button className="cookie-content-button">I like Cookies</button>
      </div>
    </div>
  );
}
