import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const WA_NUMBER = '541173857303';
const WA_MESSAGE = encodeURIComponent('Hola Sebastián, vi tu portfolio y me gustaría hablar.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-grid'>
					{/* Identity */}
					<div className='footer-column'>
						<h4 className='footer-column-title'>{t('footer.identityTitle')}</h4>
						<div className='footer-identity-content'>
							<strong className='footer-name'>Sebastian Paternostro</strong>
							<p className='text-secondary footer-subtitle'>
								{t('footer.subtitle')}
							</p>
						</div>
					</div>

					{/* Navigation */}
					<div className='footer-column'>
						<h4 className='footer-column-title'>{t('footer.navTitle')}</h4>
						<nav className='footer-list'>
							<Link to='/projects' className='footer-link'>
								{t('navbar.projects')}
							</Link>
							<Link to='/about' className='footer-link'>
								{t('navbar.about')}
							</Link>
							<Link to='/contact' className='footer-link'>
								{t('navbar.contact')}
							</Link>
						</nav>
					</div>

					{/* Social & Contact */}
					<div className='footer-column'>
						<h4 className='footer-column-title'>{t('footer.contactTitle')}</h4>
						<div className='footer-list'>
							<a href='mailto:sebastian.paternostro@gmail.com' className='footer-link'>
								Mail
							</a>
							<a
								href={WA_LINK}
								target='_blank'
								rel='noopener noreferrer'
								className='footer-link'
							>
								WhatsApp
							</a>
							<a
								href='https://www.linkedin.com/in/spaternostro99/'
								target='_blank'
								rel='noopener noreferrer'
								className='footer-link'
							>
								LinkedIn
							</a>
							{/* <a
								href='https://github.com/sPaternostro'
								target='_blank'
								rel='noopener noreferrer'
								className='footer-link'
							>
								GitHub
							</a> */}
						</div>
					</div>
				</div>

				<div className='footer-bottom'>
					<p>
						© {new Date().getFullYear()} sPaternostro — Buenos Aires.{' '}
						{t('footer.rights')}
					</p>
				</div>
			</div>
		</footer>
	);
}