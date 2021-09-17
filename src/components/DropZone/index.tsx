import { useCallback, useEffect, useState } from "react";
import { CSVReader, readString } from "react-papaparse";

type fileParse = {
  data: any[];
  errors: any[];
  meta: {
    aborted: boolean;
    cursor: number;
    delimiter: string;
    linebreak: string;
    truncated: boolean;
  };
};

function DropZone() {
  const [file, setFile] = useState<fileParse[] | undefined>(undefined);

  const handleOnDrop = useCallback((data) => {
    setFile(data);
  }, []);

  const handleOnError = useCallback(() => {}, []);

  const handleOnRemoveFile = useCallback(() => {}, []);

  useEffect(() => {
    if (!!file) {
      let weighIndex = undefined;
      let timeIndex = undefined;
      const format: {
        time: any;
      }[] = [];

      const otro = file.map((val) => val.data);
      // console.log(otro);

      file.forEach((val, index) => {
        weighIndex = val.data.indexOf("time_ms");

        if (weighIndex !== -1) {
          for (let ind = index; ind < otro.length; ind++) {
            console.log(otro[ind]);
          }
        }
      });
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
