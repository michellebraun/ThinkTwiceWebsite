import React from 'react';
import Box from '@material-ui/core/Box';
import './Pages.css';

function Sustainability() {

  return (
    <div>
      <Box className='pageHeading'>
        Additional Links
      </Box>
      <a target="_blank" href="https://media.business-humanrights.org/media/documents/files/documents/FashionReport_2019_9-April-19-FINAL.pdf">
        <h3 className='textHeading'>Ethical Fashion Report 2019</h3>
      </a>
      <p className='bodyText'>Ratings for various brands on categories including Policies, Transparency and Traceability, Auditing and Supplier Relationships, Worker Empowerment and Environmental Management.</p>
      <br/>
      <a target="_blank" href="https://issuu.com/fashionrevolution/docs/fr_fashiontransparencyindex2020?fr=sNmI5NzYxMDk0OA">
        <h3 className='textHeading'>Fashion Transparency Index 2020</h3>
      </a>
      <p className='bodyText'>Ratings for brands in terms of how much information they disclose about policies and behaviours.</p>
    </div>
  )
}

export default Sustainability;