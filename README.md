# Vue Trivia
A small trivia app built in Vue and using the [Open Trivia Database API](https://opentdb.com/).
<br>
<br>
The purpose of this project was for me to get familiar with Vue, and therefore contains some weird code, quite possibly bad style, and I'm pretty sure I'm breaking some conventions. You'll see this in my use of `mixins` and the `EventBus`. But I maintain that being a bit hacky is a great way to learn how things work ;P
<br>
<br>
Included is also [Vue Styleguidist](https://vue-styleguidist.github.io/), for generating documentation. See their [documentation](https://vue-styleguidist.github.io/docs/GettingStarted.html) for how to use.
<br>
<br> 
The project contains your default Vue deployment script for easy deployment, as well as installation instructions below for running it locally.

## Live Demo
Try it [here](https://robopro.github.io/vue-trivia/)

## Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

### Deploy
Make sure you make the requiered changes in `/deploy.sh` before deploying!
```bash
./deploy.sh
```
