import Navbar from "./Navbar";

const NavLinks = ({ href, text, setToggle }) => {
  return (
    <div onClick={(prev) => setToggle(!prev)}>
      <a href={`#${href}`} className="text-xl">
        {text}
      </a>
    </div>
  );
};

export default NavLinks;
