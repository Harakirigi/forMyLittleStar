import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'


const Question = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [question, setQuestion] = useState("")

    const askQuestion = async () => {
        try {
            if (!question) {
                toast.error("Ask something :(", {className: "error-toast"})
            }
            else if (question.length > 512) {
                toast.warning("Your question is too long", {className: "warning-toast"})
            }
            else if (question && validNames.includes(name)) {
                await axios.post(`https://formylittlestarbackend.onrender.com/star/${starId}/question`, {questionContent: question})
                navigate("/question/1")
                toast.success("Your question successfully submitted", {className: "success-toast"})
            } 
            else {
                toast.error("Something went wrong, try again", {className: "error-toast"})
            }
        } catch (error) {
            toast.error("Unexpexted error, try again later", {className: "error-toast"})
            console.error("Error while asking a question: ", error)
        }
    }
    const skipQuestion = () => {
        navigate("/question/1")
    }

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container'>
                <div className='content in-question'>
                    <div className='block'>
                        <h1>Do you have a question?</h1>
                        <p>
                            Feel free to ask anything — about me, my thoughts, my feelings, or this website. <br></br>
                            If you don’t have any questions now, you can skip and ask later. <br></br>
                            This section will appear at the end for your convenience.
                        </p>
                        <div className="input-container">
                            <input type="text" className="text-field" id="question-field" placeholder="" onChange={(e) => setQuestion(e.target.value)} autoComplete='off'></input>
                            <label htmlFor="input" className="text-label">Write your question here...</label>
                        </div>
                        <div className='block-buttons'>
                            <Button className={'white-outline'} onClick={skipQuestion}>Ask later</Button>
                            <Button className={'white-primary'} onClick={askQuestion}>Ask now</Button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <Navigate to={"/not-found"} replace></Navigate>
        )}
        </>
    )
}

export default Question