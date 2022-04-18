import ButtonGroup from "./ButtonGroup";
import CardHorizontal from "./CardHorizontal";
import CardTitle from "./CardTitle";
import DeleteButton from "./DeleteButton";
import PrimaryButton from "./PrimaryButton";

const MediaCard = ({ mediaFile, onEditMediaClick, onDeleteMediaClick }) => {
  const handleEditMediaClick = () => {
    onEditMediaClick(mediaFile.id);
  };
  const handleDeleteMediaClick = () => {
    onDeleteMediaClick(mediaFile.id);
  };
  return (
    <CardHorizontal>
      <div>
        {mediaFile.file_type.match(/image\//) ? (
          <img src={mediaFile.url} alt={mediaFile.description} style={{ height: "100px", width: "auto" }} />
        ) : (
          <img src="https://source.unsplash.com/100x100" alt="placeholder media" />
        )}
      </div>
      <div>
        <CardTitle>Description</CardTitle>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
      <div>
        <h3>Tags</h3>
        <p>One, Two, Three</p>
      </div>
      <div>
        <div>
          <i>{!mediaFile.is_published || mediaFile.is_blocked ? "Not Visible" : "Visible"}</i>
        </div>
        <div>Order: {mediaFile.order}</div>
      </div>
      <ButtonGroup direction="column" justify="space-between">
        <PrimaryButton onClick={handleEditMediaClick}>Edit</PrimaryButton>
        <DeleteButton onDelete={handleDeleteMediaClick}>Delete</DeleteButton>
      </ButtonGroup>
    </CardHorizontal>
  );
};

export default MediaCard;
