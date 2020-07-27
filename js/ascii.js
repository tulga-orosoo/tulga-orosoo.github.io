let fontSize = [];
fontSize['Tiny'] = '7pt';
fontSize['Small'] = '10pt';
fontSize['Medium'] = '12pt';
fontSize['Large'] = '16pt';
fontSize['Extra Large'] = '24pt';
fontSize['XXL'] = '32pt';
let playControl;
let currText = '';
let animeList = [];
let playIndex = 0;

let animationChange = function () {
    document.getElementById('text-area').value = ANIMATIONS[document.getElementById('animation').value];
};
let turboChange = function () {
    clearInterval(playControl);
    if (document.getElementById('turbo').checked == '') {
        playControl = setInterval(playAscii, 250);
    } else {
        playControl = setInterval(playAscii, 50);
    }
};

window.onload = function () {
    document.getElementById('animation').onchange = animationChange;
    document.getElementById('fontsize').onchange = function () {
        // Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
        document.getElementById('text-area').style.fontSize = fontSize[this.value];
    }
    document.getElementById('turbo').onchange = turboChange;
    document.getElementById('start').onclick = function () {
        this.disabled = 'disabled';
        document.getElementById('stop').disabled = '';
        currText = document.getElementById('text-area').value;
        animeList = currText.split("=====\n");
        playIndex = 0;
        turboChange();
    }
    document.getElementById('stop').onclick = function () {
        this.disabled = 'disabled';
        document.getElementById('start').disabled = '';
        clearInterval(playControl);
        animationChange();
    }
}

var playAscii = function () {
    document.getElementById('text-area').value = animeList[playIndex];
    playIndex += 1;
    if (playIndex >= animeList.length) {
        playIndex = 0;
    }
}