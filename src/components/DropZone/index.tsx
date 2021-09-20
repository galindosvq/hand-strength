import { useCallback, useEffect, useState } from "react";
import { CSVReader, readString } from "react-papaparse";
import { csv, data, formatter } from "utils/formatter";

function DropZone() {
  const [file, setFile] = useState<csv[] | undefined>(undefined);

  const handleOnDrop = useCallback((data) => {
    setFile(data);
  }, []);

  const handleOnError = useCallback(() => {}, []);

  const handleOnRemoveFile = useCallback(() => {}, []);

  useEffect(() => {
    if (!!file) {
      const fileFormat = formatter(file);
    }
  }, [file]);

  return (
    <>
      <h5>Click and Drag Upload</h5>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </>
  );
}

export default DropZone;
