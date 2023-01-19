import { Link, NavLink } from "react-router-dom";
import cssStyle from "../Common/Common.module.css"

export const MainNavigation = () => {

  const classNameActive=({isActive})=>isActive? `${cssStyle.mainNavLink} ${cssStyle.active} `:` ${cssStyle.mainNavLink} ${cssStyle.unActive}` 
  return (
    <>
      <ul className={cssStyle.mainNavigation}>
        <li><NavLink className={classNameActive}end to="/">Home</NavLink></li>
        <li><NavLink className={classNameActive} to="/event">Events</NavLink></li>
        <li><NavLink className={classNameActive} to="/new-event">NewEvent</NavLink></li>
      </ul>
    </>
  );
};
