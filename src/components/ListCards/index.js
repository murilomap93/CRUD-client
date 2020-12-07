import React, { useState, useEffect } from 'react';
import './index.css';

import Card from '../Card';
var randomColor = require('randomcolor');
export default props => {

    return (
        <>
            <div className='Cards'>
                {props.movieList.map((val, index) => {
                    var color = randomColor();
                    return (
                        <Card key={index} filme={val} color={color} movieList={props.movieList} getMovieList={props.getMovieList}></Card>
                    )
                })}
            </div>
        </>
    );
}