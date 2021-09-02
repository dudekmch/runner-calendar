export interface ITraining {
  data: IInterval[];
}

export interface IInterval {
  time: string;
  distance: string;
  intervalNumber: number;
  calories: number;
  maxHeartRate: number;
  type: string;
  averagePace: string;
  averageHeartRate: number;
}
