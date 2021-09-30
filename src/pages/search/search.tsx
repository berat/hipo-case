import * as React from "react";
import { Logo, SearchForm } from "components";
import { useHistory } from "react-router";

const Search: React.FC = () => {
  const history = useHistory();

  return (
    <section id="search">
      <Logo />
      <SearchForm redirect={() => history.push("/result")} />
    </section>
  );
};

export default Search;
