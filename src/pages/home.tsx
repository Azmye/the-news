import { Fragment } from "react";
import { HomeArticles, HomeSearchBar } from "../sections/home";

export const Home = () => {
  return (
    <Fragment>
      <HomeSearchBar />
      <HomeArticles />
    </Fragment>
  );
};
