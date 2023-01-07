import React, { useLayoutEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function OnErrorPage() {
    useLayoutEffect(() => {
        navigate("/")
    })

    const navigate = useNavigate();
    return (
        <>
        </>
    )
}
