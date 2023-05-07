import "../styles/fieldSubmit.css";

function fieldSubmit() {
  function submit() {
    let cep = document.getElementById("cep").value;
    if(cep.length !== 8){
        alert('O CEP informado deverá conter 8 numeros!')
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(`${url}`, { method: "GET", "Content-Type": "application/json" })
      .then((res) =>
        res.json().then(function data(data) {
          if(data.cep !== "undefined" && data.logradouro !== "undefined" && data.bairro !== "undefined" && data.localidade !== "undefined" && data.uf){
          document.getElementById("card").style.display = "flex";
          document.getElementById("cepNumber").innerText = `${data.cep}`;
          document.getElementById("street").innerText = `${data.logradouro}`;
          document.getElementById( "neighborhood").innerText = `${data.bairro}`;
          document.getElementById("city").innerText = `${data.localidade}`;
          document.getElementById("uf").innerText = `${data.uf}`;
        }else{
          alert('CEP não localizado!')
        }})
      )
      .catch((err) => console.log(err));
  }

  return (
    <div id="fieldSubmit">
        <h1>📍 Buscador de CEP 📍</h1>
      <input id="cep" type="text" placeholder="Digite aqui o CEP"></input>
      <button id="enviar" type="submit" method="get" onClick={submit}>
        Localizar
      </button>
    </div>
  );
}

export default fieldSubmit;
