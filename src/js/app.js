import projects from '../data/projects';
import experience from '../data/experience';

export default () => ({

    mobile: false,

    init(){

        window.addEventListener('resize', () => {

            if(window.innerWidth > 768){

                this.mobile = false;

            }

        });

    },

    projects,

    experience,

    openMenu() {
        this.mobile = true;
    },

    closeMenu() {
        this.mobile = false;
    },

    toggleMenu() {
        this.mobile = !this.mobile;
    }

});