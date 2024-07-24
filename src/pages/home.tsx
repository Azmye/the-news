import { Fragment } from "react";
import { Articles, SearchBar } from "../sections/home";

export const Home = () => {
  console.log(import.meta.env.VITE_APP_API_KEY);
  return (
    <Fragment>
      <SearchBar />
      <Articles />
    </Fragment>
  );
};
