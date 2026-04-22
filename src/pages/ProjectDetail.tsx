import { useParams, Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const projects = [
  { id: 'incident-standardization', title: 'Incident Reporting', category: 'Process Design' },
  { id: 'gamingcity', title: 'GamingCity', category: 'Ecommerce Design' }
]

export default function ProjectDetail() {
  const { id } = useParams()
  useReveal()

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <main className="container section-spacer flex-column" style={{alignItems: 'center'}}>
        <h2 className="text-gradient">Project not found</h2>
        <Link to="/projects" className="btn btn-secondary">Back to projects</Link>
      </main>
    )
  }

  return (
    <main className="container">
      <article className="reveal section-spacer project-detail-header">
        <Link to="/projects" className="text-muted nav-link back-link">
          ← {projects[0] ? 'Back' : 'Back'} 
        </Link>
        
        <p className="card-tag">{project.category}</p>
        <h1 className="text-gradient home-hero-title">{project.title}</h1>
        
        <div className="glass-card section-spacer" style={{minHeight: '60vh'}}>
          {/* Aquí inyectarás el contenido del Case Study */}
          <p className="text-secondary">Contenido detallado en proceso...</p>
        </div>
      </article>
    </main>
  )
}