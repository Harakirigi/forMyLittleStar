import { Navigate, useNavigate } from 'react-router-dom'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'


const Event = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container'>
                <div className='content in-question'>
                    <div className='block'>
                        <h1>🎉 Time to Celebrate! 🎉</h1>
                        <p>
                            It's our anniversary — definitely a reason to celebrate, right?✨ <br></br>
                            I have a few questions for you about your favorite things.  <br></br>
                            Pay attention and answer as we go — I’m excited to hear your answers! 
                        </p>
                        <div className='block-buttons'>
                            <Button className={'white-primary'} onClick={() => navigate("/question")}>Let's start it</Button>
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

export default Event