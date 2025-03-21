import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function NotFound() {
    const navigate = useNavigate()

    const goBack = () => {
        if (window.history.length > 2) {
            navigate(-2)
        } else {
            navigate("/")
        }
    }

    return (
        <>
        <div className='container'>
            <img src='../baloon.svg' className='baloon'></img>
            <img src='../baloon-clouds.svg' className='baloon-clouds'></img>
            <img src='../mail-hearts.svg' className='mail-hearts'></img>
            <div className='content'>
                <div className='block'>
                    <h1>Okay<br></br>Let's just Stay Here</h1>
                    <p>I guess you like being here. Let's take a moment to appreciate this silence</p>
                    <div className='block-buttons'>
                        <Button className={"white-primary"} onClick={goBack}>It's Enough</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NotFound