import React from 'react';
import './SharedBannar.css'

const SharedBannar = ({ children }) => {
    return (
        <>
            <div className="shared-banner fluid">
                <div>
                    <h2 className=" shared-banner-name text-center fs-1">{children}</h2>
                </div>
            </div>
        </>
    );
};

export default SharedBannar;