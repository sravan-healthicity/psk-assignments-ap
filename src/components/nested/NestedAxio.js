import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NestedAxio() {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then((response) => {
                setApiData(response.data.users);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <blockquot class="blockquote"><h3>Nested Axio Results</h3> </blockquot>
            <br />
            <table className="table table-bordered pd-3">
                <thead>
                    <tr class="table-primary">
                        <th>SI no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company Address</th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                    {apiData.map((data, index) => (
                        <tr key={data.id}>
                            <td>{index + 1}</td>
                            <td>{`${data.firstName} ${data.lastName}`}</td>
                            <td>{data.email}</td>
                            <td>
                                {data.company && data.company.address ? (
                                    `${data.company.address.city}`
                                ) : (
                                    "N/A"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
