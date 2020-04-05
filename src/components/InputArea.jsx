import React, { useState } from "react";

function InputArea(props) {
  const [keeperText, getText] = useState({
    title: "",
    content: ""
  });

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
  return (
    <div>
      <form className="create-note">
        <input onChange={getKeeper} autoFocus value={keeperText.title} name="title" required autoComplete="off"  placeholder="Title" />
        <textarea onChange={getKeeper} value={keeperText.content} required name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addText}>+</button>
      </form>
    </div>
  );
}

export default InputArea;
