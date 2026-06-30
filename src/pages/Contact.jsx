import React from "react";

export default function Contact() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        lineHeight: "1.8",
      }}
    >
      <h1>Contact Us</h1>

      <p>
        Thank you for visiting <strong>Legendary Trends</strong>. We value your
        feedback, questions, and suggestions. Whether you're reporting an issue,
        sharing feedback, discussing business opportunities, or making general
        inquiries, we'd be happy to hear from you.
      </p>

      <h2>Email</h2>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:legendcruiz18@gmail.com">
          legendcruiz18@gmail.com
        </a>
      </p>

      <h2>Business & Advertising</h2>

      <p>
        For advertising opportunities, sponsorships, partnerships, press
        inquiries, or other business-related matters, please contact us via the
        email address above.
      </p>

      <h2>Report an Issue</h2>

      <p>
        If you discover an error in one of our articles, experience a technical
        problem, or have concerns about any content published on Legendary
        Trends, please let us know. We appreciate your help in keeping our
        website accurate and reliable.
      </p>

      <h2>Response Time</h2>

      <p>
        We aim to respond to all genuine inquiries within 2–5 business days.
        Response times may vary during holidays or periods of high demand.
      </p>

      <h2>About Legendary Trends</h2>

      <p>
        Legendary Trends is an independent digital publication dedicated to
        delivering timely news, features, and updates across gaming, football,
        entertainment, celebrities, movies, technology, and other trending
        topics from around the world.
      </p>

      <hr style={{ margin: "40px 0" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Thank you for choosing Legendary Trends. We appreciate your support and
        look forward to serving readers with informative, engaging, and reliable
        content.
      </p>
    </div>
  );
}