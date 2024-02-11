import React from "react";
import {
  Avatar,
  Typography,
  Box,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import UserCards from "./UserCards";

const UserProfilePage = () => {
  let user = {
    name: "John",
    email: "<EMAIL>",
    phone: "1234567890",
    address: "1234 Main St",
    imageUrl: "https://via.placeholder.com/150",
  };
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar src={user.imageUrl} sx={{ width: 150, height: 150, mr: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{user.email}</Typography>
          <Typography variant="body1">{user.phone}</Typography>
          <Typography variant="body1">{user.address}</Typography>
        </Box>

        <Box>
          <IconButton shape="circular" sx={{ p: 1, mr: 1 }}>
            <PhoneIcon fontSize="large" />
          </IconButton>

          <IconButton shape="circular" sx={{ p: 1 }}>
            <EditIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }}>
        <Typography variant="h5">Cards</Typography>
      </Divider>
      <UserCards />
    </Paper>
  );
};

export default UserProfilePage;
