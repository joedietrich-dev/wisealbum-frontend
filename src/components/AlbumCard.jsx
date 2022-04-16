import React from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Card from "./Card";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTitle from "./CardTitle";

function AlbumCard({ id, coverImage = "", description = "", name = "", onEditAlbum = (f) => f }) {
  return (
    <Card>
      <CardImage src={coverImage} />
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
      <ButtonGroup>
        <Button>View Album</Button>
        <Button onClick={() => onEditAlbum(id)}>Edit Album</Button>
      </ButtonGroup>
    </Card>
  );
}

export default AlbumCard;
