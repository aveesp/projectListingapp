import React, { Component } from 'react';
import uuid from 'uuid';

class Addproject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleAddproject(e) {
        console.log('clicked');
        e.preventDefault();

        if (this.refs.title.value === '') {
            alert('title required!');
        }
        else if (this.refs.category.value === 'Select') {
            alert('Please select category required!');
        }
        else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function () {
                this.props.addproject(this.state.newProject);
            })
            this.refs.title.value = '';
            this.refs.category.value = 'Select';
        }
    }

    render() {

        let catOption = this.props.categories.map(option => {
            return <option value={option} key={option} >{option}</option>
        })

        return (
            <div className="AddProject">
                <form id="addprojectForm" onSubmit={this.handleAddproject.bind(this)}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group text-left">
                                <label>Title: </label>
                                <input type="text" ref="title" className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="form-group text-left">
                                <label>Category: &nbsp;</label>
                                <select ref="category" className="form-control">
                                    <option value="Select">Select</option>
                                    {catOption}
                                </select>
                            </div>
                        </div>
                        <div className="mt-3 col-md-4 text-left">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
                <hr />
            </div>
        );
    }
}

export default Addproject;