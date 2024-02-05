import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneIcon from '@mui/icons-material/Phone';
let FooterComponent=()=>{
    return(
        <Paper elevation={4} sx={{position:"sticky", mt:2}}>
            <BottomNavigation>
                <BottomNavigationAction label="Delete" icon={<DeleteIcon/>}/>
                <BottomNavigationAction label="Edit" icon={<EditIcon/>}/>
                <BottomNavigationAction label="Favorite" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Phone" icon={<PhoneIcon/>}/>
            </BottomNavigation>
        </Paper>
    );
}
export default FooterComponent;