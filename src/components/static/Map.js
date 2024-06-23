import React, { useState, useEffect } from "react";
import Data from '../../Database/Data';

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const dataProducts = Data;
    // console.log(dataProducts[0]);


    return (
        <div>
            <h1>Map</h1>
            <table className="table table-bordered pd-3">
                <thead className="thead-light">
                    <tr className="table-primary">
                        <th>Id</th>
                        <th>Title</th>
                        <th>Star</th>
                        <th>Reviews</th>
                        <th>Prev Price</th>
                        <th>New Price</th>
                        <th>Company</th>
                        <th>Color</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                    {dataProducts.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.star}</td>
                            <td>{item.reviews}</td>
                            <td>{item.prevPrice}</td>
                            <td>{item.newPrice}</td>
                            <td>{item.company}</td>
                            <td>{item.color}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Map = () => {
    return (
        <div>
            <DataFetcher />
        </div>
    );
};

export default Map;
