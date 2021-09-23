import Chart from "views/Chart";
import DropZone from "views/DropZone";
import Footer from "views/Footer";
import Header from "views/Header";
import { Container, Main } from "./style";

const Home = () => {
  return (
    <Container>
      <Main>
        <DropZone />
        <Chart data={[]} />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
