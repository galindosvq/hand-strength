import { useCallback, useState } from "react";
import { data, formatter } from "utils/formatter";

export const useDropZone = () => {
  const [file, setFile] = useState<data[] | undefined>(undefined);

  const handleOnDrop = useCallback((data) => {
    setFile(formatter(data));
  }, []);

  const handleOnError = useCallback(() => {
    setFile(undefined);
  }, []);

  const handleOnRemoveFile = useCallback(() => {
    setFile(undefined);
  }, []);

  return { file, handleOnDrop, handleOnError, handleOnRemoveFile };
};
