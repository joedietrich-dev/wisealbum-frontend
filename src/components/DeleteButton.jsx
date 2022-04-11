import React, { useState } from "react";
import Button from "./Button";

function DeleteButton({ onDelete = (f) => f }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {isClicked ? (
        <Button type="button" onClick={onDelete}>
          Delete, Really
        </Button>
      ) : (
        <Button type="button" onClick={() => setIsClicked(true)}>
          Delete
        </Button>
      )}
    </>
  );
}

export default DeleteButton;
