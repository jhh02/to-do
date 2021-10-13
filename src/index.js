import { format, compareAsc } from 'date-fns';
import style from './style.css';
import loadFonts from './fonts';
import loadPage from './load_page';
import createNavigationEvent from './navigationItemEvent';

(function init() {
    loadPage();
    createNavigationEvent()
})();
