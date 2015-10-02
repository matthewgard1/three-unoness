window.onload = function() {

  // set the scene size
  var WIDTH = 800,
    HEIGHT = 600;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( WIDTH, HEIGHT );
  document.body.appendChild( renderer.domElement );

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(
    45,       // Field of view
    WIDTH / HEIGHT,    // Aspect ratio
    0.1,      // Near plane
    10000       // Far plane
  );
  camera.position.set( -15, 10, 10 );
  camera.lookAt( scene.position );

  var geometry = new THREE.BoxGeometry( 5, 5, 5 );
  var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
  var mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  var light = new THREE.PointLight( 0xFFFF00 );
  light.position.set( 10, 0, 10 );
  scene.add( light );

  renderer.setClearColor( 0xdddddd, 1);
  renderer.render( scene, camera );

};