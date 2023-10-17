import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom";
import { postUser } from "../../store/userSlice";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const id = uuidv4()
    const navigate = useNavigate()

    const handleSumbit = (e) => {
        e.preventDefault()
        const newUser = {
            id, name, email, password
        }

        dispatch(postUser(newUser))

        setName("");
        setEmail("");
        setPassword("");
        navigate("/dashboard")
    }


    return (
        <>
            <form onSubmit={handleSumbit}>
                <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} />
                <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} />
                <button type="submit">Registrarse</button>
            </form>
        </>
    );
}

export default Register;
