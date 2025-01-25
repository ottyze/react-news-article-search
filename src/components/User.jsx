import React, { createContext, useState } from "react";

/**
 * @type {React.Context<{preferences: any, setPreferences: (p: any) => void}>}
 */
export const UserContext = createContext({
    preferences: {},
    setPreferences: (p) => {console.error('default context used')},
});

export default function User(props) {
    const [preferences, setPreferences] = useState({
        science: false,
        technology: false,
        health: false,
        world: false,
        entertainment: false,
        sports: false,
        business: false,
        nation: false,
    });

    return (
        <UserContext.Provider value={{ preferences, setPreferences }}>
            {props.children}
        </UserContext.Provider>
    );
}
