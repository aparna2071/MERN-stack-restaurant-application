import React from 'react';
import {
Nav,
NavLink,

NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		

		<NavMenu>
			
		<NavLink to='/OrderPizza' activeStyle>
			Order Pizza
		</NavLink>
		<NavLink to='/BuildPizza' activeStyle>
			Build Ur Pizza
		</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
		
	</Nav>
	</>
);
};

export default Navbar;