import React,{Component} from "react";
import Search from "./Search";
import {connect} from 'react-redux';
import MovieItem from "./MovieItem";
class MovieCont extends Component{
    render(){
        return(
            <div>
                <div>
                    <Search/>
                    <br/>
                </div>
                <div>{this.props.movies.map(item=>{return <MovieItem movie={item}/>;})}</div>
            </div>
        )
            
    }
}
function mapStateTopProps(state){
    console.log(state);
    return {movies:state.movies};
}

export default connect(mapStateTopProps,null)(MovieCont);