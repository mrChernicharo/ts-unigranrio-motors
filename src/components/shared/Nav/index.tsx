import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import './nav.scss';

const pages = [
	{ path: '/', name: 'Home' },
	{ path: '/clients', name: 'Clientes' },
	{ path: '/motorcycles', name: 'Motos' },
	{ path: '/transactions', name: 'Vendas' },
];

const Nav = () => {
	return (
		<div className="nav-container">
			<span>Unigranrio Motors</span>

			<span>
				{pages.map(page => (
					<Link key={nanoid()} to={page.path}>
						<span>{page.name}</span>
					</Link>
				))}
			</span>
		</div>
	);
};

export default Nav;
