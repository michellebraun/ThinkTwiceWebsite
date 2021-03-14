import React from 'react';
import Box from '@material-ui/core/Box';
import AlisonImg from '../../assets/img/headshots/alisonWong.jpg'
import LorraineImg from '../../assets/img/headshots/lorraineLi.jpg'
import MichelleImg from '../../assets/img/headshots/michelleBraun.jpg'
import HeatherImg from '../../assets/img/headshots/heatherTian.jpg'
import SitaraImg from '../../assets/img/headshots/sitaraVisram.jpg'
import './Pages.css';

function About() {

  return (
    <div>
      <Box className='pageHeading'>
        About Think Twice
      </Box>
      <p className='bodyText'>Have you ever thrown out a piece of clothing because it had a hole in it? Have you thought about how these pieces of clothing add up over time? What about where all this goes when you throw it away?</p>
      <p className='bodyText'>This is what drives the Fashion industry which is the second most polluting industry in the world. It contributes 8-10% of the global carbon emissions, which is more than all international flights and maritime shipping COMBINED!</p>
      <p className='bodyText'>In addition, the concept of fast fashion has a significant amount of unethical practises. How do you think they can sell dirt cheap clothes at such a large scale?! This also ties into the main reason for overconsumption. Purchasing too many clothes that people dont need is a big problem. Purchasing sustainably (such as from second hand stores or sustainable brands) is better but in the end, not purchasing at all is the better option.</p>
      <p className='bodyText'>From our research, consumers have an interest in purchasing more sustainably but they don't know where to find the information. If they find information, it can be misleading or lack transparency. In order to take better care of our planet and people, we need to take a stand and educate consumers on sustainability.</p>
      <p className='bodyText'>The goal of Think Twice is to educate our consumers on what a sustainable product is. This leads to consumers growing their knowledge base and better understanding their impact so they can think twice before making a purchase.</p>
      <p className='bodyText'>For any questions or concerns please feel free to email us at <b><a target="_blank" href="mailto:thinktwice.eco@gmail.com" rel="noopener noreferrer">thinktwice.eco@gmail.com</a></b></p>
      
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

export default About;