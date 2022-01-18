import { useEffect, useState } from "react";

function App() {
  const jsonData = [
    {
      key: "1",
      name: "Max",
      age: 12,
      color: "blue",
    },
    {
      key: "2",
      name: "Alfono",
      age: 11,
      color: "black",
    },
    {
      key: "3",
      name: "Juan",
      age: 13,
      color: "yello",
    },
    {
      key: "4",
      name: "Valeria",
      age: 14,
      color: "green",
    },
  ];

  const [usr, setUsr] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);


  const usrChange = (event) => {
    setUsr(event.target.value);
  }

  const passwordChange = ({target: {value}}) => {
    setPassword(value);
  }

  const submit = (event) => {
    event.preventDefault();
    alert(`El Usuario: ${usr} con password: ${password}, se ha logueado correctamente!`);
    setIsLogged(false);
  }

  const renderData = () => {
      
    return(
      jsonData.map((value, index) => {
        return (
          <div key={value.key}>
            <h3>Nombre: {value.name}</h3>
            <p>{`Age: ${value.age}, Color: ${value.color}`}</p>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">Ver mas...</a>
            <hr/>
          </div>
        )
      })
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLogged(true);
    }, 5000);
  }, [])



  return (
    <>
    <form>
      <h2>Login</h2>
      <label>
        User: 
        <input type="text" value={usr} onChange={usrChange}/>
      </label>
      <br/><br/>
      <label>
        Password:
        <input type="password" value={password} onChange={passwordChange}/>
      </label>
      <br/><br/>
      <button type="submit" onClick={submit}>
        Iniciar Sesión
      </button>
    </form>

    <hr/>

    { isLogged ? <div> { renderData() } </div> : undefined}



    </>
  );
}

export default App;
