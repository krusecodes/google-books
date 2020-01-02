import React, { Component } from 'react';
import './filter.css';

class Filter extends Component {
  render() {
    return (
        <div className="Filter-options">
            <h2>Print Type: </h2>
            <select>
                <option
                    value="All">All</option>
                <option
                    value="Paid">Paid</option>
                <option
                    value="Free">Free</option>
            </select>
            <h2>Book Type: </h2>
            <select>
                <option
                    value="No Filter">No Filter</option>
                <option
                    value="eBook">eBook</option>
                <option
                    value="Book">Book</option>
            </select>
      </div> 
    );
  }
}

export default Filter;