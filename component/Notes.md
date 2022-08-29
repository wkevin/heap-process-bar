# Dev

## how to publish

- build

```sh
$ npm install
$ cd component
$ npm run build
```

- modify version

```sh
$ npm version <x.y.z>[-beta.N]
```

- publish

```sh
$ npm login
$ npm publish [--tag=beta|stable|dev|canary]
```
