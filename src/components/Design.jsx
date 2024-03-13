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
      <div className="md:mt-40 m-10 items-center" id="design">
        <h1 className="text-4xl md:text-6xl font-poppins items-center text-center m-10">
          Photography Gallery
        </h1>
        <div className="items-center">
          <div className="flex flex-col font-poppins text-left m-10">
            <p className="text-md md:text-xl text-center items-center p-10">
              I have showcased my visual design skills through floral
              arrangements and photography, including being selected for juried
              exhibitions in professional and community art galleries and
              working as a floral designer.
            </p>
            <p className="text-md md:text-xl text-center items-center p-5 italic">
              All images presented here are my original creations,
              professionally photographed by me. Flower arrangements are
              designed by me.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={Grandmarais}
                alt="Serene sailboat gliding through the misty morning waters of Grand Marais, Minnesota"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={Colorado}
                alt="Colorado mountain top growing vibrant wildflowers under the warm daylight"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={Dahlia}
                alt="Orange Dahlia flower with fly on petals"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={Chickadee}
                alt="Elegant floral arrangement showcased in a charming yellow chick vase, featuring a ensemble of roses and various blossoms"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={FallFlowers}
                alt="Beautiful floral arrangement capturing autumn with red roses, eucalyptus, and a palette of fall colors"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={Sunrise}
                alt="Minnesota sunrise showcasing vibrant orange, purple, and yellow hues painting the sky over a calm lake"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={Tulips}
                alt="Close-up view of three tulips with orange and yellow hues at Minnesota Arboretum"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={Sailboat}
                alt="Sailboat docked in Grand Marais Minnesota in early morning"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={RedRose}
                alt="Two hands holding miniature red roses that have just bloomed in the garden"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={MNFall}
                alt="Fall scenery of a gorgeous lake with a duck swimming across its surface"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={OrangeFlowers}
                alt="Beautiful orange daisies"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={Wrapped}
                alt="A floral arrangement wrapped in paper consisting of a variety of flowers"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
