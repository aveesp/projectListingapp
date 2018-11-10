import React, { Component } from 'react';
import ProjectItmes from './projectItems';

class Projects extends Component {

    deletProject(id) {
        this.props.onDelete(id);
    }

    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return <ProjectItmes onDelete={this.deletProject.bind(this)} project={project} key={project.title} />
            })
        }
        return (
            <div className="addProject">
                <h1>Latest Projects</h1>
                {projectItems}
            </div>
        );
    }
}

export default Projects;