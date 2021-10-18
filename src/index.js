import style from './style.css';
import loadFonts from './fonts';
import createNavigationEvent from './event/navigationBar';
import clickAddTaskBtn from './event/addTask';
import sortDate from './event/sortDate';
import userLogin from './event/loginUser';

(function init() {
    createNavigationEvent();
    userLogin();
    clickAddTaskBtn();
    sortDate();
})();
