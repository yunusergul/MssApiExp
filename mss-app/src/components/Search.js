import React, {Component} from "react";
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from "react-bootstrap";
import {movies} from '../actions';
import {connect} from 'react-redux';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            equery:"",
        };
    }
    search(){
        let url=`http://127.0.0.1/api/search?keyword=${this.state.query}`;
        fetch(url, {
            method: "GET",
          })
          
            .then((response) => response.json())
            //.then((result)=>console.log(result));
            .then((jsonObj) => {
                console.log(this.props.movies(jsonObj));
                this.props.movies(jsonObj);});
    }
    render(){
        return(
            <div>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Search:</ControlLabel>{" "}
                        <FormControl type="text"  placeholder="Search Movie" onChange={(event)=>this.setState({query:event.target.value})}></FormControl>{" "}
                        <Button bsStyle="success" onClick={()=>this.search()}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default connect(null,{movies}) (Search);