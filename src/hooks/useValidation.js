import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [wordError, setWordError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isWord":
          const re = /^(?![\d+_@.-]+$)[a-zA-Z А-яЁёІіЇї]*$/;
          re.test(String(value).toLowerCase())
            ? setWordError(false)
            : setWordError(true);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || wordError || maxLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, wordError, maxLengthError]);

  return {
    isEmpty,
    wordError,
    maxLengthError,
    inputValid,
  };
};
