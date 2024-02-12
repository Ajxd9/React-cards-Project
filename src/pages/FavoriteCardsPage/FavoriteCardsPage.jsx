// FavoriteCardsPage.js
import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Divider, Grid } from "@mui/material";
import CardsComp from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import LoginContext from "../../store/loginContext";
import normalizeHome from "../HomePage/normalizeHome";
import { commonToastConfig, handleDeleteCard, handleEditCard, handlePhoneNumberCard, handleClickCard, handleLikeCard } from "../../services/CardFunctions";
import axios from "axios";

const FavoriteCardsPage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  useEffect(() => {
    const handleFavCards = async () => {
      if (!login.user) {
        navigate(ROUTES.LOGIN);
        return;
      }
      try {
        const { data } = await axios.get("/cards");
        const filteredData = data.filter((card) =>
          card.likes.includes(login.user._id)
        );
        setDataFromServer(normalizeHome(filteredData));
      } catch (error) {}
    };

    handleFavCards();
  }, [login, navigate]);

  let dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login.user ? login.user._id : undefined
  );

  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items...</Typography>;
  }

  const handleDeleteCardWrapper = async (id) => {
    await handleDeleteCard(id, dataFromServerFiltered, setDataFromServer, login);
  };

  const handleEditCardWrapper = (id) => {
    handleEditCard(id, dataFromServerFiltered, navigate, login);
  };

  const handlePhoneNumberCardWrapper = (id) => {
    handlePhoneNumberCard(id, navigate);
  };

  const handleClickCardWrapper = (id) => {
    handleClickCard(id, navigate);
  };

  const handleLikeCardWrapper = async (id) => {
    await handleLikeCard(id, setDataFromServer);
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      {/* ... (existing JSX) */}
      <Divider sx={{ my: 2 }}>My Fav Cards</Divider>
      <Grid container spacing={2}>
        {dataFromServerFiltered.map((item, index) => (
          <Grid item lg={3} md={6} xs={12} key={"Card" + index}>
            <CardsComp
              id={item._id}
              title={item.title}
              subtitle={item.subtitle}
              img={item.image.url}
              phone={item.phone}
              address={item.address}
              cardNumber={item.bizNumber}
              liked={item.liked}
              onDelete={() => handleDeleteCardWrapper(item._id)}
              onEdit={() => handleEditCardWrapper(item._id)}
              onIdClick={() => handleClickCardWrapper(item._id)}
              onLike={() => handleLikeCardWrapper(item._id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FavoriteCardsPage;
