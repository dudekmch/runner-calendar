export const mapHeader = (originalHeaderValue: string): string => {
  switch (originalHeaderValue) {
    case "Czas":
      return "time";
    case "Dystans":
      return "distance";
    case "Interwał":
      return "intervalNumber";
    case "Kalorie":
      return "calories";
    case "Maksymalne tętno":
      return "maxHeartRate";
    case "Typ etapu":
      return "type";
    case "Średnie tempo":
      return "averagePace";
    case "Średnie tętno":
      return "averageHeartRate";
    default:
      return "unsupportedHeader";
  }
};
