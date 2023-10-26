import React from "react";

function Button(props) {
  // console.log(props);
  const buttonClasses = props.classNames;
  const handleclick = props.handleclick;
  return (
    <button type="submit" className={buttonClasses} onClick={handleclick}>
      {props.children}
    </button>
  );
}

export default Button;
