import { Fragment } from "react";
import { Articles, SearchBar } from "../sections/home";

export const Home = () => {
  return (
    <Fragment>
      <SearchBar />
      <Articles />
    </Fragment>
  );
};
