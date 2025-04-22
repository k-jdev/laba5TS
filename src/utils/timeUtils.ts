import { MyTime } from "../types";

export const normalizeTime = (t: MyTime): MyTime => {
  let totalSeconds = t.hour * 3600 + t.min * 60 + t.sec;
  totalSeconds = ((totalSeconds % 86400) + 86400) % 86400;
  const hour = Math.floor(totalSeconds / 3600);
  const min = Math.floor((totalSeconds % 3600) / 60);
  const sec = totalSeconds % 60;
  return { hour, min, sec };
};

export const timeToString = (t: MyTime): string => {
  const normalized = normalizeTime(t);
  return `${normalized.hour}:${String(normalized.min).padStart(
    2,
    "0"
  )}:${String(normalized.sec).padStart(2, "0")}`;
};

export const toSecondsSinceMidnight = (t: MyTime): number => {
  return t.hour * 3600 + t.min * 60 + t.sec;
};

export const fromSecondsSinceMidnight = (seconds: number): MyTime => {
  const secondsPerDay = 60 * 60 * 24;
  let t = seconds % secondsPerDay;
  if (t < 0) t += secondsPerDay;

  const hour = Math.floor(t / 3600);
  const min = Math.floor((t % 3600) / 60);
  const sec = t % 60;
  return { hour, min, sec };
};

export const addSeconds = (t: MyTime, s: number): MyTime => {
  const newTime = { ...t, sec: t.sec + s };
  return normalizeTime(newTime);
};

export const timeDifference = (t1: MyTime, t2: MyTime): number => {
  const totalSeconds1 = toSecondsSinceMidnight(t1);
  const totalSeconds2 = toSecondsSinceMidnight(t2);
  return totalSeconds1 - totalSeconds2;
};

export const whatLesson = (t: MyTime): string => {
  const timeInSeconds = toSecondsSinceMidnight(normalizeTime(t));

  const schedule = [
    {
      start: toSecondsSinceMidnight({ hour: 8, min: 0, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 9, min: 20, sec: 0 }),
      label: "1-а пара",
    },
    {
      start: toSecondsSinceMidnight({ hour: 9, min: 20, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 9, min: 40, sec: 0 }),
      label: "перерва між 1-ю та 2-ю парами",
    },
    {
      start: toSecondsSinceMidnight({ hour: 9, min: 40, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 11, min: 0, sec: 0 }),
      label: "2-а пара",
    },
    {
      start: toSecondsSinceMidnight({ hour: 11, min: 0, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 11, min: 20, sec: 0 }),
      label: "перерва між 2-ю та 3-ю парами",
    },
    {
      start: toSecondsSinceMidnight({ hour: 11, min: 20, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 12, min: 40, sec: 0 }),
      label: "3-я пара",
    },
    {
      start: toSecondsSinceMidnight({ hour: 12, min: 40, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 13, min: 0, sec: 0 }),
      label: "перерва між 3-ю та 4-ю парами",
    },
    {
      start: toSecondsSinceMidnight({ hour: 13, min: 0, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 14, min: 20, sec: 0 }),
      label: "4-а пара",
    },
    {
      start: toSecondsSinceMidnight({ hour: 14, min: 20, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 14, min: 40, sec: 0 }),
      label: "перерва між 4-ю та 5-ю парами",
    },
    {
      start: toSecondsSinceMidnight({ hour: 14, min: 40, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 16, min: 0, sec: 0 }),
      label: "5-а пара",
    },
    {
      start: toSecondsSinceMidnight({ hour: 16, min: 0, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 16, min: 20, sec: 0 }),
      label: "перерва між 5-ю та 6-ю парами",
    },
    {
      start: toSecondsSinceMidnight({ hour: 16, min: 20, sec: 0 }),
      end: toSecondsSinceMidnight({ hour: 17, min: 40, sec: 0 }),
      label: "6-а пара",
    },
  ];

  if (timeInSeconds < schedule[0].start) return "пари ще не почалися";

  for (const period of schedule) {
    if (timeInSeconds >= period.start && timeInSeconds < period.end) {
      return period.label;
    }
  }

  return "пари вже скінчилися";
};
