import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const updatedUser = { name, email };

        //send to server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('user added successfully')
                e.target.reset();
            })
    };
    return (
        <div>
            <h3>Update user: {user.name}</h3>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='name' required /> <br />
                <input type="email" name='email' placeholder='email' required /> <br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};

export default UpdateUser;