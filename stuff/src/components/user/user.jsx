import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import { Avatar, Box, Typography } from "@mui/material";

const User = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.data)

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
        <>
            {user.map((item) => (
                <Box key={item.id} sx={{ maxWidth: 340, display: 'flex' }} >

                    <Avatar alt={item.name} src="/static/images/avatar/2.jpg" sx={{ margin: ".5rem" }} />
                    <Typography gutterBottom variant="h6" component="div" style={{ textTransform: "capitalize", margin: ".5rem" }}>
                        {item.name}
                    </Typography>
                </Box>
            ))}
        </>
    );
}

export default User;
