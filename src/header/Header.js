import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const NavbarStyle = {
      "background-color": "rgb(0, 174, 255)"
    };
    const textColor = {
      color: "white",
      "text-align": "center"
    };
    return (
      <div>
        <Navbar light expand="md" style={NavbarStyle}>
          <NavbarBrand style={textColor} href="/">
            Home
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={textColor} nav caret>
                  USERS
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/add">ADD</DropdownItem>
                  <DropdownItem href="/delete">VIEW</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink style={textColor} href="/claim">
                  CLAIMS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={textColor} href="/insurence">
                  INSURENCE PAYERS
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
