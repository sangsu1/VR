import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import * as THREE from 'three';
import '../Assets/Main.css';

const Park = () => {

    const panoContainerRef = useRef(null);

    useEffect(() => {
        if (!panoContainerRef.current) return;

        const viewer = new PANOLENS.Viewer({
            container: panoContainerRef.current,
            autoResize: true,
            controlBar: true,
            cameraFov: 75,
            backgroundColor: 0x000000
        });

        const panorama1 = new PANOLENS.ImagePanorama('/images/물길공원/B1.jpg');
        panorama1.addEventListener('load', () => {
            console.log('Panorama 1 loaded');

            const infospot1 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot1.position.set(5000, 0, -1500);
            infospot1.addEventListener('click', () => {
                console.log('Infospot 1 clicked - moving to Panorama 2');
                viewer.setPanorama(panorama2);
            });

            panorama1.add(infospot1);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama2 = new PANOLENS.ImagePanorama('/images/물길공원/B2.jpg');
        panorama2.addEventListener('load', () => {
            console.log('Panorama 2 loaded');

            const infospot2 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot2.position.set(3000, -2000, 1500);
            infospot2.addEventListener('click', () => {
                console.log('Infospot 2 clicked - moving to Panorama 3');
                viewer.setPanorama(panorama3);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-3000, 2000, 1500);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 1');
                viewer.setPanorama(panorama1);
            });

            panorama2.add(infospot2);
            panorama2.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama3 = new PANOLENS.ImagePanorama('/images/물길공원/B3.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot3 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot3.position.set(4000, 1000, -2000);
            infospot3.addEventListener('click', () => {
                console.log('Infospot 3 clicked - moving to Panorama 1');
                viewer.setPanorama(panorama1);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama2);
            });

            panorama3.add(infospot3);
            panorama3.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama4 = new PANOLENS.ImagePanorama('/images/물길공원/B4.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot4 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot4.position.set(4000, 1000, -2000);
            infospot4.addEventListener('click', () => {
                console.log('Infospot 3 clicked - moving to Panorama 1');
                viewer.setPanorama(panorama4);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama3);
            });

            panorama4.add(infospot4);
            panorama4.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });


        viewer.add(panorama1);
        viewer.add(panorama2);
        viewer.add(panorama3);
        viewer.add(panorama4);


        viewer.setPanorama(panorama1);


        const handleResize = () => {
            viewer.onWindowResize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            viewer.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div id="panolens-container" ref={panoContainerRef} style={{ width: '100vw', height: '100vh' }}></div>
        </div>
    );
};

export default Park;
