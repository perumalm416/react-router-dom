import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { EventNavigation } from "../Common/EventNavigation";
import cssStyle from "./index.module.css";
export const EventRootLayout = () => {
  return (
    <div className={cssStyle.eventRootLayout}>
      <EventNavigation />
      <Outlet />
    </div>
  );
};
