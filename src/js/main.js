const main = () => {
	
}
// global.THREE = require('three')
// import 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
// var THREE = require('three');
// var GLTFLoader = require('/three/examples/jsm/loaders/GLTFLoader');
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
console.log(GLTFLoader);
// let gltfLoader = new GLTFLoader();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var controls = new OrbitControls( camera );

var renderer = new THREE.WebGLRenderer( { alpha: true, antialias : true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
var loader = new GLTFLoader();
var model;
// Load a glTF resource
loader.load(
	// resource URL
	'kaspian_head.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		
		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Scene
		gltf.scenes; // Array<THREE.Scene>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
		console.log(gltf.asset);
		model = gltf.scene;
		scene.add( model ); 
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
//scene.add( cube );

camera.position.z = 0.27;
var light = new THREE.PointLight( 0xFFFFFF, 1, 100 );
light.position.set( 1.5, 1.5, 1.5) ;
scene.add( light );
var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 50, 0 );
scene.add( hemiLight );


var animate = function () {
    requestAnimationFrame( animate );
	if(model) {
		model.rotation.x += 0.001;
		model.rotation.y += 0.001;


	}

    renderer.render( scene, camera );
};

animate();
document.addEventListener('DOMContentLoaded', main)
// const THREE = require(three)


