import React from "react";
import './style.css'; // Import the stylesheet

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="about-background">
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <div className="about-image-overlay" />
            <img className="about-image" alt="Gambar" src="/img/dida1.jpeg" />
          </div>
        </div>
        <div className="about-text-container">
          <div className="about-text">
            <p className="about-paragraph">
              Saya menempuh pendidikan menengah kejuruan di SMK Katolik
              <br />
              dengan jurusan Kendaraan Ringan, di mana saya belajar banyak
              <br />
              tentang teknik dan mekanik kendaraan. Setelah lulus, saya melanjutkan <br />
              ke perguruan tinggi dan mengambil jurusan Teknik Informatika, meskipun
              <br />
              merasa salah jurusan. Namun, seiring waktu, saya mulai menemukan keasyikan
              <br />
              dalam mempelajari pemrograman dan teknologi informasi.
            </p>
            <p className="about-paragraph">
              Selain pendidikan, saya memiliki beberapa hobi yang sangat saya nikmati.
              <br />
              Saya suka bermain game, yang menjadi cara saya untuk melepas penat.
              <br />
              Saya juga hobi riding, sering menghabiskan akhir pekan untuk berkeliling
              <br />
              dan menjelajahi tempat-tempat baru. Nongkrong bersama teman-teman juga
              <br />
              menjadi bagian penting dalam hidup saya, memberikan kesempatan untuk
              <br />
              bersosialisasi dan berbagi cerita.
            </p>
          </div>
        </div>
        <p className="about-title">
          <span className="about-title-text">About </span>
          <span className="about-title-highlight">Me</span>
        </p>
      </div>
    </section>
  );
};

export default About;
