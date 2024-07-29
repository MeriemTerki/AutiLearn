import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DashboardLayout from "./pages/dashboard/Layout";
import DashboardHome from "./components/dashboard/Home";
import MyLearning from "./components/dashboard/MyLearning";
import Chatbot from "./components/dashboard/Chatbot";
import Stories from "./components/dashboard/Stories";
import CourseDetails from "./components/dashboard/CourseDetails";
import Quiz from "./components/dashboard/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="my-learning" element={<MyLearning />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="stories" element={<Stories />} />
      </Route>
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/course/:id/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
