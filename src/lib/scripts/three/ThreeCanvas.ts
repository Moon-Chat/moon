import { browser } from '$app/environment'
import * as THREE from 'three'

function isWebGLSupported() {
    try {
        const canvas = document.createElement('canvas');
        return !!window.WebGLRenderingContext && (
            canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        );
    } catch (e) {
        return false;
    }
}

if (browser && isWebGLSupported()) {
    var canvas = document.getElementById('THREE-CANVAS')
    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100)
    var renderer = new THREE.WebGLRenderer()

    camera.position.y = 5

    var grid = new THREE.GridHelper(1000, 200)
    scene.add(grid)

    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement);

    for(let i = 0; i < 50; i++) {

        var box = new THREE.Mesh(
            new THREE.OctahedronGeometry(1, 1),
            new THREE.MeshBasicMaterial({wireframe: true, color: "#fffffff"})
        )

        box.position.z = i * Math.floor(Math.random() * 20) - 20
        box.position.x = i * Math.floor(Math.random() * 5) - 5

        box.position.y = 3
        scene.add(box)
    }

    window.addEventListener('resize', () => {
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    function animate() {
        camera.position.z += 0.1
        if(camera.position.z > 200) {
            camera.position.z = 0
        }
        renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)
}

