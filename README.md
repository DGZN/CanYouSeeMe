![CanYouSeeMe Demo](https://user-images.githubusercontent.com/9992585/95026038-9eb66700-064b-11eb-814d-b4bc0d078222.gif)
# Can You See Me

Simple terminal command to launch a webserver and punch a connection through your firewall.

### Run from NPMJS

```
npx canyouseeme
```

### Run from GITHUB
```
npx github:dgzn/canyouseeme
```

### Global Install (npm or yarn)

`npm`
```
npm i -g canyouseeme
```

`yarn`
```
yarn add global canyouseeme
```

### Test

```
npm test
```


### Troubleshoot

If the runtime hangs and you can't start a web server try the following

#### Check for open ports and processes

##### Mac
```
netstat -vanp tcp | grep 8080 or sudo lsof -i tcp:8080 
```

##### CentOS / Ubuntu
```
netstat -vanp --tcp | grep 8080
```

##### Windows
```
tasklist | findstr node
tasklist | findstr ngrok
```

#### Kill Open Processes

##### Mac
```
killall node
killall ngrok
```


##### CentOS / Ubuntu
```
pkill node
pkill ngrok
```

##### Windows
```
taskkill /F /IM node.exe
taskkill /F /IM ngrok.exe
```

>To run the windows commands you have to be in an elevated shell (right click -> Run as administrator)

### Todo

 - Error handling
 - Allow cli paramters for host, port, etc
