import React from 'react'

function MainImage(props){
    return(
        <div style={{
            width:'100%',height:'500px',
            background:`linear-gradient(to bottom,rgba(0,0,0,0.0)30%,rgba(0,0,0,0.0)30%,rgba(0,0,0,0.65)100%), url(${props.image}) no-repeat`, backgroundPosition:'center',backgroundSize:'cover'
        }}>
            <div style={{
                width:'85%',height:'100%',margin:'0 auto',
                display:'flex',justifyContent:'flex-end',flexDirection:'column',paddingBottom:'15px'
            }}>
                <h2 style={{
                    fontSize:'30px',color:'#fff',textShadow:'1px 1px 4px rgba(0,0,0,0.4)',
                    marginBottom:'5px'
                }}> {props.title} </h2>
                <p style={{
                    color:'#fff',fontSize:'16px',maxWidth:'90%',
                    whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'
                }}>{props.desc}</p>
            </div>
        </div>
    )
}

export default MainImage;