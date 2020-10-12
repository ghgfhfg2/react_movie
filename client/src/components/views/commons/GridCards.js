import React from 'react'
import { Col } from 'antd'

function GridCards(props) {
    if(props.landingPage){
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a className="grid-card" style={{position:'relative',display:'block',overflow:'hidden'}} href={`/movie/${props.movieId}`}>
                        <img src={props.image} alt=""/>
                        <div className="hover_box">
                            {props.movieName}
                        </div>
                    </a>
                </div>
            </Col>
        )
    }else{
        return(
            <Col xxl={3} lg={4} md={6} xs={8}>
                <div className="grid-card" style={{position:'relative',overflow:'hidden'}}>
                    <img src={props.image} alt=""/>    
                    <div className="cast_info_txt">
                        <p>{props.castName}</p>
                    </div>                
                </div>
            </Col>
        )
    }
}

export default GridCards
