import React from 'react';
import sound from './assets/music/Dooriyan.mp3'

class MyMusic extends React.Component{
    
    constructor(){
        super();
        this.state = {
            isMounted : true
        }
    }

   
    componentDidMount(){
        let self = this;
        self.props.audio.play();

       
            self.props.audio.addEventListener("timeupdate",function(){
                if(self.state.isMounted){
                    var pos = self.props.audio.currentTime/self.props.audio.duration;
                    self.updateTime();
                    let fill = document.getElementById("fill");
                    console.log(fill);
                    if(fill !== null){
                        fill.style.width = pos*100 + "%";
                    }
                }
            })
        
    }


    updateTime = () =>{
       
        this.setState({
            audio : this.props.audio
        })
    }

    componentWillUnmount(){
        this.state.isMounted = false;
    }

    render(){
         let audio = this.props.audio;
        return(
            <div style={styles.myMusicContainer}>
                <div style={styles.titleBar}>
                    <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/128/1426/1426597.png"></img>
                        <p style={{fontWeight:'bold'}}>My_Ipod</p>
                        <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"></img>
                </div>

                <div style={styles.info}>
                    <img style={styles.image} src="data:image/jpeg;base64,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"></img>
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>Dooriyan</h4>
                        <p style={{marginBottom:'0'}}>Dino James</p>
                    </div>
                    
                </div>

                <div style={styles.statusBar}>
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
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


export default MyMusic;