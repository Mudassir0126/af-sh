import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  {
    title: "Construction Contracts",
    description: "Full-service contracting with or without client-supplied materials.",
    image: `${process.env.PUBLIC_URL}/images/construction.jpg`
  },
  {
    title: "Civil Works",
    description: "Structural construction and foundation work for residential and industrial sites.",
    image: `${process.env.PUBLIC_URL}/images/civil.jpg`
  },
  {
    title: "Repairs & Renovations",
    description: "Building repairs, waterproofing, crack filling, and renovation solutions.",
    image: `${process.env.PUBLIC_URL}/images/repairs.jpg`
  },
  {
    title: "Carpentry & Interiors",
    description: "Doors, windows, modular furniture, wooden floors, and partition work.",
    image: `${process.env.PUBLIC_URL}/images/carpentry.jpg`
  },
  {
    title: "Painting Services",
    description: "Interior and exterior painting, waterproof coats, and textured finishes.",
    image: `${process.env.PUBLIC_URL}/images/painting.jpg`
  },
  {
    title: "STP & ETP Services",
    description: "Installation and maintenance of Sewage and Effluent Treatment Plants.",
    image: `${process.env.PUBLIC_URL}/images/stp.jpg`
  },
  {
    title: "Rainwater Harvesting",
    description: "End-to-end rainwater harvesting systems for sustainable water use.",
    image: `${process.env.PUBLIC_URL}/images/rainwater.jpg`
  }
];

export default function Home() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" width="40" height="40" className="me-2" />
            <strong>AF-SH Constructions</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="text-white"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-hero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-4 fw-bold">Complete Construction & Maintenance Solutions</h1>
              <p className="lead">
                We handle civil, repair, carpentry, painting, STP/ETP, and rainwater harvesting works — for residential,
                commercial, and industrial sectors.
              </p>
              <a href="#services" className="btn btn-warning btn-lg mt-3">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5" id="services">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-light py-5" id="why">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <div className="row g-4">
            {[
              { title: "✅ Transparent Pricing", desc: "We provide detailed, upfront quotations with no hidden charges." },
              { title: "✅ Expert Workforce", desc: "Our skilled engineers and workers ensure technical precision at every stage." },
              { title: "✅ Timely Project Delivery", desc: "We prioritize project timelines and deliver on or before schedule." },
              { title: "✅ All-in-One Services", desc: "From foundation to finish, we handle every aspect — including plumbing, treatment plants, and interiors." }
            ].map((item, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-4 border rounded bg-white h-100 shadow-sm">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Contact Section */}
      <footer className="bg-dark text-white pt-5" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5>Contact Us</h5>
              <p><Phone size={18} className="me-2" /> +91-XXXXXXXXXX</p>
              <p><Mail size={18} className="me-2" /> info@afshconstructions.com</p>
              <p><MapPin size={18} className="me-2" /> Bangalore, Karnataka, India</p>
            </div>
            <div className="col-md-6 mb-4 text-md-end">
              <h5>AF-SH Constructions</h5>
              <p>Reliable. Affordable. Professional.</p>
              <a href="mailto:info@afshconstructions.com" className="btn btn-outline-light mt-2">
                Send Enquiry
              </a>
            </div>
          </div>
          <hr className="border-secondary" />
          <p className="text-center text-muted pb-3 mb-0">
            &copy; {new Date().getFullYear()} AF-SH Constructions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
