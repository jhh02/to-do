import { format, compareAsc } from 'date-fns';
import style from './style.css';
import loadFonts from './fonts';
import loadPage from './DOM/pageload';
import createNavigationEvent from './navigationItemEvent';
import clickAddTaskBtn from './DOM/clickAddTask';

(function init() {
    loadPage();
    createNavigationEvent();
    clickAddTaskBtn();
})();

