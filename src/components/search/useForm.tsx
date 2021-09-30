import { useState } from "react";
import { useDispatch } from "react-redux";

import { getPhotos } from "store/photo";

const useForm = (
  redirect?: () => void
): [
  { query: string; collection: string },
  () => void,
  (e: any) => void,
  (e: any) => void
] => {
  const [values, setValues] = useState({ query: "", collection: "" });
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      getPhotos({ searchText: values.query, collection: values?.collection })
    );
    redirect && redirect();
  };

  const onChangeInput = (e: any) => {
    const { value } = e.target;
    setValues((prev) => ({ ...prev, query: value }));
  };

  const onChangeSelect = (value: string) => {
    setValues((prev) => ({ ...prev, collection: value }));
  };

  return [values, onSubmit, onChangeInput, onChangeSelect];
};

export default useForm;
