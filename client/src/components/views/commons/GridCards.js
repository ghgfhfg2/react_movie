import React from 'react'
import { Col } from 'antd'

function GridCards(props) {
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
}

export default GridCards
