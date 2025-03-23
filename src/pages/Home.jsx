import { validNames } from '../utils/arrays'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container'>
                <img src='../gift-box.svg' className='gift-box'></img>
                <img src='../glasses.svg' className='glasses'></img>
                <img src='../mail-hearts.svg' className='mail-hearts'></img>
                <div className='content'>
                    <div className='block'>
                        <h1>Welcome home, sweetheart</h1>
                        <p>How are you? I hope you're doing great! <br></br> The house feels warmer with you here.</p>
                        <p>
                            Feel free to check out the gift page again or ask your questions. :3
                        </p>
                        <div className='block-buttons'>
                            <Button className={'white-outline'} onClick={() => navigate("/questions")}>Go to Questions Page</Button>
                            <Button className={'white-primary'} onClick={() => navigate("/gift")}>Go to the Gift</Button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <>
            <div className='container'>
                <div className='content'>
                    <div className='block'>
                        <h1>Verify yourself</h1>
                        <p>To have access to the content of this website I should know <br></br> who you are — are you my girlfriend?</p>
                        <div className='block-buttons'>
                            <Button className={"white-outline"} onClick={() => navigate("/login")}>Use your ID instead</Button>
                            <Button className={'white-primary'} onClick={() => navigate("/who")}>Who are you?</Button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )}
        </>
    )
}

export default Home