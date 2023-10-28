import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "./views/login"
import Register from "./views/register"
import Home from "./views/home"
import Profile from "./views/profile"
import NotFound from "./views/not-found"
import Classes from "./views/classes"
import Class from "./views/class"
import Dashboard from "./views/class/dashboard"
import Materials from "./views/class/materials"
import Grades from "./views/class/grades"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="classes" element={<Classes />} />
          <Route path="class/:slug" element={<Class />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="materials" element={<Materials />} />
            <Route path="grades" element={<Grades />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
