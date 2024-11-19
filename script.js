// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', function() {

    // Function to handle comment form submission
    function handleCommentForm(formId, commentsListId) {
        const form = document.getElementById(formId);
        const commentsList = document.getElementById(commentsListId);

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get the user's name and comment from the form
            const name = form.querySelector('input[type="text"]').value;
            const comment = form.querySelector('textarea').value;

            // Create a new comment element
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;

            // Add the new comment to the comments list
            commentsList.appendChild(newComment);

            // Clear the form fields
            form.querySelector('input[type="text"]').value = '';
            form.querySelector('textarea').value = '';
        });
    }

    // Handle comment form for post 1
    handleCommentForm('commentForm1', 'commentsList1');

    // Handle comment form for post 2
    handleCommentForm('commentForm2', 'commentsList2');

});
