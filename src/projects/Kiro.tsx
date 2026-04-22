import { useTranslation } from 'react-i18next';
import BrowserFrame from '../components/BrowserFrame';
import useReveal from '../hooks/useReveal';
import CaseFooter from '../components/CaseFooter';
import SEO from '../components/SEO';

export default function Kiro() {
	const { t } = useTranslation();
	useReveal();

	<SEO
		title='KIRO Store'
		description='Desarrollo de tienda online desde cero sobre TiendaNube con diseño personalizado y foco en conversión.'
		path='/projects/kiro'
	/>;

	return (
		<main className='container case-study-page'>
			<section className='reveal case-hero section-spacer'>
				<p className='case-category'>{t('kiro.category')}</p>
				<h1 className='case-title'>{t('kiro.title')}</h1>
				<p className='case-intro'>{t('kiro.intro')}</p>

				<div className='case-meta-grid'>
					<div className='meta-item'>
						<p className='meta-label'>{t('kiro.meta.role')}</p>
						<p className='meta-value'>{t('kiro.meta.roleValue')}</p>
					</div>
					<div className='meta-item'>
						<p className='meta-label'>{t('kiro.meta.timeline')}</p>
						<p className='meta-value'>{t('kiro.meta.timelineValue')}</p>
					</div>
					<div className='meta-item'>
						<p className='meta-label'>{t('kiro.meta.focus')}</p>
						<p className='meta-value'>{t('kiro.meta.focusValue')}</p>
					</div>
				</div>
			</section>

			{/* MI ROL */}
			<section className='reveal section-spacer case-content-text'>
				<h2>{t('kiro.myRole.title')}</h2>
				<div className='text-stack'>
					<p>{t('kiro.myRole.p1')}</p>
				</div>
			</section>

			<section className='reveal section-spacer case-content-text'>
				<h2>{t('kiro.overview.title')}</h2>
				<div className='text-stack'>
					<p>{t('kiro.overview.p1')}</p>
					<p>{t('kiro.overview.p2')}</p>
					<p>{t('kiro.overview.p3')}</p>
				</div>
			</section>

			<section className='reveal section-spacer case-content-text'>
				<h2>{t('kiro.context.title')}</h2>
				<div className='text-stack'>
					<p>{t('kiro.context.p1')}</p>
					<p>{t('kiro.context.p2')}</p>
					<p>{t('kiro.context.p3')}</p>
				</div>
			</section>

			<section className='reveal section-spacer case-content-text'>
				<h2>{t('kiro.challenge.title')}</h2>
				<div className='text-stack'>
					<ul className='case-list'>
						<li>{t('kiro.challenge.item1')}</li>
						<li>{t('kiro.challenge.item2')}</li>
						<li>{t('kiro.challenge.item3')}</li>
						<li>{t('kiro.challenge.item4')}</li>
						<li>{t('kiro.challenge.item5')}</li>
					</ul>
				</div>
			</section>

			<section className='reveal section-spacer case-content-text'>
				<h2>{t('kiro.approach.title')}</h2>
				<div className='text-stack'>
					<p>{t('kiro.approach.p1')}</p>
					<p>{t('kiro.approach.p2')}</p>
					<ul className='case-list'>
						<li>{t('kiro.approach.item1')}</li>
						<li>{t('kiro.approach.item2')}</li>
						<li>{t('kiro.approach.item3')}</li>
						<li>{t('kiro.approach.item4')}</li>
						<li>{t('kiro.approach.item5')}</li>
					</ul>
					<p>{t('kiro.approach.p3')}</p>
				</div>
			</section>

			<section className='reveal section-spacer'>
				<h2>{t('kiro.keyDecisions.title')}</h2>
				<div className='case-gallery-grid'>
					<div className='glass-card'>
						<h3>{t('kiro.keyDecisions.structure.title')}</h3>
						<p className='text-secondary'>
							{t('kiro.keyDecisions.structure.desc')}
						</p>
					</div>
					<div className='glass-card'>
						<h3>{t('kiro.keyDecisions.navigation.title')}</h3>
						<p className='text-secondary'>
							{t('kiro.keyDecisions.navigation.desc')}
						</p>
					</div>
					<div className='glass-card'>
						<h3>{t('kiro.keyDecisions.clarity.title')}</h3>
						<p className='text-secondary'>
							{t('kiro.keyDecisions.clarity.desc')}
						</p>
					</div>
					<div className='glass-card'>
						<h3>{t('kiro.keyDecisions.adaptation.title')}</h3>
						<p className='text-secondary'>
							{t('kiro.keyDecisions.adaptation.desc')}
						</p>
					</div>
				</div>
			</section>

			<section className='reveal section-spacer'>
				<h2>{t('kiro.visuals.title')}</h2>
				<p className='section-description'>{t('kiro.visuals.desc')}</p>
				<div className='comparison-grid'>
					<BrowserFrame src='/images/kiro/home.png' />
					<BrowserFrame src='/images/kiro/product.png' />
				</div>
				<div
					className='full-width-frame'
					style={{ marginTop: '2rem' }}
				>
					<BrowserFrame src='/images/kiro/checkout.png' />
				</div>
			</section>

			<section className='reveal section-spacer case-content-text'>
				<h2>{t('kiro.outcome.title')}</h2>
				<div className='text-stack'>
					<ul className='case-list'>
						<li>{t('kiro.outcome.item1')}</li>
						<li>{t('kiro.outcome.item2')}</li>
						<li>{t('kiro.outcome.item3')}</li>
						<li>{t('kiro.outcome.item4')}</li>
					</ul>
				</div>
			</section>

			<section className='reveal section-spacer case-content-text'>
				<h2>{t('kiro.takeaways.title')}</h2>
				<div className='text-stack'>
					<ul className='case-list'>
						<li>{t('kiro.takeaways.item1')}</li>
						<li>{t('kiro.takeaways.item2')}</li>
						<li>{t('kiro.takeaways.item3')}</li>
						<li>{t('kiro.takeaways.item4')}</li>
						<li>{t('kiro.takeaways.item5')}</li>
					</ul>
				</div>
			</section>

			<section className='reveal section-spacer case-content-text'>
				<h2>{t('kiro.value.title')}</h2>
				<div className='text-stack'>
					<ul className='case-list'>
						<li>{t('kiro.value.item1')}</li>
						<li>{t('kiro.value.item2')}</li>
						<li>{t('kiro.value.item3')}</li>
						<li>{t('kiro.value.item4')}</li>
					</ul>
				</div>
			</section>

			<CaseFooter prev={{ label: 'GamingCity', to: '/projects/gamingcity' }} />
		</main>
	);
}
