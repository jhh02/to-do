import { format, compareAsc } from 'date-fns';

const dateNow = new Date();
const getYear = dateNow.getFullYear();
const getMonth = dateNow.getMonth() + 1;
const getDay = dateNow.getDate();
const getMinutes = dateNow.getMinutes();
const getHours = dateNow.getHours();
const getSeconds = dateNow.getSeconds();
const today = format(new Date(getYear, getMonth, getDay), 'yyyy-MM-dd');

export {
    dateNow,
    getYear,
    getMonth,
    getDay,
    today,
    getHours,
    getMinutes,
    getSeconds,
};
