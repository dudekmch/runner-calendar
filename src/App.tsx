import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import FileInput from "./component/fileInput/FileInput";
import TrainingTableContainer from "./component/trainingTable/trainingTableContainer/TraingTableContainer";
import { ITraining } from "./model/Training";

const App = () => {
  const [training, setTrainig] = useState({} as ITraining);
  const [isTrainingSet, setTariningSet] = useState(false);

  const onFileLoaded = (training: ITraining) => {
    setTrainig(training);
    setTariningSet(true);
  };

  return (
    <Container fluid>
      <Row>
        <FileInput fileLoadedHandler={onFileLoaded}></FileInput>
        {isTrainingSet && (
          <TrainingTableContainer training={training}></TrainingTableContainer>
        )}
      </Row>
    </Container>
  );
};

export default App;
