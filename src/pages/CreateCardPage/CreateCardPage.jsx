import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Avatar,
  Typography,
  Grid,
  Alert,
} from "@mui/material";
import axios from "axios";
import normalizeCreateCard from "./normalizeCards";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import ValidateSchema from "../../validation/cardValidation";
import { toast } from "react-toastify";
import TextFieldComponent from "../../components/TextFieldComponent";
import TourIcon from '@mui/icons-material/Tour';

const CreateCardPage = () => {
    const [inputsValue, setInputsValue] = useState({
      title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      url: "",
      alt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
    });
    const [errors, setErrors] = useState({
      title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
    });
    const navigate = useNavigate();
    let keys = Object.keys(inputsValue);
    let notRequired = ["web","state","zip"]; 
  
    const handleInputsChange = (e) =>{
      setInputsValue((prev)=>({
        ...prev,[e.target.id]: e.target.value,
      }));
    }
    const handleInputsBlur = (e) =>{
      let{ error }= ValidateSchema[e.target.id]({
        [e.target.id]:inputsValue[e.target.id]
      });
      if(error){
        setErrors((prev)=>({
          ...prev,
          [e.target.id]: error.details[0].message,
        }))
      } else {
        setErrors((prev)=> {
          delete prev[e.target.id];
          return {...prev};
        })
      }
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        await axios.post("/cards",normalizeCreateCard(inputsValue))
        navigate(ROUTES.MY_CARDS)
        toast.success("Card Created Successfully ✔ ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        toast.error(
          "❗ Check the information entered",
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
    }

    return (
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <TourIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Card
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {keys.map((keyName) => (
              <TextFieldComponent
                key={"input" + keyName}
                id={keyName}
                label={keyName}
                value={inputsValue[keyName]}
                onChange={handleInputsChange}
                onBlur={handleInputsBlur}
                errors={errors[keyName]}
                required={!notRequired.includes(keyName)}
              />
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>

            <Button
              fullWidth
              type="button"
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                setInputsValue((prevInputs) => {
                  const updatedInputs = { ...prevInputs };
                  Object.keys(updatedInputs).forEach((key) => {
                    updatedInputs[key] = "";
                  });
                  return updatedInputs;
                });
              }}
            >
              Clear 🧽
            </Button>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={Object.keys(errors).length > 0}
          >
            Create Card
          </Button>
        </Box>
      </Box>
    );    
  };
export default CreateCardPage;
