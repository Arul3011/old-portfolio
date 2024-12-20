import React, { useRef } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
const Nav = () => {
   const dialogRef = useRef(null);

    // Function to open the dialog
    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    // Function to close the dialog
    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
  return (
    <div className="nav">
      <h3>Arul.dev</h3>
      <div className="navic">
        <span>
        <IoReorderThreeOutline />
        </span>
      </div>
      <div className="list">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contect">CONTACT</a>
      </div>
      <dialog ref={dialogRef}>
                <h2>Dialog Title</h2>
                <p>This is a dialog box.</p>
                <button onClick={closeDialog}>Close</button>
            </dialog>
    </div>
  );
};

export default Nav;
