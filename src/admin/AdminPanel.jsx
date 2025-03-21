import { Navigate, useNavigate } from 'react-router-dom'

// utils
import { validNames } from '../utils/arrays'
 
// components
import axios from 'axios'
import { useEffect, useState } from 'react'


const AdminPanel = () => {
    const navigate = useNavigate()
    const name = localStorage.getItem("username")
    const [star, setStar] = useState(null)

    useEffect(() => {
        const getStar = async () => {
            try {
                const response = await axios.get("https://for-my-little-star-server.vercel.app/star")
                setStar(response)
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        }
        getStar()
    }, [])

    const showStar = async (starId) => {
        localStorage.setItem("id-for-search", starId)
        navigate("/admin/info")
    }

    return (
        <>
        {validNames.includes(name) ? (
            <>
            <div className='container'>
                    <div className='card-block'>
                        {star ? (
                            <>
                            {star.data.length === 0 ? (
                                <p>Nothing Found...</p>
                            ) : (
                                <>
                                {star.data.map((item) => (
                                    <div className='card-button' key={item._id} onClick={() => showStar(item._id)}>
                                        <h1>{item.name}</h1>
                                        <p>Id: {item._id}</p>
                                    </div>
                                ))}
                                </>
                            )}
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
            </div>
            </>
        ) : (
            <Navigate to={"/not-found"} replace></Navigate>
        )}
        </>
    )
}

export default AdminPanel