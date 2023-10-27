import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Faculty from "./views/faculty"
import Login from "./views/faculty/login"
import Register from "./views/faculty/register"
import StudentLogin from "./views/student/login"
import StudentRegister from "./views/student/register"
import NotFound from "./views/common/components/not-found"
import Home from "./views/faculty/home"
import Profile from "./views/faculty/profile"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<StudentLogin />} />
          <Route path="register" element={<StudentRegister />} />
          {/* Faculty Routes */}
          <Route path="faculty" element={<Faculty />}>
            <Route index element={<Navigate to='/faculty/login' />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* Other Routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
