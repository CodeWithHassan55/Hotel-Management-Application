import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURI from '../../core';

const AdminPanel = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const obj = localStorage.getItem("user");
    const data = JSON.parse(obj);
    const { role } = data;
    useEffect(() => {
        if (obj) {
            if (role === "user") {
                return navigate("/");
            }
        }
    }, []);
    useEffect(async () => {
        if (obj) {
            try {
                const response = await axios.get(`${baseURI}getUsers`)
                setUsers(response.data);
            }
            catch (error) {
                alert("Users Not Found");
            }
        }
    }, []);
    const blockUser = async (ind) => {
        if (obj) {
            try {
                const response = await axios.put(`${baseURI}blockUser/${users[ind]._id}`, { status: users[ind].status });
                users.splice(ind, 1, response.data)
                setUsers([...users]);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <div className='getUsers'>
                <div>
                    <h2>Admin Panel</h2>
                    <table border="1px solid black" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>Username</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users[0] ?
                                users.map((ele, ind) => {
                                    if (ele.role !== "admin") {
                                        return <tr key={ind}>
                                            <td>{ind}</td>
                                            <td>{ele.username}</td>
                                            <td>{ele.number}</td>
                                            <td>{ele.email}</td>
                                            <td>{ele.role}</td>
                                            <td>{ele.status}</td>
                                            <td>
                                                <button className='blockBtn'
                                                    style={ele.status === "Active" ? { backgroundColor: "red" } : { backgroundColor: "green" }}
                                                    onClick={() => blockUser(ind)}>
                                                    {ele.status === "Active" ? "Block" : "Active"}
                                                </button>
                                            </td>
                                        </tr>
                                    }
                                }) :
                                <tr>
                                    <td colSpan={7} style={{ textAlign: "center" }}>Users Not Found</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminPanel
