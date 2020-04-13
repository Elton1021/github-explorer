import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {

    constructor(props){
        super(props);
        this.searchInput = createRef();
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

    render() {
        return (
            <div className ="Search">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.props.placeholder} defaultValue={this.props.value} ref={this.searchInput}></input>
                    <button className={this.props.buttonIcon}></button>
                </form>
            </div>
        )
    }
}

export default Search
