import React from "react";
import Dahlia from "../assets/photography/dahlia.jpg";
import Chickadee from "../assets/photography/chickadee.jpg";
import Colorado from "../assets/photography/colorado.jpg";
import FallFlowers from "../assets/photography/fallflowers.jpg";
import Grandmarais from "../assets/photography/grandmarais.jpg";
import Sunrise from "../assets/photography/sunrise.jpg";
import Tulips from "../assets/photography/tulips.jpg";
import Sailboat from "../assets/photography/sailboat.jpg";
import RedRose from "../assets/photography/redroses.jpg";
import OrangeFlowers from "../assets/photography/orangeflowers.jpg";
import MNFall from "../assets/photography/mnfall.jpg";
import Wrapped from "../assets/photography/wrappedflowers.jpg";

const Design = () => {
  return (
    <>
      <div>
        <h1 className="text-6xl font-poppins p-2">Design Gallery</h1>
        <p>
          In addition to learning website development, I worked as a floral
          designer which required visual design knowledge. I was able to have
          two professional exhibits in a Juried exhibition and local community
          gallery.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="design">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={Dahlia}
                alt=""
              />
            </div>
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
                src={Grandmarais}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={Colorado} alt="" />
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
