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
      const format: {
        time_ms: number;
      }[] = [];

      file.forEach((val, index) => {
        const timeMsRow = val.data.indexOf("time_ms");

        if (timeMsRow !== -1) {
          const indexTimeMs = file[index].data.indexOf("time_ms");

          // console.log(timeMsRow, index, indexTimeMs);

          for (let ind = index + 1; ind < file.length; ind++) {
            // console.log(file[ind].data[indexTimeMs]);
            format.push({ time_ms: file[ind].data[indexTimeMs] });
          }
        }
      });

      console.log(format);
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
