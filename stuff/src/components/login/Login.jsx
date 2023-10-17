import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.data);
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userToLogin = users.find((user) => user.email === email);


        if (!userToLogin) {

            console.log("Usuario no encontrado");
        } else {
            if (userToLogin.password === password) {
                console.log("Inicio de sesión exitoso para:", userToLogin);
                navigate("/stuff")

            } else {
                console.log("Contraseña incorrecta");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

export default Login;


/* datos "reviews":[
      {
        "id": "reviews",
      "content": "review texto",
      "userId": "3",
      }
    ] */