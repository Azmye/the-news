import { Fragment } from "react";
import { Articles, SearchBar } from "../sections/home";

export const Home = () => {
  console.log(process.env.API_KEY);
  return (
    <Fragment>
      <SearchBar />
      <Articles />
    </Fragment>
  );
};
