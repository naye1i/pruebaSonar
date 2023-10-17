import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putStuff } from "../../store/stuffSlice";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { Box, TextField } from "@mui/material";
/* import { MuiFileInput } from 'mui-file-input' */

const EditStuff = () => {
    const { id } = useParams()
    const stuff = useSelector((state) => state.stuff.data);
    const existingStuff = stuff.filter((stuffItem) => stuffItem.id == id);
    const { title, ranking } = existingStuff[0]
    const [editTitle, setEditTitle] = useState(title);
    const [editImage, setEditImage] = useState(null);
    const [editRanking, setEditRanking] = useState(ranking)

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleUpdate = (e) => {
        e.preventDefault()
        const updateItem = {
            id: id,
            title: editTitle,
            image: editImage,
            ranking: editRanking
        }
        dispatch(putStuff(updateItem))
        navigate("/stuff")
    }
    const options = [1, 2, 3, 4, 5]
    return (
        <div>
            <Box component="form" onSubmit={handleUpdate}>
                <h2>Editar producto</h2>
                <TextField id="outlined-basic" variant="outlined" size="small" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                {/* <MuiFileInput onChange={e => setEditImage(e.target.files[0])} /> */}
                <input type="file" onChange={e => setEditImage(e.target.files[0])} />
                <p>Elige del 1 al 5 que tanto te gusto el producto</p>
                <select name="ranking" id="ranking" value={ranking} onChange={e => setEditRanking(e.target.value)} >
                    <option>Elige una opcion</option>
                    {options.map((option, index) =>
                        <option key={index} >{option}</option>
                    )}
                </select>
                {/* <TextField
                    id="ranking"
                    select

                    helperText="Elige del 1 al 5 que tanto te gusto el producto"
                    value={ranking}
                    onChange={e => setEditRanking(e.target.value)}
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} >
                            {option}
                        </MenuItem>
                    ))}
                </TextField> */}
                <button type="submit">Editar</button>
            </Box>
        </div>
    );
}

EditStuff.propTypes = {
    item: PropTypes.object.isRequired
}

export default EditStuff;
