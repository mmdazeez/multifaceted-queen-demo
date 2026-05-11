import fs from 'fs';
import path from 'path';

const catalog = {
  '@replit/vite-plugin-cartographer': '^0.5.1',
  '@replit/vite-plugin-dev-banner': '^0.1.1',
  '@replit/vite-plugin-runtime-error-modal': '^0.0.6',
  '@tailwindcss/vite': '4.2.4',
  '@tanstack/react-query': '^5.90.21',
  '@types/node': '^25.3.3',
  '@types/react': '^19.2.0',
  '@types/react-dom': '^19.2.0',
  '@vitejs/plugin-react': '^5.0.4',
  'class-variance-authority': '^0.7.1',
  'clsx': '^2.1.1',
  'drizzle-orm': '^0.45.2',
  'framer-motion': '^12.23.24',
  'lucide-react': '^0.545.0',
  'react': '19.1.0',
  'react-dom': '19.1.0',
  'tailwind-merge': '^3.3.1',
  'tailwindcss': '4.2.4',
  'tsx': '^4.21.0',
  'vite': '^7.3.2',
  'wouter': '^3.3.5',
  'zod': '^3.25.76'
};

const workspaces = {
    '@workspace/api-client-react': 'file:../../lib/api-client-react',
    '@workspace/api-spec': 'file:../../lib/api-spec',
    '@workspace/api-zod': 'file:../../lib/api-zod',
    '@workspace/db': 'file:../../lib/db',
    '@workspace/api-server': 'file:../../artifacts/api-server'
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        processDir(fullPath);
      }
    } else if (file === 'package.json') {
      updatePackageJson(fullPath);
    }
  }
}

function updatePackageJson(filePath) {
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let changed = false;

  const sections = ['dependencies', 'devDependencies', 'peerDependencies'];
  for (const section of sections) {
    if (content[section]) {
      for (const [pkg, version] of Object.entries(content[section])) {
        if (version === 'catalog:') {
          if (catalog[pkg]) {
            content[section][pkg] = catalog[pkg];
            changed = true;
          }
        } else if (version.startsWith('workspace:')) {
            if (workspaces[pkg]) {
                // Adjust relative path based on file depth
                // This is a bit hacky, but for this project structure it should work
                const depth = filePath.split(path.sep).length - 1;
                // Asset-Manager-1 is level 0
                // artifacts/beauty-studio/package.json is level 2
                // lib/api-client-react/package.json is level 2
                let relPath = workspaces[pkg].replace('file:../../', '');
                if (filePath.includes('artifacts') || filePath.includes('lib') || filePath.includes('scripts')) {
                    content[section][pkg] = 'file:../../' + relPath;
                } else {
                    content[section][pkg] = 'file:./' + relPath;
                }
                changed = true;
            } else {
                // If not in workspaces map, just use * (npm might handle it if they are in the same workspace)
                // Actually npm doesn't support workspace:*
                // Let's just remove the workspace: prefix
                content[section][pkg] = '*';
                changed = true;
            }
        }
      }
    }
  }

  if (changed) {
    console.log(`Updating ${filePath}`);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  }
}

processDir('.');
