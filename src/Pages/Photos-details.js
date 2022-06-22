import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPhotosAsync } from '../store/async';

const PhotosDetails = () => {

    const { id } = useParams();
    const state = useSelector((state) => state.photos.photos)
    const [res, setRes] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPhotosAsync())
        setRes(state)
    }, [res])

    return (
        <>
            {res.results?.filter((value, index) => value.id === id).map((val, ind) => {
                return (
                    <div key={val.id}>
                        <img src={val?.urls?.small} alt='' style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                    </div>
                )
            })}
        </>
    )
}

export default PhotosDetails;