import React from "react";

type StudentFilterProps = {
  onFilterChange: (filter: string) => void;
  studentCount: number;
  filteredCount: number;
};

export const StudentFilter: React.FC<StudentFilterProps> = ({
  onFilterChange,
  studentCount,
  filteredCount,
}) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">Фільтр студентів</h3>
        <span className="text-sm text-gray-600">
          Показано {filteredCount} з {studentCount} студентів
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => onFilterChange("all")}
        >
          Усі
        </button>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => onFilterChange("noScholarship")}
        >
          Без стипендії
        </button>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => onFilterChange("positiveGrades")}
        >
          З позитивними оцінками
        </button>
      </div>
    </div>
  );
};
