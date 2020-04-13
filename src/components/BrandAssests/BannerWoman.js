import React from "react";
import bannerWoman from "../../assets/images/bannerWoman.png";

export default function BannerWoman({ className }) {
  return (
    <div style={{ height: 0 }}>
      <img src={bannerWoman} alt="woman" className={className} />
    </div>
  );
}
