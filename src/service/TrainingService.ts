import {ITraining} from '../model/Training';
import { v4 as uuidv4 } from "uuid";

export const saveTraining = (training: ITraining, userId: string, exerciseTimeStamp: number) => {
  // setDoc(doc(dataBase, 'trainings', uuidv4()), {
  //   userId: userId,
  //   exerciseDate: exerciseTimeStamp,
  //   createDate: Date.now(),
  //   training: JSON.stringify(training),
  // });
};
