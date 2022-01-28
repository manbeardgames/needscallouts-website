# Needs Callouts Website

This repository contains the source code for the Needs Callouts Free Company website.

[https://needscallouts.com](https://needscallouts.com)

This website is a NodeJS application using [Express Web Framework](https://expressjs.com/) with [EJS (Embedded JavaScript](https://ejs.co/) as the templeting engine.

## Source Code

The full source code is avaiablle here on GitHub for those with access to this repository. To download and work on the site:

1. Clone the source code `git clone https://github.com/needscallouts/needscallouts-website.git`

2. `cd` into the `/source/needs-callouts` directory and perform `npm run init`. This will do the initial npm install command and run a few other commands to get the development environment setup.

3. While developing, you can run the command `npm run watch-app & npm run watch-scss`. This will start the express server using nodemon and parallel run the gulp file that watches for changes to the SCSS files. Once this command is running, any changes you make to the source files are automatically updated, you just have to refresh the browser page manually. (I may look into live-reload soon).

Once the above is performed, you should be setup to start development.

## Contributing

(coming soon)

# License

The source code is licensed under the MIT License. See the [LICENSE](/LICENSE.md) file for the full license text

```
The MIT License

Copyright 2022 Christopher Whitley

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
