import React from "react";
import { Card ,CardHeader,CardContent,Typography,CardActionArea, CardMedia, Divider, IconButton} from "@mui/material";

import { Box, Stack } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneIcon from '@mui/icons-material/Phone';
import propTypes from "prop-types";
import test1 from "../assets/images/cardImages/testImg.png";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";




const CardComponent =({id,
    title,
    subtitle,
    description, 
    phoneNumber,
    img,
    alt,
    cardNumber,
    address,
    onDelete,
    onEdit,
    onPhone,
    onLike}) =>{
    const handleDeleteCard=()=>{
        onDelete(id);
    }
    
    const handleEditCard=()=>{
        onEdit(id);
    }
    return(
        <Card sx={{width:250,m:2}} square raised>
            <CardActionArea>
                <CardMedia component="img" height="140" src={img} alt={alt}/>
            </CardActionArea>
            <CardHeader sx={{ textAlign: 'left' }} title={title} subheader={subtitle}/>
            <Divider></Divider>
            <CardContent>
                <Stack >
                    <Stack>
                    <Typography sx={{ textAlign: 'left' }}>
                        Phone: {phoneNumber}
                        </Typography>
                    </Stack>
                    <Stack>
                    <Typography sx={{ textAlign: 'left' }}>
                        {address.city} {address.street} {address.houseNumber}
                        </Typography>
                    </Stack>
                <Stack>
                <Typography sx={{ textAlign: 'left' }}>
                    Card Number:{cardNumber}
                    </Typography>
                </Stack>
            </Stack>
           
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Box>
                    <IconButton onClick={handleDeleteCard}><DeleteIcon/></IconButton>
                    <IconButton onClick={handleEditCard}><EditIcon/></IconButton>
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
    phoneNumber:propTypes.string.isRequired,
    address:propTypes.object.isRequired,
    cardNumber:propTypes.number.isRequired,
    alt:propTypes.string.isRequired,
    id:propTypes.string.isRequired,
};
CardComponent.defaultProps ={
    src: test1,
    subtitle:'subtitle default',
    title:'title default',
};
export default CardComponent;