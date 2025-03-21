// modules
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: false,
});


// components
import Button from './components/Button';

// ui
import { Toaster } from "@/components/ui/sonner"

// pages
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import StayHere from "./pages/StayHere"
import Who from "./pages/Who";
import NotGf from './pages/NotGf';
import Welcome from './pages/Welcome';
import Gift from './pages/Gift';
import Memory from './pages/Memory';
import Event from './pages/Event';
import Question from './pages/Question';
import QuestionOne from './pages/QuestionOne'
import Questions from "./pages/Questions";
import QuestionTwo from "./pages/QuestionTwo";
import QuestionThree from "./pages/QuestionThree";
import QuestionFour from "./pages/QuestionFour";
import QuestionFive from "./pages/QuestionFive";
import QuestionSix from "./pages/QuestionSix";

// admin
import AdminPanel from "./admin/AdminPanel"
import AdminInfo from "./admin/AdminInfo";
import Login from "./admin/Login";
import QuestionSeven from "./pages/QuestionSeven";
import QuestionEight from "./pages/QuestionEight";

// functions

 

function App() {

  return (
    <>
    <div className='wrapper' id='start-position'>
            <div className='header'>
                <div className='left-header'><p className='main-text'>{localStorage.getItem("username")}</p></div>
                <div className='mid-header'><h1 className='header-heading'>forMyLilStar</h1></div>
                <div className='right-header'></div>
            </div>
                <Routes>
                    <Route path="*" element={<Navigate to={"/not-found"} replace></Navigate>} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/stay-here" element={<StayHere />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/who" element={<Who />} />
                    <Route path="/not-gf" element={<NotGf />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/gift" element={<Gift />} />
                    <Route path="/memory" element={<Memory />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/question" element={<Question />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/question/1" element={<QuestionOne />} />
                    <Route path="/question/2" element={<QuestionTwo />} />
                    <Route path="/question/3" element={<QuestionThree />} />
                    <Route path="/question/4" element={<QuestionFour />} />
                    <Route path="/question/5" element={<QuestionFive />} />
                    <Route path="/question/6" element={<QuestionSix />} />
                    <Route path="/question/7" element={<QuestionSeven />} />
                    <Route path="/question/8" element={<QuestionEight />} />


                    <Route path="/admin/info" element={<AdminInfo />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Toaster
                    position="bottom-right"
                    richColors
                    toastOptions={{
                        className: "custom-toast"
                    }}
                />                  
    </div>
        
    </>
  )
}

export default App
