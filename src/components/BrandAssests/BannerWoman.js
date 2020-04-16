import React from "react";
// import bannerWoman from "../../assets/images/bannerWoman.png";
import { BannerWomanSvg } from "../../assets/svg/BannerWomanSvg";
// import { ReactComponent as Woman } from "../../assets/svg/bannerWoman.svg";

export default function BannerWoman({ className }) {
  return (
    <div style={{ height: 0 }}>
      {/* <img src={bannerWoman} alt="woman" className={className} /> */}
      <BannerWomanSvg />
    </div>
  );
}
