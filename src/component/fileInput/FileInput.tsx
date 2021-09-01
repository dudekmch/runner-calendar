import { CSVReader } from "react-papaparse";
import { mapHeader } from "../../helpers/HeaderTransformHelper";
import { ITraining } from "../../model/Training";

const InputFile = () => {
  const mapCSVHeader = (value: string) => {
    return mapHeader(value);
  };

  const readerConfig = {
    header: true,
    transformHeader: (headerValue: string) => mapCSVHeader(headerValue),
  };

  const handleOnFileLoaded = (data: any, file: any) => {
    const training: ITraining = data;
    console.log(typeof training);
    console.log(training);
    console.log(file);
  };

  return (
    <div>
      <CSVReader
        onFileLoad={handleOnFileLoaded}
        config={readerConfig}
        noDrag
        style={{}}
        addRemoveButton
      >
        <span>Click to upload.</span>
      </CSVReader>
    </div>
  );
};

export default InputFile;
