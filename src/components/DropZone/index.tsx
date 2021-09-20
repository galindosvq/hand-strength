import { CSVReader } from "react-papaparse";
import { useDropZone } from "./logic";

function DropZone() {
  const {
    file,
    handleOnDrop,
    handleOnError,
    handleOnRemoveFile,
  } = useDropZone();

  return (
    <>
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
