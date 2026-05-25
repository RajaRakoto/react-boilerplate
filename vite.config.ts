import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import pkg from "./package.json";

type PkgDep = Record<string, string>;

// biome-ignore lint/suspicious/noExplicitAny: package.json doesn't expose precise types for this double cast
const { dependencies = {}, devDependencies = {} } = pkg as any as {
	dependencies: PkgDep;
	devDependencies: PkgDep;
	[key: string]: unknown;
};
errorOnDuplicatesPkgDeps(devDependencies, dependencies);

export default defineConfig({
	plugins: [react(), tsconfigPaths(), tailwindcss()],
	server: {
		host: false,
		strictPort: true,
	},
	css: {
		devSourcemap: false,
		preprocessorOptions: {
			scss: {
				additionalData: (source: string, id: string) =>
					!id.includes("node_modules/@raja-rakoto/plum") ? source : "",
			},
		},
	},
	publicDir: "./public",
});

// ======================== utils =========================

function errorOnDuplicatesPkgDeps(
	devDependencies: PkgDep,
	dependencies: PkgDep,
) {
	const duplicateDeps = Object.keys(devDependencies).filter(
		(dep) => dependencies[dep],
	);
	if (duplicateDeps.length > 0) {
		throw new Error(
			`Warning: "${duplicateDeps.join(", ")}" is listed in both devDependencies and dependencies. Move it to devDependencies only.`,
		);
	}
}
