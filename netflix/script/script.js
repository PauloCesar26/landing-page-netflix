const buttons = [
    document.querySelector('#button1'),
    document.querySelector('#button2'),
    document.querySelector('#button3'),
    document.querySelector('#button4'),
    document.querySelector('#button5'),
    document.querySelector('#button6'),
];

const containers = [
    document.querySelector('.answer'),
    document.querySelector('.answer2'),
    document.querySelector('.answer3'),
    document.querySelector('.answer4'),
    document.querySelector('.answer5'),
    document.querySelector('.answer6'),
];

// Adiciona evento de clique para cada botão
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        containers.forEach((container, i) => {
            const icon = buttons[i].querySelector('.icon');
            
            if(i === index){
                // Alterna a classe 'active' no contêiner correspondente
                container.classList.toggle('active');
                icon.classList.toggle('rotate'); 
            } 
            else{
                // Remove a classe 'active' dos outros contêineres
                container.classList.remove('active');
                icon.classList.remove('rotate'); 
            }
        });
    });
});

const buttonHover = document.querySelectorAll('.button');

buttonHover.forEach(button => {
    button.style.transition = "background-color 300ms ease";

    button.addEventListener('mouseover', function () {
        this.style.backgroundColor = "rgb(65, 65, 65)";
    });

    button.addEventListener('mouseout', function () {
        this.style.backgroundColor = "rgb(36, 33, 33)";
    });
});