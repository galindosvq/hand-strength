import { memo } from "react";
import { CSVReader } from "react-papaparse";
import Chart from "views/Chart";
import { useDropZone } from "./logic";
import { DropSpan, ReaderContainer } from "./style";

const DropZone = () => {
  const {
    file,
    handleOnDrop,
    handleOnError,
    handleOnRemoveFile,
  } = useDropZone();

  const styles = {
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

  return (
    <>
      <ReaderContainer>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
          style={styles}
        >
          <DropSpan>Drop a CSV file here or click to upload</DropSpan>
        </CSVReader>
      </ReaderContainer>
      {file && <Chart data={file} />}
    </>
  );
};

export default memo(DropZone);
