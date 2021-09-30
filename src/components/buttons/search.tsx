interface SearchButtonProps {
  onSubmit: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onSubmit }) => {
  return (
    <button onClick={onSubmit} className="search">
      search
    </button>
  );
};

export default SearchButton;
