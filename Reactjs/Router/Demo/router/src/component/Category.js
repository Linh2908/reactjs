import React from 'react';
import { unstable_HistoryRouter } from "react-router-dom";

function Category () {
    let history = unstable_HistoryRouter();
    const sendDataToProduct = (event) => {
        history.push(`/product/${event.target.value}`);
    }

    return (
        <>
            <h2>Select a Category:</h2>
            <select 
                onChange={(e) => sendDataToProduct(e)}
            >
                <option value="1">
                    Honda
                </option>
                <option value="2">
                    Suzuki
                </option>
                <option value="3">
                    Yamaha
                </option>
            </select>
        </>
    );
}

export default Category;
