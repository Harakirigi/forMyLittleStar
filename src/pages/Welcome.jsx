import Button from '../components/Button'
import { useNavigate, Navigate } from 'react-router-dom'

// utils
import { validNames } from '../utils/arrays'

const Welcome = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")

    const getGift = () => {
        const wrapper = document.querySelector('.wrapper')
        wrapper.classList.toggle("plain")
        navigate("/gift")
    }

    return (
        <>
        <div className='container'>
            <div className='content'>
                {validNames.includes(name) ?  (
                    <div className='block'>
                        <h1>Here we gooo!<br></br> Now I can recognize you fr</h1>
                        <p>I guess you know what's happening<br></br> Our anniversary is coming!!<br></br> So, are you ready?</p>
                        <Button className={"white-primary"} onClick={getGift}>Let's get started</Button>
                    </div>
                ) : (
                    <Navigate to={"/not-found"} replace></Navigate>
                )}
            </div>
        </div>
        </>
    )
}

export default Welcome