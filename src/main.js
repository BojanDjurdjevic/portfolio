import './css/app.css';
import './sections/hero';
import './sections/stack';
import './sections/featured';
import './sections/projects';
import './sections/experience';
import './sections/contact';
import './sections/footer';

import Alpine from 'alpinejs';

import portfolio from './js/app';



window.Alpine = Alpine;

Alpine.data('portfolio', portfolio);

Alpine.start();
