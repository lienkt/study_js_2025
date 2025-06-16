/* ========== grade ======= 
      Tìm thứ hạng trung bình của cả lớp 
      Tìm thứ hạng trung bình của nam trong lớp 
      Tìm thứ hạng trung bình của Nữ trong lớp 
      Tìm thứ hạng cao nhất của Nam trong lớp 
      Tìm thứ hạng cao nhất của Nữ trong lớp
      Tìm thứ hạng thấp nhất của Nam trong lớp 
      Tìm thứ hạng thấp nhất của Nữ trong lớp 
      Tìm thứ hạng cao nhất của cả lớp 
      Tìm thứ hạng thấp nhất của cả lớp
    */
const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];
const average = (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length;
const males = grades.filter((student) => student.sex === "M");
const females = grades.filter((student) => student.sex === "F");
const getGrades = (arr) => arr.map((student) => student.grade);
const maxGrade = (arr) => Math.max(...arr);
const minGrade = (arr) => Math.min(...arr);

// // Trung bình
// const avgAll = average(getGrades(grades));
// const avgMales = average(getGrades(males));
// const avgFemales = average(getGrades(females));

// // Cao nhất
// const maxMale = maxGrade(getGrades(males));
// const maxFemale = maxGrade(getGrades(females));
// const maxAll = maxGrade(getGrades(grades));

// // Thấp nhất
// const minMale = minGrade(getGrades(males));
// const minFemale = minGrade(getGrades(females));
// const minAll = minGrade(getGrades(grades));

const gradeAlls = getGrades(grades);
const gradeMales = getGrades(males);
const gradeFemales = getGrades(females);

// Trung bình
const avgAll = average(gradeAlls);
const avgMales = average(gradeMales);
const avgFemales = average(gradeFemales);

// Cao nhất
const maxMale = maxGrade(gradeMales);
const maxFemale = maxGrade(gradeFemales);
const maxAll = maxGrade(gradeAlls);

// Thấp nhất
const minMale = minGrade(gradeMales);
const minFemale = minGrade(gradeFemales);
const minAll = minGrade(gradeAlls);

console.log("Trung bình cả lớp:", avgAll);
console.log("Trung bình Nam:", avgMales);
console.log("Trung bình Nữ:", avgFemales);
console.log("Thứ hạng cao nhất Nam:", maxMale);
console.log("Thứ hạng cao nhất Nữ:", maxFemale);
console.log("Thứ hạng thấp nhất Nam:", minMale);
console.log("Thứ hạng thấp nhất Nữ:", minFemale);
console.log("Thứ hạng cao nhất cả lớp:", maxAll);
console.log("Thứ hạng thấp nhất cả lớp:", minAll);
