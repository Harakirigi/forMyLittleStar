import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'



const QuestionNine = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [answer, setAnswer] = useState("")
    const [no, setNo] = useState(false)
    const question = "Are you free on March 29th?"

    const handleSubmit = async (ans = answer) => {
        try {
            if (!ans) {
                toast.error("Answer something :(", {className: "error-toast"})
            }
            else if (ans.length > 512) {
                toast.warning("Your answer is too long", {className: "warning-toast"})
            }
            else if (ans && validNames.includes(name)) {
                await axios.post(`https://formylittlestarbackend-production.up.railway.app/star/${starId}/choice`, {choiceKey: question, choiceValue: ans})
                navigate("/clothes")
                toast.success("Thank you for your response", {className: "success-toast"})
            } 
            else {
                toast.error("Something went wrong, try again", {className: "error-toast"})
            }
        } catch (error) {
            toast.error("Unexpexted error, try again later", {className: "error-toast"})
            console.error("Error while answering a question: ", error)
        }
    }

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container'>
                <div className='content in-question'>
                    <div className='block'>
                        <h1>Date's date</h1>
                        <p style={{display: no ? "none" : "flex"}}>
                            {question} <br></br>
                        </p>
                        <div className='block-buttons visible' style={{display: no ? "none" : "flex"}}>
                            <Button className={'white-outline'} onClick={() => setNo(true)}>No</Button>
                            <Button className={'white-primary'} onClick={() => handleSubmit("Yes")}>Yes</Button>
                        </div>
                        <p style={{display: no ? "flex" : "none"}}>
                            Why? And when you are going to be free?
                        </p>
                        <div className="input-container visible" style={{display: no ? "flex" : "none"}}>
                            <input type="text" className="text-field" id="question-field" placeholder="" onChange={(e) => setAnswer(e.target.value)} autoComplete='off'></input>
                            <label htmlFor="input" className="text-label">Your answer...</label>
                        </div>
                        <div className='block-buttons visible' style={{display: no ? "flex" : "none"}}>
                            <Button className={'white-outline'} onClick={() => setNo(false)}>Back</Button>
                            <Button className={'white-primary'} onClick={() => handleSubmit(answer)}>Submit</Button>
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

export default QuestionNine