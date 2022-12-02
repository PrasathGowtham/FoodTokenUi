import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Orderstate } from "../../context/context";
import Button from '@mui/material/Button';
function Container({ prod }) {
  const {
    state: { Item },
    dispatch,
  } = Orderstate();
  return (
    <Typography>

      <Card sx={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: "400px",
        width: '500px',
        padding: "25px",
        margin: "10px",
        backgroundColor: "#f3f0f0",
        borderRadius: "15px",
      }}>
        <CardMedia

          component="img"
          height="200"
          image={prod.image}
          alt="green iguana"

        />
        <CardContent sx={{ paddingRight: "5px", width: "50%", paddingLeft: "0px" }}>
          <Typography gutterBottom variant="h5" component="div" value="idly" >
            <strong>{prod.name}</strong>
          </Typography>

        </CardContent>

        <CardActions sx={{ width: "45%", justifyContent: "right", paddingRight: "0px" }} >
          {Item.some((p) => p.id === prod.id) ? (
            <Button
              variant="contained"
              color="success"
              onClick={() =>
                dispatch({

                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }

            >
              Add
            </Button>
          )}
        </CardActions>
      </Card>
    </Typography>
  )
}
export default Container;