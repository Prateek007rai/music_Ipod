import React from 'react';

class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>

                <div style={styles.titleBar}>
                    <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/128/284/284087.png"></img>
                        <p style={{fontWeight:'bold'}}>My_Ipod</p>
                        <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"></img>
                </div>
                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>
                    
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>My_Ipod<span><img style={styles.image} src="https://cdn-icons-png.flaticon.com/128/284/284087.png" /></span></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made by : Prateek Rai</p>
                    </div>
                    
                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thank You!</h5>
                </div>
            </div>
        );
    }
    
}

// internal css are here
const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url("https://cdn-icons-png.flaticon.com/128/949/949511.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Artists;