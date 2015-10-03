var scene = new THREE.Scene();
var ogers = []

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
/*
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

*/
  var light = new THREE.PointLight( 0xFFFFFF);
  light.position.set( 0, 0, 10 );
  var light2 = new THREE.PointLight( 0xFFFFFF);
  light2.position.set( 0, 20, 0 );
  var light3 = new THREE.PointLight( 0xFFFFFF);
  light3.position.set( 20, 0, 0 );
  scene.add( light );
  scene.add( light2 );
  scene.add( light3 );
  renderer.setClearColor( 0xdddddd, 1);
  var clock = new THREE.Clock

  //renderer.render( scene, camera );
  function render() {
    requestAnimationFrame( render );
/*
    var delta = clock.getDelta()
    mesh.rotation.x += delta * 2
    mesh.rotation.y += delta * 3
*/
    ogers.map(function(o){
      o.rotation.z += .01
      o.rotation.y += .01
      //o.rotation.z += .01
    })
    renderer.render( scene, camera );
  }
  render()

/***** worked
    // instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
  // resource URL
  '../models/ogre/ogre.obj',
  // Function when resource is loaded
  function ( object ) {
    object.position.set(2,-2 ,3)
    scene.add( object );
  }
);
*///

/*
  // instantiate a loader
  var loader2 = new THREE.OBJMTLLoader();

  // load an obj / mtl resource pair
  loader2.load(
    // OBJ resource URL
    '../models/ogre/ogre.obj',
    // MTL resource URL
    '../models/ogre/ogre.mtl',
    // Function when both resources are loaded
    function ( object ) {
      console.log('GOT IT')
      scene.add( object );
    },
    // Function called when downloads progress
    function ( xhr ) {
      console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when downloads error
    function ( xhr ) {
      console.log( 'An error happened' );
    }
  );*/

/*never worked with blender export
  var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
      var percentComplete = xhr.loaded / xhr.total * 100;
      console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
  };

  var onError = function ( xhr ) {
    console.log("BOOM")
  };


  var loader3 = new THREE.OBJMTLLoader();
  loader3.load( '../models/ogre/ogrex.obj', '../models/ogre/ogrex.mtl', function ( object ) {
    //object.position.y = ;
      console.log("DONE")
      console.log(object)
      object.position.set(0,0,0)
    scene.add( object );

  }, onProgress, onError );
*/

// prepare loader and load the model
var oLoader = new THREE.ColladaLoader();
oLoader.load('../models/ogre/ogre.dae', function(collada) {

  var object = collada.scene;
  var skin = collada.skins[0];
  //object.scale.set(3,3,3)
  var o2 = object.clone()
  o2.position.set(2,0,0)
  object.position.set(-2,0,0)
  //ogers.push(object)
  scene.add(object);
  //ogers.push(o2)
  scene.add(o2);

  //object.rotation.x = -Math.PI / 2;
  //object.rotation.z = Math.PI / 2;
  //object.position.x = -50;
  //object.position.y = -100;
  //object.position.z = 0;
  //object.scale.set(0.025, 0.025, 0.025);
  //object.updateMatrix();
  var offset = -10
/*
  for(var i = 0; i< 10; i++) {
    var new_o = object.clone()
    new_o.position.set(offset, offset, offset)
    offset += 2
    ogers.push(new_o)
    scene.add(new_o)
  }
  */
});



}

