

function Syntax({name, director,image}){
  return(<div>
    <h2>I like {name} made by {director}</h2>
    <img src={image} alt="poster"/>
  </div>);
}

const movies = [
  {title: "God Father",
    director : "Francis Ford Coppola" ,
    img :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VAUbK8bhXAxPqygIkoc-IwHaLF%26pid%3DApi&f=1"
  },
    
  {title: "Harry Potter",
    director:"Chris Columbus",
    img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iXaMxA6-L95IwJ_WujDoFAHaEK%26pid%3DApi&f=1"
  },
  {title: "Lord of the rings",
  director:"Peter Jackson",
  img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EBLTk-yVACjmdbB34nMnqQHaJn%26pid%3DApi&f=1"
},
  {title: "heriditary",
  director:"Ari Aster",
  img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IJgsgfgg3Yt2UdMg5gOnpgHaK-%26pid%3DApi&f=1"
}
];


function App() {
  return (
    <div className="App"> 
    
    {movies.map(movie => (<Syntax name={movie.title} director={movie.director} image={movie.img}/> ))}
    
    </div>
    
  );
}

export default App;
