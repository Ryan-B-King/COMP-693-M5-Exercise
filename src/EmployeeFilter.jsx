import React from 'react'
import { Link } from 'react-router-dom'

export default class EmployeeFilter extends React.Component {
    
    render() {
        const Separator = () => <span> | </span>
        return (
        <div>
            Filter:{'   '}
            <Link to={{ pathname: '/employees'}}>All Employees</Link>
            <Separator />
            <Link to={{ pathname: '/employees', search: '?employed=true'}}>Employed</Link>
            <Separator />
            <Link to={{ pathname: '/employees', search: '?employed=false'}}>Not Employed</Link>
        </div>
        )
    }
}
