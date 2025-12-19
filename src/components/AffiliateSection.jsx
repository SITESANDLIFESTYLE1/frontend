import React from "react";
import AffiliateForm from "./AffiliateForm";

function AffiliateSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-top">
          <h2 className="hero-title primary">BECOME AN AFFILIATE</h2>
          <p>Fill out the form below to join our Affiliate Program.</p>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <h2 className="secondary">Join Our Affiliate Referral Program</h2>

            <p className="affiliate-description">
              Sitesandlifestyle gives you opportunities to profit from the real
              estate market. Join our affiliate Realtor/Referrals Program and
              Make your network work for you. make a difference in people’s
              lives while securing funds for yourself. Our Referral program is a
              commission-based program that helps you earn commissions when you
              refer someone to us , you earn a 5% commission on every closing
              made by the company from the clients that you referred.
            </p>
            <p className="affiliate-description">
              Our goal is to help everyone have a seamless real estate
              transaction in Nigeria . Our Associate Realtor | Referrals Program
              encourages and rewards you when you recommend our services to your
              friends, family and colleagues. Get paid your commission once the
              deal is closed successfully.
            </p>
            <p className="affiliate-description">
              All you have to do is, sign up, refer and earn. It’s that simple
            </p>
          </div>

          <div className="contact-right">
            <AffiliateForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffiliateSection;
