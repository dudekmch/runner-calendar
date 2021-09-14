export interface ITraining {
  id: string;
  data: IInterval[];
}

export interface IInterval {
  id: string;
  time: string;
  distance: number;
  intervalNumber: number;
  calories: number;
  maxHeartRate: number;
  type: string;
  averagePace: string;
  averageHeartRate: number;
}
