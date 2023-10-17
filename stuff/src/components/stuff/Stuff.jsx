import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStuff } from "../../store/stuffSlice";
import { Link } from "react-router-dom";
import DeleteStuff from "../deleteStuff/DeleteStuff";
import { Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";

const Stuff = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.stuff.data)

    useEffect(() => {
        dispatch(getStuff())
    }, [dispatch])

    return (
        <>
            {data.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 340 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={item.image}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ textTransform: "capitalize" }}>
                            {item.title}
                        </Typography>
                        <Rating name="read-only" value={Number(item.ranking)} readOnly />
                    </CardContent>

                    <CardActions>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to={`/editStuff/${item.id}`}
                            sx={{
                                mr: 2,
                                fontWeight: 400,
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Editar
                        </Typography>
                        <DeleteStuff itemId={item.id} />
                    </CardActions>

                </Card>
            ))}
        </>
    );
}

export default Stuff;
