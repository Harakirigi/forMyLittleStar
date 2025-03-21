import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'


const QuestionFour = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [answer, setAnswer] = useState("")
    const question = 'How do you feel about our anniversary? What’s your overall impression and rating of it? Are you excited to celebrate it with me and happy about this milestone?'

    const handleSubmit = async () => {
        try {
            if (!answer) {
                toast.error("Answer something :(", {className: "error-toast"})
            }
            else if (answer.length > 512) {
                toast.warning("Your answer is too long", {className: "warning-toast"})
            }
            else if (answer && validNames.includes(name)) {
                await axios.post(`https://for-my-little-star-server.vercel.app/star/${starId}/choice`, {choiceKey: question, choiceValue: answer})
                navigate("/question/5")
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
                        <h1>Your feelings about this</h1>
                        <p className='visible'>
                            {question}
                        </p>
                        <div className="input-container big visible">
                            <textarea type="text" className="text-field" id="question-field" placeholder="" onChange={(e) => setAnswer(e.target.value)} autoComplete='off'></textarea>
                            <label htmlFor="input" className="text-label">Your answer...</label>
                        </div>
                        <div className='block-buttons visible'>
                            <Button className={'white-primary'} onClick={handleSubmit}>Submit</Button>
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

export default QuestionFour