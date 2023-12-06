import {
    sendPasswordResetEmail
} from "firebase/auth"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react"

import { fireauth } from "../config/firebase"
import SharedState from "../Store"
import './ResetPass.css'

const ResetPass = observer(() => {
    const navigate = useNavigate()

    const [email, setEmail] = useState()

    useEffect(() => {
        setEmail(SharedState.email)
    }, [])

    const onReset = async (e) => {
        e.preventDefault()

        // Url after successfully reset
        const continueUrl = window.location.origin + '/login'
        console.log(continueUrl)

        // Firebase send password reset email
        sendPasswordResetEmail(fireauth, email, { url: continueUrl })
            .then(() => {
                navigate('/email-send')
            })
            .catch((error) => {
                // Error handling
            });
    }

    return (
        <div id="ResetPass" className="d-flex justify-content-center align-items-center">
            <div id="reset-box" className="d-flex flex-column justify-content-center gap-2">
                <h1 className="mb-4">Masukkan email</h1>
                <p style={{ fontSize: '0.83rem' }}>Kami akan mengirimkan email untuk melakukan verifikasi dan reset password</p>
                <form id="reset-form" className="d-flex flex-column gap-3" method="POST">
                    <input name="email" className="form-control" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <button type="submit" className="btn btn-primary" onClick={onReset}>Send Verification Email</button>
                </form>
            </div>
        </div>
    )
})

export default ResetPass