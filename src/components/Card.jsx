import backup from '../assets/backup.jpg';
import {Link} from 'react-router-dom';
export const Card = ({movie}) => {
  const{poster_path,  overview, title, vote_average, vote_count}= movie;
  const image = poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:backup;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
          <img src={image} alt="" className="card-img-top" />
      
        <div className="card-body">
          <h5 className='card title text-primary text-overflow-1'>{title}</h5>
          <p className='card-text text-overflow-2'>{overview}</p>
          {/*The d-flex class is used to display the child elements in a flex container. The justify-content-between class is used to align the child elements to the left and right of the container. The align-items-center class is used to vertically center the child elements in the container.*/}
          <div className='d-flex justify-content-between align-items-center'>
          <Link to=""className="btn btn-sm btn-outline-primary">Read More</Link>
            <small>
            <i className="bi bi-star-fill text-warning"></i>
             {vote_average}|{vote_count} reviews
            </small>
          </div>
        </div>
      </div>
    
    </div>
  )
}


