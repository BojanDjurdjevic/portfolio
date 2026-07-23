import experience from '../data/experience';


const section = document.querySelector('#experience');



section.innerHTML = `


<div class="container section">


    <div class="text-center mb-16">


        <span class="eyebrow">

            EXPERIENCE

        </span>


        <h2 class="text-4xl font-bold mt-6">

            My professional journey

        </h2>


    </div>





    <div class="max-w-3xl mx-auto space-y-8">



        ${experience.map(item => `



            <div class="card p-8">



                <div class="flex flex-col md:flex-row md:justify-between gap-4">



                    <div>


                        <h3 class="text-2xl font-bold">

                            ${item.role}

                        </h3>


                        <p class="text-blue-400 mt-2">

                            ${item.company}

                        </p>


                    </div>




                    <span class="text-slate-400">

                        ${item.period}

                    </span>



                </div>




                
                <p class="text-slate-300 mt-6 leading-7">

                    ${item.description}

                </p>



            </div>



        `).join('')}



    </div>


</div>


`;