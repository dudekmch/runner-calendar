import { ITraining } from "../../model/Training";

export interface IFileInputProps {
    fileLoadedHandler(fileInput: ITraining): void;
    fileRemoveHandler(): void;
}