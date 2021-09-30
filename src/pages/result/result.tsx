import { useSelector } from "react-redux";

import {
  Logo,
  SearchForm,
  GridView,
  Loading,
  Pagination,
  ErrorView,
} from "components";
import { RootState } from "store/entities";

const Result: React.FC = () => {
  const photo = useSelector((state: RootState) => state.photo);

  if (photo.error) return <ErrorView />;

  return (
    <section id="result">
      <header>
        <Logo />
        <SearchForm />
      </header>
      {photo.loading ? (
        <Loading />
      ) : (
        <section>
          {photo.data.length > 0 ? <GridView data={photo.data} /> : "boş"}
        </section>
      )}
      {photo.data.length > 0 && <Pagination />}
    </section>
  );
};

export default Result;
