import React from "react";
import { Student } from "../../types";

type StudentCardProps = {
  student: Student;
};

export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const averageGrade =
    (student.mathGrade + student.physicsGrade + student.informaticsGrade) / 3;
  const formattedDate = new Intl.DateTimeFormat("uk-UA").format(
    student.birthDate
  );

  const getGradeColor = (grade: number) => {
    if (grade >= 5) return "bg-green-500";
    if (grade >= 4) return "bg-green-300";
    if (grade >= 3) return "bg-yellow-300";
    return "bg-red-300";
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        <div className="ml-3">
          <h3 className="font-bold">
            {student.lastName} {student.firstName} {student.patronymic}
          </h3>
          <p className="text-sm text-gray-600"></p>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-sm">
          <span className="font-semibold">Дата народження: </span>{" "}
          {formattedDate}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Стипендія: </span>
          {student.scholarship
            ? `${student.scholarship} грн`
            : "Немає стипендії"}
        </p>
      </div>

      <div className="border-t pt-2">
        <p className="text-sm font-semibold mb-1">Оцінки: </p>
        <div className="flex gap-2">
          <span
            className={`inline-block px-2 py-1 rounded ${getGradeColor(
              student.mathGrade
            )}`}
          >
            Математика: {student.mathGrade}
          </span>
          <span
            className={`inline-block px-2 py-1 rounded ${getGradeColor(
              student.physicsGrade
            )}`}
          >
            Фізика: {student.physicsGrade};
          </span>
          <span
            className={`inline-block px-2 py-1 rounded ${getGradeColor(
              student.informaticsGrade
            )}`}
          >
            Інформатика: {student.informaticsGrade}
          </span>
        </div>
        <p className="mt-2 font-semibold">
          Середній бал:{" "}
          <span
            className={`${
              averageGrade >= 4
                ? "text-green-600"
                : averageGrade >= 3
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {averageGrade.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};
