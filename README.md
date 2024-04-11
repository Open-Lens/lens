# Lens Desktop Core ("OpenLens")

[![Build Status](https://github.com/lensapp/lens/actions/workflows/test.yml/badge.svg)](https://github.com/lensapp/lens/actions/workflows/test.yml)
<img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Discourse_icon.svg" width=25>[Explore our Forums](https://forums.k8slens.dev)

## Motivation

As Mirantis does not share source code anymore, the aim of this repository is more to maintain an Open source version of OpenLens by fixing bugs and keep dependencies up-to-date than developping features.

## The Repository (from original repo)

This repository is where Team Lens develops the core of the [Lens Desktop](https://k8slens.dev) product together with the community.

The core is a library, powered by [Electron](https://www.electronjs.org/) and [React](https://reactjs.org/). Unlike generic Electron + React frameworks / boilerplates, it is very opinionated for creating Lens Desktop-like applications and has support for Lens Extensions.

In the future, this library will be streamlined to become more customizable and pluggable with easy to use tooling for Lens Extension developers.

This source code is available to everyone under the [MIT license](./LICENSE).

## Lens Desktop (from original repo)

[Lens Desktop](https://k8slens.dev) is built on top of the Lens Desktop Core with Team Lens built extensions released under a traditional [Terms Of Service](https://k8slens.dev/licenses/tos).

Lens Desktop is a standalone application for MacOS, Windows and Linux operating systems. Get started by downloading it from [Lens website](https://k8slens.dev).

[![Screenshot](.github/screenshot.png)](https://www.youtube.com/watch?v=eeDwdVXattc)

## Development

### Prequisites

* Nodejs >=v16

### Install

`npm run all:install`

### Run (dev)

`npm run start-dev`

If binaries have been downloaded once you can skip this step with:

`export LENS_SKIP_DOWNLOAD_BINARIES=true`

### Build app

```sh
cd open-lens
npm run build
npm run build:app
# npx nx run open-lens:build:app
```

## Documentation

`docs` folder has been removed but can be build with

`npm run build:docs`

## Contributing

See [Contributing](CONTRIBUTING.md).

## License

See [License](LICENSE).
