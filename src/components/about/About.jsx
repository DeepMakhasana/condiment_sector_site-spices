import React from 'react';
import Title from "../Title";
import HorizontalCard from '../HorizontalCard'
import HorizontalCardRevers from '../HorizontalCardRevers'

//images
import calendar from './images/calendar.svg';
import industry from './images/industry.svg';
import truck from './images/truck.svg';
import foodMaking from './images/food-making.jpg';
import condiment from './images/condiment.jpg';
import Partnership from '../Partnership';

const About = () => {
  return (
    <div>
      <Title title="OUR EXPERTISE" />

      <div className="container expertise flex">
        <div className="item">
          <img src={calendar} alt="calendar" />
          <h2>150 Years</h2>
          <p>of combined culinary expertise</p>
        </div>
        <div className="item">
          <img src={industry} alt="industry" />
          <h2>130,000 sq ft</h2>
          <p>of food R&D and Manufacturing space in the U.S. and abroad</p>
        </div>
        <div className="item">
          <img src={truck} alt="truck" />
          <h2>50 US States</h2>
          <p>to which Midas ships products or provides food development services</p>
        </div>
      </div>

      <HorizontalCard
        img={foodMaking}
        title="Casual Dining Restaurants"
        para="For casual dining restaurants, making sauces, glazes, and gravies from scratch is not only incredibly time-consuming but often inconsistent as well. RTU/prepared alternatives are incredibly expensive to ship, store and purchase.  spices dry blends require minimal prep work and offer custom versions of recipes, comparable to those that are handmade. This not only allows for quicker prep at a lower cost but also creates a consistent, reliable flavor across the board."
        btnText="Contact"
        link="/contact"
      />
      <HorizontalCardRevers
        img={condiment}
        title="Food Processors and Manufacturers"
        para="Most food processors and manufacturers either don't have a core competency in making sauces or don't have the time and resources to make them from scratch. Oftentimes, this results in the purchase of fully-prepared sauces which are expensive, difficult to store and handle,and can cause unnecessary waste by ordering more than you need. From an ESG standpoint, they are also 3x to 6x more energy intensive to ship and store. By contrast, Midas blends allow food processors to partner with one supplier and one ingredient, making their process extremely efficient and cost-effective"
        btnText="Contact"
        link="/contact"
      />

      <Partnership />
    </div>
  )
}

export default About
