
var length = 30;

var scene = new THREE.Scene;
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth,window.innerHeight);
$('body').append(renderer.domElement);
var geometry1 = new THREE.BoxGeometry(4,1,1);
var geometry2 = new THREE.BoxGeometry(6,1,1);


var  longCubesArray = [];

for(i=0; i<length; i++){
    var mat = new THREE.MeshBasicMaterial({})
    mat.color.setHex( Math.random() * 0xffffff )
    var geo = new THREE.BoxGeometry(2+i, 0.1, 0.1);
    var cube = new THREE.Mesh(geo, mat);
    
    
    cube.position.z = -6;
    cube.rotation.x = 60+i;
    cube.rotation.y = 10-i;
    scene.add(cube);
    longCubesArray.push(cube);
}


renderer.render(scene,camera);

var animateAll = function(){
    for(i=0; i<length; i++){
        longCubesArray[i].rotation.x +=0.008*(20-i);
        longCubesArray[i].rotation.y +=0.01;
    }
    renderer.render(scene,camera);
    requestAnimationFrame(animateAll);
}

animateAll();
