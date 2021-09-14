import moment from "moment";

export const calculateAvarageValue = (
  values: number[],
  round: boolean
): number => {
    console.log(values)
  const sumOfValues = values.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
  });

  if (round) {
    return Math.round(sumOfValues / values.length);
  } else {
    return sumOfValues / values.length;
  }
};

export const calculateAvarageTime = (times: string[]): string => {
  const timesInSeconds = times.map((time) => convertTimeToSeconds(time));
  const avarageTime = calculateAvarageValue(timesInSeconds, true);
  return moment.utc(avarageTime * 1000).format("HH:mm:ss");
};

const convertTimeToSeconds = (time: string): number => {
  const splitedTime: number[] = time.split(":").map((item) => Number(item));

  switch (splitedTime.length) {
    case 3:
      return (
        transformHoursToSeconds(splitedTime[0]) +
        transformMinutesToSeconds(splitedTime[1]) +
        splitedTime[2]
      );
    case 2:
      return transformMinutesToSeconds(splitedTime[0]) + splitedTime[1];
    case 1:
      return splitedTime[0];
    default:
      return 0;
  }
};

const transformHoursToSeconds = (hours: number) => {
  return hours * 3600;
};

const transformMinutesToSeconds = (minutes: number) => {
  return minutes * 60;
};
