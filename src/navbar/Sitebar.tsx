import React, {useState} from 'react';
import Navbar1 from "./Navbar1"
import{
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Button
} from 'reactstrap';

const Sidebar = (props: { clickLogout: React.MouseEventHandler<HTMLButtonElement> | undefined; })=> {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return(
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}></Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Sidebar;