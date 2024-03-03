import React, { memo } from "react";
import { Typography, Box, Divider, Grid } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import CardComp from "../../components/CardComponent";
import normalizeHome from "./normalizeHome";
import loginContext from "../../store/loginContext";
import { toast } from "react-toastify";
import CardDataContext from "../../store/CardDataContext";
import {
  handleDeleteCard,
  handleEditCard,
  handlePhoneNumberCard,
  handleClickCard,
  handleLikeCard,
} from "../../services/CardFunctions";

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  let { login } = useContext(loginContext);
  const { filterData } = useContext(CardDataContext);

  useEffect(() => {
    setDataFromServer(normalizeHome(filterData));
  }, [filterData]);

  let dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login.user ? login.user._id : undefined
  );
  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items...</Typography>;
  }
  const handleDeleteCardWrapper = async (id) => {
    await handleDeleteCard(
      id,
      dataFromServerFiltered,
      setDataFromServer,
      login,
      toast
    );
  };

  const handleEditCardWrapper = (id) => {
    handleEditCard(id, dataFromServerFiltered, navigate, login, toast);
  };

  const handlePhoneNumberCardWrapper = (id) => {
    handlePhoneNumberCard(id, navigate);
  };

  const handleClickCardWrapper = (id) => {
    navigate(`${ROUTES.CARDS}/${id}`);
  };

  const handleLikeCardWrapper = async (id) => {
    await handleLikeCard(id, setDataFromServer, toast);
  };
  return (
    <Box>
      <Typography align={"center"}>
        <lottie-player
          src="https://lottie.host/98dd7700-0ecb-400d-9a70-165e8225a4de/EMWsrWdNRn.json"
          background="##FFFFFF"
          speed="1"
          style={{ width: "300px", height: "300px", margin: "auto" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography
        variant="h6"
        align={"center"}
        fontWeight={500}
        color="inherit"
        sx={{ mb: 2 }}
      >
        This is a simple app for creating business cards.
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container spacing={2} sx={{ mb: 8 }}>
        {dataFromServerFiltered?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"card" + index}>
            <CardComp
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
              onPhoneNumber={() => handlePhoneNumberCardWrapper(item._id)}
              onLike={() => handleLikeCardWrapper(item._id)}
              onIdClick={() => handleClickCardWrapper(item._id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default memo(HomePage);
