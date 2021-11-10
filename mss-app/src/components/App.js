import React,{Component} from "react";
import MovieCont from "./MovieCont";


class App extends Component{
  
  render(){
    return(
      <div className="container">
        <div className="jumbotron bg-dark text-white">
          <div className="text-center " >
            <h1 >MSS App</h1>
            <p>Movie Search page</p>
          </div>
        </div>  
        <MovieCont/>
      </div>
        );
  }
}
export default App;