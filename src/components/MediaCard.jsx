import styled from "styled-components/macro";
import ButtonGroup from "./ButtonGroup";
import CardHorizontal from "./CardHorizontal";
import CardHorizontalContent from "./CardHorizontalContent";
import CardHorizontalImage from "./CardHorizontalImage";
import CardTitle from "./CardTitle";
import DeleteButton from "./DeleteButton";
import PrimaryButton from "./PrimaryButton";
import VisibilityIndicator from "./VisibilityIndicator";

const MediaCard = ({ mediaFile, onEditMediaClick, onDeleteMediaClick }) => {
  const handleEditMediaClick = () => {
    onEditMediaClick(mediaFile.id);
  };
  const handleDeleteMediaClick = () => {
    onDeleteMediaClick(mediaFile.id);
  };
  return (
    <CardHorizontal>
      <CardHorizontalImage src={mediaFile.url} type={mediaFile.file_type} alt={mediaFile.description} />
      <CardHorizontalContent gridArea="description">
        <CardTitle>Description</CardTitle>
        <p>{mediaFile.description}</p>
      </CardHorizontalContent>
      <CardHorizontalContent gridArea="tags">
        <CardTitle>Tags</CardTitle>
        <p>{mediaFile.tags}</p>
      </CardHorizontalContent>
      <CardHorizontalContent gridArea="meta">
        <CardFlex>
          <VisibilityIndicator isVisible={mediaFile.is_published && !mediaFile.is_blocked} />
          <p>Order: {mediaFile.order}</p>
        </CardFlex>
      </CardHorizontalContent>
      <ButtonGroup direction="column" justify="space-between">
        <PrimaryButton onClick={handleEditMediaClick}>Edit</PrimaryButton>
        <DeleteButton onDelete={handleDeleteMediaClick}>Delete</DeleteButton>
      </ButtonGroup>
    </CardHorizontal>
  );
};

const CardFlex = styled.div`
  display: flex;
  align-items: center;
  align-content: flex-start;
  gap: 18px;

  p {
    margin: 0;
  }
`;

export default MediaCard;
