



window.onload = function() {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentSection = document.querySelector('.lg\\:w-2\\/3');
    savedComments.forEach(comment => {
        const newComment = document.createElement('div');
        newComment.classList.add('w-full', 'flex', 'justify-center', 'items-center');
        newComment.innerHTML = `
            <div class="w-2/12 pl-4">
                <img src="images/icones/commentaire.png" alt="commentaire">
            </div>
            <div class="w-10/12">
                <p>${comment}</p>
            </div>
        `;
        commentSection.appendChild(newComment);
    });
};

document.querySelector('form button').addEventListener('click', (e) => {
    e.preventDefault(); 
    const comment = document.querySelector('textarea').value;
    if (comment) {
        const commentSection = document.querySelector('.lg\\:w-2\\/3');
        const newComment = document.createElement('div');
        newComment.classList.add('w-full', 'flex', 'justify-center', 'items-center');
        newComment.innerHTML = `
            <div class="w-2/12 pl-4">
                <img src="images/icones/commentaire.png" alt="commentaire">
            </div>
            <div class="w-10/12">
                <p>${comment}</p>
            </div>
        `;
        commentSection.appendChild(newComment);

        // Sauvegarder le commentaire dans le localStorage
        let savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        savedComments.push(comment);
        localStorage.setItem('comments', JSON.stringify(savedComments));

        // vider la zone de texte
        document.querySelector('textarea').value = '';
    }
});
