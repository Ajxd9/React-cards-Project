import React from "react";
import { Card ,CardHeader,CardContent,Typography,CardActionArea, CardMedia, Divider, IconButton} from "@mui/material";

import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneIcon from '@mui/icons-material/Phone';
import propTypes from "prop-types";
import test1 from "../assets/images/cardImages/testImg.png";

const CardComponent =(props) =>{
    let {title,
        subtitle,
        src,
        alt,
        body,
        phoneNumber,
        cardNumber,
        address,
        id,
        onDelete,
        onEdit,
        onPhone,
        onLike}=props;
    const handleDeleteCard=()=>{
        onDelete(id);
    }
    
    return(
        <Card sx={{width:250,m:2}} square raised>
            <CardActionArea>
                <CardMedia component="img" height="140" src={src} alt={alt}/>
            </CardActionArea>
            <CardHeader sx={{ textAlign: 'left' }} title={title} subheader="subtitle"/>
            <Divider></Divider>
            <CardContent>
                <Typography sx={{ textAlign: 'left' }}>{body}</Typography>
           
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Box>
                    <IconButton onClick={handleDeleteCard}><DeleteIcon/></IconButton>
                    <IconButton><EditIcon/></IconButton>
                </Box>
                <Box>
                    <IconButton><FavoriteIcon/></IconButton>
                    <IconButton><PhoneIcon/></IconButton>
                </Box>
            </Box>
            </CardContent>
        </Card>
    );
};
CardComponent.propTypes={
    title:propTypes.string.isRequired,
    subtitle:propTypes.string.isRequired,
    src:propTypes.string.isRequired,
   // phone:propTypes.string.isRequired,
    //address:propTypes.string.isRequired,
   // cardNumber:propTypes.number.isRequired,
   // alt:propTypes.string.isRequired,
    body:propTypes.string.isRequired,
    id:propTypes.string.isRequired,
};
CardComponent.defaultProps ={
    src: test1,
    subtitle:'subtitle default',
    title:'title default',
};
export default CardComponent;