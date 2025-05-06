import React from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BannerItem } from "../types";

const LandingBanner: React.FC = () => {
  const bannerItems: BannerItem[] = [
    {
      id: 1,
      imageUrl: "https://dummyimage.com/1600x600/b5b5b5/000000&text=Image+1",
    },
    {
      id: 2,
      imageUrl: "https://dummyimage.com/1600x600/b5b5b5/000000&text=Image+2",
    },
    {
      id: 3,
      imageUrl: "https://dummyimage.com/1600x600/b5b5b5/000000&text=Image+3",
    },
  ];

  return (
    <Carousel
      indicators={false}
      nextIcon={<FaArrowRight size="2em" />}
      prevIcon={<FaArrowLeft size="2em" />}
      className="mb-5"
    >
      {bannerItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.imageUrl} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default LandingBanner;
