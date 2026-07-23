const hero = document.querySelector('#hero');


hero.innerHTML = `

<div class="container hero-grid">


    <div class="hero-content fade-up">


        <span class="eyebrow">

            FULL STACK DEVELOPER

        </span>


        <h1 class="hero-title">

            Building modern

            <span class="text-gradient">

                web applications

            </span>

            with Laravel & TypeScript.

        </h1>


        <p class="hero-description">

            I build scalable web applications with Laravel, TypeScript and Vue.js, focusing on clean architecture, maintainable code and modern user experiences.

        </p>


        <div class="hero-buttons">


            <a
                href="#featured"
                class="btn btn-primary">

                View Projects

            </a>


            <a
                href="/portfolio/cv/Bojan_Djurdjevic_CV.pdf"
                class="btn btn-secondary"
                target="_blank">

                Download CV

            </a>


        </div>


    </div>



    <div class="hero__preview">


        <div class="window">


            <div class="window__header">


                <span></span>
                <span></span>
                <span></span>


                <p>

                    Full Stack Application

                </p>


            </div>



            <div class="window__body">


                <h3>

                    App Dashboard

                </h3>


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


                <div class="stats">

                    REST API Integration

                </div>


                <div class="stats">

                    Dynamic Interfaces

                </div>


                <div class="stats">

                    Scalable Backend

                </div>


            </div>


        </div>


    </div>


</div>

`;