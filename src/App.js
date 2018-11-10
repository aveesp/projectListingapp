import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';

import Projects from './components/projects';
import AddProject from './components/addProject';
import Todos from './components/todos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getProjects() {

    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Deisgn'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    })
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  handleAddProject(project) {
    // console.log(project);
    let totalProject = this.state.projects;
    totalProject.push(project);
    this.setState({ projects: totalProject });

  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }


  getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.setState({ todos: res.data });

      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App container">
        <h1 className="col-md-12">My Projects</h1>
        <hr />
        <h1 className="col-md-12">Add Project</h1>
        <AddProject className="col-md-12" addproject={this.handleAddProject.bind(this)} />
        <Projects className="col-md-12" onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;