import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'


// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'


const QuestionSix = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [answer, setAnswer] = useState("")
    const question = "What color of flowers do you like the most"

    const handleSubmit = async () => {
        try {
            if (!answer) {
                toast.error("Select the color :(", {className: "error-toast"})
            }
            else if (answer.length > 512) {
                toast.warning("Your answer is too long", {className: "warning-toast"})
            }
            else if (answer && validNames.includes(name)) {
                await axios.post(`http://localhost:5005/star/${starId}/choice`, {choiceKey: question, choiceValue: answer})
                navigate("/question/7")
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
                        <h1>Сolor of Flower</h1>
                        <p className='visible'>
                            {question}
                        </p>
                        <input
                            type="color"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className='visible'
                        />
                        <p className='visible'>Selected Color: {answer}</p>
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

export default QuestionSix