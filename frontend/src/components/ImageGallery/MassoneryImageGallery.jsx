import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";

const MassoneryImageGallery = () => {
  return (
    <ResponsiveMasonry
      columns={{ 320: 1, 480: 2, 800: 3 }}
      BreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <img
            className="masonry_img"
            src={item}
            key={index}
            alt=""
            style={{
              display: "block !impotant",
              width: "100%",
              height: "100%",
              borderRadius: "7px",
            }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MassoneryImageGallery;
