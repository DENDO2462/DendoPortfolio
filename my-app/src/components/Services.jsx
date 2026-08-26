import React, { useEffect, useState } from "react";
import "./Services.css";

// ASSETS
import dendoLogo from "../assets/dendoo.jpg";
import cravixLogo from "../assets/Cravix.jpg";
import quickLogo from "../assets/Dendo quick.jpg";
import featuresImg from "../assets/features.jpg";
import nexaImg from "../assets/Nexaride.jpg";

const services = [
  {
    id: 1,
    name: "Dendo",
    title: "Freshly Prepared Quickly Delivered",
    description: "Dendo connects customers with their favorite restaurants and brings fresh meals directly to their doorstep.",
    logo: dendoLogo,
    type: "image"
  },
  {
    id: 2,
    name: "Cravix",
    title: "Made for Cravings Delivered with Speed",
    titleNode: (<>Made for Cravings<br/>Delivered with Speed</>),
    description: "Cravix brings café favorites, snacks, and beverages directly to customers anytime.",
    logo: cravixLogo,
    type: "image",
    comingSoon: true
  },
  {
    id: 3,
    name: "Dendo Quick",
    title: "Daily Needs Delivered Instantly",
    description: "Dendo Quick delivers groceries and essential products with convenience and reliability.",
    logo: quickLogo,
    type: "image",
    comingSoon: true
  },
  {
    id: 4,
    name: "nexaImg",
    title: "Move with Freedom Ride with Comfort",
    description: "Dendo connects customers with their favorite restaurants and helps local vendors grow.",
    logo: nexaImg,
    type: "image",
    
  },
  {
    id: 5,
    name: "ZEN",
    title: "Smart Tech Delivered Faster",
    description: "Zen makes electronic accessories and gadgets accessible with fast doorstep delivery.",
    logo: "ZEN",
    type: "text",
    className: "zen-logo-small",
    comingSoon: true
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the middle one

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-main-title">Our Premium Services</h2>
        <p className="services-subtitle">Everything you need, delivered with precision</p>
      </div>

      <div className="services-carousel-container">
        <div className="services-carousel-track" style={{ "--active-index": activeIndex }}>
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            const position = index - activeIndex;
            const absPosition = Math.abs(position);
            
            return (
              <div
                key={service.id}
                className={`service-card ${isActive ? "active" : ""} ${service.comingSoon ? "has-coming-soon" : ""}`}
                style={{
                  "--position": position,
                  "--abs-position": absPosition,
                  cursor: "pointer"
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-logo-section">
                  <div className="card-logo-wrapper">
                    {service.type === "image" ? (
                      <img src={service.logo} alt={service.name} className="card-logo" />
                    ) : (
                      <div className={`card-logo-text ${service.className}`}>
                        {service.logo}
                      </div>
                    )}
                  </div>
                  {service.comingSoon && (
                    <span className="card-coming-soon-badge">Coming Soon</span>
                  )}
                </div>
                <div className="card-content">
                  <h3 className="card-title">{service.titleNode || service.title}</h3>
                  <p className="card-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="features-section">
        <div className="features-image-wrapper">
          <img src={featuresImg} alt="Key Features" className="features-image" />
        </div>
      </div>
    </section>
  );
};

export default Services;
