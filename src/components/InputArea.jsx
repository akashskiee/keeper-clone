import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Collapse from "@material-ui/core/Collapse";

function InputArea(props) {
  const [keeperText, getText] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpand] = useState(false);
  function getKeeper(event){
    const {name, value}  = event.target;
    getText(prevValue => {
        return {
          ...prevValue,
          [name]: value
        }
    })
  }
  function addText(event){
    props.onAdd(keeperText);
    getText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleExpand(){
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
      <Collapse in={isExpanded}>
        <input onChange={getKeeper} autoFocus value={keeperText.title} name="title" required autoComplete="off"  placeholder="Title" />
        </Collapse>
        <textarea onClick={handleExpand} onChange={getKeeper} value={keeperText.content} required name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} />
        <Zoom in={isExpanded}>
        <Fab onClick={addText}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
