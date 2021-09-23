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

  const readerStyles = {
    dropArea: {
      borderColor: "#3b027c",
      borderRadius: 8,
      borderWidth: "3px",
      width: "50%",
      margin: "50px 0 0",
    },
    dropFile: {
      width: 70,
      height: 120,
      background: "#886bcca4",
      margin: "10px 0",
    },
    fileSizeInfo: {
      display: "none",
    },
    fileNameInfo: {
      color: "#ffffff",
      backgroundColor: "#391864",
      borderRadius: 3,
      fontSize: 16,
      lineHeight: 1,
      padding: "5px 8px",
    },
    removeButton: {
      color: "#3b027c",
    },
    progressBar: {
      backgroundColor: "#7e23a8",
    },
  };

  return {
    file,
    handleOnDrop,
    handleOnError,
    handleOnRemoveFile,
    readerStyles,
  };
};
