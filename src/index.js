import { format, compareAsc } from 'date-fns';
import style from './style.css';
import loadFonts from './fonts';
import loadPage from './DOM/pageload';
import createNavigationEvent from './event/navigationItem';
import clickAddTaskBtn from './event/addTask';
import sortDueDate from './event/dateSort';

(function init() {
    loadPage();
    createNavigationEvent();
    clickAddTaskBtn();
    sortDueDate();
})();

