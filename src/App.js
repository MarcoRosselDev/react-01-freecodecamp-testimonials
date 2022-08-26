import './App.css';
import Testimonio from "./component/Testimonio.js"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum distinctio labore dignissimos reiciendis delectus eligendi quidem officia, ea voluptatem? Esse perferendis porro sunt recusandae error! Iste, nisi? Reiciendis, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio corrupti aspernatur consectetur in laborum, quaerat explicabo blanditiis aliquid itaque nemo nulla perspiciatis voluptatem sit, ea, nesciunt recusandae quae excepturi."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum distinctio labore dignissimos reiciendis delectus eligendi quidem officia, ea voluptatem? Esse perferendis porro sunt recusandae error! Iste, nisi? Reiciendis, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio corrupti aspernatur consectetur in laborum, quaerat explicabo blanditiis aliquid itaque nemo nulla perspiciatis voluptatem sit, ea, nesciunt recusandae quae excepturi."
        />
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniera de Software"
          empresa="Amazon"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum distinctio labore dignissimos reiciendis delectus eligendi quidem officia, ea voluptatem? Esse perferendis porro sunt recusandae error! Iste, nisi? Reiciendis, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio corrupti aspernatur consectetur in laborum, quaerat explicabo blanditiis aliquid itaque nemo nulla perspiciatis voluptatem sit, ea, nesciunt recusandae quae excepturi."
        />
      </div>
    </div>
  );
}

export default App;
