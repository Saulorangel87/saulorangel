export default function ProjectVisual({ project }) {
  if (project.image) return <div className="project-image-wrap"><img src={project.image} alt="Captura pública do Guia de Logística do CDD Campos dos Goytacazes" loading="lazy" width="1914" height="873" /><span className="image-shade" /></div>;
  return <div className={`abstract-visual abstract-visual--${project.visual}`} aria-hidden="true">
    {project.visual === 'cadencia' && <><span className="abstract-ring" /><span className="abstract-wave" /><span className="abstract-dot" /></>}
    {project.visual === 'estoque' && <><span className="abstract-box box-one" /><span className="abstract-box box-two" /><span className="abstract-box box-three" /></>}
    {project.visual === 'despesas' && <><span className="abstract-chart chart-one" /><span className="abstract-chart chart-two" /><span className="abstract-chart chart-three" /><span className="abstract-line" /></>}
  </div>;
}
