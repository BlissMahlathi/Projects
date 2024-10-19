import { NavLink } from "react-router-dom";
import { NavList } from "../constants";

const Footer = () => {
 

  return (
    <div className="text-slate-300 mt-6  flex flex-col justify-center items-center">
      <p>&copy; {new Date().getFullYear()} Hlulani Bliss Mahlathi. All rights reserved. </p>
      <ul className="flex space-x-4">
        {NavList.map((link) => (
          <li key={link.id}>
            {link.device ==="all" ? <NavLink to={link.url} activeClassName="text-white" exact>
              {link.title}
            </NavLink> : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
