import { IInterval, ITraining } from "../../../model/Training";

export interface IHeaderContainerProps {
  selectedRows: IInterval[];
  allRows: IInterval[];
  fileLoadedHandler(fileInput: ITraining):  void;
  fileRemoveHandler(): void;
  isTrainingSet: boolean
}

export default IHeaderContainerProps;
