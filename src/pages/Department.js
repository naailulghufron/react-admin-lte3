import React from 'react';
import QRCode from 'react-qr-code';
// import SmallBox from '../components/small-box/SmallBox';

const Department = () => {
    const elements = ['one', 'two', 'three'];
    return (
        <div className="container-fluid">
            <div className="row">
                <QRCode value="xxx" size={35} />
            </div>
            <div className="row">
                <ul>
                    {elements.map((value, i) => {
                        // return <li>{value}</li>;
                        return (
                            <li>
                                <QRCode value={value} size={(i + 1) * 100} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Department;
