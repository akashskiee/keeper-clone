import React from "react";

function InputArea() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>+</button>
      </form>
    </div>
  );
}

export default InputArea;
