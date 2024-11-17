import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">About LocateMe</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p>
          At <strong>LocateMe</strong>, our mission is to create a seamless and intuitive platform that helps people easily navigate their environments. Whether you're a professional looking to expand your network, a business trying to reach new clients, or someone who simply wants to discover more about the world, <strong>LocateMe</strong> has you covered.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
        <ul className="list-disc pl-5">
          <li><strong>Profile Management:</strong> Easily manage your personal or business profiles, with the ability to showcase key information and connect with others in your field.</li>
          <li><strong>Interactive Maps:</strong> Find services, businesses, and opportunities near you with our integrated mapping features.</li>
          <li><strong>Networking Opportunities:</strong> Discover new connections, make friends, or expand your professional network with a simple click.</li>
          <li><strong>Customizable Features:</strong> Tailor your profile to suit your preferences, highlight your strengths, and make your online presence stand out.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p>
          We envision a world where finding the right people and services is effortless and where everyone has the opportunity to grow, learn, and connect. With <strong>LocateMe</strong>, we’re building the future of how we navigate our surroundings intelligently, interactively, and seamlessly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
        <ul className="list-disc pl-5">
          <li><strong>User-Friendly Interface:</strong> We’ve designed <strong>LocateMe</strong> to be as simple and intuitive as possible, ensuring that everyone, no matter their tech skills can use it with ease.</li>
          <li><strong>Fast and Efficient:</strong> With <strong>LocateMe</strong>, you can quickly access the profiles and locations you’re looking for, saving you time and effort.</li>
          <li><strong>Comprehensive Features:</strong> From location-based searches to customizable profile features, <strong>LocateMe</strong> gives you everything you need in one place.</li>
        </ul>
      </section>

      <section className="mt-6">
        <p>We’re committed to continually improving our platform and delivering the best experience for our users. Join us as we make the world a more connected place!</p>
      </section>
    </div>
  );
};

export default About;
