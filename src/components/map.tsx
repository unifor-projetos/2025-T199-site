import React, { useState } from "react";
import { Image, OverlayTrigger, Popover } from "react-bootstrap";
import { MapArea } from "../types";

const InteractiveMap: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number | null>(null);

  const mapAreas: MapArea[] = [
    {
      id: 1,
      name: "Galeria Principal",
      x: 30,
      y: 40,
      description: "Coleções Permamentes",
    },
    {
      id: 2,
      name: "Galerias Temporárias",
      x: 70,
      y: 30,
      description: "Galerias Temporárias",
    },
    {
      id: 3,
      name: "Auditório",
      x: 50,
      y: 70,
      description: "Auditório",
    },
    {
      id: 4,
      name: "Café",
      x: 20,
      y: 80,
      description: "Café",
    },
  ];

  return (
    <div className="mb-5">
      <h2 className="section-title">Explore Nosso Espaço</h2>
      <div className="position-relative">
        <Image
          src="https://dummyimage.com/1200x600/b5b5b5/000000&text=Image+4"
          fluid
          alt="Museum Map"
          className="rounded"
        />
        {mapAreas.map((area) => (
          <OverlayTrigger
            key={area.id}
            trigger={["hover", "focus"]}
            placement="top"
            overlay={
              <Popover id={`popover-${area.id}`}>
                <Popover.Header as="h3">{area.name}</Popover.Header>
                <Popover.Body>{area.description}</Popover.Body>
              </Popover>
            }
          >
            <div
              className={`position-absolute rounded-circle ${
                activeArea === area.id ? "bg-primary" : "bg-white"
              }`}
              style={{
                width: "20px",
                height: "20px",
                left: `${area.x}%`,
                top: `${area.y}%`,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                opacity: 0.7,
              }}
              onClick={() => setActiveArea(area.id)}
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
            />
          </OverlayTrigger>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;
