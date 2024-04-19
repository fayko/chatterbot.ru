/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// import { ServerStyleSheet } from 'styled-components';

const fs = require('fs');
const path = require('path');
// // const jsdom = require("jsdom");
const ReactDOMServer = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');

// // import fs from 'fs';
// // import path from 'path';
// // import React from 'react';
// // import ReactDOMServer from 'react-dom/server';

// // import App from './components/App/index.ts';
// // const App = require('./components/App/index.ts');

// // const App = require('./components/App/index.ts');
// // import * as AppMain from '../public/ssr.5bf2536292a18be307b1.js';
// // const AppS = require('../public/ssr.93bce9310346e4153a6d.js');
const htmlPath = path.resolve('./public/index.html');

const AppMain = require('../dist/components/App/index');
// const App2 = require('../dist/ssr');

// // const { JSDOM } = jsdom;
// // const { window } = new JSDOM(`...`);
// // const { document } = window;
// // console.log(AppMain);
// console.log(App2);

// async function replaceToGZIP(callback) {
//   await fs.readFile(htmlPath, 'utf-8', async (err, data) => {
//     if (err) console.log({ err });

//     const regexp = /\/bundle\..*\.js/gm;
//     const newData = data.replace(regexp, `$&.gz`);
//     // console.log({ newData });

//     await fs.writeFile(htmlPath, newData, 'utf8', writeFileError => {
//       if (writeFileError) console.log(writeFileError);
//     });
//   });

//   callback();
// }

async function ServerRender() {
  // const sheet = new ServerStyleSheet();
  // const serverRenderedPart = ReactDOMServer.renderToString(AppMain.default());

  // try {
  //   html = ReactDOMServer.renderToString(sheet.collectStyles(AppMain.default()));
  //   styleTags = sheet.getStyleTags();
  //   // console.log(styleTags);
  // } catch (e) {
  //   console.log(e);
  // } finally {
  //   sheet.seal();
  // }

  // console.log(sheet);

  await fs.readFile(htmlPath, 'utf-8', async (err, data) => {
    if (err) console.log({ err });

    const sheet = new ServerStyleSheet();
    let rootDiv;

    try {
      const html = ReactDOMServer.renderToString(sheet.collectStyles(AppMain.default()));
      const styleTags = sheet.getStyleTags();
      console.log(styleTags);
      // sheet.seal();

      const regexp = /<div id="root"><\/div>/gm;
      rootDiv = data.replace(regexp, `<div id="root">${html}${styleTags}</div>`);
      // console.log(styleTags);
    } catch (e) {
      console.log(e);
    } finally {
      // sheet.seal();
    }

    // const regexp = /<div id="root"><\/div>/gm;
    // const rootDiv = data.replace(regexp, `<div id="root">${serverRenderedPart}</div>`);
    // const rootDiv = data.replace(regexp, `<div id="root">${html}${styleTags}</div>`);

    await fs.writeFile(htmlPath, rootDiv, 'utf8', writeFileError => {
      if (writeFileError) console.log(writeFileError);
    });
  });
  console.log('ok');
}

// replaceToGZIP(ServerRender);
ServerRender();
