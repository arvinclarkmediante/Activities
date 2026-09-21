// 10 CONST VARIABLES
const school = "NWSSU";
const passScore = 70;
const maxAge = 18;
const term = "Fall";
const fee = 1000;
const student1 = { name: "Arvin Clark Mediante ", score: 96, contact: { email: "arvinclarkmediante@gmail.com" } };
const student2 = { name: "Jayrold kim", score: 95, contact: { phone: "09924536718" } };
const student3 = { name: "Arnold", score: 80, contact: { phone: "00446278190" } }; 
const listA = ["Math", "english"];
const listB = [80, 90];

// 10 LET VARIABLES
let room = "Class 3-A";
let totalStudents = 3;
let status = "Active";
let leader = "Arvin Clark Mediante";
let topScore = 96;
let lowScore = 80;
let avgScore = 90.3;
let isOpen = true;
let totalClubs = 5;
let activeUser = "Jayrold kim";

// 5 ARROW FUNCTIONS
const doubleFee = (amount) => amount * 2;
const getSchool = () => school;
const isPass = (score) => score >= passScore;
const addScores = (a, b) => a + b;
const getStatus = () => status;

// 10 TEMPLATE LITERALS
const t1 = `School: ${school}`;
const t2 = `Term: ${term}`;
const t3 = `Total Students: ${totalStudents}`;
const t4 = `Status: ${status}`;
const t5 = `Class Leader: ${leader}`;
const t6 = `Top Score: ${topScore}`;
const t7 = `Lowest Score: ${lowScore}`;
const t8 = `Average Score: ${avgScore}`;
const t9 = `Total Clubs: ${totalClubs}`;
const t10 = `Active User: ${activeUser}`;

// 3 DESTRUCTURED ARRAYS
const [subject1, subject2] = listA;   
const [score1, score2] = listB;       
const [firstItem] = ["NWSSU Campus"]; 

// 3 DESTRUCTURED OBJECT LITERALS
const { name: name1, score: s1 } = student1; 
const { name: name2, score: s2 } = student2; 
const { name: name3, score: s3 } = student3; 

// 2 ARRAYS USING SPREAD OPERATOR
const allSubjects = [...listA, "Physics"]; 
const allScores = [...listB, 100];        

// 2 OBJECT LITERALS USING SPREAD OPERATOR
const updatedStudent1 = { ...student1, status: "Passed" }; 
const updatedStudent2 = { ...student2, status: "Passed" }; 
 
// 2 ARRAYS USING .map()
const studentList = [student1, student2, student3];

const studentNames = studentList.map((s) => `'${s.name.trim()}'`); 
const boostedScores = listB.map((score) => score + 5);             

// 2 ARRAYS USING .filter()
const passedStudents = studentList.filter((s) => s.score >= passScore);
const highScores = listB.filter((score) => score >= 85);               
