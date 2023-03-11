import React from 'react'
import HorizontalCard from '../HorizontalCard';
import HorizontalCardRevers from "../HorizontalCardRevers";
import Title from '../Title';
import Slider from "./Slider";

//images
import foodProductDevelopment from "./images/food-product-development.svg";
import factory from "./images/factory.svg";
import sustainability from "./images/sustainability.svg";


const Home = () => {
    return (
        <div>
            <Slider />
            <Title title="Spice award-winning dry blends and food development expertise have revolutionized commercial kitchens for over 40 years. Discover why were a trusted partner of food and restaurant chains nationwide." />
            <HorizontalCard
                img={foodProductDevelopment}
                title="Unmatched Product Expertise"
                para="Spices engineers high-quality blends that match or exceed the flavor, texture, color, and consistency of those made from scratch. Our variety of savory and sweet blends are sure to differentiate your kitchen."
                btnText="Contact" 
                link="/contact"
            />
            <HorizontalCardRevers
                img={factory}
                title="Over 130,000 Square Feet of R&D and Manufacturing"
                para="From our main campus in Oak Park, Michigan, to our state-of-the-art manufacturing plant in Kashipur, India, we offer the best in culinary research and development, production, manufacturing, and more."
                btnText="Contact" 
                link="/contact"
            />
            <HorizontalCard
                img={sustainability}
                title="Our Commitment to Sustainability"
                para="spices innovative dry blends minimize shipping, eliminate refrigeration, and reduce waste. And that's just the start of how we contribute to a more sustainable world."
                btnText="Contact" 
                link="/contact"
            />
        </div>
    )
}

export default Home
