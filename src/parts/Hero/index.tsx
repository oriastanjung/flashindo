import React from "react";
import heroImg from "../../assets/heroImg.jpg";
import Button from "../../components/Button";
import PoweredSection from "../../components/PoweredSection";
function Hero() {
  return (
    <>
      <div className="container mx-auto relative">
        <div className="relative md:flex md:flex-row-reverse">
          <img src={heroImg} alt="" className="md:w-1/2" />
          <div
            className="mt-[-55%] md:mt-0 relative backdrop-opacity-10 md:text-center flex flex-col items-center justify-center md:bg-slate-600 bg-hero md:text-xl "
            //   style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          >
            <p className="text-white px-12 text-center font-regular opacity-100">
              Join us now and experience the ultimate shopping journey! Click
              here to become a part of our community and get exclusive access to
              unbeatable deals and discounts.
            </p>
            <div className="flex justify-center mt-5">
              <Button title="Browse Now" />
            </div>
          </div>
        </div>
      </div>
      <PoweredSection />
    </>
  );
}

export default Hero;
