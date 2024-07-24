import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-end">
      <h1 className="text-3xl text-blue-700 font-bold">TheNews</h1>

      <ul className=" pl-8 flex flex-row gap-5 text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? "text-sky-600 font-bold" : "text-sky-300"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/bookmarks"}
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? "text-sky-600 font-bold" : "text-sky-300"
            }`
          }
        >
          Bookmarks
        </NavLink>
      </ul>
    </nav>
  );
};
