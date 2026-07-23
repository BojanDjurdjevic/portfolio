const footer = document.querySelector('footer');


footer.className = "border-t border-slate-800";


footer.innerHTML = `


<div class="container py-8 flex flex-col md:flex-row justify-between gap-4">


    <p class="text-slate-400">


        © ${new Date().getFullYear()} Bojan Đurđević


    </p>



    <p class="text-slate-500">


        Full Stack Developer


    </p>



</div>


`;