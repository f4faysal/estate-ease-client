"use client";

import { Tab } from "@headlessui/react";
import NextImage from "next/image";

// import { Image } from "@/types";

import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface GalleryProps {
  images: any[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="grid grid-cols-4 grid-rows-2 gap-4">
      <div className="col-span-2 row-span-2">
        <Tab.Panels className="aspect-square w-full">
          {images.map((image) => (
            <Tab.Panel key={image.id}>
              <div className="aspect-square relative sm:rounded-lg overflow-hidden">
                <Image
                  fill
                  src={image.url}
                  alt="Image"
                  className="object-cover object-center "
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>

      <div className="col-span-2 row-span-2 mx-auto hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-2 grid-rows-2 gap-4">
          {images.slice(0, 4).map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
