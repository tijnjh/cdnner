# cdnner

a version of [sonner](https://sonner.emilkowal.ski/) that you can load on any webpage by including it in a script tag (via cdn) and calling `window.toast()`

i got the size to around 60kb, by using preact instead or react

just import the following URL somewhere in your project
(the sha is optional, but recommended to pin it to a certain commit)

```
https://cdn.jsdelivr.net/gh/tijnjh/cdnner@a6f1947/dist/main.js
```

you can even pass props to the Toaster element via url params

```
https://cdn.jsdelivr.net/gh/tijnjh/cdnner@a6f1947/dist/main.js?richColors=true&position=top-right
```


