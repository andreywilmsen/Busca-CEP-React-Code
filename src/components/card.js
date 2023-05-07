import "../styles/card.css";
function Card() {


  return (
    <div id="card">
      <div id="result">
        <h4>CEP:</h4>
        <p className="results" id="cepNumber"></p>
        <h4>Logradouro:</h4>
        <p className="results" id="street"></p>
        <h4>Bairro:</h4>
        <p className="results" id="neighborhood"></p>
        <h4>Cidade:</h4>
        <p className="results" id="city"></p>
        <h4>UF:</h4>
        <p className="results" id="uf"></p>
      </div>
    </div>
  );
}

export default Card;
