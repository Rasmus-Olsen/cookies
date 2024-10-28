import { LuCookie } from "react-icons/lu";

const CookiePopup = () => {
  return (
    <div className="cookie-popup">
      <LuCookie style={{ fontSize: "2rem" }} />
      <p>We use cookies to improve your user experience</p>
      <button>I Like Cookies</button>
    </div>
  );
};

export default CookiePopup;
