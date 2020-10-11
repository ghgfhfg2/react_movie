import React,{ useEffect } from 'react'
import { API_URL } from '../../Config'
import { API_KEY } from '../../Config'

function MovieDetail(props) {
    let movieId = props.match.params.movieId
    useEffect(() => {
        console.log(props.match)
        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
        .then((res)=>console.log(res))
    }, [])


    return (
        <>
            
        </>
    )
}

export default MovieDetail
