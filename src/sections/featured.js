import projects from '../data/projects';


document.addEventListener(
    'DOMContentLoaded',
    () => {


        const featured = document.querySelector('#featured');


        const project = projects.find(
            project => project.featured
        );




featured.innerHTML = `


<div class="container section">


    <div class="grid gap-16 lg:grid-cols-2 items-center">


        <!-- LEFT -->


        <div>


            <span class="eyebrow">

                FEATURED PROJECT

            </span>



            <h2 class="text-5xl font-bold mt-6">

                ${project.title}

            </h2>



            <p class="text-slate-300 text-lg mt-8 leading-8">

                ${project.description}

            </p>



            <div class="feature-list mt-8">


                ${project.features.map(feature => `

                    <div>

                        ✓ ${feature}

                    </div>

                `).join('')}


            </div>



            <div class="tech-list mt-8">


                ${project.technologies.map(tech => `

                    <span>

                        ${tech}

                    </span>

                `).join('')}


            </div>



            <div class="project-links mt-10 flex gap-6">


                <a href="${project.github}" target="_blank">
                    GitHub →
                </a>


                <a href="${project.demo}" target="_blank">
                    Live Demo →
                </a>


            </div>


        </div>





        <!-- RIGHT -->


        <div class="card featured-preview">

            <div class="window">

                <div class="window__header">

                    <span></span>
                    <span></span>
                    <span></span>

                    <p>BookYourHotel Dashboard</p>

                </div>

                <div class="window__body">

                    <div class="dashboard-card">

                        <h3>📅 Inventory Calendar</h3>

                        <div class="calendar">

                            <div class="calendar-row">
                                <span>01</span>
                                <span>02</span>
                                <span>03</span>
                                <span>04</span>
                                <span>05</span>
                                <span>06</span>
                                <span>07</span>
                            </div>

                            <div class="calendar-row status">
                                <span>✓</span>
                                <span>✓</span>
                                <span>✕</span>
                                <span>✓</span>
                                <span>✓</span>
                                <span>✓</span>
                                <span>✓</span>
                            </div>

                        </div>

                    </div>

                    <div class="dashboard-item">

                        <span>💶</span>

                        <div>

                            <strong>Dynamic Pricing</strong>

                            <small>Seasonal room pricing</small>

                        </div>

                    </div>

                    <div class="dashboard-item">

                        <span>⭐</span>

                        <div>

                            <strong>Supplier Dashboard</strong>

                            <small>Availability & reservations</small>

                        </div>

                    </div>

                </div>

            </div>

        </div>


    </div>


</div>


`;

})