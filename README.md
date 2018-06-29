# Prerequirements
1. instlall node.js
```
$ npm install -g create-react-native-app
```

#### macOS + iOS - install
```
$ brew install node
$ brew install watchman
$ npm install -g react-native-cli
```
- Install Xcode via the Mac App Store
- Install Xcode Command Line Tools

### Creating new application 
```
$ react-native init AwesomeProject
```

### Running your React Native application
```
$ cd AwesomeProject
$ react-native run-ios # You can also run it directly from within Xcode or Nuclide
```

### Copy project utility
```
$ ./copy-project.sh $sourceName $destName
```
Tento command je namiesto tohto:
```
$ create-react-native-app $destName
```

### Troubleshooting

#### Port already in use
```
$ sudo lsof -i :19000
$ kill -9 <PID>
```