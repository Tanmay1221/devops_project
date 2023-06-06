- [Docker cheat sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)
- [docker examples](https://github.com/docker/awesome-compose)
- nodeProject contain code for nodejs application to get information from mysql database and use pooling concept
- build nodeProject 
```docker build -t <username>\nodejsapplication .```
- ```docker login```
- ```docker push <username>\nodejsapplication```
- And ```run docker compose up -d```
- check url ```http://localhost:8080```
