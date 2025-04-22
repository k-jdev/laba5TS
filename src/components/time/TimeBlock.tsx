import React, { useState, useEffect } from "react";
import { MyTime } from "../../types";
import { whatLesson } from "../../utils/timeUtils";
import { TimeDisplay } from "./TimeDisplay";

export const TimeBlock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<MyTime>({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [currentLesson, setCurrentLesson] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const newTime = {
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
      };
      setCurrentTime(newTime);
      setCurrentLesson(whatLesson(newTime));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-5 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-3">Поточний час</h3>
      <div className="flex flex-col items-center space-y-4">
        <TimeDisplay time={currentTime} />
        <div className="text-lg font-medium">
          <span>Зараз: </span>
          <span className="text-blue-600">{currentLesson}</span>
        </div>
      </div>
    </div>
  );
};
