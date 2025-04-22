import React, { useState } from "react";
import { Student } from "../../types";
import { sampleStudents } from "../../data/students";
import { StudentCard } from "./StudentCard";
import { StudentFilter } from "./StudentFilter";

export const StudentList: React.FC = () => {
  const [students] = useState<Student[]>(sampleStudents);
  const [filter, setFilter] = useState<string>("all");

  const filteredStudents = students.filter((student) => {
    if (filter === "noScholarship") {
      return student.scholarship === 0;
    } else if (filter === "positiveGrades") {
      return (
        student.mathGrade >= 3 &&
        student.physicsGrade >= 3 &&
        student.informaticsGrade >= 3
      );
    }
    return true;
  });

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Блок 2: Студенти
      </h2>

      <StudentFilter
        onFilterChange={handleFilterChange}
        studentCount={students.length}
        filteredCount={filteredStudents.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
        {filteredStudents.length === 0 && (
          <p className="col-span-full text-center py-4 text-gray-500">
            Немає студентів, що відповідають обраному фільтру
          </p>
        )}
      </div>
    </div>
  );
};
