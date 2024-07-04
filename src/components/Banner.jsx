import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[1480px] mt-4 mb-40 mx-auto w-[87%]">
      <div className="flex ">
        {/* left side */}
        <div className="flex-1">
          <h6>Hello there</h6>
          <h6>I am Amdadul Haque Bhuiyan</h6>
          <h1>AFull Stact Developer_</h1>

          <p className="text-[#4d4c7b] text-base w-[80%]">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>

          <button
            className={`flex mt-10 text-base text-black bg-[#FFC637] font-medium rounded-xl py-3  px-6`}
          >
            Learn more
          </button>
        </div>

        {/* right side */}
        <div className="flex-1 relative ">
          <img src={"imgPeople"} alt="" />
          {/* massage box */}
          <div className="p-7 -bottom-10 -left-24 absolute w-96 rounded-[30px] text-white bg-[#343268]">
            <h5 className="font-medium text-2xl mb-2">Our mission is simple</h5>
            <p className="font-normal text-base opacity-80">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
