import projects from '../data/projects';


const section = document.querySelector('#projects');


const items = projects.filter(
    project => !project.featured
);



section.innerHTML = `


<div class="container section">


    <div class="section-header">


        <span class="eyebrow">
            PROJECTS
        </span>


        <h2>
            More things I built
        </h2>


        <p>
            A selection of applications and platforms I worked on.
        </p>


    </div>





    <div class="projects-grid">


        ${items.map(project => `


            <article class="project-card">


                <div class="project-image">


                    <img 
                        src="${project.image}"
                        alt="${project.title}"
                    >


                </div>



                <div class="project-content">


                    <span class="project-category">

                        ${project.category}

                    </span>



                    <h3>

                        ${project.title}

                    </h3>




                    <p>

                        ${project.description}

                    </p>




                    <div class="tech-list">


                        ${project.technologies.map(tech=>`

                            <span>
                                ${tech}
                            </span>

                        `).join('')}


                    </div>




                    <div class="project-actions">


                        <a href="${project.github}" target="_blank">

                            GitHub →

                        </a>



                        ${
                            project.demo 
                            ?
                            `<a href="${project.demo}" target="_blank">
                                Live Demo →
                            </a>`
                            :
                            ''
                        }


                    </div>


                </div>


            </article>



        `).join('')}



    </div>


</div>


`;