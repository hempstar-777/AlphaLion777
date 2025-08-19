const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html data-filename="pages/SovereignMigrationCommand" data-linenumber="78" data-visual-selector-id="pages/SovereignMigrationCommand78">
    <head data-filename="pages/SovereignMigrationCommand" data-linenumber="79" data-visual-selector-id="pages/SovereignMigrationCommand79">
        <title data-filename="pages/SovereignMigrationCommand" data-linenumber="80" data-visual-selector-id="pages/SovereignMigrationCommand80">AlphaLion777 - Sovereign Empire</title>
        <style data-filename="pages/SovereignMigrationCommand" data-linenumber="81" data-visual-selector-id="pages/SovereignMigrationCommand81">
            body { 
                background: #0a0a14; 
                color: #00ff88; 
                font-family: monospace; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                margin: 0; 
                text-align: center; 
            }
            .container { 
                border: 1px solid #00ff88; 
                padding: 2rem 4rem; 
                box-shadow: 0 0 20px #00ff88; 
                background: rgba(0, 255, 136, 0.05); 
            }
            h1 { 
                font-size: 3rem; 
                margin-bottom: 1rem; 
                text-shadow: 0 0 5px #00ff88; 
            }
            p { color: #88ffcc; }
            .blink { animation: blink 1.2s infinite; }
            @keyframes blink { 50% { opacity: 0.2; } }
        </style>
    </head>
    <body data-filename="pages/SovereignMigrationCommand" data-linenumber="109" data-visual-selector-id="pages/SovereignMigrationCommand109">
        <div data-filename="pages/SovereignMigrationCommand" data-linenumber="110" data-visual-selector-id="pages/SovereignMigrationCommand110" class="container">
            <h1 data-filename="pages/SovereignMigrationCommand" data-linenumber="111" data-visual-selector-id="pages/SovereignMigrationCommand111">🏛️ ALPHALION777 🏛️</h1>
            <p data-filename="pages/SovereignMigrationCommand" data-linenumber="112" data-visual-selector-id="pages/SovereignMigrationCommand112">STATUS: <span data-filename="pages/SovereignMigrationCommand" data-linenumber="112" data-visual-selector-id="pages/SovereignMigrationCommand112" class="blink">SOVEREIGN_OPERATIONAL</span></p>
            <p data-filename="pages/SovereignMigrationCommand" data-linenumber="113" data-visual-selector-id="pages/SovereignMigrationCommand113">SERVER: apexempire.org</p>
            <p data-filename="pages/SovereignMigrationCommand" data-linenumber="114" data-visual-selector-id="pages/SovereignMigrationCommand114">OPERATOR: chidoweywey@gmail.com</p>
        </div>
    </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'SOVEREIGN_OPERATIONAL',
    app: 'AlphaLion777',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`AlphaLion777 server running on port ${PORT}`);
});
