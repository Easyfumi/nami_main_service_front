import React, { useEffect, useState } from 'react'
import { listTest } from '../services/TestService'

const ListTestComponent = () => {


    const [request, setRequest] = useState([])

    useEffect(() => {

        listTest().then((response) => {
            setRequest(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'>List test</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>factoryName</th>
                        <th>personData</th>
                        <th>email</th>
                        <th>type</th>
                        <th>description</th>
                        <th>localDateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        request.map(test =>
                            <tr key={test.id}>
                                <td>{test.id}</td>
                                <td>{test.factoryName}</td>
                                <td>{test.personData}</td>
                                <td>{test.email}</td>
                                <td>{test.type}</td>   
                                <td>{test.description}</td>
                                <td>{test.dateTime}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListTestComponent