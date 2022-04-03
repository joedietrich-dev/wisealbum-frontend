import React from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Card from "./Card";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

function AlbumCard({ coverImage = "", description = "", id, name = "", onEditAlbum = (f) => f }) {
  return (
    <Card>
      <CardImage src={coverImage} />
      <CardTitle>{name}</CardTitle>
      <p>{description}</p>
      <ButtonGroup>
        <Button>View Album</Button>
        <Button onClick={onEditAlbum}>Edit Album</Button>
      </ButtonGroup>
    </Card>
  );
}

export default AlbumCard;
