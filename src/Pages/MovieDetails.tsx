import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd';

interface Props {
    movie_state: string
}

function MovieDetails(props: Props) {
    const { movie_state } = props

    const [posts, setposts] = useState([]);

    const api_call = async () => {

        await axios( "https://api.themoviedb.org/3/search/movie?query="+encodeURIComponent(movie_state)+"&include_adult=false&language=en-US&page=1",
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjQyMjA5ZDYyNjExNmI4Mjg2YmE1Y2UzZGY1NGQyOSIsIm5iZiI6MTcxOTQzMjM5NC4xMzAxNTUsInN1YiI6IjY2N2M3M2QyYTE3OGQxOThmMmY5YmY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tkj7r0h8v7sVKCoe6cnyFIfvjeQc-DHRDF2jdf9_7Ls'
                }
            }

           
            


        ).then((response) => {
            setposts(response.data?.results);
            console.log("Data inside child fetched", posts);

        });

        console.log("https://api.themoviedb.org/3/search/movie?query="+ encodeURIComponent(movie_state) + "&include_adult=false&language=en-US&page=1");
    }

    useEffect(() => {

        api_call();



    }, [])

    if (posts.length > 0) {
        console.log(posts);

    }

    return (
        <>

            {
                posts?.length > 0 &&
                <>

                    {posts?.map((data: any, index: number) => {
                        return (

                            <Row gutter={1} key={index}>
                                <Col span={12}>
                                    <Card title="Movie title" bordered={false}>
                                        {data?.title}

                                    </Card>
                                </Col>

                            </Row>


                        )
                    })}
                </>


            }





        </>
    )
}

export default MovieDetails
