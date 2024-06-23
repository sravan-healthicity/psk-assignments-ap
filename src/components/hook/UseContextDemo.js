import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function UseContextDemo() {
    const [user, setUser] = useState("Test user");

    return (
        <span >
            <h1>User Context</h1>
            <UserContext.Provider value={user}>
                <h2>{`Hello user ${user}`}</h2>
                <Component1 />
            </UserContext.Provider>
        </span>
    );
}

function Component1() {
    return (
        <span >
            <h2>Component 1</h2>
            <Component2 />
        </span>
    );
}

function Component2() {
    const user = useContext(UserContext);
    return (
        <span >
            <h3>Component 2</h3>
            <Component3 />
        </span>
    );
}

function Component3() {
    const user = useContext(UserContext);
    return (
        <span >
            <h2>Component 3</h2>
            <h3>{`Hello user ${user}`}</h3>
        </span>
    );
}