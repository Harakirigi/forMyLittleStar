import { Navigate, useNavigate } from 'react-router-dom'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'
import { useEffect, useState } from 'react'


const AdminInfo = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const [star, setStar] = useState(null)
    const [question, setQuestion] = useState(null)
    const [choice, setChoice] = useState(null)
    const [questionSection, setQuestionSection] = useState(true)
    const [answer, setAnswer] = useState('')

    useEffect(() => {
        const getInfo = async () => {
            try {
                const starId = localStorage.getItem("id-for-search")
                const resStar = await axios.get(`http://localhost:5005/star/${starId}`)
                const resQuestion = await axios.get(`http://localhost:5005/star/${starId}/question`)
                const resChoice = await axios.get(`http://localhost:5005/star/${starId}/choice`)
                setStar(resStar)
                setQuestion(resQuestion)
                setChoice(resChoice)
            } catch (error) {
                console.error(error)
            }
        }
        getInfo()
    }, [])

    const answerSubmit = async (starId, questionId) => {
        try {
            const res = await axios.post(`http://localhost:5005/star/${starId}/question/${questionId}/answer`, {answerContent: answer})
            if (res.data.updatedQuestion.acknowledged == true) {
                toast.success("Answer acknowledged", {className: 'success-toast'})
                setAnswer('')
                document.getElementById("answer-field").value = ''
            } else {
                toast.error("Something went wrong", {className: 'error-toast'})
            }
        } catch (error) {
            toast.error("Unexpected error occured", {className: 'error-toast'})
            console.error(error)
        }
    }
    const deleteUser = async () => {
        const starId = localStorage.getItem("id-for-search")
        try {
            await axios.delete(`http://localhost:5005/star/${starId}`)
            navigate("/admin")
            toast.success("User deleted successfully", {className: 'success-toast'})
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container adminka'>
                <div className='block-buttons mb-4'>
                    <Button className={questionSection ? "primary" : 'primary-outline'} onClick={() => setQuestionSection(true)}>Questions</Button>
                    <Button className={questionSection ? "primary-outline" : 'primary'} onClick={() => setQuestionSection(false)}>Choices</Button>
                    <Button className={'secondary'} onClick={deleteUser}>Delete User</Button>
                </div>
                <div className='card-block' id='questionSection' style={{display: questionSection ? "flex" : "none"}}>

                    {question && star ? (
                        <>
                        <h1>{star.data.star.name}'s questions (id: {star.data.star._id}) </h1>
                        {question.data.length === 0 ? (
                            <p>Nothing Found...</p>
                        ) : (
                            <>
                            {question.data.map((item) => (
                                <div className='card' key={item._id}>
                                    <h1>Question: {item.content}</h1>
                                    {item.answer ? (
                                        <p>Answer: {item.answerContent}</p>
                                    ) : (
                                        <>
                                        <p>Not answered</p>
                                        <div className="input-container mt-4">
                                            <input type="text" className="text-field max-w-48" id="answer-field" placeholder="" onChange={(e) => setAnswer(e.target.value)} autoComplete='off'></input>
                                            <label htmlFor="input" className="text-label">Answer it...</label>
                                        </div>
                                        <Button className={'white-primary mb-4'} onClick={() => answerSubmit(star.data.star._id, item._id)}>Answer</Button>
                                        </>
                                    )}
                                    <hr></hr>
                                </div>
                            ))}
                            </>
                        )}
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className='card-block' id='choiceSection' style={{display: questionSection ? "none" : "flex"}}>
                    {choice && star ? (
                        <>
                        <h1>{star.data.star.name}'s choices (id: {star.data.star._id}) </h1>
                        {choice.data.choice.length === 0 ? (
                            <p>Nothing Found...</p>
                        ) : (
                            <>
                            {choice.data.choice.map((item) => (
                                <div className='card' key={item._id}>
                                    <h1>Question: {item.choiceKey}</h1>
                                    <p>Answer: {item.choiceValue}</p>
                                    <hr></hr>
                                </div>
                            ))}
                            </>
                        )}
                        </>
                    ) : (
                        <p>Loading...</p>
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

export default AdminInfo