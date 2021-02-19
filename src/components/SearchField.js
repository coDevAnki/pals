import React, { useEffect } from "react";
import { useContactsDispatch } from "../context";
import { searchContactsAction } from "../context/actions";
import { useField } from "../custom-hooks";

const SearchField = () => {
  const { value: searchedText, onChange } = useField();
  const contactsDispatch = useContactsDispatch();

  useEffect(() => {
    searchContactsAction(searchedText.replaceAll(" ", ""), contactsDispatch);
  }, [searchedText]);

  return (
    <input
      style={{ padding: ".3rem", fontSize: "1.5rem" }}
      onChange={onChange}
    />
  );
};

export default SearchField;
