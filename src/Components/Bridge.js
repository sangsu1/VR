import React, { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import * as THREE from 'three';
import '../Assets/Main.css';

const Bridge = () => {

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

        const panorama1 = new PANOLENS.ImagePanorama('/images/월영교/A1.jpg');
        panorama1.addEventListener('load', () => {
            console.log('Panorama 1 loaded');

            const infospot1 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot1.position.set(5000, -1000, 1500);
            infospot1.addEventListener('click', () => {

                console.log('Infospot 1 clicked - moving to Panorama 2');
                viewer.setPanorama(panorama2);
            });

            panorama1.add(infospot1);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama2 = new PANOLENS.ImagePanorama('/images/월영교/A2.jpg');
        panorama2.addEventListener('load', () => {
            console.log('Panorama 2 loaded');

            const infospot2 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot2.position.set(5000, -1500, 400);
            infospot2.addEventListener('click', () => {
                console.log('Infospot 2 clicked - moving to Panorama 3');
                viewer.setPanorama(panorama3);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-5000, -1500, -400);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 1');
                viewer.setPanorama(panorama1);
            });

            panorama2.add(infospot2);
            panorama2.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama3 = new PANOLENS.ImagePanorama('/images/월영교/A3.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot3 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot3.position.set(5000, -1500, 400);
            infospot3.addEventListener('click', () => {
                console.log('Infospot 3 clicked - moving to Panorama 4');
                viewer.setPanorama(panorama4);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-5000, -1500, -400);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama2);
            });

            panorama3.add(infospot3);
            panorama3.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama4 = new PANOLENS.ImagePanorama('/images/월영교/A4.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot4 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot4.position.set(2000, -1500, 400);
            infospot4.addEventListener('click', () => {
                console.log('Infospot 4 clicked - moving to Panorama 5');
                viewer.setPanorama(panorama5);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1500, -400);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama3);
            });

            panorama4.add(infospot4);
            panorama4.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama5 = new PANOLENS.ImagePanorama('/images/월영교/A5.jpg'); 
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot5 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot5.position.set(-1500, -1000, 2000); //여기는 다시 위치 지정
            infospot5.addEventListener('click', () => {
                console.log('Infospot 5 clicked - moving to Panorama 6');
                viewer.setPanorama(panorama6);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(2000, -1000, 2000); //여기는 다시 위치 지정
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama4);
            });

            panorama5.add(infospot5);
            panorama5.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });
        const panorama6 = new PANOLENS.ImagePanorama('/images/월영교/A6.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot6 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot6.position.set(4000, 1000, -2000);
            infospot6.addEventListener('click', () => {
                console.log('Infospot 6 clicked - moving to Panorama 7');
                viewer.setPanorama(panorama7);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama5);
            });

            panorama6.add(infospot6);
            panorama6.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama7 = new PANOLENS.ImagePanorama('/images/월영교/A7.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot7 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot7.position.set(4000, 1000, -2000);
            infospot7.addEventListener('click', () => {
                console.log('Infospot 7 clicked - moving to Panorama 8');
                viewer.setPanorama(panorama8);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama6);
            });

            panorama7.add(infospot7);
            panorama7.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama8 = new PANOLENS.ImagePanorama('/images/월영교/A8.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot8 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot8.position.set(4000, 1000, -2000);
            infospot8.addEventListener('click', () => {
                console.log('Infospot 8 clicked - moving to Panorama 9');
                viewer.setPanorama(panorama9);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama7);
            });

            panorama8.add(infospot8);
            panorama8.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama9 = new PANOLENS.ImagePanorama('/images/월영교/A9.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot9 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot9.position.set(4000, 1000, -2000);
            infospot9.addEventListener('click', () => {
                console.log('Infospot 9 clicked - moving to Panorama 10');
                viewer.setPanorama(panorama10);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama8);
            });

            panorama9.add(infospot9);
            panorama9.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama10 = new PANOLENS.ImagePanorama('/images/월영교/A10.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot10 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot10.position.set(4000, 1000, -2000);
            infospot10.addEventListener('click', () => {
                console.log('Infospot 10 clicked - moving to Panorama 11');
                viewer.setPanorama(panorama11);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama9);
            });

            panorama10.add(infospot10);
            panorama10.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama11 = new PANOLENS.ImagePanorama('/images/월영교/A11.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot11 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot11.position.set(4000, 1000, -2000);
            infospot11.addEventListener('click', () => {
                console.log('Infospot 11 clicked - moving to Panorama 12');
                viewer.setPanorama(panorama12);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama10);
            });

            panorama11.add(infospot11);
            panorama11.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama12 = new PANOLENS.ImagePanorama('/images/월영교/A12.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot12 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot12.position.set(4000, 1000, -2000);
            infospot12.addEventListener('click', () => {
                console.log('Infospot 12 clicked - moving to Panorama 13');
                viewer.setPanorama(panorama13);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama11);
            });

            panorama12.add(infospot12);
            panorama12.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama13 = new PANOLENS.ImagePanorama('/images/월영교/A13.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const infospot13 = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            infospot13.position.set(4000, 1000, -2000);
            infospot13.addEventListener('click', () => {
                console.log('Infospot 13 clicked - moving to Panorama 14');
                viewer.setPanorama(panorama14);
            });

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 2');
                viewer.setPanorama(panorama12);
            });

            panorama13.add(infospot13);
            panorama13.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        const panorama14 = new PANOLENS.ImagePanorama('/images/월영교/A14.jpg');
        panorama3.addEventListener('load', () => {
            console.log('Panorama 3 loaded');

            const prevInfospot = new PANOLENS.Infospot(1000, '/images/NavIcon_1.png');
            prevInfospot.position.set(-4000, -1000, 2000);
            prevInfospot.addEventListener('click', () => {
                console.log('Previous Infospot clicked - moving to Panorama 13');
                viewer.setPanorama(panorama13);
            });

            panorama14.add(prevInfospot);
            viewer.tweenControlCenter(new THREE.Vector3(0, 0, 0), 0);
        });

        viewer.add(panorama1);
        viewer.add(panorama2);
        viewer.add(panorama3);
        viewer.add(panorama4);
        viewer.add(panorama5);
        viewer.add(panorama6);
        viewer.add(panorama7);
        viewer.add(panorama8);
        viewer.add(panorama9);
        viewer.add(panorama10);
        viewer.add(panorama11);
        viewer.add(panorama12);
        viewer.add(panorama13);
        viewer.add(panorama14);


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

export default Bridge;

