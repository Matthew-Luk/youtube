import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../css/login.css'

const Login = (props) => {
    const { setAPIKey } = props
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzQUP1qoWDoEbmsQxvdjxgQ&maxResults=1&order=date&key=${e.target[0].value}`)
        .then(() => {
            setAPIKey(e.target[0].value)
            navigate('/home')
        })
        .catch((err) => {
            console.log(err)
            setError("Please input a valid YouTube data API.")
            navigate('/login')
        })
    }

    // const envHandler = () => {
    //     setAPIKey(process.env.REACT_APP_API_KEY)
    //     navigate('/home')
    // }

    const cancelHandler = () => {
        window.location = 'https://matthewluk.netlify.app/'
    }

    const instructionHandler = () => {
        window.open('https://www.youtube.com/watch?v=N18czV5tj5o')
    }

    return (
        <div className='login-container'>
            <form onSubmit={submitHandler} className='login-form'>
                <div className='login-form-header'>
                    <p>Please Input Your YouTube Data API Key</p>
                </div>
                <div className='login-form-content'>
                    <label>
                        {
                            error?
                            <div className='login-error'>{error}</div>:
                            <div></div>
                        }
                        API Key:
                        <input type={"password"}></input>
                        <div className='login-form-buttons'>
                            <button type="submit" className='login-button'>OK</button>
                            {/* <button onClick={envHandler} className='login-button'>Use env</button> */}
                            <button onClick={cancelHandler} className='login-button'>Cancel</button>
                        </div>
                    </label>
                    <div className='instruction'>
                        <button onClick={instructionHandler} className='login-button width120'>How to get API Key?</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login