import React from "react";

function MapSection() {
  return (
    <>
      <div className="map-container">
        <iframe
          title="Sites and Lifestyle Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4326.4449732881585!2d7.491045933539346!3d9.067132471521154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b486be60bff%3A0xabf0bfa23c387a81!2sSites%20And%20Lifestyle!5e0!3m2!1sen!2sng!4v1765793739421!5m2!1sen!2sng"
          className="map"
          width="800"
          height="600"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default MapSection;
