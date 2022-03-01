import * as React from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/functions';
import './nav.css';

const pages = [
	{ path: '/', name: 'Home' },
	{ path: '/clients', name: 'Clientes' },
	{ path: '/motorcycles', name: 'Motos' },
	{ path: '/transactions', name: 'Vendas' },
];

const Nav = () => {
	return (
		<div className="nav-container">
			{pages.map(page => (
				<Link key={nanoid()} to={page.path}>
					<span>{page.name}</span>
				</Link>
			))}
		</div>
	);
};

export default Nav;
