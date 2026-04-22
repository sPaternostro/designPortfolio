import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

interface NavbarProps {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
	const { t, i18n } = useTranslation();
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	// Cerrar menú al cambiar de ruta
	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	// Bloquear scroll del body cuando el menú está abierto
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [isOpen]);

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		setIsOpen(false);
	};

	const navLinks = [
		{ to: '/', label: t('navbar.home') },
		{ to: '/projects', label: t('navbar.projects') },
		{ to: '/about', label: t('navbar.about') },
		{ to: '/contact', label: t('navbar.contact') },
	];

	return (
		<>
			<header className='navbar'>
				<nav className='container nav-container'>
					{/* Logo / Brand */}
					<Link to='/' className='nav-brand' aria-label='Ir al inicio'>
						<span className='nav-brand-initials'>SP</span>
					</Link>

					{/* Desktop: Links principales */}
					<div className='nav-links'>
						{navLinks.map(({ to, label }) => (
							<Link
								key={to}
								to={to}
								className={`nav-link ${location.pathname === to ? 'nav-link-active' : ''}`}
							>
								{label}
							</Link>
						))}
					</div>

					{/* Desktop: Controles */}
					<div className='nav-controls-wrapper'>
						<div className='lang-selector-pill'>
							{['es', 'en', 'jp'].map((lang) => (
								<button
									key={lang}
									onClick={() => changeLanguage(lang)}
									className={`lang-btn ${i18n.language.startsWith(lang) ? 'active' : ''}`}
								>
									{lang.toUpperCase()}
								</button>
							))}
						</div>

						<button
							className={`theme-toggle-btn ${darkMode ? 'is-dark' : 'is-light'}`}
							onClick={() => setDarkMode(!darkMode)}
							aria-label='Alternar tema'
						>
							<span className='theme-icon'>
								{darkMode ? (
									<svg width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
										<circle cx='12' cy='12' r='5' />
										<path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
									</svg>
								) : (
									<svg width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
										<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
									</svg>
								)}
							</span>
						</button>

						{/* Hamburguesa — solo visible en mobile */}
						<button
							className={`hamburger-btn ${isOpen ? 'is-open' : ''}`}
							onClick={() => setIsOpen(!isOpen)}
							aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
							aria-expanded={isOpen}
						>
							<span className='hamburger-line' />
							<span className='hamburger-line' />
							<span className='hamburger-line' />
						</button>
					</div>
				</nav>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}
				aria-hidden={!isOpen}
			>
				<div className='mobile-menu-content'>
					<nav className='mobile-nav-links'>
						{navLinks.map(({ to, label }) => (
							<Link
								key={to}
								to={to}
								className={`mobile-nav-link ${location.pathname === to ? 'mobile-nav-link-active' : ''}`}
							>
								{label}
							</Link>
						))}
					</nav>

					<div className='mobile-menu-controls'>
						<div className='lang-selector-pill lang-selector-mobile'>
							{['es', 'en', 'jp'].map((lang) => (
								<button
									key={lang}
									onClick={() => changeLanguage(lang)}
									className={`lang-btn ${i18n.language.startsWith(lang) ? 'active' : ''}`}
								>
									{lang.toUpperCase()}
								</button>
							))}
						</div>

						<button
							className={`theme-toggle-btn ${darkMode ? 'is-dark' : 'is-light'}`}
							onClick={() => setDarkMode(!darkMode)}
							aria-label='Alternar tema'
						>
							{darkMode ? (
								<svg width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
									<circle cx='12' cy='12' r='5' />
									<path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
								</svg>
							) : (
								<svg width='22' height='22' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
									<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}