import { ParseResult } from "papaparse";
import { useCallback, useState } from "react";
import { readString } from "react-papaparse";

export const useReader = () => {
  const [file, setFile] = useState<ParseResult<unknown>>();

  const onChangeInputHandler = useCallback((e: any) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      if (e.target) {
        const inputCsv = e.target.result;

        if (typeof inputCsv === "string") {
          const csvAsString = readString(inputCsv);
          setFile(csvAsString);
        }
      }
    };

    reader.readAsText(e.target.files[0]);
  }, []);

  return {
    onChangeInputHandler,
    file,
  };
};
