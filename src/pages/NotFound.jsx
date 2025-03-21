import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function NotFound() {
    const navigate = useNavigate()

    const goBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
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
                    <h1>404 <br></br> Page Not Found</h1>
                    <p>Let's just kindly go back :3</p>
                    <div className='block-buttons'>
                        <Button className={"white-outline"} onClick={() => navigate("/stay-here")}>Stay Here</Button>
                        <Button className={"white-primary"} onClick={goBack}>Go Back</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NotFound