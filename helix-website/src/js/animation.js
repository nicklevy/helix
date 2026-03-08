// src/js/animation.js
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    let width, height;
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();
    
    let time = 0;
    
    // Complementary orange/coral accent to go with the teal brand colors
    const colors = {
        primary: '95, 184, 210',  // #5fb8d2
        dark: '58, 140, 163',     // #3a8ca3
        accent: '242, 166, 114',  // subtle warm accent (peach/coral)
    };
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        const centerX = width / 2;
        const centerY = height / 2;
        
        time += 0.005; // Even slower animation speed
        
        const numPoints = width > 768 ? 140 : 80;
        const spacing = width / numPoints;
        const startX = 0;
        
        const yAmplitude = Math.min(height * 0.25, 200);
        const zAmplitude = 50;
        const frequency = width > 768 ? 0.015 : 0.03;
        
        // Sorting points for basic depth
        let elements = [];
        
        for (let i = 0; i < numPoints; i++) {
            const xOffset = i * spacing;
            const x = startX + xOffset;
            
            const phase = x * frequency - time * 2;
            
            const y1 = Math.sin(phase) * yAmplitude;
            const z1 = Math.cos(phase) * zAmplitude;
            
            const y2 = Math.sin(phase + Math.PI) * yAmplitude;
            const z2 = Math.cos(phase + Math.PI) * zAmplitude;
            
            elements.push({ x, y: centerY + y1, z: z1, type: 'strand1', index: i });
            elements.push({ x, y: centerY + y2, z: z2, type: 'strand2', index: i });
            
            // Connection line between strands
            elements.push({
                x, 
                y1: centerY + y1, y2: centerY + y2,
                z: (z1 + z2) / 2,
                type: 'connection'
            });
        }
        
        // Sort by depth mapping (z-index essentially)
        elements.sort((a, b) => a.z - b.z);
        
        elements.forEach(p => {
            const scale = (p.z + zAmplitude) / (zAmplitude * 2); // 0 to 1
            const alpha = 0.10 + scale * 0.45; // balanced opacity
            
            if (p.type === 'connection') {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y1);
                ctx.lineTo(p.x, p.y2);
                ctx.strokeStyle = `rgba(${colors.primary}, ${alpha * 0.2})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            } else {
                ctx.beginPath();
                const radius = 1.5 + scale * 2.5;
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                
                if (p.type === 'strand1') {
                    ctx.fillStyle = `rgba(${colors.dark}, ${alpha})`;
                } else {
                    ctx.fillStyle = `rgba(${colors.accent}, ${alpha})`;
                }
                ctx.fill();
            }
        });
        
        // Draw continuous line for strand 1 length-wise
        ctx.beginPath();
        for (let i = 0; i < numPoints; i++) {
            const x = startX + i * spacing;
            const phase = x * frequency - time * 2;
            const y = centerY + Math.sin(phase) * yAmplitude;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${colors.dark}, 0.1)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw continuous line for strand 2 length-wise
        ctx.beginPath();
        for (let i = 0; i < numPoints; i++) {
            const x = startX + i * spacing;
            const phase = x * frequency - time * 2;
            const y = centerY + Math.sin(phase + Math.PI) * yAmplitude;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${colors.accent}, 0.1)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        requestAnimationFrame(draw);
    }
    
    draw();
}
