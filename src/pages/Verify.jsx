import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'


const Verify = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className='container'>
            <div className='content'>
                <div className='block'>
                    <h1>Verify yourself</h1>
                    <p>To have access to the content of this website I should know <br></br> who you are — are you my girlfriend?</p>
                    <Button className={'white-primary'} onClick={() => navigate("/who")}>Who are you?</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Verify