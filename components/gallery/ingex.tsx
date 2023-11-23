"use client";

import { Tab } from "@headlessui/react";
import NextImage from "next/image";

// import { Image } from "@/types";

import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: any[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="grid grid-cols-2  gap-4 ">
      <div>
        <Tab.Panels className="aspect-square w-full">
          {images.map((image) => (
            <Tab.Panel key={image.id}>
              <div className="aspect-square relative h-96 w-full sm:rounded-lg overflow-hidden">
                <NextImage
                  fill
                  src={image.url}
                  alt="Image"
                  className="object-cover object-center"
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>

      <div className="mx-auto hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-3 grid-rows-2 gap-4">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
