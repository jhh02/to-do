import { format, compareAsc } from 'date-fns';
import style from './style.css';
import loadFonts from './fonts';
import createNavigationEvent from './event/navigationBar';
import createToDo from './event/addTask';
import sortDate from './event/sortDate';
import loginUser from './event/loginUser';

(function init() {
    // loadPage();
    createNavigationEvent();
    loginUser();
    createToDo();
    sortDate();
})();
