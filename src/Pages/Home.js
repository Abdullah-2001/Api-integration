import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPhotosAsync } from '../store/async';
import { setLoading, setPage, setResults } from '../store/slice';

function Home() {

    const [pagination, setPagination] = useState(1);
    const [result, setResult] = useState("");
    const dispatch = useDispatch()
    const state = useSelector((state) => state.photos.photos)
    const loadingResult = useSelector((state) => state.photos.loading)

    function prev() {
        if (pagination > 1) {
            setPagination(pagination - 1)
        }
    }

    function next() {
        setPagination(pagination + 1)
    }

    useEffect(() => {
        dispatch(setResults(result))
        dispatch(setPage(pagination))
        dispatch(getPhotosAsync())
    }, [result, pagination])

    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                <br />
                <h1>Search your favourite photos</h1>
                <br />
                <input style={{ width: "50%", paddingLeft: "10px", height: "45px" }} type="text" placeholder='Search free photos' onChange={(e) => setResult(e.target.value)} />
                <br />
                <br />
                <button style={{ margin: "0 30px" }} onClick={prev}>Prev</button>
                <button style={{ margin: "0 30px" }} onClick={next}>Next</button>
                <br />
                <br />
                <br />
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    {loadingResult ? <h1>Loading...</h1> : (
                        <>
                            {state.results?.map((value, index) => {
                                return (
                                    <div className='col-lg-3' key={value.id}>
                                        <Link to={`/details/${value.id}`}>
                                            <img src={value?.urls?.small} alt='' style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                                        </Link>
                                    </div>
                                )
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );

}

export default Home;