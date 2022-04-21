import React from "react";
import ButtonGroup from "./ButtonGroup";
import Card from "./Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function AlbumCard({ id, coverImage = "", description = "", name = "", onViewAlbum = (f) => f, onEditAlbum = (f) => f, isEditable = false }) {
  return (
    <Card>
      <CardImage src={coverImage} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardContent>
      <CardFooter>
        {isEditable ? (
          <ButtonGroup>
            <SecondaryButton onClick={() => onViewAlbum(id)}>View Album</SecondaryButton>
            <PrimaryButton onClick={() => onEditAlbum(id)}>Edit Album</PrimaryButton>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <PrimaryButton onClick={() => onViewAlbum(id)}>View Album</PrimaryButton>
          </ButtonGroup>
        )}
      </CardFooter>
    </Card>
  );
}

export default AlbumCard;
