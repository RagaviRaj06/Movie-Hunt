import { Routes, Route } from 'react-router-dom';
import { MovieList } from '../pages/MovieList';
const AllRoutes = () => {
  return( <>
  <Routes>
    <Route path="/" element={<MovieList title="Your Guide to Great Movies" apiPath="movie/now_playing"/>}/>
    <Route path="movies/popular" element={<MovieList title="Popular Movies" apiPath="movie/popular"/>}/>
    <Route path="movies/top" element={<MovieList title="Top Rated Movies" apiPath="movie/top_rated"/>}/>
    <Route path="movies/upcoming" element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming"/>}/>
  </Routes>
  </>
  );
}
export default AllRoutes;
