import { Outlet } from "react-router-dom";
import { MainNavigation } from "../Common/MainNavigation";
import { HomePage } from "../HomePage";

export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet/>
    </>
  );
};
