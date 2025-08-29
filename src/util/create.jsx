/* import { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';


const Create = () => {


    //Consumindo a API
    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    })

    //CREATE
    const HandleAdd = () => {
        if (!newItem.trim()) return;
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {  "Content-Type": "application/json" },
            body: JSON.stringify({ name: newItem }),
        })
        .then((res) => res.json())
        .then((data) => setUsers((prevUsers) => [...prevUsers, data]));
        setNewItem("");
    }


    return (
        <>
        </>
    );
}

export default Create; */