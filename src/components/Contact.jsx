import React, { Component } from 'react'

export default function Contact( {name, email, phone, address, city, state, zip, remove}) {
    // const {name, email, phone, address, city, state, zip} = props; 
    const divStyle = {
        width: '20%',
        margin: '10px',
        border: '3px solid black' 
    }
    const content = {
        padding: '0 18px',
        display: 'none',
        overflow: 'hidden',
        backgroundColor: '#f1f1f1'
    }
        return (
            <div style={divStyle}>
                <div>{name}</div>
                <div>{city}</div>
                <div>{state}</div>
                <button type="button" className="collapsible">View All</button>
                <div style={content}>
                    <div>{email}</div>
                    <div>{phone}</div>
                    <div>{address}</div>
                    <div>{zip}</div>
                </div>
                <button onClick={remove}>Delete</button>
            </div>
        )

}