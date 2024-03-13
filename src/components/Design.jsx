import React from "react";
import Dahlia from "../assets/photography/dahlia.jpeg";
import Chickadee from "../assets/photography/chickadee.jpeg";
import Colorado from "../assets/photography/colorado.jpeg";
import FallFlowers from "../assets/photography/fallflowers.jpeg";
import Grandmarais from "../assets/photography/grandmarais.jpeg";
import Sunrise from "../assets/photography/sunrise.jpeg";
import Tulips from "../assets/photography/tulips.jpeg";
import Sailboat from "../assets/photography/sailboat.jpeg";
import RedRose from "../assets/photography/redroses.jpeg";
import OrangeFlowers from "../assets/photography/orangeflowers.jpeg";
import MNFall from "../assets/photography/mnfall.jpeg";
import Wrapped from "../assets/photography/wrappedflowers.jpeg";

const Design = () => {
  return (
    <>
      <div className="m-10 items-center" id="design">
        <h1 className="text-4xl md:text-6xl font-poppins items-center text-center m-10">
          Photography Gallery
        </h1>
        <div className="items-center">
          <div className="flex flex-col font-poppins text-left m-10">
            <p className="text-md md:text-xl">
              Some design work I have done includes working as a Floral Designer
              in Twin Cities, being selected for Juried Exhibition in
              Professional Art Gallery for photography, and being selected for
              Exhibition in Community Art Gallery for photography.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={Grandmarais}
                alt=""
              />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={Colorado} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={Dahlia} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={Chickadee}
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={FallFlowers}
                alt=""
              />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={Sunrise} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={Tulips} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={Sailboat} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={RedRose} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={MNFall} alt="" />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={OrangeFlowers}
                alt=""
              />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={Wrapped} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
