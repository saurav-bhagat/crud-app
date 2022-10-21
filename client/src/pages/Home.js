import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {

    const [ data, setData ] = useState([]);

    const getUsers = async () => {
        const response = await axios.get(`http://localhost:3200/users`);
        if(response.status = 200) {
            setData(response.data);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async (id) => {
        const response = await axios.delete(`http://localhost:3200/user/${id}`);
        if(response.status === 200) {
            alert(`user deleted successfully`);
        }
        getUsers();
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>No.</th>
                        <th style={{ textAlign: 'center' }}>Name</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Contact</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>    
                </thead>  
                <tbody>
                    {
                        data && data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope='row'>{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`}>
                                            <button>Edit</button>
                                        </Link>
                                        <button onClick={() => deleteUser(item.id)}>Delete</button>
                                        <Link to={`/view/${item.id}`}>
                                            <button>View</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }    
                </tbody>  
            </table>            
        </div>    
    );
};

export default Home;