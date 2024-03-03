import React, { useEffect, useContext, useState } from "react";
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
import LoginContext from "../../store/loginContext";
import axios from "axios";
import normalizeFromServer from "./normalizeFromServer"; // Adjust the path accordingly

const UserProfilePage = () => {
  const { login } = useContext(LoginContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/users/" + login.user._id);
        const normalizedData = normalizeFromServer(response.data);
        setUserData(normalizedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    if (login.user?._id) {
      fetchUserData();
    }
  }, [login.user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar src={userData.ImageUrl} sx={{ width: 150, height: 150, mr: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">
            {userData.first} {userData.middle} {userData.last}
          </Typography>
          <Typography variant="body1">{userData.email}</Typography>
          <Typography variant="body1">{userData.phone}</Typography>
          <Typography variant="body1">{userData.address}</Typography>
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
