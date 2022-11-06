import React, { createContext, useContext, useEffect, useState } from "react";
import ineardata from "../assets/Inear.json";
import earbuddata from "../assets/Earbud.json";
import headphonedata from "../assets/Headphone.json";
import speakerdata from "../assets/Speaker.json";
const AuthContext = createContext({
  favproduct: null,
  filterbrands: null,
  filterprice: null,
  datasort: null,
  productcart: null,
  favouriteProduct: () => Promise,
  filterbybrand: () => Promise,
  filterbyprice: () => Promise,
  sortbyprice: () => Promise,
  addtocart: () => Promise,
});

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [favproduct, setFavproduct] = useState(null);
  const [filterbrands, setFilterBrands] = useState(null);
  const [filterprice, setFilterPrice] = useState(null);
  const [datasort, setDataSort] = useState(null);
  const [productcart, setProductCart] = useState(null);

  async function favouriteProduct(name, image_name, price) {
    const getfavproductStorage = window.localStorage.getItem("favoriteproduct");
    
    let productdata = {
      name: "หูฟัง Sony WH-1000XM5 Wireless Over Ear Headphone",
      image: ["01_black_01.jpg", "01_black_02.jpg"],
      price: 14490,
    };
      let itemsList = getfavproductStorage ? JSON.parse(getfavproductStorage): []
      setFavproduct(itemsList)
      itemsList.push(productdata);
      window.localStorage.setItem("favoriteproduct", JSON.stringify(itemsList));
  }

  

  async function filterbybrand(brand, category) {
    if (category === "In Ear") {
      setFilterBrands(ineardata.filter((data) => data.brand.includes(brand)));
    }
    if (category === "หูฟังเอียร์บัด") {
      setFilterBrands(earbuddata.filter((data) => data.brand.includes(brand)));
    }
    if (category === "Wireless Headphone") {
      setFilterBrands(
        headphonedata.filter((data) => data.brand.includes(brand))
      );
    }
    if (category === "Bluetooth-Speaker") {
      setFilterBrands(speakerdata.filter((data) => data.brand.includes(brand)));
    }
  }

  async function filterbyprice(min, max, category) {
    if (category === "In Ear") {
      setFilterPrice(
        ineardata.filter((data) => data.price >= min && data.price <= max)
      );
    }
    if (category === "หูฟังเอียร์บัด") {
      setFilterPrice(
        earbuddata.filter((data) => data.price >= min && data.price <= max)
      );
    }
    if (category === "Wireless Headphone") {
      setFilterPrice(
        headphonedata.filter((data) => data.price >= min && data.price <= max)
      );
    }
    if (category === "Bluetooth-Speaker") {
      setFilterPrice(
        speakerdata.filter((data) => data.price >= min && data.price <= max)
      );
    }
  }

  async function sortbyprice(sortby, category) {
      if (category === "In Ear") {
        setDataSort(ineardata.sort((a, b) => sortby=="low" ? a.price - b.price: b.price - a.price));
      }
      if (category === "หูฟังเอียร์บัด") {
        setDataSort(earbuddata.sort((a, b) => sortby=="low" ? a.price - b.price: b.price - a.price));
      }
      if (category === "Wireless Headphone") {
        setDataSort(headphonedata.sort((a, b) => sortby=="low" ? a.price - b.price: b.price - a.price));
      }
      if (category === "Bluetooth-Speaker") {
        setDataSort(speakerdata.sort((a, b) => sortby=="low" ? a.price - b.price: b.price - a.price));
      }

  }

  async function addtocart(name, image_name, price) {
    const getcartproductStorage = window.localStorage.getItem("productcart");
    let productdata = {
      name: "หูฟัง Sony WH-1000XM5 Wireless Over Ear Headphone",
      image: ["01_black_01.jpg", "01_black_02.jpg"],
      price: 14490,
    };
      let itemsList = getcartproductStorage ? JSON.parse(getcartproductStorage): []
      setProductCart(itemsList)
      itemsList.push(productdata);
      window.localStorage.setItem("productcart", JSON.stringify(itemsList));
  }

  const value = {
    favproduct,
    filterbrands,
    filterprice,
    datasort,
    productcart,
    favouriteProduct,
    filterbybrand,
    filterbyprice,
    sortbyprice,
    addtocart,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
