import { useState } from "react";
import "./_navigation-menu.scss";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";
import Hamburger from "../Hamburger/Hamburger";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const togglePagesMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const closePagesMenu = () => setIsOpen(false);
  const dropdownRef = useClickOutside<HTMLLIElement>(closePagesMenu);

  return (
    <>
      <nav>
        <ul>
          <li>
            <span className="link">Home</span>
          </li>
          <li>
            <span className="link">About us</span>
          </li>
          <li
            className={`pages ${isOpen ? "opened" : ""}`}
            onClick={togglePagesMenu}
            ref={dropdownRef}
          >
            <span className="link">
              Pages <ChevronDown size="1rem" className="arrow" />
            </span>
            <ul className="dropdown">
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
            </ul>
          </li>
          <li>
            <span className="link">Blog</span>
          </li>
          <li>
            <span className="link">Gallery</span>
          </li>
          <li>
            <span className="link">Contact us</span>
          </li>
        </ul>
      </nav>
      <Hamburger />
    </>
  );
};

export default NavigationMenu;
