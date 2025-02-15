window.onload = function () {
    var timerPosition = "top-right"; // Opções: "bottom-left", "bottom-right", "top-left", "top-right"
    var timerScale = 0.9; // Fator de escala para aumentar o tamanho do timer

    var timerElement = document.createElement("div");
    timerElement.id = "timer";
    timerElement.style.position = "absolute";
    timerElement.style.color = "violet"; // Cor do texto
    timerElement.style.fontSize = `${20 * timerScale}px`; // Ajustar o tamanho da fonte
    timerElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Fundo semitransparente
    timerElement.style.padding = `${5 * timerScale}px`; // Ajustar o padding
    timerElement.style.borderRadius = `${10 * timerScale}px`; // Ajustar as bordas arredondadas
    timerElement.innerHTML =
        'Tempo em que o pobre pássaro está preso: <span id="timer-value">0</span> segundos'; // Texto do timer
    document.body.appendChild(timerElement); // Adicionar o timer ao corpo do documento

    // Posicionar o timer de acordo com a variável timerPosition
    switch (timerPosition) {
        case "bottom-left":
            timerElement.style.bottom = "10px";
            timerElement.style.left = "10px";
            break;
        case "bottom-right":
            timerElement.style.bottom = "10px";
            timerElement.style.right = "10px";
            break;
        case "top-left":
            timerElement.style.top = "10px";
            timerElement.style.left = "10px";
            break;
        case "top-right":
            timerElement.style.top = "10px";
            timerElement.style.right = "10px";
            break;
        default:
            timerElement.style.bottom = "10px";
            timerElement.style.left = "10px";
    }

    var timerValueElement = document.getElementById("timer-value");
    var counter = 0;

    // Atualizar o valor do timer a cada 10 milissegundos
    setInterval(function () {
        counter++;
        timerValueElement.innerText = (counter / 100).toFixed(2);
    }, 10);

    // Adicionar efeito RGB contínuo e suave ao texto do timer
    var hue = 0;
    setInterval(function () {
        hue = (hue + 1) % 360;
        timerElement.style.color = `hsl(${hue}, 100%, 50%)`;
    }, 20);
};

//codigo inspirado do youtube
