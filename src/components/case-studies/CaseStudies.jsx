import React from 'react';
import Title from '../Title';
import Partnership from '../Partnership';
import costRaving from './images/cost-saving.png';

const CaseStudies = () => {
  return (
    <div>
      <Title title="MANUFACTURER PERFECTS AUTHENTIC ASIAN SAUCE - CUTS COSTS BY 28% WITH MIDAS"/>
      <div className="container case-studies">
        <h1>Case Studies</h1>
        <div className="cost-saving-img">
          <img src={costRaving} alt="costRaving case studies"/>
        </div>
        <div className="component">
          <h2>The Problem</h2>
          <p>Obtaining authentic ethnic sauces is a challenge, both from a culinary and an ingredient-sourcing perspective. In particular, Asian sauces are difficult due to the number of exotic ingredients typically needed. For manufacturers, this drives unwieldy SKU proliferation along with astronomical cost and logistical issues. Oftentimes, the supply chain is stretched to Asia to obtain fish sauces or other fermented bases. One manufacturer wanted a better solution for these sauces and contacted Midas Foods for support.</p>
        </div>
        <div className="component">
          <h2>The Solution</h2>
          <p>The manufacturer needed a solution that would identify and eliminate allergens, consolidate 13 ingredients into one functional sauce, and reduce costs by at least 25%. Midas chefs and food techs worked with the manufacturer's culinary and quality assurance teams and reverse-engineered a Ponzu, Sriracha and a Gochujang, all frequently used in their production.</p>
          <p>Spices developed several prototypes that were shared for processing and organoleptic feedback. The entire review process took about six weeks, and Midas delivered the manufacturer the final culinary level sauce blends that were authentically Asian.</p>
        </div>
        <div className="component">
          <h2>The Results</h2>
          <p>Midas reduced the sauce to three simple ingredients—the Midas blend, soy sauce, and water. The seafood allergen and reliance on imported ingredients were eliminated, and overall costs were reduced by roughly 28%.</p>
        </div>
        <Partnership />
      </div>
    </div>
  )
}

export default CaseStudies
