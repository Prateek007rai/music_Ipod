import React from 'react';
import Ipod from './Ipod';

function App() {
  return (
    <div className="App" style={styles.home}>
      <Ipod />
    </div>
  );
}

const styles = {
  home:{
    backgroundImage: 'linear-gradient(135deg , cyan , white)',
    padding: '0px',
    height: '100vh',
    marginTop:'-65px'
  }
}
export default App;
