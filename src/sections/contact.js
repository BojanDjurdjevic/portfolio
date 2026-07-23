import social from '../data/social';


const section = document.querySelector('#contact');



section.innerHTML = `


<div class="container section">


    <div class="card p-10 md:p-16 text-center">



        <span class="eyebrow">

            CONTACT

        </span>




        <h2 class="text-4xl md:text-5xl font-bold mt-6">


            Let's build something together


        </h2>





        <p class="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">


            I'm open to new opportunities and interesting projects
            involving Laravel, TypeScript and modern web technologies.


        </p>





        <div class="flex flex-wrap justify-center gap-6 mt-10">



            ${social.map(item => `


                <a

                    href="${item.url}"

                    target="_blank"

                    class="btn btn-secondary"


                >

                    ${item.name}


                </a>



            `).join('')}



        </div>




    </div>


</div>


`;