/* Module */
import { getStorage } from "./getStorage.js"

/* Functii */
const getComments = () => {
	const data = getStorage();
	// comentarii
	const comment = data.comments;
	createComments(comment);
}
export { getComments }



// Functia care adauga comentariile pe pagina
function createComments(comment){
	comment.forEach((element) => {
		// Creează un element div
		const itemCommentDiv = document.createElement('div');
		itemCommentDiv.classList.add('item-comment');

		// Creează elementul counter-grup-item
		const counterGroupItemDiv = document.createElement('div');
		counterGroupItemDiv.classList.add('counter-grup-item');

		// Creează butonul add_counter
		const addCounterButton = document.createElement('button');
		addCounterButton.type = 'button';
		addCounterButton.classList.add('add_counter', 'button-counter');
		addCounterButton.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
			<path d="M6.33018 10.896C6.46674 10.896 6.58468 10.8463 6.684 10.747C6.78331 10.6477 6.83297 10.5298 6.83297 10.3932V7.004H10.1477C10.2842 7.004 10.4022 6.95434 10.5015 6.85503C10.6008 6.75571 10.6505 6.63777 10.6505 6.50121V5.27216C10.6505 5.1356 10.6008 5.01766 10.5015 4.91834C10.4022 4.81903 10.2842 4.76937 10.1477 4.76937H6.83297V1.39879C6.83297 1.26223 6.78331 1.14429 6.684 1.04497C6.58468 0.945655 6.46674 0.895996 6.33018 0.895996H4.91491C4.77835 0.895996 4.66041 0.945655 4.56109 1.04497C4.46177 1.14429 4.41212 1.26223 4.41212 1.39879V4.76937H1.07878C0.942221 4.76937 0.824282 4.81903 0.724965 4.91834C0.625647 5.01766 0.575989 5.1356 0.575989 5.27216V6.50121C0.575989 6.63777 0.625647 6.75571 0.724965 6.85503C0.824282 6.95434 0.942221 7.004 1.07878 7.004H4.41212V10.3932C4.41212 10.5298 4.46177 10.6477 4.56109 10.747C4.66041 10.8463 4.77835 10.896 4.91491 10.896H6.33018Z" fill="#C5C6EF" />
		</svg>
		`;

		// Creează elementul span pentru counter
		const counterSpan = document.createElement('span');
		counterSpan.classList.add('counter');
		counterSpan.textContent = element.score;

		// Creează butonul remove_counter
		const removeCounterButton = document.createElement('button');
		removeCounterButton.type = 'button';
		removeCounterButton.classList.add('remove_counter', 'button-counter');
		removeCounterButton.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" width="10" height="3" viewBox="0 0 10 3" fill="none">
			<path d="M9.24791 2.5C9.45218 2.5 9.6286 2.44444 9.77716 2.33333C9.92572 2.22222 10 2.09028 10 1.9375V0.5625C10 0.409722 9.92572 0.277778 9.77716 0.166667C9.6286 0.0555556 9.45218 0 9.24791 0H0.752089C0.547818 0 0.371402 0.0555556 0.222841 0.166667C0.0742804 0.277778 0 0.409722 0 0.5625V1.9375C0 2.09028 0.0742804 2.22222 0.222841 2.33333C0.371402 2.44444 0.547818 2.5 0.752089 2.5H9.24791Z" fill="#C5C6EF" />
		</svg>
		`;

		// Stergem din numarul de likuri
		removeCounterButton.addEventListener('click', () => removeCounter(element.score));

		// Adaugă elementele în counterGroupItemDiv
		counterGroupItemDiv.appendChild(addCounterButton);
		counterGroupItemDiv.appendChild(counterSpan);
		counterGroupItemDiv.appendChild(removeCounterButton);

		// Adaugă counterGroupItemDiv în itemCommentDiv
		itemCommentDiv.appendChild(counterGroupItemDiv);

		// Creează elementul item-comment-content
		const itemCommentContentDiv = document.createElement('div');
		itemCommentContentDiv.classList.add('item-comment-content');

		// Creează elementul header_item_comment
		const headerItemCommentDiv = document.createElement('div');
		headerItemCommentDiv.classList.add('header_item_comment');

		// Creează imaginea pentru user profile picture
		const userProfileImg = document.createElement('img');
		userProfileImg.src = element.user.image.webp;
		userProfileImg.alt = 'User profile picture';

		// Creează elementul h4 pentru user_item_comment
		const userItemCommentH4 = document.createElement('h4');
		userItemCommentH4.classList.add('user_item_comment');
		userItemCommentH4.textContent = element.user.username;

		// Creează elementul span pentru data_comment
		const dataCommentSpan = document.createElement('span');
		dataCommentSpan.classList.add('data_comment');
		dataCommentSpan.textContent =  element.createdAt

		// Adaugă elementele în headerItemCommentDiv
		headerItemCommentDiv.appendChild(userProfileImg);
		headerItemCommentDiv.appendChild(userItemCommentH4);
		headerItemCommentDiv.appendChild(dataCommentSpan);

		// Creează elementul p pentru textul comentariului
		const commentTextP = document.createElement('p');
		commentTextP.textContent = element.content;

		// Adaugă headerItemCommentDiv și commentTextP în itemCommentContentDiv
		itemCommentContentDiv.appendChild(headerItemCommentDiv);
		itemCommentContentDiv.appendChild(commentTextP);

		// Adaugă itemCommentContentDiv în itemCommentDiv
		itemCommentDiv.appendChild(itemCommentContentDiv);

		// Creează elementul button-grup
		const buttonGrupDiv = document.createElement('div');
		buttonGrupDiv.classList.add('button-grup');

		// Creează butonul reply
		const replyButton = document.createElement('button');
		replyButton.type = 'button';
		replyButton.classList.add('reply', 'button-control');
		replyButton.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
			<path d="M0.227189 4.31583L5.0398 0.159982C5.46106 -0.203822 6.125 0.0915222 6.125 0.656646V2.8456C10.5172 2.89589 14 3.77618 14 7.93861C14 9.61864 12.9177 11.283 11.7214 12.1532C11.348 12.4247 10.816 12.0839 10.9536 11.6437C12.1935 7.67857 10.3655 6.62588 6.125 6.56484V8.96878C6.125 9.5348 5.46056 9.82883 5.0398 9.46545L0.227189 5.30918C-0.0755195 5.04772 -0.0759395 4.57766 0.227189 4.31583Z" fill="#5357B6" />
		</svg>
		Reply
		`;

		// Adaugă butoanele în buttonGrupDiv
		buttonGrupDiv.appendChild(replyButton);

		// Adaugă buttonGrupDiv în itemCommentDiv
		itemCommentDiv.appendChild(buttonGrupDiv);

		// Adaugă itemCommentDiv în document
		document.querySelector('.content').appendChild(itemCommentDiv);

	})
}

/*{
			// Creează butonul delete
			const deleteButton = document.createElement('button');
			deleteButton.type = 'button';
			deleteButton.classList.add('delete', 'button-control');
			deleteButton.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M8.64458 1.16667H11.5261V2.33333H0V1.16667H2.88153L3.84633 0H7.67981L8.64458 1.16667ZM2.68944 14C1.8441 14 1.15261 13.3017 1.15261 12.4479V3.5H10.3735V12.4479C10.3735 13.3017 9.682 14 8.8367 14H2.68944Z" fill="#ED6368" />
			</svg>
			Delete
			`;

					// Creează butonul edit
		const editButton = document.createElement('button');
		editButton.type = 'button';
		editButton.classList.add('edit', 'button-control');
		editButton.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0813 0.474468L13.4788 2.87199C14.1491 3.51055 14.1765 4.57097 13.5401 5.24327L5.66499 13.1184C5.37977 13.4012 5.00593 13.5773 4.60623 13.6171L0.957442 13.9496H0.878691C0.646111 13.951 0.422565 13.8596 0.257434 13.6959C0.0728398 13.5119 -0.0201832 13.2553 0.00368177 12.9959L0.379936 9.34706C0.419753 8.94736 0.595858 8.57352 0.878691 8.2883L8.75377 0.413217C9.43263 -0.160306 10.4336 -0.133966 11.0813 0.474468ZM8.15877 3.4495L10.5038 5.79452L12.2538 4.08826L9.86504 1.69948L8.15877 3.4495Z" fill="#5357B6" />
		</svg>
		Edit
		`;
}*/