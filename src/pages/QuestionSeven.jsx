import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'


const QuestionSeven = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [answer, setAnswer] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [isShowed, setIsShowed] = useState(false)
    const question = "What are we going to do during the anniversary itself?"

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
                localStorage.setItem("plans", answer)
                navigate("/question/8")
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

    const chooseYourself = () => {
        setAnswer('Choose yourself')
        setIsOpen(false)
        setIsShowed(true)
    }
    const chooseMyself = () => {
        setAnswer('')
        setIsOpen(false)
        setIsShowed(false)
    }

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container'>
                <div className='content in-question'>
                    <div className='block'>
                        <h1>About our Celebration</h1>
                        <p style={{display: (isShowed) ? 'none' : 'flex'}}>
                            {question} <br></br>
                            You can either choose yourself or give choice to me :3
                        </p>
                        <div className={`choice-container ${isOpen ? 'hidden' : 'visible'}`} style={{display: (isShowed || isOpen) ? 'none' : 'flex'}}>
                            <button className='btn square' onClick={() => setIsOpen(true)}>I will choose myself</button>
                            <button className='btn square' onClick={chooseYourself}>Choose yourself</button>
                        </div>
                        <div className={`choice-container ${isOpen ? 'visible' : 'hidden'}`} style={{display: isOpen ? 'flex' : 'none'}}>
                            <button className='btn square' onClick={() => setAnswer('We will go Shopping')}>We will go Shopping</button>
                            <button className='btn square' onClick={() => setAnswer('We will have a Dinner')}>We will have a Dinner</button>
                            <button className='btn square' onClick={() => setAnswer('We will walk at the park')}>We will walk at the park</button>
                            <button className='btn square' onClick={() => setAnswer('We will repeat our first date')}>We will repeat our first date</button>
                            <button className='btn square' onClick={chooseMyself}>IDK, choose yourself🙄</button>
                        </div>
                        <p className={`${isOpen ? 'visible' : 'hidden'}`} style={{display: isOpen ? 'flex' : 'none', animationDuration: '0.3s', animationFillMode: 'forwards'}}>Or suggest something different</p>
                        <div className={`input-container ${isOpen ? 'visible' : 'hidden'}`} style={{display: isOpen ? 'flex' : 'none', animationDuration: '0.3s', animationFillMode: 'forwards'}}>
                            <input type="text" className="text-field" id="question-field" placeholder="" onChange={(e) => setAnswer(e.target.value)} autoComplete='off'></input>
                            <label htmlFor="input" className="text-label">Your answer...</label>
                        </div>
                        <div className={`choice-container ${isShowed ? 'visible' : 'hidden'}`} style={{display: isShowed ? 'flex' : 'none'}}>
                            <p>
                                While anniversary itself, we will have a dinner in some place <br></br> (in which place? We will choose later) <br></br> <br></br>
                                Then after dinner we will go shopping and buy gift-clothes to each other <br></br> (if no time, next day is reserved for this, Sunday) <br></br> <br></br>
                                When we will repeat our first date? Right next week, 6th April <br></br> <br></br>
                                So, are you agreed?
                            </p>
                        </div>
                        <div className='block-buttons'>
                            <button className={`btn white-outline ${isShowed ? 'visible' : 'hidden'}`} onClick={chooseMyself} style={{display: isShowed ? 'flex' : 'none'}}>No</button>
                            <button className={`btn white-primary ${isShowed ? 'visible' : 'hidden'}`} onClick={handleSubmit} style={{display: isShowed ? 'flex' : 'none'}}>Yes</button>
                            <button className={`btn white-outline ${isOpen ? 'visible' : 'hidden'}`} onClick={chooseMyself} style={{display: isOpen ? 'flex' : 'none'}}>Back</button>
                            <button className={`btn white-primary ${isOpen ? 'visible' : 'hidden'}`} onClick={handleSubmit} style={{display: isOpen ? 'flex' : 'none'}}>Submit</button>
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

export default QuestionSeven