import React from "react";
import { Outlet } from "react-router-dom";

export default function College() {
    return (
        <div>This is College Component

            <Outlet />
        </div>
    );
}