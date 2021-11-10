import React,{Component} from 'react';
const imdbUrl='https://www.imdb.com/title/';
class MovieItem extends Component{
    render(){
        return(
            <div className="col-sm-6 col-md-4">
                <a href={imdbUrl+this.props.movie.imdbID} target={"_blank"} role="button">
                    <div className="thumbnail">
                        <img src={this.props.movie.Poster} alt={this.props.movie.Title} className="img-thumbnail"/>
                        <div className="caption">
                            <h3>{this.props.movie.Title}</h3>
                           
                        </div>
                    </div> </a>
            </div>
                
        )
    }
}
export default MovieItem