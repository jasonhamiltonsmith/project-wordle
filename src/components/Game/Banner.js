import React from 'react';

export function Banner({theme, children}) {
    return (
        <div className={`banner {theme}`}>
            {children}
        </div>
    )
}

