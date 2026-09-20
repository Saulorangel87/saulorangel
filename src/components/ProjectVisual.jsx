import { ExternalLink } from './Icons';

function VisualContent({ project }) {
  if (project.image) {
    const isLogisticsGuide = project.id === 'logistica';
    return <div className="project-image-wrap"><img src={project.image} alt={isLogisticsGuide ? 'Captura pública do Guia de Logística do CDD Campos dos Goytacazes' : 'Captura de tela do projeto ' + project.title} loading="lazy" width={isLogisticsGuide ? 1914 : 1908} height={isLogisticsGuide ? 873 : 891} /><span className="image-shade" /></div>;
  }

  return <div className={'abstract-visual abstract-visual--' + project.visual} aria-hidden="true">
    {project.visual === 'cadencia' && <><span className="abstract-ring" /><span className="abstract-wave" /><span className="abstract-dot" /></>}
    {project.visual === 'estoque' && <><span className="abstract-box box-one" /><span className="abstract-box box-two" /><span className="abstract-box box-three" /></>}
    {project.visual === 'despesas' && <><span className="abstract-chart chart-one" /><span className="abstract-chart chart-two" /><span className="abstract-chart chart-three" /><span className="abstract-line" /></>}
  </div>;
}

export default function ProjectVisual({ project }) {
  if (!project.url) return <div className={'project-visual' + (project.image ? ' project-visual-static' : '')}><VisualContent project={project} /></div>;

  return <a className="project-visual project-visual-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={'Abrir o aplicativo ' + project.title}><VisualContent project={project} /><span className="visual-link-hint">abrir app <ExternalLink /></span></a>;
}
