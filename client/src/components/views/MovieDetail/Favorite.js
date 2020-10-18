import React, { useEffect } from 'react'
import Axios from 'axios'
import { Button, Icon } from 'antd'

function Favorite(props) {
    const movieTitle = props.movieInfo.title;
    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime
    useEffect(()=>{
        let variable = {
            useFrom: userFrom,
            movieId: movieId
        }
        Axios.get('/api/favorite/favoriteNumber',variable)
        .then((res)=>{
            console.log(res.data)
            if(res.data.success){
                
            }else{
                alert('숫자정보를 가져오는데 실패 했습니다.')
            }
        })
    },[])
    return (
        <>
            <Button className="btn_favorite"><Icon type="heart" />Favorite</Button>
        </>
    )
}

export default Favorite
