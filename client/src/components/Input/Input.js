import React from 'react'
import {
    TextInputContainer,
    TextInput
 } from './Input-styled'

function Input({ value, onChange }) {
    return (
        <TextInputContainer>
            <TextInput 
                value={value}
                onChange={onChange}
            />
        </TextInputContainer>
    )
}

export default Input
