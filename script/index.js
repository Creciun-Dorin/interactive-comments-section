/* Module */
import { getComments } from "./module/getComments.js";
import { getStorage } from "./module/getStorage.js";

/* Evenimente */
window.addEventListener('DOMContentLoaded', () => {
	loadComments();
	loadUser();
	// Adauga comentarile din localStorage
	getComments()
})

/* Functii */
// Incarcam datele din json in localStorage
async function loadComments() {
	const local = localStorage.getItem('comentarii');
	if(local === null){
		const response = await fetch('../../dataComments.json');
		const data = await response.json();
		const dataJson = JSON.stringify(data);
		localStorage.setItem('comentarii', dataJson);
		console.log('Am incarcat datele din json')
	}
}

// Incarcam datele utilizatorului
function  loadUser(){
	const user = getStorage();
	document.querySelector('.form_box img').src = user.currentUser.image.webp;
}