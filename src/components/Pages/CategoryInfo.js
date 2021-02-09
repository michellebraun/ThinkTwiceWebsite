import React from 'react';
import Box from '@material-ui/core/Box';
import './Pages.css';

function CategoryInfo() {

  return (
    <div>
      <Box className='pageHeading'>
        Category Information
      </Box>
      <div class='row'>
        {/* First Column */}
        <div class='twoColumn'>
          <h3 className='textHeading'>Brand</h3>
          <p className='transparency'>Transparency</p>
          <p className='bodyText'>The higher the letter/percentage score the more transparent the brand is. This category includes the Ethical Fashion Report and the Fashion Transparency Index. A pass for this category means a score of B+ or higher overall.</p>
          <p className='envImpact'>Environmental Impact</p>
          <p className='bodyText'>The higher the letter/number score the more environmentally friendly the brand is. A pass for this category means a score of B+ or higher for the Ethical Fashion report.</p>
          <p className='sustainEfforts'>Sustainability Efforts</p>
          <p className='bodyText'>Overview of the initatives the brand is taking to promote sustainability. A pass for this category is having sustainability campaigns.</p>
          <p className='ethicalLabour'>Ethical Labour</p>
          <p className='bodyText'>The higher the letter/number score the more ethical the brand is. A pass for this category means a score of B+ or higher for the Ethical Fashion report.</p>
        </div>
        {/* Second Column */}
        <div class='twoColumn'>
          <h3 className='textHeading'>Product</h3>
          <p className='recycledMat'>Recycled Material</p>
          <p className='bodyText'>The material is reused from a previous items. A pass for this cateogry is an indication the material is at least 20% recycled.</p>
          <p className='organicMat'>Organic Material</p>
          <p className='bodyText'>A list of organic material is compared with the material used in the product. A pass for this cateogry is the all the material being at least 95% organic.</p>
          <p className='plasticFree'>Plastic Free</p>
          <p className='bodyText'>Materials are compared with a list of plastics that could be contained in the material. A pass for this category is the product contains no plastic.</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryInfo;