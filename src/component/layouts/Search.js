import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {

    constructor(props){
        super(props);
        this.searchInput = createRef();
        this.searchCloseIcon = createRef();
    }

    static propTypes = {
        placeholder : PropTypes.string.isRequired,
        buttonIcon : PropTypes.string.isRequired,
        value : PropTypes.string.isRequired,
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.changeState(this.searchInput.current.value);
    }

    checkValue = () =>{
        if(this.searchInput.current.value !== ""){
            this.searchCloseIcon.current.style.display = "inline-block";
        }else{
            this.searchCloseIcon.current.style.display = "none";
        }
    }

    clearSearch = () =>{
        this.searchInput.current.value = "";
        this.searchCloseIcon.current.style.display = "none";
        this.props.changeState(this.searchInput.current.value);
    }

    render() {
        return (
            <div className ="Search">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onKeyUp={this.checkValue} placeholder={this.props.placeholder} defaultValue={this.props.value} ref={this.searchInput}></input>
                    <div className="closeIcon" ref={this.searchCloseIcon}>
                        <button className="fa fa-times" onClick={this.clearSearch}></button>
                    </div>
                    <button className={this.props.buttonIcon}></button>
                </form>
            </div>
        )
    }
}

export default Search
