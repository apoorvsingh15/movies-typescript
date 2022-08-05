import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Col, Row } from 'antd';
import '../css/Home.css';
import SearchBar from "../components/SearchBar";
import { getDefaultMovies } from "../api/getDefaultMovies";

interface IMovieList {
    data: {
        Search: []
    }
}


const Home = () => {
    const [movies, setMovies] = useState<string[]>([]);
    const [page, setPage] = useState<number>(1);
    const { Meta } = Card;

    const getMoviesToDisplay = async () => {
        try {
            const movieList: IMovieList = await getDefaultMovies(page);
            setMovies([...movies, ...movieList.data.Search])
        } catch (err) {
            console.log('Something went Wrong')
        }
    }

    const onClickLoadMore = () => {
        setPage((prev: number) => prev + 1)
    }

    useEffect(() => {
        getMoviesToDisplay();
    }, [page]);

    console.log(movies)


    return (
        <div className="mainClass">
            <SearchBar />
            <Row gutter={16}>
                {
                    movies?.length && movies?.map((singleMovie: any) => (
                        <Col
                            className="gutter-row"
                            span={6}
                            key={singleMovie.imdbID}
                        >
                            <Card
                                hoverable
                                style={{ margin: '15px 10px 0px 10px' }}
                                cover={<img alt={singleMovie.Title}
                                    src={singleMovie.Poster === 'N/A' ?
                                        'https://images.pexels.com/photos/12877900/pexels-photo-12877900.jpeg' : singleMovie.Poster} />}
                            >
                                <Meta
                                    title={singleMovie.Title}
                                    description={singleMovie.Year}
                                />
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            {movies?.length ? <div className="buttonContainer">
                <Button
                    type="primary"
                    onClick={onClickLoadMore}
                >Load More...</Button>
            </div> : null}
        </div >
    );
}

export default Home;