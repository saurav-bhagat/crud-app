import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    contact: ""
}

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const {name, email, contact} = state;


    useEffect(() => {

        if(id) {
            getSingleUser(id);
        }

    }, [id]);

    const getSingleUser = async (id) => {
        
        const response = await axios.get(`http://localhost:3200/user/${id}`);
        if(response.status === 200){
            // alert(`${response.data}`);
            console.log(response.data);
        }
        setState({
            name: response.data.name, 
            email: response.data.email,
            contact: response.data.contact,
        })

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(state);
        setTimeout(navigate("/"), 300);
    }

    const addUser = async (state) => {
        
        const response = await axios.post("http://localhost:3200/user", state);
        if(response.status === 200){
            // alert(`user added successfully`);
        }else {
            console.log("Error while saving user");
        }

    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:3200/user/${id}`, state);
        console.log("Inside handleUpdate", state);
        console.log(response);
        if(response.status === 200){
            console.log(response.data);
            setState({
                ...response.data[0], 
            });
            setTimeout(navigate("/"), 100);
        }
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name] : value })
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <form
                onSubmit={id ? handleUpdate : handleSubmit}
            >
                <label htmlFor='name'>Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={handleInputChange}
                />
                <label htmlFor='email'>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={handleInputChange}
                />
                <label htmlFor='contact'>Contact</label>
                <input 
                    type="number"
                    id="contact" 
                    name="contact"
                    value={contact}
                    onChange={handleInputChange}
                />
                
                <br /><br />
                <input type="submit" value={id? "Update User" : "create User"} />
            </form>
            
        </div>    
    );
};

export default AddEdit;