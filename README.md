# vue-electron

## 1、Project setup
```
npm install
```

## 2、WEB
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 3、Electron application
### electron-icon-builder build mac-windows-linux's icons
依赖[static](./static)下size=256*256的[icon.png](./static/icon.png)文件生成到[build](./build)下各种大小和类型的图片
```
npm run electron:icon
```

### Compiles and hot-reloads for electron development
```
npm run electron:serve
```

### Compiles and minifies for electron production
```
npm run electron:build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
