import React from "react";
import "../styles/icons.css";
import gitHub from "../assets/gitHub.png";
import linkedin from "../assets/linkedin.png";

function Icons(props) {
  function validation() {
    if (props.icone === "gitHub") {
      return gitHub;
    } else if (props.icone === "linkedin") {
      return linkedin;
    }
  }

  // Criando função para validar tamanho de imagem

  // function size() {
  //   if(props.size === "small"){
  //     let element = document.getElementsByClassName('figure');
  //     console.log(element)
  //   }
  // }

  return (
    <div id="icons">
      <img src={validation()} /*onLoad={</div>size()}*/ className="icon"></img>
    </div>
  );
}

export default Icons;