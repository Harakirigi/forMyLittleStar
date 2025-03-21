import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'


const Questions = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [question, setQuestion] = useState("")
    const [openIndex, setOpenIndex] = useState(null);
    const [response, setResponse] = useState(null)


    const goBack = () => {
        if (window.history.length > 2) {
            navigate(-1)
        } else {
            navigate("/")
        }
    }
    useEffect(() => {
        const getQuestion = async () => {
            try {
                const res = await axios.get(`https://for-my-little-star-server.vercel.app/star/${starId}/question`)
                setResponse(res)
            } catch (error) {
                console.error(`Error while fetching ${name}'s questions: ${error}`)
            }
        }
        getQuestion()
    }, [name, starId])
    const askQuestion = async () => {
        try {
            if (!question) {
                toast.error("Ask something :0", {className: "error-toast"})
            }
            else if (question.length > 512) {
                toast.warning("Your question is too long", {className: "warning-toast"})
            }
            else if (question && validNames.includes(name)) {
                await axios.post(`https://for-my-little-star-server.vercel.app/star/${starId}/question`, {questionContent: question})
                document.getElementById('question-field').value = ''
                setQuestion('')
                const res = await axios.get(`https://for-my-little-star-server.vercel.app/star/${starId}/question`)
                setResponse(res)
                toast.success("Your question successfully submitted", {className: "success-toast"})
                seeQuestions()
            } 
            else {
                toast.error("Something went wrong, try again", {className: "error-toast"})
            }
        } catch (error) {
            toast.error("Unexpexted error, try again later", {className: "error-toast"})
            console.error("Error while asking a question: ", error)
        }
    }
    const seeQuestions = () => {
        window.scrollTo({
            top: document.getElementById("questions-stand").offsetTop - 100,
            behavior: "smooth"
        });
    }
    const seeAskQuestion = () => {
        window.scrollTo({
            top: document.getElementById("start-position").offsetTop,
            behavior: "smooth"
        });
    }

    const openAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };


    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container'>
                <div className='content'>
                    <div className='block'>
                        <h1>Got Questions?</h1>
                        <p>
                            You can ask me anything you want to know here
                        </p>
                        <div className="input-container">
                            <input type="text" className="text-field" id="question-field" placeholder="" onChange={(e) => setQuestion(e.target.value)} autoComplete='off'></input>
                            <label htmlFor="input" className="text-label">Your question...</label>
                        </div>
                        <div className='block-buttons'>
                            <Button className={'white-outline'} onClick={goBack}>Back</Button>
                            <Button className={'white-primary'} onClick={askQuestion}>Ask</Button>
                        </div>
                    </div>
                </div>
                <Button className={'primary'} onClick={seeQuestions}>See your questions</Button>
            </div>

            <div className='scroll-container at-questions' id='questions-stand' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="300">
                <div className='block'>
                    <h1>Your questions and answers</h1>
                    {console.log(response)}
                    {response ? (
                        <>
                        {response.data.length === 0 ? (
                            <>
                            <p>Your questions will be here... <br></br> You can ask something in the field above</p>
                            <Button className={'white-primary'} onClick={seeAskQuestion}>Ask Question</Button>
                            </>
                        ) : (
                            response.data.map((item, index) => (
                                <div className='accordion-div' key={item._id}>
                                    <button
                                        className={`accordion ${openIndex === index ? "active" : ""}`}
                                        onClick={() => openAccordion(index)}
                                    >
                                        {item.content}
                                        <span className="symbol">{openIndex === index ? "−" : "+"}</span>
                                    </button>
                                    <div className="panel" style={{ maxHeight: openIndex === index ? "100px" : "0" }}>
                                        {item.answer ? (
                                            <p>{item.answerContent}</p>
                                        ) : (
                                            <p>Not answered yet, wait a little bit...</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        )} 
                        </>
                    ) : (
                        <>
                        <p>Loading...</p>
                        </>
                    )}
                </div>
            </div>
            </>
        ) : (
            <Navigate to={"/not-found"} replace></Navigate>
        )}
        </>
    )
}

export default Questions