import style from './style.css';
import loadFonts from './fonts';

const hello = document.createElement('h1');
const wrapper = document.createElement('div');

hello.textContent = 'Hello World!';
hello.classList.add(
    'bg-gradient-to-r',
    'from-green-400',
    'to-blue-500',
    'text-transparent',
    'text-9xl',
    'bg-clip-text',
    'font-extrabold'
);

wrapper.classList.add(
    'flex',
    'h-screen',
    'justify-center',
    'items-center'
);

wrapper.appendChild(hello);
document.querySelector('#content').appendChild(wrapper);
