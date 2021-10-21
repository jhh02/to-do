import style from './style.css';
import loadFonts from './fonts';
import createNavigationEvent from './event/navigationBar';
import clickAddToDo from './event/addToDo';
import sortDate from './event/sortDate';
import userLogin from './event/loginUser';

(function init() {
    createNavigationEvent();
    userLogin();
    clickAddToDo();
    sortDate();
})();
