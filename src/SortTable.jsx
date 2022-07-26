import React, { useState } from 'react'
import MockData from '../src/MOCK_DATA.json'

const SortTable = () => {

    const [data, setData] = useState(MockData)
    const [order, setOrder] = useState("ASC")

    const sorting = (col) => {
        if(order === "ASC") {
            const sorted = [...data].sort((a, b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("DSC")
        }



        if(order === "DSC") {
            const sorted = [...data].sort((a, b) =>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("ASC")
        }
    }

  return (
    <div className='container'>
        <table className='table table-bordered'>
            <thead>
                <th 
                onClick={() => sorting("first_name")}
                style={{ cursor: 'pointer' }}
                >First Name</th>
                <th 
                onClick={() => sorting("last_name")}
                style={{ cursor: 'pointer' }}>Last Name</th>
                <th 
                onClick={() => sorting("email")}
                style={{ cursor: 'pointer' }}>Email</th>
                <th 
                onClick={() => sorting("gender")}
                style={{ cursor: 'pointer' }}>Gender</th>
            </thead>
            <tbody>
                {
                    data.map((d) => (
                        <tr key={d.id}>
                            <td> {d.first_name} </td>
                            <td> {d.last_name} </td>
                            <td> {d.email} </td>
                            <td> {d.gender} </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default SortTable