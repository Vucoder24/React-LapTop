import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <div className="h-full">
            Products
            <Link to="/" className="underline">
                go to home
            </Link>
        </div>
    )
}
