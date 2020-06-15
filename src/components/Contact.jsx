import React, { Component } from 'react'

export default function Contact( {name, email, phone, address, city, state, zip}) {
    // const {name, email, phone, address, city, state, zip} = props; 
    const divStyle = {
        width: '20%',
        margin: '10px',
        border: '3px solid black' 
    }
        return (
            <div style={divStyle}>
                <div>{name}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{address}</div>
                <div>{city}</div>
                <div>{state}</div>
                <div>{zip}</div>
            </div>
        )

}