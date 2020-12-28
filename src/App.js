import PropTypes from "prop-types"

function Syntax({name, director,image,rating}){
  return(<div>
    <h2>I like {name} made by {director}</h2>
    <h4>rating {rating}/5 </h4>
    <img src={image} alt="poster"/>
  </div>);
}

const movies = [
  {
    id:1,
    title: "God Father",
    director : "Francis Ford Coppola" ,
    img :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VAUbK8bhXAxPqygIkoc-IwHaLF%26pid%3DApi&f=1",
    rating : 5
  },
    
  {
    id:2,
    title: "Harry Potter",
    director:"Chris Columbus",
    img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iXaMxA6-L95IwJ_WujDoFAHaEK%26pid%3DApi&f=1",
    rating : 4.5
  },
  {
    id:3,
    title: "Lord of the rings",
    director:"Peter Jackson",
    img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EBLTk-yVACjmdbB34nMnqQHaJn%26pid%3DApi&f=1",
    rating :4.8
  },
  {
  id:4,  
  title: "heriditary",
  director:"Ari Aster",
  img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IJgsgfgg3Yt2UdMg5gOnpgHaK-%26pid%3DApi&f=1",
  rating : 5
}
];

Syntax.propTypes ={
  name:PropTypes.string.isRequired,
  director:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App"> 
    
    {movies.map(movie => (<Syntax key={movie.id} name={movie.title} director={movie.director} image={movie.img} rating={movie.rating} /> ))}
    
    </div>
    
  );
}

export default App;
