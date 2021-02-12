import React from 'react';
import Box from '@material-ui/core/Box';
import AlisonImg from '../../assets/img/headshots/alisonWong.png'
import LorraineImg from '../../assets/img/headshots/lorraineLi.jpg'
import MichelleImg from '../../assets/img/headshots/michelleBraun.jpg'
import HeatherImg from '../../assets/img/headshots/heatherTian.jpg'
import SitaraImg from '../../assets/img/headshots/sitaraVisram.png'
import './Pages.css';

function Team() {

  return (
    <div>
      <Box className='pageHeading'>
        The Team Behind Think Twice
      </Box>
      {/* First Row */}
      <h3 className='centredTextHeading'>Development Team</h3>
      <div class='row' align='center'>
        <div class='threeColumn'>
          <img src={AlisonImg} className='headshot'/>
          <p className='bodyText'>Alison Wong</p>
        </div>
        <div class='threeColumn'>
          <img src={LorraineImg} className='headshot'/>
          <p className='bodyText'>Lorraine Li</p>
        </div>
        <div class='threeColumn'>
          <img src={MichelleImg} className='headshot'/>
          <p className='bodyText'>Michelle Braun</p>
        </div>
      </div>
      {/* Second Row */}
      <h3 className='centredTextHeading'>Design Team</h3>
      <div class='row' align='center'>
        <div class='twoColBtwnLeft'>
          <img src={HeatherImg} className='headshot'/>
          <p className='bodyText'>Heather Tian</p>
        </div>
        <div class='twoColBtwnRight'>
          <img src={SitaraImg} className='headshot'/>
          <p className='bodyText'>Sitara Visram</p>
        </div>
      </div>
    </div>
  )
}

export default Team;