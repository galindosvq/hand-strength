export type csv = {
  data: any[];
  errors: any[];
  meta: {
    aborted: boolean;
    cursor: number;
    delimiter: string;
    linebreak: string;
    truncated: boolean;
  };
};

export type data = {
  time: number;
  weight: number;
};

export const formatter = (file: csv[]): data[] => {
  const times: number[] = [];
  const weights: number[] = [];
  const data: { time: number; weight: number }[] = [];

  file.forEach((val, index) => {
    const timeMsRow = val.data.indexOf("time_ms");
    const timeRow = val.data.indexOf("time");
    const weightRow = val.data.indexOf("weight");

    if (timeMsRow !== -1 || timeRow !== -1) {
      const indexTime = file[index].data.indexOf(
        timeMsRow !== -1 ? "time_ms" : "time"
      );

      for (let ind = index + 1; ind < file.length; ind++) {
        times.push(+file[ind].data[indexTime]);
      }
    }

    if (weightRow !== -1) {
      const indexWeight = file[index].data.indexOf("weight");

      for (let ind = index + 1; ind < file.length; ind++) {
        weights.push(+file[ind].data[indexWeight]);
      }
    }
  });

  for (let index = 0; index < times.length; index++) {
    data.push({ time: times[index], weight: weights[index] });
  }

  return data;
};
