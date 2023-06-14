# emit-vs-handler

## Project setup
```
docker build -t vue-poc .
docker create --name vue-poc -p 8080:8080 -p 24678:24678 -v $(pwd):/app vue-poc
docker container start vue-poc
docker exec -it vue-poc npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
