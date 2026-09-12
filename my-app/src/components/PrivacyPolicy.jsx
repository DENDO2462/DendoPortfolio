import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
import logoImg from "../assets/dendo.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">

      {/* ================= HEADER ================= */}
      <header className="privacy-header">
        <div className="privacy-header-content">
          
          <Link to="/" className="back-home-btn" aria-label="Back to Home">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <img
            src={logoImg}
            alt="Dendo Logo"
            className="privacy-logo"
          />

          <div className="privacy-divider"></div>

          <h1 className="privacy-title">
            PRIVACY POLICY
          </h1>

        </div>
      </header>

      {/* ================= CURVE ================= */}
      <div className="privacy-curve">
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
      <main className="privacy-main">

        <div className="privacy-container">
          <div className="privacy-card">
            <div className="privacy-content">

              <h2>DENDO Privacy Policy</h2>
              <p className="last-updated">Last Updated: 16th November, 2025</p>

              <p>
                DENDO (&quot;DENDO&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to
                protecting the personal information of visitors and users of the DENDO website.
              </p>

              <p>
                This Privacy Policy explains how we collect, use, disclose, and protect information
                when you access or use the DENDO website and related online services.
              </p>

              <p>
                By accessing or using our website, you acknowledge that you have read and understood
                this Privacy Policy.
              </p>

              <section className="policy-section">
                <h3>1. Information We Collect</h3>

                <h4>1.1 Personal Information</h4>
                <p>
                  We may collect personal information including your name, mobile number, email address, address, account information, information submitted through forms, and other information voluntarily provided by you.
                </p>

                <h4>1.2 Contact and Communication Information</h4>
                <p>
                  When you contact or communicate with us, we may collect your name, email address, phone number, subject or enquiry details, and messages or other information provided by you.
                </p>

                <h4>1.3 Technical Information</h4>
                <p>
                  We may automatically collect technical details such as your IP address, browser type, device type, operating system, website pages visited, date and time of access, referring website, basic website usage information, and technical or diagnostic information.
                </p>

                <h4>1.4 Cookies and Similar Technologies</h4>
                <p>
                  We may use cookies and similar technologies to keep the website functioning properly, remember user preferences, understand website usage, improve website performance, analyze traffic and user interactions, support security and fraud prevention, and measure the effectiveness of our services and communications.
                </p>
                <p>
                  You may control or disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.
                </p>
              </section>

              <section className="policy-section">
                <h3>2. How We Use Your Information</h3>
                <p>
                  We use your information to provide and maintain our website, respond to enquiries and requests, provide customer support, improve our website and services, communicate with you, process requests submitted through the website, analyze website usage and performance, detect and prevent fraud, misuse, or unauthorized activity, maintain website security, comply with applicable laws and regulations, and protect our rights, property, and users.
                </p>
              </section>

              <section className="policy-section">
                <h3>3. How We Share Your Information</h3>
                <p>
                  We do not sell your personal information. We may share information where reasonably necessary for operating our website and providing services.
                </p>

                <h4>3.1 Service Providers</h4>
                <p>
                  We may share information with trusted third-party service providers that help us operate our website, such as website hosting providers, cloud service providers, analytics providers, communication service providers, security providers, and technical support providers. These providers may process information on our behalf for the services they provide to DENDO.
                </p>

                <h4>3.2 Legal and Regulatory Requirements</h4>
                <p>
                  We may disclose information where required or permitted by applicable law, including when necessary to comply with legal obligations, respond to lawful requests from authorities, protect our rights and property, prevent fraud or unlawful activity, protect the safety of users or the public, or enforce our agreements and policies.
                </p>
              </section>

              <section className="policy-section">
                <h3>4. Data Security</h3>
                <p>
                  DENDO takes reasonable technical and organizational measures to protect personal information from unauthorized access, misuse, alteration, disclosure, or destruction.
                </p>
                <p>
                  However, no method of transmitting or storing information over the internet can be guaranteed to be completely secure. We encourage users to take appropriate precautions when sharing personal information online.
                </p>
              </section>

              <section className="policy-section">
                <h3>5. Data Retention</h3>
                <p>
                  We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy. We may retain information for longer periods where necessary for legal or regulatory requirements, dispute resolution, fraud prevention, security purposes, enforcement of agreements, or legitimate business purposes. When information is no longer required, we may delete, anonymize, or securely dispose of it as appropriate.
                </p>
              </section>

              <section className="policy-section">
                <h3>6. Your Rights</h3>
                <p>
                  Subject to applicable laws, you may have rights regarding your personal information, including the right to request access to personal information held by us, request correction of inaccurate information, request deletion of personal information where legally permitted, withdraw consent where applicable, and raise privacy-related concerns or complaints. To exercise your applicable rights, you may contact us using the details provided in the Contact Information section.
                </p>
              </section>

              <section className="policy-section">
                <h3>7. Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites, services, or platforms. DENDO is not responsible for the privacy practices, security, or content of third-party websites. We recommend reviewing the privacy policy of any third-party website before providing personal information.
                </p>
              </section>

              <section className="policy-section">
                <h3>8. Children&apos;s Privacy</h3>
                <p>
                  Our website is not intended for children who are not legally permitted to use such services under applicable laws. We do not knowingly seek to collect personal information from children in violation of applicable laws. If you believe that a child has provided personal information to us without appropriate authorization, please contact us so that we can take appropriate action.
                </p>
              </section>

              <section className="policy-section">
                <h3>9. Changes to This Privacy Policy</h3>
                <p>
                  DENDO may update this Privacy Policy from time to time to reflect changes to our services, changes to our website, changes in technology, changes in applicable laws, or changes in our privacy practices. When we make changes, we will update the &quot;Last Updated&quot; date displayed at the beginning of this Privacy Policy. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section className="policy-section">
                <h3>10. Contact Information</h3>
                <div className="contact-box">
                  <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, you may contact us:</p>
                  <p><strong>DENDO</strong></p>
                  <p>Email: <a href="mailto:support@dendo.store">support@dendo.store</a></p>
                  <p>Phone: +91 8951212583</p>
                  <p>Website: <a href="https://dendo.in" target="_blank" rel="noopener noreferrer">dendo.in</a></p>
                  <p>
                    Address:<br />
                    4/361, Varagooran Kottai,<br />
                    Kalappampadi, Maanjinaickanahalli,<br />
                    Dharmapuri, Tamil Nadu – 636813, India
                  </p>
                </div>
              </section>

              <section className="policy-section">
                <h3>11. Notice and Take Down Policy</h3>
                <p>
                  DENDO respects intellectual property rights and expects users of the DENDO website to do the same. If you believe that any content, image, logo, trademark, text, product information, or other material available on the DENDO website infringes your intellectual property rights or violates applicable law, you may submit a written notice requesting that the relevant material be reviewed and, where appropriate, removed or disabled.
                </p>

                <h4>11.1 Information Required</h4>
                <p>
                  A notice should include identification of the copyrighted work, trademark, or other intellectual property right that you believe has been infringed; identification of the material that you believe is infringing; sufficient information to help us locate the relevant material on the DENDO website; your name and contact information; a statement that you have a good-faith belief that the use of the material is not authorized by the rights owner, its agent, or applicable law; a statement that the information provided in the notice is accurate and that you are the rights owner or authorized to act on behalf of the rights owner; and your physical or electronic signature.
                </p>

                <h4>11.2 Submission of Notice</h4>
                <p>Please send the written communication and supporting information to: <a href="mailto:Legal@dendo.store">Legal@dendo.store</a>.</p>
                <p>
                  DENDO may review the submitted notice and take appropriate action in accordance with applicable laws and our policies. DENDO may request additional information where necessary to verify or process the notice. Knowingly submitting false, misleading, or fraudulent claims may result in appropriate action under applicable law.
                </p>
              </section>

              <section className="policy-section">
                <h3>12. Consent</h3>
                <p>
                  By accessing and using the DENDO website, you acknowledge that you have read and understood this Privacy Policy. Where required by applicable law, DENDO may obtain your consent before collecting or processing certain personal information. You may withdraw consent where permitted by applicable law. Withdrawal of consent may affect our ability to provide certain website features or services.
                </p>

                <div className="policy-footer-note">
                  <p><strong>DENDO Private Limited</strong></p>
                  <p>Privacy: <a href="mailto:support@dendo.store">support@dendo.store</a></p>
                  <p>Legal Notices: <a href="mailto:Legal@dendo.store">Legal@dendo.store</a></p>
                  <p>Phone: +91 8951212583</p>
                  <p>© DENDO Private Limited. All rights reserved.</p>
                </div>
              </section>

            </div>
          </div>
        </div>

      </main>

    </div>
  );
};

export default PrivacyPolicy;