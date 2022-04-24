import React from 'react';

const AddUsers = () => {

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email };

        //send to server
        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('user added successfully')
                e.target.reset();
            })

    }


    return (
        <div>
            <h2>Please add Users</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='name' required /> <br />
                <input type="email" name='email' placeholder='email' required /> <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default AddUsers;