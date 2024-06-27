import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Props {
    movie_state:string
}

function MovieDetails(props: Props) {
    const {movie_state} = props

    const [posts,setposts]=useState([]);

useEffect(()=>{

     axios('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjQyMjA5ZDYyNjExNmI4Mjg2YmE1Y2UzZGY1NGQyOSIsIm5iZiI6MTcxOTQzMjM5NC4xMzAxNTUsInN1YiI6IjY2N2M3M2QyYTE3OGQxOThmMmY5YmY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tkj7r0h8v7sVKCoe6cnyFIfvjeQc-DHRDF2jdf9_7Ls'
              }
        }
        
        
        ).then((response) => {
            setposts(response.data);
            console.log("Data inside child fetched",posts);
            
          });
        
       
},[movie_state])    
    
if(posts.length>0){
    console.log(posts);
    
}

    return (
        <>Movie Sercher</>
    )
}

export default MovieDetails
