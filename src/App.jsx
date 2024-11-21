import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddQuestions from "./Components/AddQuestions/AddQuestions";
import Questions from "./Components/Questions/Questions";
import Login from "./Components/Login/Login"
// import Practice from "./Components/Practice/Practice";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
          <div className="background w-full h-[100vh] font-[Open_sans]">
        <Navbar/>
        <div className="app">
          <Practice/>
        </div>
      </div>
      </>
    },
    {
      path: "/login",
      element: <>
        <Login/>
      </>
    },
    {
      path: "/addQuestions",
      element: <>
      <div className="background w-full h-[100vh] font-[Open_sans]">
        <Navbar/>
        <div className="app">
          <AddQuestions/>
        </div>
      </div>
      </>
    },
    {
      path: "/questions",
      element: <>
      <div className="background w-full h-[100vh] font-[Open_sans]">
        <Navbar/>
        <div className="app">
          <Questions/>
        </div>
      </div>
  </>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
