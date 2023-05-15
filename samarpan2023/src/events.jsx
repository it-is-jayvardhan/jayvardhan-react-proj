import React from 'react';


function MyTable(){
    return (
        <>

        <div className="w3-container w3-card w3-responsive ">
        <h1 className="w3-center ">EVENTS</h1>
        <div className="w3-centered w3-container w3-padding-64">
        <table className="w3-center w3-responsive w3-table-all w3-border w3-xlarge">
        <tbody>
        <tr>
        <th className="w3-center">DATE</th>
        <th className="w3-center">EVENT</th>
        </tr>
        </tbody>
                <tr>
        <th className="w3-center">15/05/2023</th>
        <th className="w3-center">PAINTING </th>
        </tr>
        </table>
        </div>
        </div>
        </>
    );
};

export default MyTable;
