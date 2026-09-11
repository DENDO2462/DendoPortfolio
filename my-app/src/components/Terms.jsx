import { Link } from "react-router-dom";
import "./Terms.css";
import logoImg from "../assets/dendo.jpg";

const Terms = () => {
  return (
    <div className="terms-page">

      {/* ================= HEADER ================= */}
      <header className="terms-header">
        <div className="terms-header-content">
          
          <Link to="/" className="back-home-btn" aria-label="Back to Home">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <img
            src={logoImg}
            alt="Dendo Logo"
            className="terms-logo"
          />

          <div className="terms-divider"></div>

          <h1 className="terms-title">
            TERMS & CONDITIONS
          </h1>

        </div>
      </header>

      {/* ================= CURVE ================= */}
      <div className="terms-curve">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0,140
              C320,20 1120,20 1440,140
              L1440,0
              L0,0
              Z
            "
            fill="#001A41"
          />
        </svg>
      </div>

      {/* ================= MAIN ================= */}
      <main className="terms-main">

        <div className="terms-container">

          <div className="terms-card">

            <div className="terms-content">

  <h2>DENDO Terms & Conditions</h2>
  <p className="last-updated">Last Updated: 16 November 2025</p>

  <p>
    These Terms and Conditions ("Terms") govern your access to and use of the
    DENDO website and related online services operated by DENDO.
  </p>

  <p>
    By accessing or using the DENDO website, you acknowledge that you have read,
    understood, and agreed to these Terms.
  </p>

  <section className="terms-section">
    <h3>1. Eligibility</h3>
    <p>The DENDO website is intended for individuals who are 18 years of age or older. By using the website, you confirm that you are legally eligible to enter into a binding agreement, the information provided by you is accurate and complete, and you will use the website only for lawful purposes.</p>
  </section>

  <section className="terms-section">
    <h3>2. Platform Services</h3>
    <p>DENDO operates as a technology-enabled platform that facilitates connections between customers, vendors, and delivery partners. Services available through DENDO may include food delivery, grocery delivery, pharmacy delivery, hyperlocal delivery services, and other services offered through the DENDO platform. DENDO may add, modify, suspend, or discontinue services at any time.</p>
  </section>

  <section className="terms-section">
    <h3>3. Website Use</h3>
    <p>You agree not to use the website for unlawful purposes, attempt unauthorized access to the website or its systems, copy, reproduce, modify, or distribute website content without authorization, introduce malicious software or harmful code, interfere with the operation or security of the website, or use the website for fraudulent or abusive activities. DENDO may restrict or terminate access if these Terms are violated.</p>
  </section>

  <section className="terms-section">
    <h3>4. Orders and Payments</h3>
    <p>Where ordering or purchasing functionality is available through the website, orders are subject to vendor acceptance, product availability, delivery serviceability, and successful payment authorization. Applicable charges may include product charges, delivery charges, taxes, packaging charges, and platform or service fees where applicable. Prices and charges may change from time to time.</p>
  </section>

  <section className="terms-section">
    <h3>5. Cancellations and Refunds</h3>
    <p>Cancellation and refund eligibility may depend on order status, vendor policies, delivery status, product category, and applicable refund policies. DENDO reserves the right to reject refund requests involving fraud, misuse, repeated abuse, or false claims.</p>
  </section>

  <section className="terms-section">
    <h3>6. Delivery</h3>
    <p>Delivery timelines displayed on the website are estimates and may vary because of traffic, weather, vendor preparation delays, delivery partner availability, and operational or technical issues. Customers are responsible for providing accurate delivery information.</p>
  </section>

  <section className="terms-section">
    <h3>7. User Responsibilities</h3>
    <p>Users agree to provide accurate information, maintain the security of their account credentials, use the website responsibly, respect vendors, delivery partners, employees, and other users, and cooperate during delivery or customer-support interactions.</p>
  </section>

  <section className="terms-section">
    <h3>8. Privacy</h3>
    <p>Your use of the DENDO website is also governed by the DENDO Privacy Policy.</p>
    <p>The Privacy Policy explains how DENDO collects, uses, stores, and processes information.</p>
  </section>

  <section className="terms-section">
    <h3>9. Communication</h3>
    <p>By using DENDO services, you may receive service-related communications such as order updates, customer-support messages, service notifications, and account-related communications. Where legally permitted and subject to applicable preferences, promotional communications may also be sent through email, SMS, WhatsApp, phone calls, or other available communication channels.</p>
  </section>

  <section className="terms-section">
    <h3>10. Intellectual Property</h3>
    <p>All website content, including logos, brand names, text, graphics, images, designs, software, website layout, and other materials may be owned by or licensed to DENDO.</p>
    <p>You may not reproduce, distribute, modify, or commercially exploit such content without prior authorization.</p>
  </section>

  <section className="terms-section">
    <h3>11. Third-Party Services and Links</h3>
    <p>
      The DENDO website may contain links or integrations to third-party websites or services.
      DENDO is not responsible for the content, availability, security, or policies of
      third-party websites or services. Your use of third-party services may be subject
      to their own terms and policies.
    </p>
  </section>

  <section className="terms-section">
    <h3>12. Limitation of Liability</h3>
    <p>To the extent permitted by applicable law, DENDO shall not be responsible for delays caused by vendors or delivery partners, product quality or availability controlled by vendors, temporary website downtime, technical interruptions, or indirect or consequential losses. DENDO provides the website and services on an "as is" and "as available" basis.</p>
  </section>

  <section className="terms-section">
    <h3>13. Suspension and Termination</h3>
    <p>DENDO may suspend or terminate access to the website or related services where a user violates these Terms, engages in fraudulent activities, misuses the platform, attempts unauthorized access, or engages in abusive or harmful conduct.</p>
  </section>

  <section className="terms-section">
    <h3>14. Changes to These Terms</h3>
    <p>DENDO may modify these Terms from time to time. Changes may be communicated through:</p>
    <ul>
      <li>Website announcements</li>
      <li>Website updates</li>
      <li>Email</li>
      <li>SMS</li>
      <li>Other appropriate communication channels</li>
    </ul>
    <p>
      Your continued use of the website after changes are published constitutes
      acceptance of the revised Terms.
    </p>
  </section>

  <section className="terms-section">
    <h3>15. Notice and Take Down Policy</h3>
    <p>
      DENDO respects intellectual-property rights and may take appropriate action
      regarding content that is alleged to infringe applicable rights.
    </p>
    <p>
      If you believe that content available through the DENDO website infringes your
      copyright, trademark, or other applicable legal rights, you may submit a written
      notice to:
    </p>
    <p><strong>Legal Email: <a href="mailto:legal@dendo.store">legal@dendo.store</a></strong></p>
    <p>The notice should include sufficient information to help DENDO identify:</p>
    <ul>
      <li>The person submitting the complaint.</li>
      <li>The content or material in question.</li>
      <li>The location of the allegedly infringing content.</li>
      <li>The nature of the legal or intellectual-property concern.</li>
      <li>Contact information for further communication.</li>
      <li>Any supporting documents or information reasonably necessary to evaluate the complaint.</li>
    </ul>
    <p>DENDO may review the complaint and take appropriate action in accordance with applicable law.</p>
  </section>

  <section className="terms-section">
    <h3>16. Governing Law</h3>
    <p>These Terms shall be governed by the laws of India.</p>
    <p>
      Any disputes arising in connection with these Terms shall be subject to the
      jurisdiction of courts located in Dharmapuri, Tamil Nadu, India, to the extent
      permitted by applicable law.
    </p>
  </section>

  <section className="terms-section">
    <h3>17. Contact Information</h3>
    <div className="contact-box">
      <p>For general support and website-related queries:</p>
      <p><strong>DENDO</strong></p>
      <p>Email: <a href="mailto:support@dendo.store">support@dendo.store</a></p>
      <p>Phone: +91 8951212583</p>
      <p><strong>Legal Queries</strong></p>
      <p>For legal-related questions, concerns, or requests:</p>
      <p>Email: <a href="mailto:legal@dendo.store">legal@dendo.store</a></p>
    </div>
  </section>

  <section className="terms-section">
    <div className="terms-footer-note">
      By accessing or using the DENDO website, you acknowledge that you have read,
      understood, and agreed to these Terms and Conditions.
      <br /><br />
      DENDO operates as a service and technology platform.
    </div>
  </section>

</div>

            
          </div>

        </div>

      </main>

    </div>
  );
};

export default Terms;