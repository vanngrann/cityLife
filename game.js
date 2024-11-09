var scene;

function start(){
    scene = $('a-scene')[0];
    console.log('Scene has loaded');

}

AFRAME.registerComponent("start-game",{
    init: start

})