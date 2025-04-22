import React from "react";
import { Clock } from "lucide-react";
import { MyTime } from "../../types";
import { timeToString } from "../../utils/timeUtils";

type TimeDisplayProps = {
  time: MyTime;
};

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ time }) => {
  return (
    <div className="text-xl font-mono bg-gray-100 p-3 rounded-lg inline-flex items-center">
      <Clock className="mr-2" size={24} />
      <span className="font-bold">{timeToString(time)}</span>
    </div>
  );
};
