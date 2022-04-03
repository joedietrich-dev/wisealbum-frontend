import Button from "./Button";
import CardHorizontal from "./CardHorizontal";

const MediaCard = () => {
  return (
    <CardHorizontal>
      <div>
        <img src="https://source.unsplash.com/100x100" />
      </div>
      <div>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
      <div>
        <h3>Tags</h3>
        <p>One, Two, Three</p>
      </div>
      <div>
        <div>
          <i>Eye Icon</i>
        </div>
        <div>Order Container</div>
      </div>
      <div>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </CardHorizontal>
  );
};

export default MediaCard;
