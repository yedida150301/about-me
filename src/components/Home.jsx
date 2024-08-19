import React from "react";
import './style.css';

const Home = ({ id }) => {
  return (
    <section id={id} className="home">
      <div className="home-content">
        <div className="home-text">
          <div className="home-heading">
            Saya Yedida Farel
          </div>
          <p className="home-description">
            Saya lahir di Semarang pada Maret 2001. Saat ini, saya sedang menempuh
            pendidikan di jurusan Teknik Informatika di Universitas Dian Nuswantoro.
            Pengalaman kuliah di Universitas tersebut memberikan banyak kesan positif.
            Saya belajar banyak tentang pemrograman dan teknologi informasi,
            dan lingkungan kampus yang dinamis serta dosen yang kompeten membantu
            saya untuk terus berkembang.
          </p>
        </div>
        <div className="home-greeting">
          Halo, Selamat datang
        </div>
        <img
          className="home-image"
          alt="Gambar"
          src="/img/gambar-1.png"
        />
      </div>
    </section>
  );
};

export default Home;
