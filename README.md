# Space Apps Pasadena Website

Website for NASA Space Apps in Pasadena

---

<br>

## Steps for collaborators

Hi! Here are some steps that will help you set up your environment.
Hope you have fun!

Note: This assumes you have Node.js and npm installed locally.

### 1) Clone repo:

```
git clone https://github.com/SheCodes-PCC/spaceapps-pasadena.git
cd spaceapps-pasadena
```

<br>

### 2) Install material components:

https://material.io/components?platform=web

You'll need the following material components:

```
npm i material-components-web
```

<br>

### 3) Install project dependencies:

You’ll need all of these Node dependencies:

- webpack: Bundles Sass and JavaScript
- webpack-dev-server: Development server
- sass-loader: Webpack loader to preprocess Sass files
- sass: Sass compiler
- css-loader: Resolves CSS @import and url() paths
- extract-loader: Extracts the CSS into a .css file
- file-loader: Serves the .css file as a public URL
- autoprefixer: Parses CSS and adds vendor prefixes to CSS rules
- postcss-loader: Loader for Webpack used in conjunction with autoprefixer
- @babel/core
- babel-loader: Compiles JavaScript files using babel
- @babel/preset-env: Preset for compiling es2015
  <br>
  https://material.io/develop/web/getting-started

You can install these Node dependencies by running this command:

```
npm install --save-dev && npm update
```

<br>

### 4) Run spaceapps-pasadena:

Start the server. Run `npm start` and open http://localhost:8080.
<br>
Note: The server needs to continue running in your terminal.
<br>
You should see the website.

<br>

### 5) View your updates:

Change any styling or JavaScript, and want to view updates?
<br>
<br>
View updates in your browser by opening a new terminal tab (command/ctrl t).
<br>
Make sure you're in the spaceapps-pasadena folder, then run `npm run build`.
<br>
Refresh your browser page. You should see the updates.

<br>

### 6) When you've finished:

Open the terminal that has your server running, and close the server with `ctrl + c`.

<br>

### 7) Ready to share your great work:

Run `npm run build` before commit to git.

<br>

---

## Resources:

Help with <a href="https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request" target="_blank">creating a pull request.</a>

<a href="https://github.com/material-components/material-components-web/tree/master/packages" target="_blank"> Material Web Components Github</a>

List of <a href="https://material.io/components?platform=web" target="_blank">Material Web Components</a>

See how material code works with <a href="https://glitch.com/~material-theme-builder" target="_blank">Material theme examples.</a>
