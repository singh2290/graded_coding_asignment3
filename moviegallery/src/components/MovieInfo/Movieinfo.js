import React from "react";
import { useLocation } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { getCardActionAreaUtilityClass, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Movieinfo = () => {
    const { state } = useLocation()
    const movie= state.movie;

   

    return (
        <> <Box
            sx={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "10px",
                padding: "0 0 0 20px"
            }}
        >
            <Grid container spacing={2} sx={{ marginTop: "10px", }}>
                <Grid xs={4} >

                    <img src={movie.posterurl}></img>

                </Grid>
                <Grid xs={8}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                    <h4 style={{color:'red'}} >Title:</h4>
                    <h4 style={{marginLeft:'5px'}}>{movie.title}</h4>
                    </div>

                    <div style={{display:'flex', flexDirection:'row'}} >
                    <h4 style={{color:'red'}}>Year:</h4>
                    <h4 style={{marginLeft:'5px'}}>{movie.year}</h4>
                    </div>

                    <div style={{display:'flex', flexDirection:'row'}}>
                    <h4 style={{color:'red'}}>StoryLine:</h4>
                    <h4 style={{marginLeft:'5px'}}>{movie.storyline}</h4>
                    </div>

                    <div style={{display:'flex', flexDirection:'row'}}>
                    <h4 style={{color:'red'}}>Release Date:</h4>
                    <h4 style={{marginLeft:'5px'}}>{movie.releaseDate}</h4>
                    </div>

                    <div style={{display:'flex', flexDirection:'row'}}>
                    <h4 style={{color:'red'}}>Actors:</h4>
                    <h4 style={{marginLeft:'5px'}}>{movie.actors.toString()}</h4>
                    </div>

                    

                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Movieinfo;