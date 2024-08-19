import React from "react";
import "./style.css";

const Resume = ({ id }) => {
  return (
    <section id={id} className="resume">
      <div className="div">
        <div className="box-frame">
          <div className="box-frame-konten">
            <div className="div-2">
              <div className="date">Juni - Agustus 2019</div>
              <div className="div-2">
                <div className="frame-judul">
                  <div className="judul">Internship</div>
                  <div className="sub-judul">Mitsubishi Motors</div>
                </div>
                <div className="frame-isi">
                  <p className="isi-konten">Mengasah softskill di Mitsubishi Motor Semarang selama 3 bulan.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-teks-wrapper">
            <div className="frame-teks">
              <div className="frame-konten">
                <div className="date">Februari 2022 - Sekarang</div>
                <div className="frame-konten-2">
                  <div className="frame-judul-2">
                    <div className="judul">Business Owner</div>
                    <div className="sub-judul">Food &amp; Beverage</div>
                  </div>
                  <div className="isi-konten-wrapper">
                    <p className="isi-konten">Menjadi bisnis owner di Blora kategori F&amp;B.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-teks-wrapper">
            <div className="frame-teks">
              <div className="frame-konten">
                <div className="date">Maret - April 2024</div>
                <div className="frame-konten-2">
                  <div className="frame-judul-2">
                    <div className="judul">Internship</div>
                    <div className="sub-judul">Diskominfo Kota Semarang</div>
                  </div>
                  <div className="isi-konten-wrapper">
                    <p className="isi-konten">
                      Pengembangan website Pusat Informasi Terintegrasi untuk Diskominfo Kota Semarang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-frame-2">
          <div className="div-2">
            <p className="p">
              <span className="text-wrapper">My </span>
              <span className="span">Experiences</span>
            </p>
          </div>
          <p className="teks">
            Saya memiliki 3 pengalaman yang berbeda kategori, berikut adalah pengalaman saya di bidang tertentu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;