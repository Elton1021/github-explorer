import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    static propTypes = {
        placeholder : PropTypes.string.isRequired,
        buttonIcon : PropTypes.string.isRequired,
        value : PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className ="Search">
                <input type="text" placeholder={this.props.placeholder} defaultValue={this.props.value}></input>
                <button className={this.props.buttonIcon}></button>
            </div>
        )
    }
}

export default Search
