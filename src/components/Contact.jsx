import React from "react";
import "./style.css";

const Contact = ({ id }) => {
  return (
    <section id={id} className="contact">
      <div className="div">
        <p className="footer">By Yedida Farel - 13762</p>
        <div className="frame-footer">
          <p className="about-me">
            <span className="text-wrapper">About</span>
            <span className="span">Me.</span>
          </p>
          <p className="teks">
            Saya selalu terbuka untuk berdiskusi lebih lanjut mengenai proyek,
            <br />
            peluang kerja sama, atau sekedar berbagi ide. Jangan ragu untuk menghubungi saya melalui informasi kontak di
            bawah ini.
          </p>
        </div>
        <div className="frame-box">
          <div className="frame-alamat">
            <p className="alamat">
              <span className="text-wrapper-2">Address _ </span>
              <span className="text-wrapper-3">
                JL. Mugas Dalam IX No. 23, Mugassari,
                <br />
                Kec. Semarang Sel, Kota Semarang, Jawa Tengah
                <br />
                50249
              </span>
            </p>
            <p className="p">
              <span className="text-wrapper-2">Phone _ </span>
              <span className="text-wrapper-3">+62 8981 9124 9974</span>
            </p>
            <p className="p">
              <span className="text-wrapper-2">E mail _ </span>
              <span className="text-wrapper-3">helena@gmail.com</span>
            </p>
            <p className="p">
              <span className="text-wrapper-2">Website _ </span>
              <span className="text-wrapper-3">www.helena.com</span>
            </p>
          </div>
          <div className="frame-komen">
            <div className="box-name">
              <div className="overlap-group">
                <div className="text-wrapper-4">Name</div>
              </div>
            </div>
            <div className="box-komen">
              <div className="overlap">
                <div className="text-wrapper-5">Message</div>
              </div>
            </div>
            <div className="frame-btn">
              <div className="text-wrapper-6">Contact me</div>
            </div>
          </div>
        </div>
        <div className="frame-box-2">
          <div className="frame-judul">
            <p className="judul">
              <span className="text-wrapper-3">Contact </span>
              <span className="span">Me</span>
            </p>
          </div>
          <p className="teks">
            Saya sangat menghargai setiap saran dan kritik yang konstruktif. Jika Anda memiliki pendapat, saran atau
            kritik mengenai portfolio saya, jangan ragu untuk menyampaikannya. Masukan Anda sangat berharga bagi saya
            untuk terus berkembang dan meningkatkan kualitas karya saya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;