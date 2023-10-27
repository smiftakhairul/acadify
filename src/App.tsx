import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "./views/login"
import Register from "./views/register"
import Home from "./views/home"
import Profile from "./views/profile"
import NotFound from "./views/not-found"
import Classes from "./views/classes"

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
