import {React, useEffect , useState} from 'react'
import {
    Grid,
    Typography,
    TextField,
    CardActionArea,
    Card,
    CardMedia,
    CardHeader,
    Divider,
    CardContent,
    Box,
    Button,
} from "@mui/material";
import axios from 'axios';
import {toast} from "react-toastify";
import { useParams } from 'react-router-dom';

const CardGridView = () => {
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [dataFromServer, setDataFromServer] = useState({});
    let {id} = useParams();
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
  return (
    <div>
      
    </div>
  )
}

export default CardGridView
