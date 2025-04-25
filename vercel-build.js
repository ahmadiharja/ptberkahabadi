// CommonJS format for better compatibility with Vercel
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

if (!fs.existsSync('dist/public')) {
  fs.mkdirSync('dist/public', { recursive: true });
}

// Build client
console.log('Building client...');
execSync('npx vite build', { stdio: 'inherit' });

// Build server
console.log('Building server...');
execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

// Create server directory in dist
if (!fs.existsSync('dist/server')) {
  fs.mkdirSync('dist/server', { recursive: true });
}

// Copy server files to ensure they're available
console.log('Copying server files...');
const serverDir = path.join(__dirname, 'server');
const serverFiles = fs.readdirSync(serverDir)
  .filter(file => file.endsWith('.ts') || file.endsWith('.js'));

for (const file of serverFiles) {
  const sourcePath = path.join(serverDir, file);
  const targetPath = path.join('dist/server', file);
  
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

console.log('Build completed successfully'); 
