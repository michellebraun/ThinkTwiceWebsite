import React from 'react';
import Box from '@material-ui/core/Box';
import './Pages.css';

function Contact() {

  return (
    <div>
      <Box className='pageHeading'>
        Contact Us
      </Box>
      <p className='bodyText'>For any questions or concerns please feel free to email us at <b>thinktwice@gmail.com</b></p>
      <br/>
      <p className='bodyText'>You can also visit us at our website at <b>thinktwice.eco</b></p>
    </div>
  )
}

export default Contact;