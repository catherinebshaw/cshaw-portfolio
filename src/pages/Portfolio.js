
  
import React, { Component } from 'react';
import projects from '../utils/projects.json';
import Wrapper from "../components/Wrapper";
import Project from "../components/Project";

class Portfolio extends Component {
    //setting this.state.projects to the json array
    state = {
        projects
    };
    render() {
        return (
            <div>
                <Wrapper>
                    <title>Portfolio</title>
                    < div className="row row-cols-1 row-cols-md-3 g-2 gx-3">
                    {this.state.projects.map(project => (
                        <Project
                            id={project.id}
                            key={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            site={project.site}
                            repository={project.repository}
                        />))}
                    </div>
                </Wrapper>
            </div>

        );
    }
}

export default Portfolio;