import { useDispatch } from 'react-redux';
import { deleteStuff } from '../../store/stuffSlice';
import PropTypes from "prop-types";

const DeleteStuff = ({ itemId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteStuff(itemId));
    };

    return (
        <button onClick={handleDelete}>Eliminar</button>
    );
};

export default DeleteStuff

DeleteStuff.propTypes = {
    itemId: PropTypes.string.isRequired
}
