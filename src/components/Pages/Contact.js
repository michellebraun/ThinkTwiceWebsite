import React from 'react';
import Box from '@material-ui/core/Box';
import './Pages.css';

function Contact() {

  return (
    <div>
      <Box className='pageHeading'>
        Contact Us
      </Box>
      <p className='bodyText'>For any questions or concerns please feel free to email us at <b><a target="_blank" href="mailto:thinktwice.eco@gmail.com" rel="noopener noreferrer">thinktwice.eco@gmail.com</a></b></p>
      <br/>
      <p className='bodyText'>You can also visit us at our website at <b><a target="_blank" href="http://xenodochial-rosalind-8f6d27.netlify.app/" rel="noopener noreferrer">thinktwice.eco</a></b></p>
    </div>
  )
}

export default Contact;