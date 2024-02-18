import { Outlet } from "react-router-dom";

import NavBar from "./ui/shared-components/navBar/NavBar";

const Root = () => {
  // console.log(movieDetailArray);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default Root;
