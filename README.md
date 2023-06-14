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
docker exec -it vue-poc npm run serve
```

### Compiles and minifies for production
```
docker exec -it vue-poc npm run build
```

### Run your unit tests
```
docker exec -it vue-poc npm run test:unit
```

### Lints and fixes files
```
docker exec -it vue-poc npm run lint --fix
```
