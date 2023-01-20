import { NavLink } from "react-router-dom";
import cssStyle from "./EventNavigation.module.css";

export const EventNavigation=()=>{
    const classNameActive=({isActive})=>isActive? `${cssStyle.EventNavLink} ${cssStyle.active} `:` ${cssStyle.EventNavLink} ${cssStyle.unActive}` 
    return (
      <>
        <ul className={cssStyle.EventNavigation}>
          <li><NavLink className={classNameActive} end to="">All Events</NavLink></li>
          <li><NavLink className={classNameActive} to="new-event">New Events</NavLink></li>
        </ul>
      </>
    );
}