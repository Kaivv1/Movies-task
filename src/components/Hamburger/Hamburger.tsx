import { Menu } from "lucide-react";
import "./_hamburger.scss";
import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const closeHamburger = () => setIsOpen(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(closeHamburger);

  return (
    <div className="hamburger" ref={dropdownRef}>
      <Menu size="2rem" onClick={toggleHamburger} />
      <ul className={`dropdown ${isOpen ? "opened" : ""}`}>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>About us</span>
        </li>
        <li>
          <span>Pricing</span>
        </li>
        <li>
          <span>Pricing</span>
        </li>
        <li>
          <span>FAQs</span>
        </li>
        <li>
          <span>Our team</span>
        </li>
        <li>
          <span>Careers</span>
        </li>
        <li>
          <span>Settings</span>
        </li>
        <li>
          <span>Blog</span>
        </li>
        <li>
          <span>Gallery</span>
        </li>
        <li>
          <span>Contact us</span>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
