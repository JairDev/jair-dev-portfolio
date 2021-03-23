import Button from "components/Button/Button";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const svgProfile = (
  <svg className={`icon icon-user topSvg`}>
    <use xlinkHref={`#icon-user`}></use>
  </svg>
);

const svgHome = (
  <svg className={`icon icon-home topSvg`}>
    <use xlinkHref={`#icon-home`}></use>
  </svg>
);

function Aside({about = false }) {
  if (about) {
    return (
      <>
        <aside className="App-aside">
          <span className="border-aside-animate"></span>
          <span className="animate-span-profile active"></span>
          <Link to="/">
            <Button classSvg="topSvg" className={"content-button-info-child"}>
              {svgHome}
            </Button>
          </Link>
        </aside>
      </>
    );
  }
  return (
    <aside className="App-aside">
      <span className="border-aside-animate"></span>
      <span className="animate-span-profile active"></span>
      <Link to="/profile">
        <Button classSvg="topSvg" className={"content-button-info-child"}>
          {svgProfile}
        </Button>
      </Link>
    </aside>
  );
}

export default Aside;
