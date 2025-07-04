import * as qstr from './qtools/qstr.js';

const appElem = document.querySelector('#app');

if (appElem) {
	appElem.innerHTML = `
	<h1>Info Site</h1>	
	<p>${qstr.capitalizeFirstCharacter("welcome to this site")}</p>`;
}