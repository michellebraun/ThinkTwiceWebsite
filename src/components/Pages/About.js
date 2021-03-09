import React from 'react';
import Box from '@material-ui/core/Box';
import './Pages.css';

function About() {

  return (
    <div>
      <Box className='pageHeading'>
        About Think Twice
      </Box>
      <p className='bodyText'>Have you ever thrown out a piece of clothing because it had a hole in it? Have you thought about how these pieces of clothing add up over time? What about where all this goes when you throw it away?</p>
      <p className='bodyText'>This is what drives the Fashion industry which is the second most polluting industry in the world. It contributes 8-10% of the global carbon emissions which is more than all international flights and maritime shipping COMBINED!</p>
      <p className='bodyText'>In addition, the concept of fast fashion has a significant amount of unethical practises. How do you think they can sell dirt cheap clothes at such a large scale?! This also ties into the main reason for overconsumption. Purchasing too many clothes that people dont need is a big problem. Purchasing sustainably (such as from second hand stores or sustainable brands) is better but in the end, not purchasing at all is the better option.</p>
      <p className='bodyText'>From our research, consumers have an interest in purchasing more sustainably but they don't know where to find the information. If they find information, it can be misleading or lack transparency. In order to take better care of our planet and people, we need to take a stand and educate consumers on sustainability.</p>
      <p className='bodyText'>The goal of Think Twice is to educate our consumers on what a sustainable product is. This leads to consumers growing their knowledge base and better understanding their impact so they can think twice before making a purchase.</p>
    </div>
  )
}

export default About;