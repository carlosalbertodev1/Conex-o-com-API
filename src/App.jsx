import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <div className="Informacoes">

        <h1>Lista de Cafés</h1>

        <h3>Opções: Hot e Iced</h3>

        

        {data.map((cafe) => (
          <div className="card" key = {cafe.id}>
            {cafe.image && (
              <img src={cafe.image} alt={cafe.title} 
              
              className = "imgcafe"
              />
            )}
            <h2>{cafe.title}</h2>
            <p>{cafe.description}</p>

            <p>
              <strong>ingredientes!</strong>{" "}
              
                {cafe.ingredients?.join(", ")}
             
            </p> 

          </div>
        ))}

     </div>
    </>
  )
}

export default App
