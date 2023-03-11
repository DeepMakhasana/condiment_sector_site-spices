import React from 'react';
import { NavLink } from 'react-router-dom';
import map from './map.jpg';

const Contact = () => {
  return (
    <section className='container contact-component'>
      <h2>Ready to discuss a partnership?</h2>
      <p>We're proud of the quality of our blends and want you to experience the drool-worthy taste yourself. Contact us today to receive samples or learn how we can create a custom recipe just for you.</p>
      <div className="main-contact">
        <form action="contact/success">
          <label htmlFor="fname">First Name *</label>
          <input type="text" id="fname" name="firstname" placeholder="Your first name.." required/>

          <label htmlFor="lname">Last Name *</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>

          <label htmlFor="company">Company Name *</label>
          <input type="text" id="company" name="company" placeholder="Your company name.." required/>

          <label htmlFor="phone">Phone *</label>
          <input type="text" id="phone" name="phone" placeholder="Your phone number.." required/>

          <label htmlFor="lname">Email *</label>
          <input type="email" id="email" name="email" placeholder="Your email id.." required/>

          <label htmlFor="subject">How can we help you?</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} defaultValue={""} />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
      <div className="contact-detail flex">
        <div className="map-img">
          <NavLink to="https://www.google.com/maps/place/MiDAS+Foods+International+-+USA/@42.455977,-83.170343,16z/data=!4m6!3m5!1s0x8824c92de34054ad:0xbdc4cd2422805803!8m2!3d42.4559835!4d-83.1703393!16s%2Fg%2F1thzpj75?hl=en-US"><img src={map} alt="map" /></NavLink>
        </div>
        <div className="address">
          <h2>N. & S. AMERICA / CARIBBEAN</h2>
          <p><b>Manufacturing Plant/R&D Center</b><br/>Midas Foods International<br/>10750 Capital<br/>Oak Park, MI 48237</p>
          <p>Voice: (248) 544-4574</p>
          <p>Fax: (248) 544-4384</p>
        </div>
      </div>

    </section>
  )
}

export default Contact
