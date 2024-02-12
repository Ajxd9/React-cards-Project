import React, { memo } from "react";
import { Typography, Box, Divider, Grid } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import CardComp from "../../components/CardComponent";
import normalizeHome from "./normalizeHome";
import LoginContext from "../../store/loginContext";
import { toast } from "react-toastify";
import DataContext from "../../store/CardDataContext";


const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const { filterData } = useContext(DataContext);

  useEffect(() => {
    if (!login.user) {
      navigate(ROUTES.LOGIN);
      return;
    }
    setDataFromServer(normalizeHome(filterData));
  }, [filterData, login.user, navigate]);

  let dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login.user ? login.user._id : undefined
  );

  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items...</Typography>;
  }

  const handleDeleteCard = async (id) => {
    try {
      const cardToDelete = dataFromServerFiltered.find(
        (card) => card._id === id
      );
      if (cardToDelete && cardToDelete.user_id === login.user._id) {
        if (window.confirm("Are you sure you want to delete this card?")) {
          setDataFromServer((cDataFromServer) =>
            cDataFromServer.filter((card) => card._id !== id)
          );
          await axios.delete("/cards/" + id);
          toast.success(" ✔ Delete Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error(
          "❗❗❗ Something`s Wrong ! Only The Creator of the card Can Delete !",
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
      }
    } catch (error) {
      toast.error("❗❗❗ Something went wrong! Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleEditCard = (id) => {
    const cardToEdit = dataFromServerFiltered.find((card) => card._id === id);
    if (cardToEdit && cardToEdit.user_id === login.user._id) {
      if (window.confirm("Are you sure you want to delete this card?"))
        navigate(`${ROUTES.EDITCARD}/${id}`);
    } else {
      toast.error(
        "❗❗❗ Something`s Wrong ! Only The Creator of the card Can Edit !",
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
    }
  };

  const handlePhoneNumberCard = (id) => {
    navigate(`${ROUTES.VIEWCARD}/${id}`);
  };

  const handleClickCard = (id) => {
    navigate(`${ROUTES.VIEWCARD}/${id}`);
  };

  const handleLikeCard = async (id) => {
    try {
      let { data } = await axios.patch("/cards/" + id);
      setDataFromServer((cDataFromServer) => {
        let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
        if (cardIndex >= 0) {
          cDataFromServer[cardIndex] = data;
        }
        return [...cDataFromServer];
      });
      toast.success( "✔ Like Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
    }
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
        This is a simple app for creating business cards. You can create your
        own business card and share it with your friends and all the world.
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
              onDelete={handleDeleteCard}
              onEdit={handleEditCard}
              onPhoneNumber={handlePhoneNumberCard}
              onLike={handleLikeCard}
              onIdClick={handleClickCard}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default memo(HomePage);