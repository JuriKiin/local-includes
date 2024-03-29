# local-includes
A JS Library to enable local HTML includes to allow for component driven HTML components.

This library also supports nested includes, as well as CSS and JS interactions with local includes.

## Demo

Demo site can be found here: https://jurikiin.com/local-includes/

## Integration

1. Include the following script at the end of the body in your top level HTML file.

```
<script type="text/javascript" src="https://jurikiin.com/local-includes/local-includes.js"></script>
```

2. Define your local included snippet. (ex. components/example.html)

```
<div>
    <p>This is a locally included snippet!</p>
</div>
```

3. Declare a local include with the local path to the html file.

```
<body>
  <ks-include path='components/example.html'></ks-include>
</body>
```

4. That's it!


### Support this Library
Support this project with a ⭐

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jurikiin)

