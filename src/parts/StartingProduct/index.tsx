import React from "react";
import imgStartingProduct from "../../assets/startingProduct.png";
import imgStartingProduct1 from "../../assets/startingProduct1.png";
import Button from "../../components/Button";
function StartingProduct() {
  return (
    <>
      <h2 className="container mx-auto text-center text-xl md:mt-[5rem] md:text-3xl md:font-medium my-4">
        Starting Product
      </h2>
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 container mx-auto">
        <div className="container mx-auto bg-black h-[50vh] md:h-[70vh]">
          <div className="px-4 py-6">
            <div className="flex flex-col text-white items-center">
              <h3 className="text-2xl font-medium">MacBook Pro</h3>
              <p className="text-center text-xl font-regular w-3/4">
                Super Powerful thanks to the M2 Pro and M2 Max.
              </p>
              <div className="my-3">
                <Button title="Check Product Now >"></Button>
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-center ">
              <img
                className="md:h-[50vh] md:w-1/2 "
                src={imgStartingProduct}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-black h-[50vh] md:h-[70vh]">
          <div className="px-4 py-6">
            <div className="flex flex-col text-white items-center">
              <h3 className="text-2xl font-medium">Asus ROG Strix </h3>
              <p className="text-center text-xl font-regular w-3/4">
                G513IH-R765B6G-O11 Ryzen R7-4800H-8GB-SSD 512GB.
              </p>
              <div className="my-3">
                <Button title="Check Product Now >"></Button>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img
                className="md:h-[50vh] md:w-1/2 w-[230px] "
                src={imgStartingProduct1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartingProduct;
