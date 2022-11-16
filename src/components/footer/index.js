import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style type="text/css">
        {`

          .A {
              display: flex;
              flex-direction: column;
              float: left;
              margin-top: 50px;
              width: 200px;
          }
          
          .B {
              float: left;
              width: 350px;
              padding-right: 100px;
          }
          

          hr {
              float: left;
              width: 100%;
              margin-top: 25px;
              margin-bottom: 40px;
          }
          
          .L {
              float: left;
              width: 15%;
              height: 250px;
          }
          
          .R {
              float: right;
              width: 15%;
              height: 250px;
          }
          
          .M {
              /*background-color: lightgreen;*/
              float: left;
              width: 70%;
              height: 250px;
          }
          
          .Mid {
              float: left;
              width: 70%;
              height: 100px;
          }
          
          .Lid,
          .Rid {
              float: left;
              width: 15%;
              height: 100px;
          }
          
          .Mild {
              display: flex;
              float: left;
              width: 70%;
              height: 50px;
              justify-content: space-between;
          }
          
          .Lild,
          .Rild {
              float: left;
              width: 15%;
              height: 50px;
          }
          
          b {
              font-size: 20px;
          }
          
          #email {
              height: 30px;
          }
          
          #main {
              display: flex;
              align-items: center;
          }
          
          summary {
              color: #16193a;
              font-size: 20px;
          }
          
          .word {
              color: #16193a;
              font-size: 20px;
          }
          

          
          .fa {
              padding: 8px;
              font-size: 30px;
              width: 20px;
              text-align: center;
              text-decoration: none;
          }
          
          .fa-facebook {
              background: #3B5998;
              color: white;
          }
          
          .fa-instagram {
              background: #125688;
              color: white;
          }
          
          input[type=submit] {
              border: 1px solid white;
              border-radius: 30px;
              background-color: #16193a;
              font-size: 18px;
              color: white;
              padding: 10px;
          }
        `}
      </style>
      <div
        style={{
          float: "left",
          color: "white",
          backgroundColor: "#16193a",
          width: "100%",
          height: "400px",
        }}
      >
        <div className="L" />
        <div className="M">
          <div className="A one1">
            <Link to="/" style={{ cursor: "pointer", color: "#fff" }}>
              <p>Home</p>
            </Link>

            <Link to="/promotion" style={{ cursor: "pointer", color: "#fff" }}>
              <p>Promotion</p>
            </Link>
            <Link to="/headphone" style={{ cursor: "pointer", color: "#fff" }}>
              <p>Headphone</p>
            </Link>
            <Link to="/earbud" style={{ cursor: "pointer", color: "#fff" }}>
              <p>Earbud</p>
            </Link>
            <Link to="/inear" style={{ cursor: "pointer", color: "#fff" }}>
              <p>Inear</p>
            </Link>
          </div>
          <div className="A two2">
            <Link to="/speaker" style={{ cursor: "pointer", color: "#fff" }}>
              <p>Speaker</p>
            </Link>
            <Link to="/all" style={{ cursor: "pointer", color: "#fff" }}>
              <p>All Product</p>
            </Link>
            <Link to="/cart" style={{ cursor: "pointer", color: "#fff" }}>
              <p>Cart</p>
            </Link>
            <Link to="/wishlist" style={{ cursor: "pointer", color: "#fff" }}>
              <p>Wishlist</p>
            </Link>
          </div>
          <div className="A three3" style={{ float: "right" }}>
            <img
              src="https://www.amnh.org/var/ezflow_site/storage/images/media/amnh/images/explore/ology-images/earth/what-s-the-big-idea-about-earth/earth-icon/4690373-1-eng-US/earth-icon.png"
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        </div>
        <hr className="line six" />
        <div className="Lild" />
        <div className="Mild">
          <div className="C">
            <p>
              No. 1, Chalong Krung 1, Chalong Krung Road, Lat Krabang
              Sub-district, Lat Krabang District, Bangkok , 10520, Thailand
            </p>
          </div>
          <div className="D">
            <p style={{ float: "right", color: "white", paddingLeft: "50px" }}>
              Headphone-moby.com
            </p>
            <p style={{ float: "right", color: "white" }}>
              +66(0) 99 99 99 01
            </p>
          </div>
        </div>
        <div className="Rild" />
      </div>
    </>
  );
};

export default Footer;
