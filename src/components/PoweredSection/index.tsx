import React from "react";
import asusIcon from "../../assets/logo/asusBW.png";
import acerIcon from "../../assets/logo/acerBW.png";
import lenovoIcon from "../../assets/logo/lenovoBW.png";
import msiIcon from "../../assets/logo/msiBW.png";
import hpIcon from "../../assets/logo/hpBW.png";
import appleIcon from "../../assets/logo/appleBW.png";
function PoweredSection() {
  return (
    <div className="container mx-auto">
      <h4 className="text-center mt-[15%] text-xl md:mt-[5rem] md:text-3xl md:font-medium">
        Powered By
      </h4>
      <div className="container mx-auto px-5 flex items-center justify-center gap-3 md:gap-12">
        <img
          className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-contain"
          src={asusIcon}
          alt=""
        />
        <img
          className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-contain"
          src={acerIcon}
          alt=""
        />
        <img
          className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-contain"
          src={lenovoIcon}
          alt=""
        />
        <img
          className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-contain"
          src={msiIcon}
          alt=""
        />
        <img
          className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] object-contain"
          src={hpIcon}
          alt=""
        />
        <img
          className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] object-contain"
          src={appleIcon}
          alt=""
        />
      </div>
    </div>
  );
}

export default PoweredSection;
