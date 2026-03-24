import React from 'react';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="section videos-section">
        <h2>Videos</h2>
        <img 
          src="https://res.cloudinary.com/dujwqprxl/image/upload/v1774334314/pexels-imagestudio-1488315_pigpnr.jpg" 
          alt="Videos" 
          className="service-image"
        />
      </div>
      
      <div className="section others-section">
        <h2>Others</h2>
        <div className="service-item">
          <h3>Website Development</h3>
          <img 
            src="https://res.cloudinary.com/dujwqprxl/image/upload/v1774334323/fotis-fotopoulos-DuHKoV44prg-unsplash_l3msrd.jpg" 
            alt="Website Development" 
            className="service-image"
          />
        </div>
        <div className="service-item">
          <h3>Software Installation & Backup</h3>
          <img 
            src="https://res.cloudinary.com/dujwqprxl/image/upload/v1774334476/software_v9ogti.avif" 
            alt="Software Installation & Backup" 
            className="service-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;