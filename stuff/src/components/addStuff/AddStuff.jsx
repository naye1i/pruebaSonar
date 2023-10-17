import { useState } from "react";
import { useDispatch } from "react-redux";
import { postStuff } from "../../store/stuffSlice";
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom";


const AddStuff = () => {
    const [title, setTitle] = useState("")
    const [image, setimage] = useState(null)
    const [ranking, setRanking] = useState("")

    const dispatch = useDispatch()
    const id = uuidv4()
    const navigate = useNavigate()

    const handleSumbit = (e) => {
        e.preventDefault()
        const newStuff = {
            id, title, image, ranking
        }

        dispatch(postStuff(newStuff))

        setTitle("");
        setimage(null);
        setRanking("");
        navigate("/stuff")
    }
    const options = [1, 2, 3, 4, 5]

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <h2>Agrega un nuevo producto</h2>
                <input type="text" placeholder="Nombre del producto" value={title} onChange={e => setTitle(e.target.value)} required />
                <input type="file" onChange={e => setimage(e.target.files[0])} required />
                <p>Elige del 1 al 5 que tanto te gusto el producto</p>
                <select name="ranking" id="ranking" value={ranking} onChange={e => setRanking(e.target.value)} required>
                    <option>Elige una opcion</option>
                    {options.map((option, index) =>
                        <option key={index} >{option}</option>
                    )}
                </select>
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default AddStuff;
