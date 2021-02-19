import { useEffect, useRef, useState } from "react";
import useDebounce from "./useDebounce";

const useField = ({
  validateFn = () => false,
  initialValue = "",
  realTimeValidation = true,
  errorMessage = "Invalid Input",
  successMessage = "avalilable",
  debounceTime,
} = {}) => {
  const [value, setValue] = useState(initialValue);
  const [debounced] = useDebounce(value, debounceTime || 1000);
  const [field, setField] = useState({});
  const [meta, setMeta] = useState({
    isValid: false,
    checking: false,
    error: null,
    message: null,
  });

  const metaRef = useRef();

  useEffect(() => {
    if (realTimeValidation && !debounceTime) {
      runValidation(value);
    }
  }, [value]);

  useEffect(() => {
    if (realTimeValidation && debounceTime) {
      runValidation(debounced);
    }
  }, [debounced]);

  const runValidation = async (toValidate) => {
    if (!toValidate.length) {
      metaRef.current = {
        checking: false,
        error: null,
        isValid: false,
        message: null,
      };
      setMeta(metaRef.current);
      return;
    }

    metaRef.current = {
      checking: true,
      error: null,
      message: null,
      isValid: false,
    };

    const error = await validateFn(toValidate);
    if (error) {
      if (typeof error === "string")
        metaRef.current = {
          checking: false,
          error: error,
          message: null,
          isValid: false,
        };
      else
        metaRef.current = {
          checking: false,
          error: errorMessage,
          message: null,
          isValid: false,
        };
    } else {
      metaRef.current = {
        checking: false,
        error: null,
        isValid: true,
        message: successMessage,
      };
    }
    setMeta(metaRef.current);
  };

  const onChange = (e) => {
    const {
      target: { name, value, checked },
    } = e;

    if (e.target.type === "checkbox") {
      setValue(checked);
      setField({ [name]: checked });
      return;
    }

    let trimmedValue = value.trim();
    setValue(trimmedValue);
    setField({ [name]: trimmedValue });
  };

  return { value, field, onChange, meta };
};

export default useField;
