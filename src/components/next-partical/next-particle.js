import React, {useEffect} from 'react';
import {NextParticle as NP} from './nextparticle';

const settings = {
    color: 0,
    renderer: `default`,
    imageUrl: `/images/logo/logo.svg`,
    particleGap: 1,
    mouseForce: 20,
    clickStrength: 1,
    noise: 1,
    gravity: 0.1,
    width: 230,
    height: 143,
    particleSize: 1,
    layerCount: 2,
    depth: 1,
    layerDistance: 1,
    lifeCycle: 0,
    growDuration: 1,
    waitDuration: 1,
    shrinkDuration: 1,
    shrinkDistance: 1
};

const NextParticle = () => {

    const wrapperRef = React.createRef();
    const spawnNextParticle = () => {
        const np = new NP({...settings, wrapperElement: wrapperRef.current});
        if (!np.events.stopped) {
            np.on(`stopped`, function (evt) {
                evt.canvas.remove();
            });
        }
    };

    useEffect(() => {
        spawnNextParticle();
    }, []);

    return <div ref={wrapperRef}></div>;
};

export default NextParticle;
