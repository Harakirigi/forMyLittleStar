import Button from "../components/Button"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// ui
import { toast } from "sonner";

// utils
import { validNames } from '../utils/arrays'


const Who = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')

    const handleSubmit = async() => {
        try {
            if (!name) {
                toast.error("Your name cannot be empty :0", {className: "error-toast"})
            } else if (name.length > 256) {
                toast.warning("Your name is too long", {className: "warning-toast"})
            } else if (validNames.includes(name)) {
                const response = await axios.post('https://formylittlestarbackend.onrender.com/star', { name })

                if (response.data.status === 'Success') {
                    localStorage.setItem("username", name)
                    localStorage.setItem("starId", response.data.starId)
                    navigate("/welcome")
                    toast.success("You verified yourself!", {className: "success-toast"})
                } else {
                    toast.error("Something went wrong, try again", {className: "error-toast"})
                }
            } else {
                localStorage.setItem("username", name)
                navigate("/not-gf")
                toast.warning("Incorrect name :/", {className: "warning-toast"})
            }
        } catch (error) {
            toast.error("Unexpected error occured, try again later", {className: "error-toast"})
            console.error("Error while submitting name: ", error)
        }
    }

    return (
        <>
        <div className="container">
            <div className='content'>
                <div className="block">
                    <h1>Who are you?</h1>
                    <p>What's your name? Could you please type it here:</p>
                    <div className="input-container">
                        <input type="text" value={name} id="name-field" className="text-field" onChange={(e) => setName(e.target.value)} placeholder="" autoComplete="off"></input>
                        <label htmlFor="input" className="text-label">Write your real name...</label>
                    </div>
                    <Button className={"white-primary"} onClick={handleSubmit}>Let's see...</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Who