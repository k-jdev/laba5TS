import React, { useState } from "react";
import { MyTime } from "../../types";
import {
  timeToString,
  toSecondsSinceMidnight,
  fromSecondsSinceMidnight,
  addSeconds,
  timeDifference,
  whatLesson,
} from "../../utils/timeUtils";

export const TimeForm: React.FC = () => {
  const [time, setTime] = useState<MyTime>({ hour: 14, min: 30, sec: 0 });
  const [result, setResult] = useState<string>("");
  const [operation, setOperation] = useState<string>("whatLesson");
  const [time2, setTime2] = useState<MyTime>({ hour: 13, min: 0, sec: 0 });
  const [seconds, setSeconds] = useState<number>(60);

  const handleCalculate = () => {
    switch (operation) {
      case "normalize":
        setResult(`Нормалізований час: ${timeToString(time)}`);
        break;
      case "toSeconds":
        setResult(`Секунд від півночі: ${toSecondsSinceMidnight(time)}`);
        break;
      case "fromSeconds":
        setResult(
          `Час із секунд: ${timeToString(fromSecondsSinceMidnight(seconds))}`
        );
        break;
      case "addSeconds":
        setResult(
          `Додати ${seconds} секунд: ${timeToString(addSeconds(time, seconds))}`
        );
        break;
      case "difference":
        setResult(`Різниця: ${timeDifference(time, time2)} секунд`);
        break;
      case "whatLesson":
        setResult(`Зараз: ${whatLesson(time)}`);
        break;
      default:
        setResult("");
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Блок 1: Робота з часом
      </h2>

      <div className="mb-4">
        <label className="block mb-2">Операція:</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="normalize">Нормалізувати час</option>
          <option value="toSeconds">Конвертувати в секунди</option>
          <option value="fromSeconds">Секунди в час</option>
          <option value="addSeconds">Додати секунди</option>
          <option value="difference">Різниця між годинами</option>
          <option value="whatLesson">Яка зараз пара</option>
        </select>
      </div>

      {operation !== "fromSeconds" && (
        <div className="mb-4">
          <label className="block mb-2">Час:</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Години"
              className="p-2 border rounded w-1/3"
              value={time.hour}
              onChange={(e) =>
                setTime({ ...time, hour: parseInt(e.target.value) || 0 })
              }
            />
            <input
              type="number"
              placeholder="Хвилини"
              className="p-2 border rounded w-1/3"
              value={time.min}
              onChange={(e) =>
                setTime({ ...time, min: parseInt(e.target.value) || 0 })
              }
            />
            <input
              type="number"
              placeholder="Секунди"
              className="p-2 border rounded w-1/3"
              value={time.sec}
              onChange={(e) =>
                setTime({ ...time, sec: parseInt(e.target.value) || 0 })
              }
            />
          </div>
        </div>
      )}

      {operation === "difference" && (
        <div className="mb-4">
          <label className="block mb-2">Час 2:</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Години"
              className="p-2 border rounded w-1/3"
              value={time2.hour}
              onChange={(e) =>
                setTime2({ ...time2, hour: parseInt(e.target.value) || 0 })
              }
            />
            <input
              type="number"
              placeholder="Хвилини"
              className="p-2 border rounded w-1/3"
              value={time2.min}
              onChange={(e) =>
                setTime2({ ...time2, min: parseInt(e.target.value) || 0 })
              }
            />
            <input
              type="number"
              placeholder="Секунди"
              className="p-2 border rounded w-1/3"
              value={time2.sec}
              onChange={(e) =>
                setTime2({ ...time2, sec: parseInt(e.target.value) || 0 })
              }
            />
          </div>
        </div>
      )}

      {(operation === "fromSeconds" || operation === "addSeconds") && (
        <div className="mb-4">
          <label className="block mb-2">Секунди:</label>
          <input
            type="number"
            placeholder="Секунди"
            className="p-2 border rounded w-full"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
          />
        </div>
      )}

      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        onClick={handleCalculate}
      >
        Розрахувати
      </button>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="font-semibold">{result}</p>
        </div>
      )}
    </div>
  );
};
