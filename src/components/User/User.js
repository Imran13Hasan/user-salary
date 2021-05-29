import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const { name, email, image, phone, salary } = props.user;
    const handleAddUser = props.handleAddUser;


    const divStyle = {
        display: 'flex',
        backgroundColor: '#c6faca45',
        margin: '20px',
        padding: '20px',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

    const imageStyle = {
        width: '180px',
        borderRadius: '50%',
        height: '180px',
        boxShadow: '3px 5px 7px 5px lightgray'
    }

    const dataStyle = {
        marginLeft: '20px'
    }

    const buttonStyle = {
        backgroundColor: 'orange',
        border: '1px solid #a4a4a4',
        borderRadius: '2px',
        padding: '7px',
    }

    return (
        <div style={divStyle}>
            <div style={dataStyle}>
                <h4>Name: {name}</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p><small>Salary: <strong>${salary}</strong></small></p>
                <button style={buttonStyle} onClick={() => handleAddUser(props.user)}> <FontAwesomeIcon icon={faPlus} />  Add Salary </button>
            </div>
            <img style={imageStyle} src={image} alt="" />
        </div>
    );
};

export default User;