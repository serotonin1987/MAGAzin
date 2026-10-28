import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./User";
import Comments from "./Comment";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

























// import { useState } from 'react'
// import './App.css'

// interface Student {
//   id: number;
//   name: string;
// }

// function getStudent() {
//   return new Promise<Student[]>((resolve, reject) => {
//     setTimeout(() => {
//       const success = true

//       if (success) {
//         resolve([
//           {"id": 1, name : "Maga"},
//           {"id": 2, name : "Amina"},
//           {"id": 3, name : "James"},
//         ]);
//       } else {
//         reject(new Error("Не удалось загрузить"))
//       }
//     }, 2000);
//   })
// }

// function App() {
//   const [students, setStudents] = useState<Student[]>([]);

//   async function loadStudent() {
//     getStudent()
//       .then((data) => {
//         setStudents(data);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//     }
  
//   return (
//     <>
//       <button onClick={loadStudent}>Показать студентов</button>

//       {students.map((student) => {
//         return <p key={student.id}>{student.name}</p>
//       })}

//     </>
//   )
// }

// export default App


// // class Car:
// //   def __init__(self, speed, weight):
// //     self.speed = speed
// //     self.weight = weight


// //   def drive(self):
// //     vzero = self.speed / self.weight

// // tesla = Car

// // tesla.drive


// const promis = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 2000)  
//   })

// function sum() {
//   const x = 2
//   x + 6
// }
// const a = (x, y) => {
//   return x + y
// }
  // promis
  //   .then((result) => {
  //     const res1 = result + 5; 
  //     console.log("Результат в первом then:", res1); // Выведет 15 через 2 секунды
  //     return res1; 
  //   })
  //   .then((res2) => {
  //     // Сюда придет 15 из предыдущего return
  //     console.log("Результат во втором then:", res2); 
  //   });