import React from "react";
import { useLocation } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { getCardActionAreaUtilityClass, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Styles from './movie.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from "react-router-dom";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Movieinfo = () => {
    const { state } = useLocation()
    const movie = state.movie;
    const navigate = useNavigate();



    return (
        <> <Box
            sx={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "10px",
                padding: "0 0 0 40px"
            }}
        >
              <div className="App">
                <Navbar className='navbar navbar-padding'>
                    <Container fluid style={{ background: 'white' }}>
                        <Nav className="me-auto" style={{ gap: '5px', padding: '6px 0 0 0' }} c>
                            <Nav.Link  className='styles.navback' onClick={() => navigate(-1)}>Back Home</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <Grid container spacing={2} sx={{ marginTop: "10px", }}>
                <Grid xs={3} >

                    <img src={movie.posterurl}></img>

                </Grid>
                <Grid xs={8}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <h2 style={{ marginLeft: '3px',paddingBottom:'10px'}}>{movie.title}({movie.year})</h2>
                    </div>
                    <container>
                        <Row>
                            <Col xs={4}><h6 style={{ color: 'Black', paddingLeft: '10px'}}>Imdb Rating</h6></Col>
                            <Col xs={8}><h6>{movie.imdbRating}</h6></Col>
                        </Row>
                        <Row>
                            <Col xs={4}><h6 style={{ color: 'Black', paddingLeft: '10px' }}>Content Rating</h6></Col>
                            <Col xs={8}><h6>{movie.contentRating}1</h6></Col>
                        </Row>
                        <Row>
                            <Col xs={4}><h6 style={{ color: 'Black', paddingLeft: '10px' }}>Average Rating</h6></Col>
                            <Col xs={8}><h6>{movie.averageRating}1</h6></Col>
                        </Row>
                        <Row>
                            <Col xs={4}><h6 style={{ color: 'Black', paddingLeft: '10px' }}>Duration</h6></Col>
                            <Col xs={8}><h6>{movie.duration}</h6></Col>
                        </Row>
                        <Row>
                            <Col xs={4}><h6 style={{ color: 'Black', paddingLeft: '10px' }}>Genres</h6></Col>
                            <Col xs={8}><h6>{movie.genres.join(",")}</h6></Col>
                        </Row>
                        <Row>
                            <Col xs={4}><h6 style={{ color: 'Black', paddingLeft: '10px' }}>Actors</h6></Col>
                            <Col xs={8}><h6>{movie.actors.join(",")}</h6></Col>
                        </Row>
                        <Row>
                            <Col xs={4}><h6 style={{ color: 'Black', paddingLeft: '10px' }}>Release Date:</h6></Col>
                            <Col xs={8}><h6>{movie.releaseDate}</h6></Col>
                        </Row>
                        <Row>
                            <Col xs={4}><h6 style={{ color: 'Black', paddingLeft: '10px' }}>StoryLine:</h6></Col>
                            <Col xs={8}><h6>{movie.storyline}</h6></Col>
                        </Row>
                    </container>

                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Movieinfo;