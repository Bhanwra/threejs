if ( typeof require === "function" ) {
	const Controls = require("./js/Controls");
	const THREE = require("three");
}

const scene	= new THREE.Scene(),
	camera	= new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	),
	renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x1E90FF } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;

function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

setTimeout(() => {
	material.color = new THREE.Color(0x00ffcc);
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
	window.addEventListener("keypress", function(event) {
		switch ( event.code ) {
			case "KeyA":
				cube.position.x += -0.1;
				break;
			case "KeyD":
				cube.position.x += 0.1;
				break;
			case "KeyW":
				cube.position.y += 0.1;
				break;
			case "KeyS":
				cube.position.y += -0.1;
				break;
			default:
				// Do nothing
		}
	})
})

Controls.moveLeft(cube);