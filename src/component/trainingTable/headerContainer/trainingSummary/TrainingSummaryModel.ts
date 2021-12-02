import { IInterval } from "../../../../model/Training";

export interface ITrainigSummaryProps {
    summaryRow?: IInterval;
    saveTrainingHandler: (exerciseTimeStamp: number) => void;
}