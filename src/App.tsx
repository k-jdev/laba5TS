import React, { useState } from "react";
import { TimeBlock } from "./components/time/TimeBlock";
import { TimeForm } from "./components/time/TimeForm";
import { StudentList } from "./components/students/StudentList";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("time");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Лабораторна робота №5
        </h1>

        <div className="mb-6">
          <div className="flex gap-4 mb-2">
            <button
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === "time"
                  ? "bg-white text-blue-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("time")}
            >
              Блок 1: Час
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === "students"
                  ? "bg-white text-blue-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("students")}
            >
              Блок 2: Студенти
            </button>
          </div>
        </div>

        {activeTab === "time" && (
          <div>
            <TimeBlock />
            <TimeForm />
          </div>
        )}

        {activeTab === "students" && <StudentList />}
      </div>
    </div>
  );
};

export default App;
