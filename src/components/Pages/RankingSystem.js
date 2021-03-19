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
          <p className='bodyTextRanking'><b>Brand -</b> The brand has a B- ranking or higher in the passed category</p>
          <p className='bodyTextRanking'><b>Product -</b> The product has met the category benchmark</p>
        </div>
        {/* FAIL */}
        <div class='twoColumn'>
          <h3 className='fail'>FAIL <img src={ThumbsDown}/></h3>
          <p className='bodyTextRanking'><b>Brand -</b> The brand does not have a B- ranking or higher in the failed category</p>
          <p className='bodyTextRanking'><b>Product -</b> The product has not met the category benchmark</p>
        </div>
      </div>
      
      {/* Second Row */}
      <div class='row'>
        {/* Sustainble */}
        <div class='twoColumn'>
          <Box className='box' style={{background: '#01988F'}}>
            <b>Sustainable</b>
          </Box>
          <p className='bodyTextRanking'><b>Brand -</b> The brand has a B- ranking or higher for all 4 of the categories</p>
          <p className='bodyTextRanking'><b>Product -</b> The product has met at least 1/3 of the category benchmarks</p>
        </div>
        {/* Unsustainble */}
        <div class='twoColumn'>
          <Box className='box' style={{background: '#D86A6A'}}>
            <b>Unsustainable</b>
          </Box>
          <p className='bodyTextRanking'><b>Brand -</b> The brand has a less than a B- ranking for one or more categories</p>
          <p className='bodyTextRanking'><b>Product -</b> The product has not met at least 1/3 of the category benchmarks</p>
        </div>
      </div>

      <p className='redText'>All letter scores are taken from the Ethical Fashion Report 2019 (see "Additional Links" below for the direct link)</p>

      <Box className='pageHeading'>
        Category Information
      </Box>
      <div class='row'>
        {/* First Column */}
        <div class='twoColumn'>
          <h3 className='textHeading'>Brand</h3>
          <p className='transparency'>Transparency</p>
          <p className='bodyText'>The higher the letter score, the more transparent the brand is. The score is calculated using the Ethical Fashion Report and the Fashion Transparency Index. A pass for this category means a score of B- or higher overall.</p>
          <p className='envImpact'>Environmental Impact</p>
          <p className='bodyText'>The higher the letter score, the more environmentally friendly the brand is. A pass for this category means a score of B- or higher for the Ethical Fashion report.</p>
          <p className='sustainEfforts'>Sustainability Efforts</p>
          <p className='bodyText'>Overview of the initiatives the brand is taking to promote sustainability. A pass for this category is having sustainability campaigns.</p>
          <p className='ethicalLabour'>Ethical Labour</p>
          <p className='bodyText'>The higher the letter score, the more ethical the brand is. A pass for this category means a score of B- or higher for the Ethical Fashion report.</p>
        </div>
        {/* Second Column */}
        <div class='twoColumn'>
          <h3 className='textHeading'>Product</h3>
          <p className='recycledMat'>Recycled Material</p>
          <p className='bodyText'>The material is reused from previous items. A pass for this category means the product's material composition is at least 20% recycled.</p>
          <p className='organicMat'>Organic Material</p>
          <p className='bodyText'>A list of organic material is compared with the material used in the product. A pass for this category means the product's material composition is at least 95% organic.</p>
          <p className='plasticFree'>Plastic Free</p>
          <p className='bodyText'>Materials are compared with a list of plastics that could be contained in the material. A pass for this category means there is no plastic in the product's material composition.</p>
        </div>
      </div>

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

export default RankingInfo;