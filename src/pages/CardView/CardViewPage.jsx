import React, { useContext, useEffect, useState } from "react";
import LoginContext from "../../store/loginContext";
import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { normalizeEditCards } from "../EditCardPage/normalizeEditCards";
import {useParams} from 'react-router-dom';

const CardViewPage = () => {
  const { id } = useParams();
  const { login } = useContext(LoginContext);
  const [card, setCard] = useState({});

  useEffect(() => {
    if (!id || !login.user) {
      return;
    }
    axios
      .get("/cards/" + id)
      .then(({ data }) => {
            const normalizedCard = normalizeEditCards(data);
            setCard(normalizedCard);
      })
      .catch((err) => {
        toast.error(
          "❗ An error occurred while fetching the card.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  }, [id, login]);

  if (Object.keys(card).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        marginTop: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Card sx={{ width: 500, mt: 5 }}>
        <CardMedia
          component="img"
          height="300"
          image={card.url}
          alt={card.alt}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {card.subtitle}
          </Typography>
          <Typography variant="body1">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2">Phone:</Typography>
                <Typography variant="body2">Email:</Typography>
                <Typography variant="body2">Web:</Typography>
                <Typography variant="body2">State:</Typography>
                <Typography variant="body2">Country:</Typography>
                <Typography variant="body2">City:</Typography>
                <Typography variant="body2">Street:</Typography>
                <Typography variant="body2">House Number:</Typography>
                <Typography variant="body2">Zip:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">{card.phone}</Typography>
                <Typography variant="body2">{card.email}</Typography>
                <Typography variant="body2">{card.web}</Typography>
                <Typography variant="body2">{card.state}</Typography>
                <Typography variant="body2">{card.country}</Typography>
                <Typography variant="body2">{card.city}</Typography>
                <Typography variant="body2">{card.street}</Typography>
                <Typography variant="body2">{card.houseNumber}</Typography>
                <Typography variant="body2">{card.zip}</Typography>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {card.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardViewPage;