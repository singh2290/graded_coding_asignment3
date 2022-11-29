import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import { Fab } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import styles from './Moviecard.module.css'
import { hover } from "@testing-library/user-event/dist/hover";
import Favorite from "@mui/icons-material/Favorite";
import EmptyPage from "../EmptyPage/EmptyPage";




const MovieCard = (props) => {
    const navigate = useNavigate();
    const OpenMovie =(movie)=>{
        navigate(`/${movie.title}`, { state: { movie }});
    }
    const removeFav =(movie) =>{
        if(props.currPage==='favourite'){
        return(
            <p onClick={()=>{props.handleRemove(movie)}}> Remove Favorite </p>
        )
        }
        else{
            return(
                <p onClick={()=>props.handlefav(movie)}>Add to Favourites <FavoriteIcon fontSize="small" sx={{ color: pink[500]}} /></p>
            )
        }
    }
    const showFav =(movie) =>{
        return(
            <p onClick={()=>props.handlefav(movie)}>Add to Favourites <FavoriteIcon fontSize="small" sx={{ color: pink[500]}} /></p>
        )
    }
    return (
        <>
            <Typography gutterBottom variant="h6" component="div" style={{padding:'20px',textAlign:'left'}}>
                Movies
            </Typography>
            {/* <div style={{display:'flex', flexDirection:'row'}}> */}
            <Box
        sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            margin: "auto",
            padding:"0 0 0 20px"
        }}
      >
                {props.movies.map((movie, index) => (
                    <Card key ={index}   sx={{ width: 200, height: 300, display:'flex', flexDirection:'row'}}>
                        <CardActionArea>
                            <CardMedia
                            onClick={()=>{OpenMovie(movie)}}
                                component="img"
                                height="200"
                                image={movie.posterurl}
                                //onClick={()=>navigate("/MovieInfo")}
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                <h6>{movie.title}</h6>
                                <div >
                                    { (props.isFav) ? removeFav(movie) : showFav(movie)}
                                    {/* <p>Add to Favourites <FavoriteIcon fontSize="small" sx={{ color: pink[500]}} /></p> */}
                                    
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                ))}
            {/* </div> */}
            </Box>
            
            


        </>
    )
               
}

export default MovieCard