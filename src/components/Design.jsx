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
      <div className="m-10" id="design">
        <h1 className="text-6xl font-poppins items-center text-center">
          Photography Gallery
        </h1>
        <p className="text-xl font-poppins items-center text-center p-20">
          In addition to learning website development, I worked as a floral
          designer which required visual design knowledge. I was able to have
          two professional photography exhibits in a Juried exhibition and local
          community gallery.
        </p>
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
