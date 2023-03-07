const modalController = ({model, btnOpen, btnClose}) => {
	const btnModalOpen = document.querySelector(btnOpen);
	const modalWindow = document.querySelector(model);

	modalWindow.style.cssText = ` 
		display: flex;
		visibility: hidden;
		opacity: 0;
		transition: opacity 300ms ease-in-out;
	`;

	const closeModal = event => {
		const target = event.target;

		if (target === modalWindow || target.closest(btnClose)){
			
			modalWindow.style.opacity = 0;

			setTimeout(() =>{
				modalWindow.style.visibility = 'hidden';
			}, 300)
		}

	}

	const openModal = () => {
		modalWindow.style.visibility = 'visible';
		modalWindow.style.opacity = 1;
	};

	btnModalOpen.addEventListener('click', openModal);
	modalWindow.addEventListener('click', closeModal);
};

modalController({
	model: '.modal',
	btnOpen: '.form-button',
	btnClose: '.modal-close'
});