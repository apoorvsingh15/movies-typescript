import React, { useState, useEffect } from "react";
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
    const [movieName, setMovieName] = useState<string>('');
    const { Meta } = Card;

    const getMoviesToDisplayOnLoadMore = async () => {
        try {
            const movieList: IMovieList = await getDefaultMovies(page, movieName);
            setMovies([...movies, ...movieList.data.Search])
        } catch (err) {
            console.log(err, "Something went wrong");
        }
    }

    const getMoviesToDisplayOnSearch = async () => {
        try {
            const movieList: IMovieList = await getDefaultMovies(1, movieName);
            setMovies(movieList.data.Search)
        } catch (err) {
            console.log(err, "Something went wrong");
        }
    }

    // Reverse - Get movie name from child to parent
    const getMovieName = async (movieName: string) => {
        setMovieName(movieName)
        setPage(1);
    }

    const onClickLoadMore = () => {
        setPage((prev: number) => prev + 1)
    }

    useEffect(() => {
        getMoviesToDisplayOnLoadMore();
    }, [page]);

    useEffect(() => {
        getMoviesToDisplayOnSearch();
    }, [movieName]);

    return (
        <div className="mainClass">
            <SearchBar
                getMovieName={getMovieName}
            />
            <Row gutter={16}>
                {
                    movies?.length ? movies?.map((singleMovie: any) => (
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
                    )) : null
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