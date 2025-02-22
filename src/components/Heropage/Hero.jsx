import { useEffect, useRef } from "react";
import * as THREE from "three";
import { TweenMax, Power1 } from "gsap";

const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 2, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = window.innerWidth > 800;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    scene.background = new THREE.Color(0xF02050);
    scene.fog = new THREE.Fog(0xF02050, 10, 16);

    const city = new THREE.Object3D();
    const smoke = new THREE.Object3D();
    const town = new THREE.Object3D();
    
    const mathRandom = (num = 8) => -Math.random() * num + Math.random() * num;

    const init = () => {
      for (let i = 1; i < 100; i++) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x000000 });
        const cube = new THREE.Mesh(geometry, material);
        cube.scale.y = 0.1 + Math.abs(mathRandom(8));
        cube.position.x = Math.round(mathRandom());
        cube.position.z = Math.round(mathRandom());
        town.add(cube);
      }
    };

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 4);
    scene.add(ambientLight);
    city.add(town);
    scene.add(city);

    init();

    const animate = () => {
      requestAnimationFrame(animate);
      city.rotation.y += 0.001;
      smoke.rotation.y += 0.01;
      smoke.rotation.x += 0.01;
      camera.lookAt(city.position);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Hero;
