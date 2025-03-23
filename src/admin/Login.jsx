import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// components
import Button from '../components/Button'
import { toast } from 'sonner'
import axios from 'axios'


const Login = () => {
    const navigate = useNavigate()
    const [id, setId] = useState(null)

    const login = async () => {
        try {
            if (!id) {
                toast.error("ID is empty", {className: 'error-toast'})
            } else if (id) {
                const response = await axios.get(`https://formylittlestarbackend-production.up.railway.app/star/${id}`)
                localStorage.setItem("username", response.data.star.name)
                localStorage.setItem("starId", response.data.star._id)
                navigate("/")
                toast.success("Successfully logged in", {className: 'success-toast'})
            } else {
                toast.error("Something went wrong, try again", {className: 'error-toast'})
            }
        } catch (error) {
            toast.error("Invalid ID", {className: 'error-toast'})
            console.error(error)
        }
        
    }

    return (
        <>
            <div className='container'>
                    <div className='block'>
                        <p className='pt-8'>Write your existing ID to log in</p>
                        <div className="input-container mt-4">
                            <input type="text" className="text-field max-w-90" placeholder="" onChange={(e) => setId(e.target.value)} autoComplete='off'></input>
                            <label htmlFor="input" className="text-label">Your ID...</label>
                        </div>
                        <Button className={'white-primary'} onClick={login}>Log in</Button>
                    </div>
            </div>
        </>
    )
}

export default Login