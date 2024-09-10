/**
 * This is the base config for vite.
 * When building, the adapter config is used which loads this file and extends it.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import pkg from "./package.json";

type PkgDep = Record<string, string>;

// biome-ignore lint/suspicious/noExplicitAny:
const { dependencies = {}, devDependencies = {} } = pkg as any as {
	dependencies: PkgDep;
	devDependencies: PkgDep;
	[key: string]: unknown;
};
errorOnDuplicatesPkgDeps(devDependencies, dependencies);

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
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

/**
 * Function to identify duplicate dependencies and throw an error
 * @param {Object} devDependencies - List of development dependencies
 * @param {Object} dependencies - List of production dependencies
 */
function errorOnDuplicatesPkgDeps(
	devDependencies: PkgDep,
	dependencies: PkgDep,
) {
	let msg = "";
	// Create an array 'duplicateDeps' by filtering devDependencies.
	// If a dependency also exists in dependencies, it is considered a duplicate.
	const duplicateDeps = Object.keys(devDependencies).filter(
		(dep) => dependencies[dep],
	);
	// include any known qwik packages
	const qwikPkg = Object.keys(dependencies).filter((value) =>
		/qwik/i.test(value),
	);
	// any errors for missing "qwik-city-plan"
	// [PLUGIN_ERROR]: Invalid module "@qwik-city-plan" is not a valid package
	msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
	if (qwikPkg.length > 0) {
		throw new Error(msg);
	}
	// Format the error message with the duplicates list.
	// The `join` function is used to represent the elements of the 'duplicateDeps' array as a comma-separated string.
	msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
	// Throw an error with the constructed message.
	if (duplicateDeps.length > 0) {
		throw new Error(msg);
	}
}
