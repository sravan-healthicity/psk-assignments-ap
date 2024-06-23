import React from "react";
import { Outlet } from "react-router-dom";

export default function HookNav() {
    return (
        <div>
            <h1>Hooks Demos</h1>

            <Outlet />
        </div>
    );
}