import React from "react";

const PageHeader = ({ pageName, headerImg }) => {
  //   console.log(pageName, headerStyle);
  return (
    <>
      <div className="gallery-header">
        <div
          className="gallery-header-img"
          style={{
            backgroundImage: `url(${headerImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "55%",
          }}
        >
          {/* <img src={HeaderImg} alt="" /> */}
          <h1 className="gallery-header-text">{pageName}</h1>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
