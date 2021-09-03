import { CSVReader } from "react-papaparse";
import { mapHeader } from "../../helpers/HeaderTransformHelper";
import { ITraining, IInterval } from "../../model/Training";
import { IFileInputProps } from "./FileInputModel";
import { v4 as uuidv4 } from "uuid";

const InputFile = (props: IFileInputProps) => {
  const mapCSVHeader = (value: string) => {
    return mapHeader(value);
  };

  const readerConfig = {
    header: true,
    transformHeader: (headerValue: string) => mapCSVHeader(headerValue),
  };

  const handleOnFileLoaded = (fileData: any) => {
    const intervals: IInterval[] = fileData.map((item: { data: any }) => {
      const interval = item.data as IInterval;
      interval.id = uuidv4();
      return interval;
    });

    const training: ITraining = { id: uuidv4(), data: intervals };
    props.fileLoadedHandler(training);
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
