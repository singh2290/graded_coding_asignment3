import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import SearchIcon from '@mui/icons-material/Search';
import MovieCard from './components/MovieCard/MovieCard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Favorite from '@mui/icons-material/Favorite';
import {Routes,Route} from "react-router-dom";
import MovieInfo from '../src/components/MovieInfo/Movieinfo'
import _ from 'lodash';
import EmptyPage from './components/EmptyPage/EmptyPage';

function App() {
  const [movies, setMovies] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [currPage, setCurrPage] = useState('');
  const [value, setValue] = useState('');
 
  // const [value, setValue]=useState('');

  const getMovie = async (type) => {
    var url;
    switch (type) {
      case "movies-coming":
        url = `http://localhost:3000/movies-coming`;
        setCurrPage('movies-coming')
        break;

      case "movies-in-theaters":
        url = `http://localhost:3000/movies-in-theaters`;
        setCurrPage('movies-in-theaters')
        break;

      case "top-rated-india":
        url = `http://localhost:3000/top-rated-india`;
        setCurrPage('top-rated-india')
        break;
      case "top-rated-movies":
        url = `http://localhost:3000/top-rated-movies`;
        setCurrPage('top-rated-movies')
        break;
      case "favourite":
        url = `http://localhost:3000/favourite`;
        setCurrPage('favourite')
        setIsFav(true)
        break;
      default:
        break;
    }
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      setMovies(responseJson);
    }
  };

  const search = async (value) => {
    setValue(value);
    const url=`http://localhost:3000/${currPage}?title_like=${value}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson){
      setMovies(responseJson)
    }
  }

  const handlefav = (movie) => {
    const url = `http://localhost:3000/favourite/`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(movie)
    })
      .then(res => res.json())
      .then(
        data => setMovies(prevState => [...prevState, data]),
        error => console.log(error.message)
      );
    toast.success("Added to Favourite");
    setIsFav(true);
  }
  const handleRemove = async (movie) => {
    // const url = `http://localhost:3000/favourite`;
    // const response = await fetch(url);
    // const responseJson = await response.json();
    // const newArray = responseJson.filter((fav, index) => {
    //   return (fav.title != movie.title)

    // })
    fetch("http://localhost:3000/favourite/" + movie.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    })
      .then(res => res.json())
      .then(
        data => setMovies(prevState => [...prevState, data]),
        error => console.log(error.message)
      );
    toast.info("remove from Favourite");
    setIsFav(false);
    getMovie(currPage)
    // console.log(newArray)
  }

  useEffect(() => {
    getMovie("movies-coming");
  }, []);
 

  const Home =() =>{
    return(
      <div className="App">
      <Navbar className='navbar navbar-padding'>
        <Container fluid style={{ background: 'white' }}>
          <Nav className="me-auto" style={{ gap: '5px', padding: '6px 0 0 0' }} c>
            <Nav.Link className='navlink ' onClick={() => { getMovie("movies-coming"); } }>Movies in Theater</Nav.Link>
            <Nav.Link className='navlink' onClick={() => { getMovie("movies-in-theaters"); } }>Coming Soon</Nav.Link>
            <Nav.Link className='navlink' onClick={() => { getMovie("top-rated-india"); } }>Top rated Indian</Nav.Link>
            <Nav.Link className='navlink' onClick={() => { getMovie("top-rated-movies"); } }>Top rated movies</Nav.Link>
            <Nav.Link className='navlink' onClick={() => { getMovie("favourite"); } }>Favourites</Nav.Link>
          </Nav>
          <Form style={{ marginRight: '2px' }}>
            <Form.Group className="mr-5">
  
              <Form.Control value={value} onChange={(e) => search(e.target.value)} type="email" placeholder="Search Movie" />
  
            </Form.Group>
          </Form>
          <SearchIcon style={{ justifyContent: 'center' }} color="primary" />
        </Container>
      </Navbar>
      <ToastContainer />
      <MovieCard movies={movies} handlefav={handlefav} isFav={isFav} currPage={currPage} handleRemove={handleRemove}/>
     
  
  
    </div>
  
    )
  }

  const MovieInfoPage =() =>{
    return (<MovieInfo/>)
  }

  return (
    <Routes>
      <Route exact path='/' element={Home()}/>
      <Route path='/:title' element={MovieInfoPage()}/>
    </Routes>
  )
 
}

export default App;
