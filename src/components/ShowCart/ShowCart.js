import React from 'react';

const ShowCart = () => {
        console.log('abc')

        const things= localStorage.cart;
        const key = Object.keys(things)
        console.log(key)
    return (
        <div style={{width:'200px'}}>
            <h2>cart</h2>
            <table className='table table-bordered'>
                <tr>
                    <td>item</td>
                    <td>no of added</td>
                </tr>
                <tr>

                    {
                        things.length
                    }
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
};

export default ShowCart;