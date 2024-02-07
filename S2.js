document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.roygbiv');
    const previousBox = document.getElementById('previousBox');
    const currentBox = document.getElementById('currentBox');

    function resetAnimation() {
        previousBox.classList.remove('previous');
        currentBox.classList.remove('current');
        previousBox.classList.add('hidden');
    }

    previousBox.addEventListener('animationend', resetAnimation);
    currentBox.addEventListener('animationend', resetAnimation);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const isPreviousAnimating = previousBox.classList.contains('previous');
            const isCurrentAnimating = currentBox.classList.contains('current');

            if (!isPreviousAnimating && !isCurrentAnimating) {
                previousBox.style.backgroundColor = currentBox.style.backgroundColor;

                switch (button.className.split(' ')[1]) {
                    case 'monday':
                        currentBox.style.backgroundColor = 'red';
                        currentBox.style.borderColor = 'darkred';
                        break;
                    case 'tuesday':
                        currentBox.style.backgroundColor = 'orange';
                        currentBox.style.borderColor = 'darkorange';
                        break;
                    case 'wednesday':
                        currentBox.style.backgroundColor = 'yellow';
                        currentBox.style.borderColor = 'darkgoldenrod';
                        break;
                    case 'thursday':
                        currentBox.style.backgroundColor = 'green';
                        currentBox.style.borderColor = 'darkgreen';
                        break;
                    case 'friday':
                        currentBox.style.backgroundColor = 'blue';
                        currentBox.style.borderColor = 'darkblue';
                        break;
                    case 'saturday':
                        currentBox.style.backgroundColor = 'indigo';
                        currentBox.style.borderColor = 'darkslateblue';
                        break;
                    case 'sunday':
                        currentBox.style.backgroundColor = 'violet';
                        currentBox.style.borderColor = 'darkviolet';
                        break;
                    default:
                        currentBox.style.backgroundColor = 'black'; 
                        currentBox.style.borderColor = 'darkgray'; 
                }

                previousBox.classList.toggle('previous');
                currentBox.classList.toggle('current');
            }
        });
    });
});
