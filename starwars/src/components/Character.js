import React from 'react';
import './StarWars.scss';

const Character = props => {
    console.log(props.char)
    return (
        <div className='char'>
            <div className='data name'>{props.char.name}</div>
            <div className='data height'>{props.char.height}in</div>
            <div className='data mass'>{props.char.mass}lb</div>
            <div className='data hair_color'>{props.char.hair_color}</div>
            <div className='data skin_color'>{props.char.skin_color}</div>
        </div>
    )
}

export default Character;