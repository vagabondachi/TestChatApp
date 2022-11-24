import React from 'react';
import Navbar from '../components/Navbar';

export default function BaseLayout({children, ...props}) {

    return (
        <>
        <Navbar {...props} />
        {children}
        </>
    )
}

function getDisplayName(Component){
    return Component.getDisplayName || Component.name || 'Component';
}

export const withBaseLayout = (Component, config) => (props) => {
    const viewName = getDisplayName(Component);
    return (
        <>
           
            <Component {...props}/>
            <Navbar {...config} view = {viewName}/>
        </>
    )
    
}