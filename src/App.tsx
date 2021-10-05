import { Container } from "react-bootstrap";

import TrainingTableContainer from "./component/trainingTable/trainingTableContainer/TraingTableContainer";
import AuthContainer from "./component/auth/AuthContainer";

const App = () => {
  return (
    <>
      <Container>
        <AuthContainer />
        <TrainingTableContainer />
      </Container>
    </>
  );
};

export default App;
