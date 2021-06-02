//Criar uma tag de script
var tag = document.createElement('script');

//Carregar o script do Youtube
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player; // player do vídeo

//Esta função onYouTubeIframeAPIReady() é chamada quando o script do Youtube estiver pronto
function onYouTubeIframeAPIReady() {
    ready = true;
    player = new YT.Player('player-modal', {
        height: '390',
        width: '100%',
        videoId: "",
        playerVars: {
            'playsinline': 1,
        },
        events: {
            'onReady': onPlayerReady, // função chamada quando o video está pronto
            'onStateChange': onPlayerStateChange // função chamada quando o estado do vídeo muda
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo(); // faz o vídeo tocar
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    } else {
        done = false;
    }
}

function stopVideo() {
    if (done) {
        player.stopVideo();
    }
}

function changeVideo(vid) {
    player.loadVideoById(vid, 0, "large"); // troca o vídeo por outro
}


