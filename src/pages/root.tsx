import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";

export const Root = () => {
  return (
    <>
      <div className="w-4/5 mx-auto pt-10 flex flex-col gap-5">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
