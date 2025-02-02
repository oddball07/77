import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 🔥 Cleanup existing renderer before creating a new one
    if (rendererRef.current) {
      rendererRef.current.dispose();
      rendererRef.current.domElement.remove();
      rendererRef.current = null;
    }

    const canvasWidth = containerRef.current.clientWidth;
    const canvasHeight = containerRef.current.clientHeight;

    // ✅ Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // ✅ Camera Setup
    const camera = new THREE.PerspectiveCamera(
      50,
      canvasWidth / canvasHeight,
      0.1,
      1000
    );
    camera.position.set(-2, 1, 5);
    cameraRef.current = camera;

    // ✅ Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(canvasWidth, canvasHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ✅ Lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 2);
    scene.add(light);

    // ✅ OrbitControls (Mouse Interaction)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth movement
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controlsRef.current = controls;

    // ✅ Load 3D Model
    const loader = new GLTFLoader();
    loader.load("/7eventy7(black).glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(1, 1, 1);
      model.position.set(-2, 0, 0);
      model.rotation.set(0, Math.PI, 0);
      scene.add(model);
      animate();
    });

    // ✅ Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls on each frame
      renderer.render(scene, camera);
    };

    // ✅ Handle Window Resize
    const handleResize = () => {
      const newWidth = containerRef.current?.clientWidth || canvasWidth;
      const newHeight = containerRef.current?.clientHeight || canvasHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose(); // Dispose of controls
      renderer.dispose();
      renderer.domElement.remove();
      rendererRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="three-container" />;
};

export default ThreeScene;
