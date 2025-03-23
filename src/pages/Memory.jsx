import { Navigate, useNavigate } from 'react-router-dom'

// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { useState } from 'react'


const Memory = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const [modalImage, setModalImage] = useState(null)
    const [modal, setModal] = useState(false)

    const scrollDown = () => {
        window.scrollTo({
            top: document.getElementById("scroll-container-memory").offsetTop - 100,
            behavior: "smooth"
        });
    }
    const scrollDownTwo = () => {
        window.scrollTo({
            top: document.getElementById("scroll-container-memory").offsetTop + 750,
            behavior: "smooth"
        });
    }

    const nextPage = () => {
        window.scrollTo({
            top: document.getElementById("start-position").offsetTop,
            behavior: "instant"
        });
        navigate("/event")
    }


    const openModal = (src) => {
        setModalImage(src)
        setModal(true)
    }
    const closeModal = () => {
        setModalImage(null)
        setModal(false)
    }

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='dashed-line in-memory' data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="0"></div>
            <div className='container'>
                <div className='content'>
                    <div className='block' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0" data-aos-anchor-placement="center-center">
                        <h1>Do you remember?</h1>
                        <div className='block-buttons'>
                            <Button className={'white-primary'} onClick={scrollDown} icon={"../arrow-down-icon.svg"}>Remember what?</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='scroll-container in-memory' id='scroll-container-memory'>
                {modal && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" data-aos="zoom-in">
                            <img src={`${modalImage}`}></img>
                        </div>
                    </div>
                )}
                <div className='block' data-aos="fade-up" data-aos-duration="500" data-aos-offset="500">
                    <h1>Do you remember?</h1>
                    <p>
                        Do you remember the very first moment our eyes met, the way time seemed to slow down as if the universe knew something special was beginning? <br></br>
                        Do you remember our late-night talks, where words flowed effortlessly,  <br></br>
                        and silence felt just as comforting?
                    </p>
                    <hr></hr>
                    <p>
                        Do you remember the adventures we’ve had—the places we’ve explored, the roads we’ve walked hand in hand,  <br></br>
                        the little detours that turned into our favorite memories?  <br></br>
                        The days when we laughed until our stomachs hurt, and the nights when we held onto each other a little tighter, <br></br>
                        knowing that no matter what, we had each other?
                    </p>
                    <hr></hr>
                    <p>
                        Do you remember the small moments—the stolen glances, the shared smiles,  <br></br>
                        the inside jokes that only we understand? The way we found magic in the ordinary,  <br></br>
                        turning everyday moments into something unforgettable?
                    </p>
                    <hr></hr>
                    <h1>Because I do</h1>
                    <p>
                        I remember it all. And I wouldn’t trade a single second of this journey with you for anything in the world. 
                    </p>
                    <div className='block-buttons'>
                        <Button className={'white-primary'} onClick={scrollDownTwo} icon={"../arrow-down-icon.svg"}>I remember it too</Button>
                    </div>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/start-1.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>29th March, 2024</p>
                    <h1>Magic Night</h1>
                    <p>
                        Exactly one year ago from now. <br></br>
                        Night that felt like magic, isn't it?
                    </p>
                </div>

                <div className='block decor memory-block self-start mt-76' data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/first-date.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>6th April, 2024</p>
                    <h1>The First Chapter</h1>
                    <p>
                        A day written in fate’s ink, <br></br>
                        marking the start of something beautiful.
                    </p>
                </div>

                <div className='block decor memory-block self-end mt-76' data-aos="zoom-in-left" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/dandelion-1.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/dandelion-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/dandelion-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>5th May, 2024</p>
                    <h1>Fields of Gold</h1>
                    <p>
                        The brightest day in my memory — <br></br>
                        green grass, golden dandelions, and her, <br></br>
                        more radiant than all of it.
                    </p>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/photoshoot.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/photoshoot-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/photoshoot-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>19th May, 2024</p>
                    <h1>Timeless Frames</h1>
                    <p>
                        Not just a photoshoot, <br></br>
                        but a canvas of laughter, love, and us.
                    </p>
                </div>

                <div className='block decor memory-block self-start mt-76' data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/bday-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/bday.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/bday-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>25th May, 2024</p>
                    <h1>Eclipsing Stars</h1>
                    <p>
                        The day the world got brighter because she was born — <br></br>
                        and I was lucky enough to celebrate it with her. <br></br>
                        Even the stars dimmed in comparison to her smile on this special day.
                    </p>
                </div>

                <div className='block decor memory-block self-end mt-76' data-aos="zoom-in-left" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/park-walk.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/park-walk-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/park-walk-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>12th June, 2024</p>
                    <h1>Silent Happiness</h1>
                    <p>
                        No words were needed, no grand gestures — <br></br>
                        just two hearts walking, knowing they had found home. 
                    </p>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/graduate-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/graduate-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/graduate.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>21st June, 2024</p>
                    <h1>The Perfect Ending, The Perfect Beginning</h1>
                    <p>
                        One door closed, a thousand more opened — <br></br>
                        our journey continues, with hearts full of dreams and hands held tight. 
                    </p>
                </div>

                <div className='block decor memory-block self-start mt-76' data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/july.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>1st July, 2024</p>
                    <h1>Summer’s Déjà Vu</h1>
                    <p>
                        Back where it all began, <br></br>
                        but with deeper feelings, brighter smiles, <br></br>
                        and her—more beautiful than ever.
                    </p>
                </div>

                <div className='block decor memory-block self-end mt-76' data-aos="zoom-in-left" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/bike-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/bike.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/bike-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>3rd July, 2024</p>
                    <h1>Riding Into Forever</h1>
                    <p>
                        The first of many rides,  <br></br>
                        where we learned that as long as we were together, <br></br>
                        we’d always find balance.
                    </p>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/default.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>5th July, 2024</p>
                    <h1>Two Hearts, One Ride</h1>
                    <p>
                        One bike, two souls, endless laughter — <br></br>
                        gliding through the daylight like we belonged to the wind. 
                    </p>
                </div>

                <div className='block decor memory-block self-start mt-76' data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/ramen-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/ramen.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/ramen-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>19th July, 2024</p>
                    <h1>Spicy & Sweet</h1>
                    <p>
                        The perfect mix of flavors, <br></br>
                        just like the perfect mix of us — <br></br>
                        warm, exciting, and full of joy.
                    </p>
                </div>

                <div className='block decor memory-block self-end mt-76' data-aos="zoom-in-left" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/park-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/park-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/park.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>24th July, 2024</p>
                    <h1>The Park of Firsts🎢🦢💕</h1>
                    <p>
                        One moment, our hearts raced on the rides; <br></br>
                        the next, they softened at the sight of swans — <br></br>
                        chaos and calm in perfect balance.
                    </p>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/scar.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/scar-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/scar-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>2nd August, 2024</p>
                    <h1>First Scar</h1>
                    <p>
                        A love untouched by pain is only a dream — <br></br>
                        tonight, we faced our first wound, and we learned.
                    </p>
                </div>

                <div className='block decor memory-block self-start mt-76' data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/default.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>18th August, 2024</p>
                    <h1>Shared Joy</h1>
                    <p>
                        A birthday not just about me,  <br></br>
                        but about laughter, friendship,  <br></br>
                        and love — all in one perfect day.
                    </p>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/pizza.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>18th September, 2024</p>
                    <h1>Slice of Autumn</h1>
                    <p>
                        A day where the season changed, the city glowed  <br></br>
                        and love tasted like a fresh-baked pizza.
                    </p>
                </div>

                <div className='block decor memory-block self-start mt-76' data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/botan.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/botan-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/botan-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>19th October, 2024</p>
                    <h1>Melodies & Reflections</h1>
                    <p>
                        The water flowed, the music played, <br></br>
                        the city glowed — and so did we.
                    </p>
                </div>

                <div className='block decor memory-block self-end mt-76' data-aos="zoom-in-left" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/chico-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/chico-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/chico.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>27th November, 2024</p>
                    <h1>Sculpted Moments</h1>
                    <p>
                        Like our plasticine figures, the day was shaped by our hands — <br></br>
                        crafted with joy, laughter, and flavors that linger.
                    </p>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/rolls.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/rolls-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/rolls-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>26th December, 2024</p>
                    <h1>Rolls & Reels</h1>
                    <p>
                        Sushi rolls, movie reels, and a day <br></br>
                        that was ordinary but felt extraordinary.
                    </p>
                </div>

                <div className='block decor memory-block self-start mt-76' data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/ordinary-4.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/ordinary-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/ordinary.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>27th December, 2024</p>
                    <h1>Our Everyday Escape</h1>
                    <p>
                        No plans, no rush — <br></br>
                        just good food, good movies, and each other. <br></br>
                        A day that felt easy and happy.
                    </p>
                </div>

                <div className='block decor memory-block self-end mt-76' data-aos="zoom-in-left" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/default.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>29th December, 2024</p>
                    <h1>Our First Countdown</h1>
                    <p>
                        The last moments of the year belonged to the world, <br></br>
                        but the first moments of the new year belonged to us.
                    </p>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/valentine.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image second'>
                        <img src='../image/valentine-2.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <div className='image third'>
                        <img src='../image/valentine-3.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>15th February, 2025</p>
                    <h1>A Valentine to Remember</h1>
                    <p>
                        A day of sweetness, laughter, and a single flower <br></br>
                        that carried a thousand feelings.
                    </p>
                </div>

                <div className='block decor memory-block self-start mt-76' data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/default.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>26th February, 2025</p>
                    <h1>Closer Than Ever</h1>
                    <p>
                        A moment that erased every space between us, <br></br>
                        leaving only love, trust, and us.
                    </p>
                </div>

                <div className='block decor memory-block self-end mt-76' data-aos="zoom-in-left" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/default.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>10th March, 2025</p>
                    <h1>Symphony of Stars</h1>
                    <p>
                        The symphony played, the streets glowed, <br></br>
                        and our hearts carried the music into the night.
                    </p>
                </div>

                <div className='block decor memory-block self-center mt-76' data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="300" data-aos-easing="ease-out">
                    <div className='image'>
                        <img src='../image/default.jpg' onClick={(e) => openModal(e.target.src)}></img>
                    </div>
                    <p className='datetime'>29th March, 2025</p>
                    <h1>Endless Chapters</h1>
                    <p>
                        Every moment, every memory, every heartbeat — <br></br>
                        just another step in a journey with no final page. <br></br>
                        This is not the end, because our story is still being written, <br></br>
                        and the best is yet to come.
                    </p>
                    <div className='block-buttons'>
                        <Button className={'white-primary'} icon={'../pixel-heart-primary.svg'} onClick={nextPage}>Go Ahead...</Button>
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

export default Memory