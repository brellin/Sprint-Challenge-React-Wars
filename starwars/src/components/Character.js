import React from 'react';
import './StarWars.scss';

const Character = props => {
    console.log(props.char)
    return (
        <div className='char'>
            <fieldset className='data name'>
                <legend>Name:</legend>
                {props.char.name}</fieldset>
            <fieldset className='data height'>
                <legend>Height:</legend>
                {props.char.height}in</fieldset>
            <fieldset className='data mass'>
                <legend>Weight:</legend>
                {props.char.mass}lb</fieldset>
            <fieldset className='data hair_color'>
                <legend>Hair Color:</legend>
                {props.char.hair_color}</fieldset>
            <fieldset className='data skin_color'>
                <legend>Skin Color:</legend>
                {props.char.skin_color}</fieldset>
        </div>
    )
}

export default Character;