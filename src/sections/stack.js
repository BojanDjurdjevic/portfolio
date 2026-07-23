import skills from '../data/skills';


const stack = document.querySelector('#stack');


stack.innerHTML = `


<div class="container section">


    <div class="section-header">


        <span class="eyebrow">

            TECH STACK

        </span>


        <h2>

            Technologies I work with

        </h2>


        <p>

            Tools and technologies I use to build modern web applications.

        </p>


    </div>





    <div class="skills-grid">


        ${skills.map(group => `


            <div class="skill-card">



                <h3>

                    ${group.category}

                </h3>




                <div class="skill-items">


                    ${group.skills.map(skill => `


                        <span>

                            ${skill}

                        </span>


                    `).join('')}



                </div>


            </div>



        `).join('')}



    </div>


</div>


`;