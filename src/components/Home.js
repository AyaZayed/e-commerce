import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { ProductContext } from '../context/productContext'

export default function Home() {
    console.log(useContext(AuthContext));
    console.log(useContext(ProductContext));
    return (
        <div>Home</div>
    )
}
