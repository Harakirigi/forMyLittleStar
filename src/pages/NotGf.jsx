import Button from '../components/Button'
import { useNavigate, Navigate } from 'react-router-dom'
import { validNames } from '../utils/arrays'

const NotGf = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")

    return (
        <>
        <div className='container'>
            <div className='content'>
                {validNames.includes(name) ? (
                    <Navigate to={"/not-found"} replace></Navigate>
                ) : (
                    <div className='block decor'>
                        <h1>Oops... <br></br> Who are you?</h1>
                        <p>You are not my girlfriend! <br></br> Her name is not {localStorage.getItem("username")}...</p>
                        <Button className={"white-primary"} onClick={() => navigate("/who")}>Try again</Button>
                        <Button className={"white-outline"} onClick={() => navigate("/who")}>I am your girlfriend!</Button>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default NotGf