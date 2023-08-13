import React from 'react'
import { CompanyContext } from '../context/companyContext'

export default function Home() {
    const company = React.useContext(CompanyContext)
    return (
        <main>
            <section className="hero">
                <h1>{company.name}</h1>
                <p>{company.about}</p>
            </section>
        </main>
    )
}
