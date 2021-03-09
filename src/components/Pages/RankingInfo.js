import React from 'react';
import Box from '@material-ui/core/Box';
import ThumbsUp from '../../assets/img/thumbsup.svg'
import ThumbsDown from '../../assets/img/thumbsdown.svg'
import './Pages.css';

function RankingInfo() {

  return (
    <div>
      <Box className='pageHeading'>
        Ranking System Explained
      </Box>

      {/* First Row */}
      <div class='row'>
        {/* PASS */}
        <div class='twoColumn'>
          <h3 className='pass'>PASS <img src={ThumbsUp}/></h3>
          <p className='bodyTextRanking'><b>Brand -</b> The brand has a B- ranking or higher in each category</p>
          <p className='bodyTextRanking'><b>Product -</b> The product has a B- ranking or higher in each category</p>
        </div>
        {/* FAIL */}
        <div class='twoColumn'>
          <h3 className='fail'>FAIL <img src={ThumbsDown}/></h3>
          <p className='bodyTextRanking'><b>Brand -</b> The brand does not have a B- ranking or higher in the failed category</p>
          <p className='bodyTextRanking'><b>Product -</b> The product does not have a B- ranking or higher in the failed category</p>
        </div>
      </div>
      
      {/* Second Row */}
      <div class='row'>
        {/* Sustainble */}
        <div class='twoColumn'>
          <Box className='box' style={{background: '#01988F'}}>
            <b>Sustainable</b>
          </Box>
          <p className='bodyTextRanking'><b>Brand -</b> The brand has a B- ranking or higher in the failed category</p>
          <p className='bodyTextRanking'><b>Product -</b> The product has a B- ranking or higher for more than three categories</p>
        </div>
        {/* Unsustainble */}
        <div class='twoColumn'>
          <Box className='box' style={{background: '#D86A6A'}}>
            <b>Unsustainable</b>
          </Box>
          <p className='bodyTextRanking'><b>Brand -</b> The brand has a less than a B- ranking for one or more categories</p>
          <p className='bodyTextRanking'><b>Product -</b> The product has less than a B- ranking for one or more categories</p>
        </div>
      </div>

      <p className='redText'>All letter scores are taken from the Ethical Fashion Report 2019 (see the “More about sustainability” for the direct link)</p>
    </div>
  )
}

export default RankingInfo;