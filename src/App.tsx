import { useState } from "react";
import FileInput from "./component/fileInput/FileInput";
import TrainingTable from "./component/trainingTable/TrainingTable";
import { ITraining } from "./model/Training";

const App = () => {

  const[training, setTrainig] = useState({})

  const onFileLoaded = (training: ITraining) => {
    setTrainig(training)
  }

  return (
    <div>
      <h2>Witaj</h2>
      <FileInput fileLoadedHandler={onFileLoaded}></FileInput>
      <TrainingTable training={training as ITraining}></TrainingTable>
    </div>
  );
};

export default App;
