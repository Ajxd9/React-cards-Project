import { Grid, Typography } from "@mui/material";
import CardComponent from "../components/CardComponent";
import test1 from "../assets/images/cardImages/testImg.png";
import { useEffect, useState } from "react";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import axios from "axios";


let initialDataFromServer = [
  {
    id: "sdlfkjgn0",
    title: "title1",
    subtitle: "subtitle1",
    body: "body1",
    img: "/assets/imgs/car 1.jpg",
  },
  {
    id: "sdlfkjgn1",
    title: "title2",
    subtitle: "subtitle2",
    body: "body2",
    img: "/assets/imgs/car 2.jpg",
  },
  {
    id: "sdlfkjgn2",
    title: "title3",
    subtitle: "subtitle3",
    body: "body3",
    img: "/assets/imgs/car 3.jpg",
  },
  {
    id: "sdlfkjgn3",
    title: "title4",
    subtitle: "subtitle4",
    body: "body4",
    img: "/assets/imgs/car 4.jpg",
  },
  {
    id: "sdlfkjgn4",
    title: "title5",
    subtitle: "subtitle5",
 body: "body5",
    img: "/assets/imgs/car 5.png",
  },
];
//const initialDataFromServer=[];

const HomePage = () => {
  const navigate = useNavigate();
  const [dataFromServer, setDataFromServer] = useState([]);
  useEffect(()=>{
     axios
    .get("/cards")
    .then(({ data }) => {
      setDataFromServer(data);
    })
    .catch(err=>{console.log("error from axio",err)});
  },[]);
  if (!dataFromServer || !dataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }
  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };

  const handleDeleteCard = (id) => {
    setDataFromServer((currentDataFromServer) =>
      currentDataFromServer.filter((card) => card._id !== id)
    );
    console.log(id);
  };

  return (
    <Grid container spacing={2}>
      {dataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.image.url}
            alt={item.image.alt}
            phoneNumber={item.phone}
            address={{
              
              city: item.address.city,
              street: "Hogwarts",
              houseNumber: 123,
              zip: item.address.zip,
            }}
            cardNumber={item.bizNumber}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;