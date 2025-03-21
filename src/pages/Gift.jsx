import { Navigate, useNavigate } from 'react-router-dom'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'


const Gift = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")

    const nextPage = () => {
        window.scrollTo({
            top: document.getElementById("start-position").offsetTop,
            behavior: "instant"
        });
        navigate("/memory")
        location.reload()
    }

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='dashed-line' data-aos="zoom-in-down" data-aos-duration="2000" data-aos-offset="0"></div>
            <div className='container'>
                <img src='../arrow-down.svg' className='arrow-down' data-aos="zoom-in-up" data-aos-duration="1500"></img>
                <img src='../gift-box.svg' className='gift-box' data-aos="zoom-in-up" data-aos-duration="1500"></img>
                <img src='../glasses.svg' className='glasses' data-aos="zoom-in-up" data-aos-duration="1500"></img>
                <img src='../mail-hearts.svg' className='mail-hearts' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="-1000"></img>
                <div className='content'>
                    <div className='block' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0" data-aos-anchor-placement="center-center">
                        <h1>Happy anniversary!!!</h1>
                        <p>
                            My darling, today marks another year of us, and yet every glance you steal from me feels like the first. <br></br>
                            Your warmth is my sanctuary, a flame that dances in my heart without ever dimming.<br></br>
                            I’m still captivated, you know — utterly yours.
                        </p>
                    </div>
                </div>
            </div>
            <div className='scroll-container'>
                <img src='../baloon.svg' className='baloon'></img>
                <img src='../letter-left.svg' className='letter-left'></img>
                <img src='../mail-right.svg' className='mail-right'></img>
                <img src='../wing-heart-left.svg' className='unlocked-heart'></img>
                <img src='../ily-candy.svg' className='ily-candy'></img>
                
                <div className='block gift-block first' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="300">
                    <img src='../twirly-flower.svg' className='icon flower-circle'></img>
                    <h1>The Little Things You Do</h1>
                    <p>
                        The way you laugh, soft and free, or how your eyes wrinkle when you tease me—it’s these small joys I keep close.<br></br>
                        You’ve become a part of my days, a thread of happiness I never get tired of following.<br></br>
                        How do you make simple moments feel so magical?
                    </p>
                </div>
                <div className='block gift-block second' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="300">
                    <img src='../spoted-flower.svg' className='icon flower-circle'></img>
                    <h1>Your Whispered Magic</h1>
                    <p>
                        Sometimes, it’s the quiet moments that get to me—your voice, low and warm, sharing secrets only for us.<br></br>
                        It’s like a spell you cast without even trying, pulling me closer with every word.<br></br>
                        How do you have so much power in just a whisper?
                    </p>
                </div>
                <div className='block gift-block third' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="300">
                    <img src='../vanilla-flower.svg' className='icon flower-circle'></img>
                    <h1>Our Shared Orbit</h1>
                    <p>
                        We’ve built something special, haven’t we? A little world where your hand fits mine like stars lining up in the sky.<br></br>
                        Every moment with you feels both endless and too short—I wish for forever, but cherish every second.<br></br>
                        You’re my gravity, always pulling me closer.
                    </p>
                </div>
                <div className='block gift-block fourth' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="300">
                    <img src='../dandelion-flower.svg' className='icon flower-circle'></img>
                    <h1>To Many More Adventures, Together</h1>
                    <p>
                        Here’s to us, to anniversaries yet unwritten, and to you—my muse, my mischief, my home.<br></br>
                        I promise to keep chasing your laughter, to flirt shamelessly, and to love you with a passion that only grows.
                    </p>
                </div>
                <div className='block gift-block fifth' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="400">
                    <img src='../flower-emblem.svg' className='icon flower-circle'></img>
                    <h1>Happy anniversary, my sweetest adventure.<br></br>I love you immensely</h1>
                    <div className='block-buttons'>
                        <Button className={'white-primary'} onClick={nextPage} icon={"../heart-pulse-primary.svg"}>I really love you too</Button>
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

export default Gift