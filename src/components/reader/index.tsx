import Chart from "components/chart";
import React, { memo, useEffect } from "react";
import { useReader } from "./logic";
import { Container, Title } from "./styles";

const Reader = () => {
  const { onChangeInputHandler, file } = useReader();

  return (
    <Container>
      {!file && (
        <>
          <Title>Choose a CSV file</Title>
          <input
            type="file"
            id="upload-csv"
            accept=".csv"
            onChange={onChangeInputHandler}
          />
        </>
      )}
      {file && <Chart data={file.data} />}
    </Container>
  );
};

export default memo(Reader);
