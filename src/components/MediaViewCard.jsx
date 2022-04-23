import ButtonGroup from "./ButtonGroup";
import Card from "./Card";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import PrimaryButton from "./PrimaryButton";

import tagIcon from "../tag.svg";
import Icon from "./Icon";
import CardFooter from "./CardFooter";
import IconFlex from "./IconFlex";

const MediaViewCard = ({ mediaFile, onViewMediaClick = (f) => f }) => {
  const handleViewMediaClick = () => {
    onViewMediaClick(mediaFile.id);
  };
  return (
    <Card>
      <CardImage src={mediaFile.url} type={mediaFile.file_type} alt={mediaFile.description} />
      <CardContent>
        {mediaFile.description ? <p>{mediaFile.description}</p> : null}
        {mediaFile.tags ? (
          <IconFlex>
            <Icon url={tagIcon} />
            <p>{mediaFile.tags}</p>
          </IconFlex>
        ) : null}
      </CardContent>
      <CardFooter>
        <ButtonGroup direction="column" justify="space-between">
          <PrimaryButton onClick={handleViewMediaClick}>View</PrimaryButton>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

// Tag Icon is from SVG Repo
export default MediaViewCard;
