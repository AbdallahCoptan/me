import React from 'react';

import Layout from '../components/Layout';
import config from '../../config';
import avatar from '../assets/images/avatar.png';
import skyimg from '../assets/images/2015-11-28 01.15.34.jpg';
import circularimages from '../assets/css/circularimages.css';

const IndexPage = () => (
  <Layout>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <header className="major">
        <i className={`fab fa-skype fa-10x`} aria-hidden='true'></i>
        <i></i>
            <img class= 'circular--square' src={skyimg} height="210" width="210" />
          <h2>
            live: abdallah_zain
            <br />
            email: abdallah_zain@ci.suez.edu.eg
          </h2>
        </header>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
