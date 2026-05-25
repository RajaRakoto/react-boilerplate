<div align="center">
<img src="https://rajarakoto.github.io/github-docs/boilerplate/react-boilerplate.jpg">
</div>

# react-boilerplate 🚀

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://rajarakoto.github.io/github-docs/badge/build-by.svg)](https://forthebadge.com)

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**Developer Ready: A comprehensive template. Works out of the box for most React.js projects. This project is intended to be used with the latest active release of React.js.**

Instant Value - All basic tools included and configured:

- 🚀 Typescript >= 6.0.x
- 🌐 React.js >= 19.x
- 🧅 Use Bun as package manager
- 🌈 ESM
- 🧹 ESlint >= 10 with flat config and some initial rules recommendation
- 🧪 Biome >= 2 for code formatting and linting
- ✅ Jest or Bun test for fast unit testing and code coverage
- 📚 Type definitions for Bun.js and Jest
- 🎨 Prettier to enforce consistent code style
- ⚙️ EditorConfig for consistent coding style
- 📦 NPM scripts for common operations
- 📝 Simple example of Tsx code
- 🐗 Run tasks with Grunt (example for backup)
- 🖥️ Ungit for version control (git) with a GUI
- ⚡ Use Vite for lightning fast HMR (hot reload)
- ⚡ Optimized build by Vite
- 🧪 E2E test with Playwright
- 🐳 Containerization for easy deployment and scaling with Docker
- 🧺 Pre-configured setup for Redux or Zustand as state manager, easily removable if not needed
- 🌀 Tailwind CSS >= 4 with CSS-first config via `@tailwindcss/vite` plugin (no `tailwind.config.ts` needed)
- 🩷 Sass extends CSS with features like variables, nested rules, mixins, imports, inheritance, built-in functions, and more ...

> You can customize your website faster with [PLUM](https://github.com/RajaRakoto/plum), a mixins toolset powered by SASS. Quickly produce consistent, scalable CSS output, regardless of project size. For the best experience, it is recommended to use SASS version `1.77.6` to ensure smooth integration with PLUM.

---

### 📌 Usage

To use this template, use the following commands:

```bash
bun create github.com/RajaRakoto/react-boilerplate <project-name>
cd <project-name>
bun run pkg-upgrade # to upgrade outdated dependencies in interactive mode
```

> 1. This starter kit uses the MIT license with my name and GitHub profile—update or remove if needed.
> 2. Each subdirectory in `src` has a `README.md` to explain its structure.
> 3. Adjust the `package.json` (name, description, author, etc.) to fit your project.

---

### 📌 Deployment

Instructions are provided for deploying both with and without Docker. Both options still require a platform to host the application.

**Without Docker**: Deploying is as easy as running the following command and pointing your web server to the generated `index.html` file found at `dist/index.html`

```bash
bun run build
```

**With Docker**: A Dockerfile with an [NGINX](https://www.nginx.com/) base image is also provided for quick and easy deployments. Simply execute the following commands:

```bash
bun run build
docker build . -t <container_name> # eg: docker build . -t todo-app
docker run  -p <port_number>:80 <container_name> # eg: docker run todo-app -p 8080:80
```

---

### 📌 NPM Scripts

**Preview**

- 📜 `preview` - Run your app with preview mode.

**Clean**

- 📜 `clean` - Remove coverage data, prod folder, playwright-report ...

**Development**

- 📜 `dev` - Launch Vite.js development server using hot module remplacement (HMR).

**Build**

- 📜 `build` - Build faster with Vite.js.

**Testing**

- 📜 `test:unit` - Run unit testing with Bun.js.
- 📜 `test:unit:watch` - Interactive watch mode to automatically re-run unit testing with Bun.js.
- 📜 `test:e2e` - Run end to end (e2e) testing with Playwright.

**Linting and Formatting**

- 📜 `biome:start` - Starts the Biome daemon server. You can specify a custom configuration file path using the `--config-path` option.
- 📜 `biome:stop` - Stops the Biome daemon server.
- 📜 `biome:fix` - Runs a source code check and applies automatic fixes (linter & formatter) according to the defined rules.
- 📜 `biome:unsafe` - Works like `biome:fix`, but may apply more invasive or risky changes.
- 📜 `eslint` - Lints the project with ESLint and reports unhandled errors.
- 📜 `prettier` - Formats code according to the `.prettierrc` rules.

**Backup and Dependency Management**

- 📜 `backup` - Backup files with Grunt.
- 📜 `pkg-check` - Check useless dependencies with depcheck.
- 📜 `pkg-upgrade` - Upgrade outdated dependencies (interactive mode) with npm-check-updates.

**Versioning**

- 📜 `versioning` - Start ungit server.

**NPM Commands**

- 📜 `npm-version:major` - Increments the major version number of your project using npm.
- 📜 `npm-version:minor` - Increments the minor version number of your project using npm.
- 📜 `npm-version:patch` - Increments the version patch number of your project using npm.

**NVM**

- 📜 `nvm` - Manage multiple node.js versions. Easily switch between node versions per project to ensure compatibility.

**Scripts**

- 📜 `script:sass-charset` - Adds the @charset "UTF-8" declaration at the beginning of all SCSS files in the project.

---

### 📌 Similar

You can also check out my other starter projects:

- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [node-boilerplate](https://github.com/RajaRakoto/node-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)
- 🚀 [qwik-boilerplate](https://github.com/RajaRakoto/qwik-boilerplate)
- 🚀 [vscode-boilerplate](https://github.com/RajaRakoto/vscode-boilerplate)
- 🚀 [cli-boilerplate](https://github.com/RajaRakoto/cli-boilerplate)
