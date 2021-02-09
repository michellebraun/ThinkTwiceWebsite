import React from 'react';
import Box from '@material-ui/core/Box';
import './Pages.css';

function RankingInfo() {

  return (
    <div>
      <Box className='pageHeading'>
        Ranking System Explained
      </Box>
      {/* PASS */}
      <h3 className='pass'>PASS</h3>
      <p className='bodyTextRanking'><b>Brand -</b> The brand has a B+ ranking or higher in each category</p>
      <p className='bodyTextRanking'><b>Product -</b>The product has a B+ ranking or higher in each category</p>
      {/* FAIL */}
      <h3 className='fail'>FAIL</h3>
      <p className='bodyTextRanking'><b>Brand -</b> The brand does not have a B+ ranking or higher in the failed category</p>
      <p className='bodyTextRanking'><b>Product -</b>The product does not have a B+ ranking or higher in the failed category</p>
      
      {/* Sustainble */}
      <Box className='box' style={{background: '#01988F'}}>
        Sustainable
      </Box>
      <p className='bodyTextRanking'><b>Brand -</b> The brand has a B+ ranking or higher in the failed category</p>
      <p className='bodyTextRanking'><b>Product -</b> The product has a B+ ranking or higher for more than three categories</p>
      
      {/* Unsustainble */}
      <Box className='box' style={{background: '#D86A6A'}}>
        Unsustainable
      </Box>
      <p className='bodyTextRanking'><b>Brand -</b> The brand has a less than a B+ ranking for one or more categories</p>
      <p className='bodyTextRanking'><b>Product -</b> The product has less than a B+ ranking for one or more categories</p>

      <p className='redText'>All letter scores are taken from the Ethical Fashion Report 2019 (see the “More about sustainability” for the direct link)</p>
    </div>
  )
}

export default RankingInfo;