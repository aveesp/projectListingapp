import React, { Component } from 'react';

class ProjectItems extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }
    render() {
        return (
            <li className="listItems">
                <strong>{this.props.project.title}</strong> - {this.props.project.category} <span className="btn btn-success close-btn" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</span>
            </li>
        );
    }
}

export default ProjectItems;