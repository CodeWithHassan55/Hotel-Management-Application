import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import baseURI from "../../core";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(false);
  const obj = localStorage.getItem("user");
  const user = JSON.parse(obj);
  const { username, number, email, _id } = user;
  useEffect(() => {
    if (!obj) {
      navigate("/");
    }
  }, []);
  useEffect(async () => {
    const hotel = localStorage.getItem("hotel");
    if (hotel) {
      try {
        const response = await axios.get(`${baseURI}bookingDetails/${_id}`)
        setData(response.data)
      }
      catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <div className="div">
      <div className="contain">
        <h1>Dashboard</h1>
        {
          data === false ?
            <div className='userDetails'>
              <h2>User Details</h2>
              <table border="1px solid black" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{username}</td>
                    <td>{number}</td>
                    <td>{email}</td>
                  </tr>
                </tbody>
              </table>
            </div> :
            <>
              <div className='userDetails'>
                <h2>User Details</h2>
                <table border="1px solid black" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{username}</td>
                      <td>{number}</td>
                      <td>{email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='bookingDetails'>
                <h2>Booking Details</h2>
                <table border="1px solid white" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Name of Hotel</th>
                      <th>CNIC Number</th>
                      <th>Number of Persons</th>
                      <th>Number of Days to Stay</th>
                      <th>Bank Name</th>
                      <th>Card Number</th>
                      <th>Expiry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((ele, ind) => {
                        return <tr key={ind}>
                          <td>{ele.hotel}</td>
                          <td>{ele.cnic}</td>
                          <td>{ele.person}</td>
                          <td>{ele.days}</td>
                          <td>{ele.bank}</td>
                          <td>{ele.cardNo}</td>
                          <td>{ele.expiry}</td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </>
        }
      </div>
    </div >
  )
}

export default Dashboard
