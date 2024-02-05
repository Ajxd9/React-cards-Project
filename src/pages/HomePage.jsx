import { Grid, Typography } from "@mui/material";
import CardComponent from "../components/CardComponent";
import test1 from "../assets/images/cardImages/testImg.png";

const handleDeleteCard=(id)=>{

};
const HomePage=()=>{
    let initialDataFromServer=[{
        i:"abcedfgh1",
        title:"title1",
        subtitle:"subtitle1",
        src:test1,
        alt:"Business1",
        body:"Content1",
    },
    {
        i:"abcedfgh2",
        title:"title2",
        subtitle:"subtitle2",
        src:test1,
        alt:"Business2",
        body:"Content2",
    },
    {
        i:"abcedfgh3",
        title:"title3",
        subtitle:"subtitle2",
        src:test1 ,
        alt:"Business3",
        body:"Content3",
    },
     {
        id:"abcedfgh4",
        title:"title4"
        ,subtitle:"subtitle4"
        ,src:test1,
        alt:"Business4" ,
        body:"Content4",}];

    if(!initialDataFromServer || !initialDataFromServer.length)
    return <Typography>Could not find any items</Typography>
    return(
        <Grid container spacing={2}>
            {initialDataFromServer.map((item,index)=>(
                <Grid item lg={3} md={6} xs={12} key={"businessesCard" + index}>
                <CardComponent id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                src={item.src}
                alt={item.alt}
                body={item.body}
                onDelete={handleDeleteCard}/>
            </Grid>
            ))}
        </Grid>
    );
};
export default HomePage;