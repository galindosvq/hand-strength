import { memo } from "react";
import { CSVReader } from "react-papaparse";
import Chart from "views/Chart";
import { useDropZone } from "./logic";
import { DropSpan, ReaderContainer } from "./style";
import { data } from "utils/formatter";
import { ParseResult } from "papaparse";

type Props = {
  handleOnDrop: (file: any) => void;
  handleOnError: () => void;
  handleOnRemoveFile: () => void;
};

const DropZone = ({
  handleOnDrop,
  handleOnError,
  handleOnRemoveFile,
}: Props) => {
  const { readerStyles } = useDropZone();

  return (
    <>
      <ReaderContainer>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
          style={readerStyles}
        >
          <DropSpan>Drop a CSV file here or click to upload</DropSpan>
        </CSVReader>
      </ReaderContainer>
    </>
  );
};

export default memo(DropZone);
