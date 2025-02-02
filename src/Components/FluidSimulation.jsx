import React, { useEffect } from 'react';

const FluidSimulation = () => {
    useEffect(() => {
        // Load the fluid simulation script
        const script = document.createElement('script');
        script.src = '/script.js'; // Update the path to script.js
        script.async = true;
        document.body.appendChild(script);

        // Load dat.gui for controls (optional)
        const datGuiScript = document.createElement('script');
        datGuiScript.src = '/dat.gui.min.js'; // Update the path to dat.gui.min.js
        datGuiScript.async = true;
        document.body.appendChild(datGuiScript);

        // Cleanup
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(datGuiScript);
        };
    }, []);

    return (
        <div>
            <canvas id="fluid-canvas" style={{ width: '100%', height: '100vh' }}></canvas>
        </div>
    );
};

export default FluidSimulation;