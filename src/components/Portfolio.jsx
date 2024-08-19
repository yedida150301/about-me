import React from "react";
import './style.css'; // Import the stylesheet

const Portfolio = ({ id }) => {
  return (
    <section id={id} className="portfolio-section">
      <div className="portfolio-background">
        <div className="portfolio-content">
          <div className="portfolio-header">
            <p className="portfolio-title">
              <span className="title-text">My </span>
              <span className="title-highlight">Portfolio</span>
            </p>
            <p className="portfolio-description">
              Saya mahasiswa Teknik Informatika di Universitas Dian Nuswantoro.
              <br />
              Berikut adalah proyek yang telah saya selesaikan sewaktu Internship
              <br />
              di Diskominfo Kota Semarang.
            </p>
          </div>
          <div className="portfolio-images">
            <img className="large-image" alt="Gambar" src="/img/1.png" />
            <div className="small-images">
              <img className="small-image" alt="Gambar" src="/img/5.png" />
              <img className="small-image" alt="Gambar" src="/img/9.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
