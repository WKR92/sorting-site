const mainJsContent = document.querySelector('.js-content');
mainJsContent.style["display"] = "block";


// zadanie 1:
const squareDiv = document.createElement("div");
squareDiv.classList.add("squareDiv");
mainJsContent.appendChild(squareDiv);

squareDiv.addEventListener("animationend", () => {
    squareDiv.addEventListener('mouseenter', () => {
        squareDiv.style['transform'] = 'rotate(360deg)';
        squareDiv.style['transition'] = 'transform 2s ease-out';
        setTimeout(() => {
            squareDiv.style['transform'] = 'none';
            squareDiv.style['transition'] = 'none';
        }, 2000)
    })
});


// zadanie 2:
const loaderDiv = document.createElement("div");
loaderDiv.classList.add("loaderDiv");
mainJsContent.appendChild(loaderDiv);


// zadanie 3:
const centeringDiv = document.createElement("ol");
centeringDiv.classList.add("centeringDiv");
mainJsContent.appendChild(centeringDiv);

const flexbox = document.createElement("li");
flexbox.textContent = "display: flex/ justify-content: center/ align-items: center.";
centeringDiv.appendChild(flexbox);

const alignText = document.createElement("li");
alignText.textContent = "jeśli centrujemy tekst możemy użyć align-text: center; vertical-align: middle.";
centeringDiv.appendChild(alignText);

const margin = document.createElement("li");
margin.textContent = "margin: auto/ margin-left: auto; margin-right-auto.";
centeringDiv.appendChild(margin);

const position = document.createElement("li");
position.textContent = "wykorzystanie właściwości left, top, right, bottom";
centeringDiv.appendChild(position);


// zadanie 4:

const task4 = document.createElement("p");
task4.textContent = 'Wyniki zadania czwartego wyświetlają się w consoli.';
mainJsContent.appendChild(task4)

document.addEventListener('mousemove', (event) => {
    const sWidth = document.body.clientWidth
    const sHeight = document.body.clientHeight;
    const mouseXPositionToScreenX = (event.x/sWidth)*100;
    const mouseYPositionToScreenY = (event.y/sHeight)*100;
    console.log("mouseX to screenX: " + parseFloat(mouseXPositionToScreenX).toFixed(2) + "%")
    console.log("mouseY to screenY: " + parseFloat(mouseYPositionToScreenY).toFixed(2) + "%")
})

// zadanie 5:
const task5 = document.createElement("p");
task5.textContent = 'Próba rozwiązania zadania piątego znajduje się w pliku mixin.scss';
mainJsContent.appendChild(task5);

const task5Square = document.createElement("div");
task5Square.classList.add('task5Square');
mainJsContent.appendChild(task5Square);


