import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const astroBin = path.join(root, 'node_modules', 'astro', 'bin', 'astro.mjs');
const args = process.argv.slice(2);

const child = spawn(process.execPath, [astroBin, ...args], {
	cwd: root,
	env: {
		...process.env,
		ASTRO_TELEMETRY_DISABLED: '1',
	},
	stdio: 'inherit',
});

child.on('exit', (code) => {
	process.exit(code ?? 0);
});
