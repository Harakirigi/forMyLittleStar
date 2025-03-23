import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.svg',
  iconUrl: '/images/marker-icon.svg',
  shadowUrl: '/images/marker-shadow.svg'
});


// utils
import { validNames } from '../utils/arrays'
 
// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'
import HoverCardComponent from '../components/HoverCard';



const QuestionEight = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const starId = localStorage.getItem("starId")
    const [showMap, setShowMap] = useState(false);

    const [answer, setAnswer] = useState("")
    const [myself, setMyself] = useState(false)
    const [yourself, setYourself] = useState(false)
    const [none, setNone] = useState(true)

    const [sweet, setSweet] = useState(false)
    const [light, setLight] = useState(false)
    const [heavy, setHeavy] = useState(false)
    const [special, setSpecial] = useState(false)
    
    const [ySweet, setYSweet] = useState(false)
    const [ylight, setYlight] = useState(false)
    const [yHeavy, setYHeavy] = useState(false)
    const [yLight, setYLight] = useState(false)
    const [yAny, setYAny] = useState(false)
    const question = "Where are we going to go?"

    const handleSubmit = async () => {
        try {
            if (!answer) {
                toast.error("Answer something :(", {className: "error-toast"})
            }
            else if (answer.length > 512) {
                toast.warning("Your answer is too long", {className: "warning-toast"})
            }
            else if (answer && validNames.includes(name)) {
                await axios.post(`https://formylittlestarbackend.onrender.com/star/${starId}/choice`, {choiceKey: question, choiceValue: answer})
                navigate("/question/8")
                toast.success("Thank you for your response", {className: "success-toast"})
            } 
            else {
                toast.error("Something went wrong, try again", {className: "error-toast"})
            }
        } catch (error) {
            toast.error("Unexpexted error, try again later", {className: "error-toast"})
            console.error("Error while answering a question: ", error)
        }
    }

    const chooseOption = (option = '') => {
        setAnswer('');
        
        setMyself(false);
        setYourself(false);
        setNone(false);
        setSweet(false);
        setLight(false);
        setHeavy(false);
        setSpecial(false);
        setYSweet(false);
        setYlight(false);
        setYHeavy(false);
        setYLight(false);
        setYAny(false);
    
        switch (option) {
            case 'myself':
                setMyself(true);
                break;
            case 'yourself':
                setYourself(true);
                break;
            case 'sweet':
                setSweet(true);
                break;
            case 'light':
                setLight(true);
                break;
            case 'heavy':
                setHeavy(true);
                break;
            case 'special':
                setSpecial(true);
                break;
            case 'ySweet':
                setYSweet(true);
                setAnswer('yourself: Crunch Croissants')
                break;
            case 'ylight':
                setYlight(true);
                setAnswer('yourself: Le Paris')
                break;
            case 'yHeavy':
                setYHeavy(true);
                setAnswer('yourself: Mandarin')
                break;
            case 'yLight':
                setYLight(true);
                setAnswer('yourself: Mussel place')
                break;
            case 'yAny':
                setYAny(true);
                setAnswer('yourself: Wah-Wah')
                break;
            default:
                setNone(true);
                break;
        }
    }
    const handleClick = () => {
        setShowMap(prevState => !prevState);
    };
    
    
    

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container'>
                <div className='content in-question'>
                    <div className='block'>
                        <h1>Our Destination</h1>
                        <p style={{display: (none) ? 'flex' : 'none'}}>
                            {question} <br></br>
                            You can either choose yourself or give choice to me :3
                        </p>
                        <div className={`choice-container ${myself ? 'hidden' : 'visible'}`} style={{display: (none) ? 'flex' : 'none'}}>
                            <button className='btn square' onClick={() => chooseOption('myself')}>I will choose myself</button>
                            <button className='btn square' onClick={() => chooseOption('yourself')}>Choose yourself</button>
                        </div>


                        <p style={{display: (myself) ? 'flex' : 'none'}}>
                            Choose the category😋
                        </p>
                        <div className={`choice-container ${myself ? 'visible' : 'hidden'}`} style={{display: myself ? 'flex' : 'none'}}>
                            <button className='btn square' onClick={() => chooseOption('sweet')}>Sweet</button>
                            <button className='btn square' onClick={() => chooseOption('light')}>Light</button>
                            <button className='btn square' onClick={() => chooseOption('heavy')}>Heavy</button>
                            <button className='btn square' onClick={() => chooseOption('special')}>Something special</button>
                            <button className='btn square' onClick={() => chooseOption()}>IDK, choose yourself🙄</button>
                        </div>
                        <div className='block-buttons'>
                            <button className={`btn white-outline ${myself ? 'visible' : 'hidden'}`} onClick={() => chooseOption()} style={{display: myself ? 'flex' : 'none'}}>Back</button>
                        </div>







                        <p className={`${sweet || light || heavy || special ? 'visible' : 'hidden'}`} style={{display: sweet || light || heavy || special ? 'flex' : 'none', marginTop: -20}}>Choose a location you like😇</p>
                        <div className={`choice-container ${sweet ? 'visible' : 'hidden'}`} style={{display: sweet ? 'flex' : 'none'}}>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('No Regret Cakes')}>No Regret Cakes</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Sweet as can be but absolutely no sugar, how is that possible, maybe we should go and check it out?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/6SGqf' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Crunch Croissants')}>Crunch Croissants</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Delicious croissants with ice cream inside? Damn...</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/jzIah' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Loni')}>Loni</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>The sweetest and tastiest doughnuts in Astana city?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/SSAPw' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Januia cake')}>Januia cake</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>They make beautiful and delicious cheesecakes here.</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/eow7J' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Qatty tatty')}>Qatty tatty</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Would like to visit this place a second time, what about you?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/RuySw' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                        </div>





                        <div className={`choice-container ${light ? 'visible' : 'hidden'}`} style={{display: light ? 'flex' : 'none'}}>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Evergreen')}>Evergreen</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>They say that this is a healthy food restaurant, why not try it?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/bsMvQ' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Six Coffee + Wine')}>Six Coffee + Wine</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>А little baked goods and a coffee drink.</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/UbRdD' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Forest')}>Forest</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Breakfasts, burgers, casseroles, an ordinary but delicious</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/InUTB' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Pasta La Vista')}>Pasta La Vista </button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Some say it's the best of Italian in this city.</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/pfGS8' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Nasha Dacha')}>Nasha Dacha</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>А place with a cozy and delicious vibe.</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/BC1Da' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                        </div>





                        <div className={`choice-container ${heavy ? 'visible' : 'hidden'}`} style={{display: heavy ? 'flex' : 'none'}}>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Mandarin')}>Mandarin</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Those sushi burgers are here, we have to try them!</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/dKDAu' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Peek-a-boo')}>Peek-a-boo</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Some chance for Korean food?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/WMKJ9' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Balyk fish')}>Balyk fish</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>I love crispy fried fish, and you?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/x2lnT' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Fight food')}>Fight food</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>The juiciest and most flavorful homemade burgers and doners, commonplace or something new?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/tacTO' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Lazania')}>Lazania</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>I love lazania, but it's been a while since I've tried it last time.</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/jcCbr' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Wah-Wah')}>Wah-Wah</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>You said the steak here is delicious, I want to try it too!</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/euY7A' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Et-Et')}>Et-Et</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Doners with lots of meat and oriental dishes</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/IqqHh' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Doner na Abaya')}>Doner na Abaya</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Only trusted doners, right?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/qawn2' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('The Moon')}>The Moon</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>They say the food here is hearty and delicious</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/ooen5' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                        </div>






                        <div className={`choice-container ${special ? 'visible' : 'hidden'}`} style={{display: special ? 'flex' : 'none'}}>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Altyn Palau')}>Altyn Palau</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>There are Turkish doners here, which we will assemble it ourselves by components.</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/nH3mj' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Le Paris')}>Le Paris</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>А place where we will draw, show our creativity and just endlessly take pictures.</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/bOsZN' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Win Arrow')}>Win Arrow</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>It's not a place to eat, but it's a place to shoot a real bow, so why not shoot it?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/TbSko' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Mussel place')}>Mussel place</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Where we wanted to go on March 8th. Maybe this time it will be possible?</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/iSkZB' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Butcher`s Street')}>Butcher`s Street</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>Hotdogs and sandwiches, but an American-style establishment with the same vibe</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/ceNle' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                            <HoverCardComponent 
                                trigger={<button className='btn square' onClick={() => setAnswer('Bar Krevetka')}>Bar Krevetka</button>}
                                content={
                                    <>
                                    <p className='hover-card-content-text'>I personally have never tried it yet!</p>
                                    <br></br>
                                    <a className='btn primary-outline' href='https://go.2gis.com/4fIHD' target="_blank" rel="noopener noreferrer">Open in 2GIS</a>
                                    </>
                                }
                            >
                            </HoverCardComponent>
                        </div>

                        <p className={`${sweet || light || heavy || special ? 'visible' : 'hidden'}`} style={{display: sweet || light || heavy || special ? 'flex' : 'none', animationDuration: '0.3s', animationFillMode: 'forwards'}}>Or suggest something different</p>
                        <div className={`input-container ${sweet || light || heavy || special ? 'visible' : 'hidden'}`} style={{display: sweet || light || heavy || special ? 'flex' : 'none', animationDuration: '0.3s', animationFillMode: 'forwards'}}>
                            <input type="text" className="text-field" id="question-field" placeholder="" onChange={(e) => setAnswer(e.target.value)} autoComplete='off'></input>
                            <label htmlFor="input" className="text-label">Your suggestion...</label>
                        </div>
                        <div className='block-buttons'>
                            <button className={`btn white-outline ${sweet || light || heavy || special ? 'visible' : 'hidden'}`} onClick={() => chooseOption('myself')} style={{display: sweet || light || heavy || special ? 'flex' : 'none'}}>Back</button>
                            <button className={`btn white-primary ${sweet || light || heavy || special ? 'visible' : 'hidden'}`} onClick={handleSubmit} style={{display: sweet || light || heavy || special ? 'flex' : 'none'}}>Submit</button>
                        </div>






















                        <p style={{display: (yourself) ? 'flex' : 'none', marginTop: -30}}>
                            What's your preferences😋
                        </p>
                        <div className={`choice-container ${yourself ? 'visible' : 'hidden'}`} style={{display: yourself ? 'flex' : 'none'}}>
                            <button className='btn square' onClick={() => chooseOption('ySweet')}>Something sweet</button>
                            <button className='btn square' onClick={() => chooseOption('yLight')}>Something light</button>
                            <button className='btn square' onClick={() => chooseOption('yHeavy')}>Something heavy</button>
                            <button className='btn square' onClick={() => chooseOption('ylight')}>Something special</button>
                            <button className='btn square' onClick={() => chooseOption('yAny')}>I don't care🙄</button>
                        </div>
                        <div className='block-buttons'>
                            <button className={`btn white-outline ${yourself ? 'visible' : 'hidden'}`} onClick={() => chooseOption()} style={{display: yourself ? 'flex' : 'none'}}>Back</button>
                        </div>






                        <div className={`choice-container ${ySweet ? 'visible' : 'hidden'}`} style={{display: ySweet ? 'flex' : 'none'}}>
                            <p style={{marginBottom: 0, marginTop: -30}}>
                                I'd like to take you to Crunch Croissants<br></br>
                                There are delicious croissants with ice cream inside<br></br>
                                So, are you agreed?
                            </p>
                        </div>
                        <Button className={`${showMap ? 'white-outline' : 'white-primary'} mb-2`} onClick={handleClick} style={{display: ySweet ? 'flex' : 'none'}}>{showMap ? 'Hide Map' : 'Where is it?'}</Button>
                        {showMap && ySweet && (
                            <MapContainer className='map' center={[51.101167, 71.41328]} zoom={16} style={{ height: "400px", width: "100%", borderRadius: 15}}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            />
                            <Marker position={[51.101167, 71.41328]}>
                                <Popup>
                                <b>Crunch Croissants</b><br />
                                <a href='https://go.2gis.com/jBX7i' target="_blank" rel="noopener noreferrer">Посмотреть в 2GIS</a>
                                </Popup>
                            </Marker>
                            </MapContainer>
                        )}


                        <div className={`choice-container ${yLight ? 'visible' : 'hidden'}`} style={{display: yLight ? 'flex' : 'none'}}>
                            <p style={{marginBottom: 0, marginTop: -30}}>
                                I'd like to take you to Mussel place <br></br>
                                Where we wanted to go on March 8th. Maybe this time it will be possible? <br></br>
                                So, are you agreed?
                            </p>
                        </div>
                        <Button className={`${showMap ? 'white-outline' : 'white-primary'} mb-2`} onClick={handleClick} style={{display: yLight ? 'flex' : 'none'}}>{showMap ? 'Hide Map' : 'Where is it?'}</Button>
                        {showMap && yLight && (
                            <MapContainer className='map' center={[51.1202757, 71.4247504]} zoom={16} style={{ height: "400px", width: "100%", borderRadius: 15}}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            />
                            <Marker position={[51.1202757, 71.4247504]}>
                                <Popup>
                                <b>Мидийное место</b><br />
                                <a href='https://go.2gis.com/uLRXb' target="_blank" rel="noopener noreferrer">Посмотреть в 2GIS</a>
                                </Popup>
                            </Marker>
                            </MapContainer>
                        )}


                        <div className={`choice-container ${yHeavy ? 'visible' : 'hidden'}`} style={{display: yHeavy ? 'flex' : 'none'}}>
                            <p style={{marginBottom: 0, marginTop: -30}}>
                                I'd like to take you to Mandarin <br></br>
                                There's those sushi burgers we've been wanting to order, so why don't we give it a try? <br></br>
                                So, are you agreed?
                            </p>
                        </div>
                        <Button className={`${showMap ? 'white-outline' : 'white-primary'} mb-2`} onClick={handleClick} style={{display: yHeavy ? 'flex' : 'none'}}>{showMap ? 'Hide Map' : 'Where is it?'}</Button>
                        {showMap && yHeavy && (
                            <MapContainer className='map' center={[51.117584, 71.463375]} zoom={16} style={{ height: "400px", width: "100%", borderRadius: 15}}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            />
                            <Marker position={[51.117584, 71.463375]}>
                                <Popup>
                                <b>Mandarin</b><br />
                                <a href='https://go.2gis.com/UqFIJ' target="_blank" rel="noopener noreferrer">Посмотреть в 2GIS</a>
                                </Popup>
                            </Marker>
                            </MapContainer>
                        )}



                        <div className={`choice-container ${ylight ? 'visible' : 'hidden'}`} style={{display: ylight ? 'flex' : 'none'}}>
                            <p style={{marginBottom: 0, marginTop: -30}}>
                                I'd like to take you to Le Paris<br></br>
                                It's an art studio where we can paint, express our creativity and just have fun!<br></br>
                                So, are you agreed?
                            </p>
                        </div>
                        <Button className={`${showMap ? 'white-outline' : 'white-primary'} mb-2`} onClick={handleClick} style={{display: ylight ? 'flex' : 'none'}}>{showMap ? 'Hide Map' : 'Where is it?'}</Button>
                        {showMap && ylight && (
                            <MapContainer className='map' center={[51.122268, 71.399903]} zoom={16} style={{ height: "400px", width: "100%", borderRadius: 15}}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            />
                            <Marker position={[51.122268, 71.399903]}>
                                <Popup>
                                <b>Le Paris</b><br />
                                <a href='https://go.2gis.com/2fQqD' target="_blank" rel="noopener noreferrer">Посмотреть в 2GIS</a>
                                </Popup>
                            </Marker>
                            </MapContainer>
                        )}



                        <div className={`choice-container ${yAny ? 'visible' : 'hidden'}`} style={{display: yAny ? 'flex' : 'none'}}>
                            <p style={{marginBottom: 0, marginTop: -30}}>
                                I'd like to take you to Wah-Wah <br></br>
                                You've been wanting to come here for a long time, so let's get going! <br></br>
                                So, are you agreed?
                            </p>
                        </div>
                        <Button className={`${showMap ? 'white-outline' : 'white-primary'} mb-2`} onClick={handleClick} style={{display: yAny ? 'flex' : 'none'}}>{showMap ? 'Hide Map' : 'Where is it?'}</Button>
                        {showMap && yAny && (
                            <MapContainer className='map' center={[51.161196, 71.414706]} zoom={16} style={{ height: "400px", width: "100%", borderRadius: 15}}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            />
                            <Marker position={[51.161196, 71.414706]}>
                                <Popup>
                                <b>Wah-Wah</b><br />
                                <a href='https://go.2gis.com/y7Rvy' target="_blank" rel="noopener noreferrer">Посмотреть в 2GIS</a>
                                </Popup>
                            </Marker>
                            </MapContainer>
                        )}



                        <div className='block-buttons'>
                            <button className={`btn white-outline ${ySweet || ylight || yHeavy || yLight || yAny ? 'visible' : 'hidden'}`} onClick={() => chooseOption('yourself')} style={{display: ySweet || ylight || yHeavy || yLight || yAny ? 'flex' : 'none'}}>No</button>
                            <button className={`btn white-primary ${ySweet || ylight || yHeavy || yLight || yAny ? 'visible' : 'hidden'}`} onClick={handleSubmit} style={{display: ySweet || ylight || yHeavy || yLight || yAny ? 'flex' : 'none'}}>Yes</button>
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

export default QuestionEight