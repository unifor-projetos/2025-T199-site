import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface ExhibitionItem {
  id: number;
  title: string;
  description: string;
  date?: string;
  imageUrl: string;
}

interface ExhibitionCarouselProps {
  title: string;
  type: "current" | "upcoming";
}

const ExhibitionCarousel: React.FC<ExhibitionCarouselProps> = ({
  title,
  type,
}) => {
  const items: ExhibitionItem[] = [
    {
      id: 1,
      title: "Armorial",
      description: "Venha conhecer o movimento armorial de Ariano Suassuna",
      date: type === "current" ? "Até 15 de Junho" : "A partir de 20 de Maio",
      imageUrl: "https://dummyimage.com/400x300/b5b5b5/000000&text=Image+5",
    },
    {
      id: 2,
      title: "Fulano",
      description: "Galeria de Fulano",
      date: type === "current" ? "Até 15 de Junho" : "A partir de 20 de Maio",
      imageUrl: "https://dummyimage.com/400x300/b5b5b5/000000&text=Image+6",
    },
    {
      id: 3,
      title: "Beltrano",
      description: "Galeria de Beltrano",
      date: type === "current" ? "Até 15 de Junho" : "A partir de 20 de Maio",
      imageUrl: "https://dummyimage.com/400x300/b5b5b5/000000&text=Image+7",
    },
    {
      id: 4,
      title: "Cicrano",
      description: "Galeria de Cicrano",
      date: type === "current" ? "Até 15 de Junho" : "A partir de 20 de Maio",
      imageUrl: "https://dummyimage.com/400x300/b5b5b5/000000&text=Image+8",
    },
    {
      id: 5,
      title: "Galeria de Fulano Júnior",
      description: "Galeria do filho do fulano",
      date: type === "current" ? "Até 15 de Junho" : "A partir de 20 de Maio",
      imageUrl: "https://dummyimage.com/400x300/b5b5b5/000000&text=Image+9",
    },
  ];

  // Split items into groups of 3 for the carousel
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <div className="mb-5">
      <h2 className="section-title">{title}</h2>
      <Carousel
        indicators={false}
        nextIcon={<FaArrowRight size="2em" />}
        prevIcon={<FaArrowLeft size="2em" />}
        interval={null}
      >
        {groupedItems.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around flex-wrap">
              {group.map((item) => (
                <Card
                  key={item.id}
                  style={{ width: "18rem", margin: "0.5rem" }}
                >
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    {item.date && (
                      <small className="text-muted">{item.date}</small>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ExhibitionCarousel;
