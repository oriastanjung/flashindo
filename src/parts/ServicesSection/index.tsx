import React from "react";
import Button from "../../components/Button";
import imgservices1 from "../../assets/services1.jpg";
import imgservices2 from "../../assets/services2.jpg";
import imgservices3 from "../../assets/services3.jpg";
function ServicesSection() {
  return (
    <div className="container mx-auto">
      <h2 className="container mx-auto text-center text-xl md:mt-[5rem] md:text-3xl md:font-medium my-4">
        Our Services
      </h2>
      <div className="flex flex-col gap-5 md:gap-5 container mx-auto">
        <div className="flex flex-col md:flex-row gap-5 md:gap-5">
          <div className="container mx-auto bg-[#fbfbfd] h-[50vh] md:h-[70vh]">
            <div className="px-4 py-6">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-medium">Laptop and PC</h3>
                <p className="text-center text-xl font-regular w-3/4">
                  Provide all IT Support to help you solve your Laptop or PC
                  problems.
                </p>
                <div className="my-3">
                  <Button title="Details on Service >"></Button>
                </div>
              </div>
              <div className="md:flex md:items-center md:justify-center ">
                <img
                  className="md:h-[50vh] md:w-[100%]"
                  src={imgservices1}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto bg-[#fbfbfd] h-[50vh] md:h-[70vh]">
            <div className="px-4 py-6">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-medium">Printer and Scanner</h3>
                <p className="text-center text-xl font-regular w-3/4">
                  Fix all your Printer problems including your Scanner such as
                  Change Head,Change Catridge, and etc.
                </p>
                <div className="my-3">
                  <Button title="Details on Service >"></Button>
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <img
                  className="md:h-[50vh] md:w-[100%] "
                  src={imgservices2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-5">
          <div className="container mx-auto bg-[#fbfbfd] h-[50vh] md:h-[70vh]">
            <div className="px-4 py-6">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-medium">Unit Power Supply</h3>
                <p className="text-center text-xl font-regular w-3/4">
                  Solve all your UPS problems such as Change Battery, Change
                  Motherboard and etc.
                </p>
                <div className="my-3">
                  <Button title="Details on Service >"></Button>
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <img
                  className="md:h-[50vh] md:w-[100%] "
                  src={imgservices3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto bg-[#fbfbfd] h-[50vh] md:h-[70vh]">
            <div className="px-4 py-6">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-medium">Handphone</h3>
                <p className="text-center text-xl font-regular w-3/4">
                  Fix all your Handphone problems such as Reinstall, Fix LCD,
                  Bypass Password and etc.
                </p>
                <div className="my-3">
                  <Button title="Details on Service >"></Button>
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <img
                  className="md:h-[50vh] md:w-[100%] "
                  src={imgservices2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
