import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">My Team</NavbarBrand>
        <nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add User</Link>
          </NavItem>
        </nav>
      </Container>
    </Navbar>
  )
}

export default Heading
