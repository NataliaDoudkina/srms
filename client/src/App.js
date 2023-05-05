import { Route, Routes } from "react-router-dom";

import Course from "./components/course/Course";
import Home from "./components/Home";
import NavBar from "./components/navbar/NavBar";
import Result from "./components/result/Result";
import Student from "./components/student/Student";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/course" element={<Course />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
