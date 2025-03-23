import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'


const Activity = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [answer, setAnswer] = useState("")
    const question = "What will we do on our anniversary beside all the mentioned?"

    const handleSubmit = async () => {
        try {
            if (!answer) {
                toast.error("Answer something :(", {className: "error-toast"})
            }
            else if (answer.length > 512) {
                toast.warning("Your answer is too long", {className: "warning-toast"})
            }
            else if (answer && validNames.includes(name)) {
                await axios.post(`https://formylittlestarbackend-production.up.railway.app/star/${starId}/choice`, {choiceKey: question, choiceValue: answer})
                localStorage.setItem("plans", answer)
                navigate("/final")
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
                        <h1>Any activities in your mind?</h1>
                        <p>
                            {question} <br></br>
                        </p>
                        <div className={`choice-container`}>
                            <button className='btn square' onClick={() => setAnswer('Sculpt with Clay or Plasticine')}>Sculpt with Clay or Plasticine</button>
                            <button className='btn square' onClick={() => setAnswer('Paint Together')}>Paint Together</button>
                            <button className='btn square' onClick={() => setAnswer('Card games')}>Card games</button>
                            <button className='btn square' onClick={() => setAnswer('Question cards')}>Question cards</button>
                            <button className='btn square' onClick={() => setAnswer('Answer the Questions')}>Answer the Questions</button>
                            <button className='btn square' onClick={() => setAnswer('Watch Movie')}>Watch Movie</button>
                            <button className='btn square' onClick={() => setAnswer('Watch K-Drama')}>Watch K-Drama</button>
                            <button className='btn square' onClick={() => setAnswer('Watch Anime')}>Watch Anime</button>
                            <button className='btn square' onClick={() => setAnswer('Video Call with Friends')}>Video Call with Friends</button>
                            <button className='btn square' onClick={() => setAnswer('Well see...')}>We'll see...</button>
                        </div>
                        <p>Or suggest something different</p>
                        <div className={`input-container`}>
                            <input type="text" className="text-field" id="question-field" placeholder="" onChange={(e) => setAnswer(e.target.value)} autoComplete='off'></input>
                            <label htmlFor="input" className="text-label">Your answer...</label>
                        </div>
                        <div className='block-buttons'>
                            <button className={`btn white-primary`} onClick={handleSubmit}>Submit</button>
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

export default Activity