import React from "react";
import ButtonGroup from "./ButtonGroup";
import Card from "./Card";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function AlbumCard({ id, coverImage = "", description = "", name = "", onEditAlbum = (f) => f }) {
  return (
    <Card>
      <CardImage src={coverImage} />
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
      <ButtonGroup>
        <SecondaryButton>View Album</SecondaryButton>
        <PrimaryButton onClick={() => onEditAlbum(id)}>Edit Album</PrimaryButton>
      </ButtonGroup>
    </Card>
  );
}

export default AlbumCard;
