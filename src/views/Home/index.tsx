import Chart from "views/Chart";
import DropZone from "views/DropZone";
import { useDropZone } from "views/DropZone/logic";
import Footer from "views/Footer";
import { Container, Main } from "./style";

const Home = () => {
  const {
    file,
    handleOnDrop,
    handleOnError,
    handleOnRemoveFile,
  } = useDropZone();

  return (
    <Container>
      <Main>
        <DropZone
          handleOnDrop={handleOnDrop}
          handleOnError={handleOnError}
          handleOnRemoveFile={handleOnRemoveFile}
        />
        <Chart data={file} />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
