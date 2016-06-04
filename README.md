# Leieting Blog Theme

A theme for [Ghost](http://github.com/tryghost/ghost/).

Based on the [Casper](https://github.com/TryGhost/Casper) default theme.

## Assets
We use [`gulp`](http://gulpjs.com/) for generating our assets. Use the command to generate the css from the files rather than editing the css directly.

For now, we check the compiled assets in to git.

The files you should be changing are the ones in [`src/sass`](src/sass).

### Setup
Once cloned, you need the following installed to generate assets:

- [Node](https://nodejs.org/en/download/)
- npm (comes with Node)

In the root of this project, run this to install all the dependencies:

```
npm install
```

Then install `gulp` globally if you don't have it already:

```
npm install -g gulp
```

You only need to install `gulp` once, but you should run `npm install` again every time the [`package.json`](package.json) file has changed.

### Generating assets

To generate one time, run:

```
gulp
```

While developing, it's probably useful to run the following command. It'll stay up and watch the files for changes, then compile them again automatically.

```
gulp watch
```

To compile assets for production, run

```
gulp production
```

## Copyright & License

Copyright (c) 2013-2016 Ghost Foundation - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
