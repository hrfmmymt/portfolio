# portfolio

[![CircleCI](https://circleci.com/gh/hrfmmymt/portfolio.svg?style=svg)](https://circleci.com/gh/hrfmmymt/portfolio)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This repo is hrfmmymt's personal web portfolio, and also an easy-to-customize portfolio boilerplate that was built with [preact-cli](https://github.com/developit/preact-cli). As a result, lightweight PWA has been implemented.
To start customization, refer to `package.json` and the description below. I recommend using [yarn](https://yarnpkg.com/en/docs/install). Then modify the static JSON files and replace the images with yours. These resources are in the `src/assets/` directory. Also, although I am loading [Google Fonts](https://fonts.google.com/), you should delete it if you do not need it. And I use Firebase Hosting for deployment.

## development
### install
```
yarn
```

### watch
```
yarn start
```

### serve
```
yarn serve
```

### deploy
need [Firebase CLI](https://firebase.google.com/docs/cli/).
```
yarn deploy
```

## thanks
This is inspired by [tomasswood/preact-homepage-generator](https://github.com/tomasswood/preact-homepage-generator).

Fully credits are [here](https://hrfmmymt.com/credits).
