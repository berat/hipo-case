import useDropdown from "./useDropdown";

interface DProps {
  text: string;
  list: {
    id: number;
    name: string;
  }[];
  value: string | undefined;
  onChange: (e: any) => void;
}

const Dropdown: React.FC<DProps> = ({ text, list, value, onChange }) => {
  const [
    showOptionList,
    defaultSelectText,
    optionsList,
    handleListDisplay,
    handleOptionClick,
  ] = useDropdown({ text, list, value, onChange });

  return (
    <div className="custom-select">
      <div
        className={showOptionList ? "selected-text active" : "selected-text"}
        onClick={handleListDisplay}
      >
        {defaultSelectText}
      </div>
      {showOptionList && (
        <ul className="select-options">
          {optionsList.map(({ id, name }) => {
            return (
              <li
                className="option"
                key={id}
                onClick={() => handleOptionClick({ id, name })}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
