/* global THREE */
var scene = new THREE.Scene();

window.onload = function() {

  // set the scene size
  var WIDTH = 800,
    HEIGHT = 600;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( WIDTH, HEIGHT );
  document.body.appendChild( renderer.domElement );


  var camera = new THREE.PerspectiveCamera(
    45,       // Field of view
    WIDTH / HEIGHT,    // Aspect ratio
    0.1,      // Near plane
    10000       // Far plane
  )
  camera.position.set( 0, 0, 20 );
  camera.lookAt( scene.position );

  var geometry = new THREE.BoxGeometry( 5, 5, 5 );
  var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
  var material2 = new THREE.MeshLambertMaterial( { color: 0x00FF00 } );
  var mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  // set up the sphere vars
  var radius = .8,
      segments = 16,
      rings = 16;

  // create a new mesh with
  var geo = new THREE.SphereGeometry(radius, segments, rings)
  var sphere = new THREE.Mesh(geo, material2)
  var sphere2 = new THREE.Mesh(geo, material2)
  sphere.position.set(1.3, 1.1, 2.3)
  sphere2.position.set(-1.3, 1.1, 2.3)

  mesh.add(sphere)
  mesh.add(sphere2)
  // scene.add(sphere)
  // scene.add(sphere2)


  var light = new THREE.PointLight( 0xFFFFFF);
  light.position.set( 0, 0, 10 );
  scene.add( light );
  renderer.setClearColor( 0xdddddd, 1);
  //var clock = new THREE.Clock
  var direction = true;
  function render() {
    requestAnimationFrame( render );

   /* mesh.rotation.x += .1
    mesh.rotation.y += .06
    mesh.rotation.z += .01
    */
    if (mesh.position.x >= 5 || mesh.position.x <= -5){
      if (direction){
        direction = false;
      }
      else{
        direction = true;
      }
    }
    if (direction){
      mesh.position.x += .05
    }
    else{
      mesh.position.x -= .05
    }

    renderer.render( scene, camera );
  }
  render()

}

