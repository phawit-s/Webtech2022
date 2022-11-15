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
  productcart: null,
  productdetail: null,
  favouriteProduct: () => Promise,
  filterbybrand: () => Promise,
  filterbyprice: () => Promise,
  sortbyprice: () => Promise,
  addtocart: () => Promise,
  checkout: () => Promise,
  gotodetail: () => Promise,
});

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [favproduct, setFavproduct] = useState("");
  const [filterbrands, setFilterBrands] = useState(null);
  const [filterprice, setFilterPrice] = useState(null);
  const [datasort, setDataSort] = useState(null);
  const [productcart, setProductCart] = useState("");
  const [checkoutcart, setCheckoutcart] = useState("");
  const [productdetail, setProductDetail] = useState("");

  useEffect(() => {
    const getfavproductStorage = window.localStorage.getItem("favoriteproduct");
    const getcartproductStorage = window.localStorage.getItem("productcart");
    const getcheckoutproductStorage =
      window.localStorage.getItem("checkoutcart");
    const getdetailproductStorage = window.localStorage.getItem("detail");
    const itemsList = getfavproductStorage
      ? JSON.parse(getfavproductStorage)
      : [];
    const cartlist = getcartproductStorage
      ? JSON.parse(getcartproductStorage)
      : [];
    const checkoutlist = getcheckoutproductStorage
      ? JSON.parse(getcheckoutproductStorage)
      : [];
    const detailList = getdetailproductStorage
      ? JSON.parse(getdetailproductStorage)
      : [];
    setFavproduct(itemsList);
    setProductCart(cartlist);
    setCheckoutcart(checkoutlist);
    setProductDetail(detailList);
  }, []);
  useEffect(() => {
    console.log("filter brands", filterbrands);
  }, [filterbrands]);
  useEffect(() => {
    console.log("filter price", filterprice);
  }, [filterprice]);

  useEffect(() => {
    console.log("sort price", datasort);
  }, [datasort]);

  async function favouriteProduct(data) {
    const getfavproductStorage = window.localStorage.getItem("favoriteproduct");
    const productdata = data;
    const itemsList = getfavproductStorage
      ? JSON.parse(getfavproductStorage)
      : [];
    setFavproduct(itemsList);
    itemsList.push(productdata);
    window.localStorage.setItem("favoriteproduct", JSON.stringify(itemsList));
  }

  async function addtocart(data) {
    const getcartproductStorage = window.localStorage.getItem("productcart");
    const productdata = data;
    const cartlist = getcartproductStorage
      ? JSON.parse(getcartproductStorage)
      : [];
    setProductCart(cartlist);
    cartlist.push(productdata);
    window.localStorage.setItem("productcart", JSON.stringify(cartlist));
  }

  async function gotodetail(data) {
    const productdata = data;
    const detailList = [];
    detailList.push(productdata);
    setProductDetail(detailList);
    window.localStorage.setItem("detail", JSON.stringify(detailList));
  }

  async function checkout(data) {
    const productdata = data;
    setCheckoutcart(productdata);
    window.localStorage.setItem("checkoutcart", JSON.stringify(productdata));
    window.localStorage.removeItem("productcart");
  }
  async function filterbybrand(brand, category) {
    if (category === "In Ear") {
      setFilterBrands(ineardata.filter((data) => data.brand.includes(brand)));
    }
    if (category === "หูฟังเอียร์บัด") {
      setFilterBrands(earbuddata.filter((data) => data.brand.includes(brand)));
    }
    if (category === "WirelessHeadphone") {
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
    if (category === "WirelessHeadphone") {
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
      setDataSort(
        ineardata.sort((a, b) =>
          sortby == "Low to High" ? a.price - b.price : b.price - a.price
        )
      );
    }
    if (category === "หูฟังเอียร์บัด") {
      setDataSort(
        earbuddata.sort((a, b) =>
          sortby == "Low to High" ? a.price - b.price : b.price - a.price
        )
      );
    }
    if (category === "WirelessHeadphone") {
      setDataSort(
        headphonedata.sort((a, b) =>
          sortby == "Low to High" ? a.price - b.price : b.price - a.price
        )
      );
    }
    if (category === "Bluetooth-Speaker") {
      setDataSort(
        speakerdata.sort((a, b) =>
          sortby == "Low to High" ? a.price - b.price : b.price - a.price
        )
      );
    }
  }

  const value = {
    favproduct,
    filterbrands,
    filterprice,
    datasort,
    productcart,
    checkoutcart,
    productdetail,
    favouriteProduct,
    filterbybrand,
    filterbyprice,
    sortbyprice,
    addtocart,
    checkout,
    gotodetail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
