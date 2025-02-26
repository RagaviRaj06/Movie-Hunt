import { useEffect } from "react";
//navigator is used to navigate to the upcoming movies page when the Explore Now button is clicked
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({title, apiPath}) => { 
const {data: movies} = useFetch(apiPath);
    //pass the title prop to the MovieList component & set the document title to the title prop value
    useEffect(() =>{
        document.title=title;
    },[title]);
    const navigator = useNavigate();
  return (
    <div>
        {/*The title prop is used to conditionally render a welcome message when the title prop is equal to "Your Guide to Great Movies"*/}
        {/*The bg-body-tertiary class is used to style the background color of the div element. The p-4 class is used to add padding to the div element. The border class is used to add a border to the div element. The mb-5 class is used to add margin to the bottom of the div element. The text-primary class is used to style the text color of the h3 element. The btn and btn-primary classes are used to style the button element.*/}
        <main className="container">
            {title == "Your Guide to Great Movies" ?(
            <div className="bg-body-tertiary p-4 border mb-5">
                <h3 className="text-primary">Welcome to MovieHunt</h3>
                <p className="lead">Discover movies you&apos;ll love with personalized suggestions,
                curated collections, and quick searches - your guide to finding great films
                </p>
                {/*The Explore Now button is used to navigate to the upcoming movies page when clicked.*/}
                <button className="btn btn-primary" onClick={()=>navigator("/movies/upcoming")}>Explore Now</button>
            </div>):(
                ""
                )}
            
            <h5 className="text-danger py-2">{title}</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 py-2">
            {movies.map((movie)=>{return <Card key={movie.id} movie={movie}/>})}
                  
            </div>
        </main>
    </div>
  );
}


