import React from "react";
import {
  Card,
  CardActions,
  CardBody,
  CardHeader,
  CardImage,
  CardSubtitle,
  CardTitle,
} from "@progress/kendo-react-layout";

const SingleCard = ({ title, imageUrl, location, description }) => {
  return (
    <Card>
      <CardImage src={imageUrl} />
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{location}</CardSubtitle>
        </CardHeader>
        <CardBody>
          <p>{description}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default SingleCard;
