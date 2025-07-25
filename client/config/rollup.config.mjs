// @ts-check

import esbuild from 'rollup-plugin-esbuild';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import html from '@rollup/plugin-html';
import getpageTemplate from '../scripts/template.mjs';
import copy from 'rollup-plugin-copy';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import { writeFileSync } from 'fs';
import postcssImport from 'postcss-import';
import stylexPlugin from '@stylexjs/rollup-plugin';

const isDevelopment = process.env.NODE_ENV === 'development';
const distFolder = 'dist';
const deleteTargets = [`${distFolder}/*`];
if (!isDevelopment) deleteTargets.push(`${distFolder}/.build-done`);

const config = [
  {
    input: './client/index.tsx',
    output: [
      {
        dir: `./${distFolder}`,
        format: 'es',
        sourcemap: isDevelopment,
        entryFileNames: 'bundle-[hash].mjs',
      },
    ],
    plugins: [
      del({ targets: deleteTargets }),
      // React checks process.env.NODE_ENV for a production or development value and
      // Rollup isn’t providing any. @rollup/plugin-replace is used to provide this information
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      nodeResolve({ browser: true }),
      commonjs(),
      // extract CSS to separate file
      postcss({
        plugins: [postcssImport()],
        extract: true,
      }),
      stylexPlugin({
        dev: process.env.NODE_ENV !== 'production',
        test: process.env.NODE_ENV === 'test',
        runtimeInjection: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: { type: 'commonJS' },
        babelConfig: {
          presets: [
            '@babel/preset-env',
            // This prevents needing React imports
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
          ],
        },
        useCSSLayers: true,
      }),
      injectProcessEnv({
        IS_DEVELOPMENT: isDevelopment,
      }),
      esbuild({
        target: 'ES2022',
        minify: process.env.NODE_ENV === 'production',
      }),
      // generate index.html file and add it to dist folder
      html({
        fileName: 'index.html',
        template: ({ bundle, files }) => {
          return getpageTemplate('Anura Online', Object.keys(bundle)[0], files.css[0].fileName);
        },
      }),
      // Copy Anura Online to anura-online folder inside dist folder
      copy({
        targets: [
          { src: 'client/language/*.json', dest: 'dist/language' },
          {
            src: 'node_modules/@nuralogix.ai/web-measurement-embedded-app/dist/*',
            dest: `${distFolder}/measurement-app`,
          },
        ],
      }),
    ],
  },
];

if (process.env.NODE_ENV === 'development')
  config[0].plugins.push({
    name: 'live-reload-trigger',
    async closeBundle() {
      // Defer execution until after other closeBundle hooks finish
      await new Promise((resolve) => setImmediate(resolve));
      // Trigger live reload in dev mode by writing to the .build-done file
      writeFileSync(`${distFolder}/.build-done`, Date.now().toString());
    },
  });

export default config;
