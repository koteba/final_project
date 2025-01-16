import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();  // Get the project ID from the URL
    const project = projects.find((project) => project.id === parseInt(id));  // Find the project based on ID

    if (!project) {
        return <div>Project not found!</div>;  // Handle case when project is not found
    }

    return (
        <div className="project-detail">
            <h2>{project.title}</h2>
            <div className="image-container">
                <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <p>{project.techStack}</p>
            <p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project
                </a>
            </p>
        </div>
    );
};

export default ProjectDetail;
