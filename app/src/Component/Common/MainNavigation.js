import {NavLink } from "react-router-dom";
import cssStyle from "../Common/MainNavigation.module.css"

export const MainNavigation = () => {

  const classNameActive=({isActive})=>isActive? `${cssStyle.mainNavLink} ${cssStyle.active} `:` ${cssStyle.mainNavLink} ${cssStyle.unActive}` 
  return (
    <>
      <ul className={cssStyle.mainNavigation}>
        <li><NavLink className={classNameActive} to="/">Home</NavLink></li>
        <li><NavLink className={classNameActive} to="event">Events</NavLink></li>
      </ul>
    </>
  );
};
