import { useState } from "react";

interface SOption {
  id: number;
  name: string;
}
interface DProps {
  text: string;
  list: {
    id: number;
    name: string;
  }[];
  value: string | undefined;
  onChange: (e: any) => void;
}

const useDropdown = ({ text, list, value, onChange }: DProps) => {
  const [showOptionList, setShowOptionList] = useState(false);
  const [defaultSelectText, setDefaultSelect] = useState(value || text);
  const [optionsList] = useState(list);

  // This method handles the click that happens outside the
  // select text and list area
  // const handleClickOutside = (e: React.MouseEvent<HTMLLIElement>) => {
  //   if (
  //     !e.target.classList.contains("custom-select-option") &&
  //     !e.target.classList.contains("selected-text")
  //   ) {
  //     setOptionsList(false);
  //   }
  // };

  const handleListDisplay = () => {
    setShowOptionList((prev) => !prev);
  };

  const handleOptionClick = (item: SOption) => {
    onChange(item.name);
    setDefaultSelect(item.name);
    setShowOptionList(false);
  };

  return [
    showOptionList,
    defaultSelectText,
    optionsList,
    handleListDisplay,
    handleOptionClick,
  ] as [
    boolean,
    string,
    { id: number; name: string }[],
    () => void,
    (item: SOption) => void
  ];
};

export default useDropdown;
