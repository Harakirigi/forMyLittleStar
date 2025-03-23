import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"


const Final = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [answer, setAnswer] = useState("")
    const [rating, setRating] = useState("") 
    const question = "Rating?"

    const handleSubmit = async () => {
        try {
            if (!answer) {
                toast.error("Answer something :(", {className: "error-toast"})
            }
            else if (answer.length > 512) {
                toast.warning("Your answer is too long", {className: "warning-toast"})
            }
            else if (answer && validNames.includes(name)) {
                await axios.post(`https://formylittlestarbackend-production.up.railway.app/star/${starId}/choice`, {choiceKey: question, choiceValue: "Rating: " + rating + ". Feedback: "+ answer})
                localStorage.setItem("plans", answer)
                navigate("/")
                toast.success("Thank you for your feedback!", {className: "success-toast"})
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
                        <h1>We are all set up and ready!</h1>
                        <p>
                            You answered all the questions for now. If you want, you can go to home page <br></br>
                            But before, I want you to rate it out of 100, write about your feelings and impressions too
                        </p>
                        <InputOTP maxLength={3} value={rating} onChange={(value) => setRating(value)}>
                        <span className='text-white'>
                            Rating:
                        </span>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} className="otp" />
                            <InputOTPSlot index={1} className="otp" />
                            <InputOTPSlot index={2} className="otp" />
                        </InputOTPGroup>
                        </InputOTP>
                        <div className="input-container big visible">
                            <textarea type="text" className="text-field" id="question-field" placeholder="" onChange={(e) => setAnswer(e.target.value)} autoComplete='off'></textarea>
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

export default Final