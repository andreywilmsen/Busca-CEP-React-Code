import "../styles/list.css";
import gitHub from "../assets/gitHub.png";
import linkedin from "../assets/linkedin.png";
function List() {

  return (
    <div id="list">
      <ul>
        <li><a href="https://github.com/andreywilmsen"  rel="noreferrer" target="_blank"><img alt="gitHub" src={gitHub}></img></a></li>
        <li><a href="https://br.linkedin.com/in/andrey-wilmsen-de-paula-004b49213" rel="noreferrer" target="_blank"><img alt="linkedin" src={linkedin}></img></a></li>
      </ul>
    </div>
  );
}

export default List;
