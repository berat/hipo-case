import { SearchButton } from "../index";
import Dropdown from "../inputs/dropdown";
import useForm from "./useForm";

interface FProps {
  redirect?: () => void;
}

const SearchForm: React.FC<FProps> = ({ redirect }) => {
  const [values, onSubmit, onChangeInput, onChangeSelect] = useForm(redirect);

  return (
    <div className="form">
      <input
        onChange={onChangeInput}
        className="query"
        type="text"
        value={values.query}
        name="query"
        placeholder="Query"
      />
      <Dropdown
        text={"Collections"}
        list={[
          { id: 1, name: "Featured" },
          { id: 2, name: "Wallpapers" },
          { id: 3, name: "Nature" },
          { id: 4, name: "Textures & Patterns" },
          { id: 5, name: "Architecture" },
        ]}
        value={values.collection}
        onChange={onChangeSelect}
      />

      <SearchButton onSubmit={onSubmit} />
    </div>
  );
};

export default SearchForm;
