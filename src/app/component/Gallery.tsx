import React from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface ImageItem {
  src: string;
  alt: string;
  width: string;
  height: string;
}

const images: ImageItem[] = [
  { src: `${basePath}/img.jpeg`, alt: 'Plumbing Work', width: '960px', height: '540px' },
  { src: `${basePath}/img2.jpeg`, alt: 'Septic Installation', width: '1008px', height: '756px' },
  { src: `${basePath}/img3.jpeg`, alt: 'Sewer Line Work', width: '756px', height: '1008px' },
  { src: `${basePath}/img4.jpeg`, alt: 'Sewer Line Work', width: '756px', height: '1008px' },
  { src: `${basePath}/img5.jpg`, alt: 'Sewer Line Work', width: '756px', height: '756px' },
  { src: `${basePath}/img6.jpg`, alt: 'Sewer Line Work', width: '756px', height: '880px' },
  { src: `${basePath}/img7.jpg`, alt: 'Sewer Line Work', width: '756px', height: '1344px' },
  { src: `${basePath}/img8.jpg`, alt: 'Sewer Line Work', width: '756px', height: '642px' },
  // add more images if needed
];

const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
  ],
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-gray-100 p-6 rounded mt-10">
      <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">Gallery</h3>
      <Slider {...sliderSettings}>
        {images.map(({ src, alt, width, height }, idx) => (
          <div key={idx} className="px-2">
            <div className="flex justify-center items-center w-full h-full">
              <Image
                src={src}
                alt={alt}
                width={parseInt(width)}
                height={parseInt(height)}
                className="rounded shadow-md"
                priority={idx === 0}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;