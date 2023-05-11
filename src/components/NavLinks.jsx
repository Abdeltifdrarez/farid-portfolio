import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";


const NavLinks = ({ href, text,textfr, setToggle }) => {
  const { i18n } = useTranslation();
  return (
    <div onClick={(prev) => setToggle(!prev)}>
      <a href={`#${href}`} className="text-xl">
        {i18n.language == "en" ? text : textfr}
      </a>
    </div>
  );
};

export default NavLinks;
