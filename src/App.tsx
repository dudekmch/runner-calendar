import { Container } from "react-bootstrap";

import TrainingTableContainer from "./component/trainingTable/trainingTableContainer/TraingTableContainer";
import AuthContainer from "./component/auth/AuthContainer";
import Layout from "./component/layaut/Layaut";

const App = () => {
  return (
    <Container>
      <Layout>
        <AuthContainer />
        <TrainingTableContainer />
      </Layout>
    </Container>
  );
};

export default App;
