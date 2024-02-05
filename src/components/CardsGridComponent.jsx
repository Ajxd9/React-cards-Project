import { Grid, Typography } from "@mui/material";
import CardComponent from "./CardComponent";
import test1 from "../assets/images/cardImages/testImg.png";
const CardsGridComponent=()=>{
    let initialDataFromServer=[{title:"title1", subtitle:"subtitle1", src:test1, alt:"Business1", body:"Content1",},{title:"title2", subtitle:"subtitle2", src:test1, alt:"Business2", body:"Content2",},{title:"title3", subtitle:"subtitle2", src:test1 ,alt:"Business3", body:"Content3",},{title:"title4" ,subtitle:"subtitle4" ,src:test1, alt:"Business4" ,body:"Content4",}];

    if(!initialDataFromServer || !initialDataFromServer.length)
    return <Typography>Could not find any items</Typography>
    return(
        <Grid container spacing={2}>
            {initialDataFromServer.map((item,index)=>(
                <Grid item lg={3} md={6} xs={12} key={"businessesCard" + index}>
                <CardComponent title={item.title} subtitle={item.subtitle} src={item.src} alt={item.alt} body={item.body}/>
            </Grid>
            ))}
        </Grid>
    );
};
export default CardsGridComponent;