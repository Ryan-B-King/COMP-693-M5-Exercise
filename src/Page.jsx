import React from 'react'
import Contents from './Content.jsx'

function NavBar() {
    return (
       <nav>
            <a href='/'>Home</a>
            {' | '}
            <a href='/#/employees'>All Employees</a>
            {' | '}
            <a href='/#/report'>report</a>
       </nav>
    )
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    )
}