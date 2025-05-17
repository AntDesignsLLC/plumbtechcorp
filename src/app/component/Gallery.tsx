import React from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';

interface ImageItem {
  src: string;
  alt: string;
  width: string;
  height: string;
}

const images: ImageItem[] = [
  { src: '/img.jpeg', alt: 'Plumbing Work', width: '960px', height: '540px' },
  { src: '/img2.jpeg', alt: 'Septic Installation', width: '1008px', height: '756px' },
  { src: '/img3.jpeg', alt: 'Sewer Line Work', width: '756px', height: '1008px'  },
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
            <div style={{ position: 'relative', width: '100%', height: height }}>
              <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
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