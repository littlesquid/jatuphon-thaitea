import React from 'react';
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
  DropdownItem } from 'reactstrap';
  import ScrollIntoView from 'react-scroll-into-view';
  //import { SocialIcon } from 'react-social-icons';
  import './menu.css';

  import githublogo from '../../images/github32x32.png';



export default class Menu extends React.Component {
  
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
    return (
      <div>
        <Navbar color="dark" dark expand="md" fixed="top">
          <NavbarBrand href="/">ReactLearner</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink className="nav" to="/">
                            <ScrollIntoView selector="#home">Home</ScrollIntoView>
                 </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav" to="/">
                            <ScrollIntoView selector="#product">Product</ScrollIntoView>
                 </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav" to="/">
                            <ScrollIntoView selector="#contact">Contact</ScrollIntoView>
                 </NavLink>
              </NavItem>
              <NavItem>
                <img src={githublogo} alt=""/>
                {/* <SocialIcon className="my-social-icon" network="github" 
                          url="https://github.com/littlesquid/tic-tac-toe-react" 
                          bgColor="#8E8D8D" 
                          style={{ height: 25, width: 25 }}/> */}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}