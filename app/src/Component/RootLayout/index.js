import { Outlet } from "react-router-dom";
import { MainNavigation } from "../Common/MainNavigation";


export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet/>
    </>
  );
};
