Moon.js
====

Powerful JavaScript animation framework that uses CSS3 transitions

##Why not to use it yet

Moon.js is in it's early days and should not be used in production environment (don't even think about it!). Although you are encouraged to help us build a lightweight and library-agnostic modern JavaScript animation framework that uses CSS3 transitions to make it really smooth in every modern browser.

If you want to test it, just download the minified version and include it anywhere on your website:

```html
<script src="Moon.min.js"></script>
```

##What it is

You already know that Moon.js wants to be as simple as possible. To achieve this goal, we need to make the hard work transparent to the user. No new strange conventions or strange function names. Want to set an animation? `Moon("#selector").animate()`. Want to play the animation? Just use `.play()`.

But sometimes you need horse power to bring to reality that crazy animation idea. Moon.js wants to give you this power the easiest way possible, the better way possible. If you want it too, help us bring this dream (and your dream) to reality by contributing with tips and coffee code.

##Understanding it
*Notice: not everything explained after this notice is working. Some functions will just crash and explode the internet. Yes, I will repeat: DO NOT USE THIS IN PRODUCTION ENVIRONMENTS YET.*

###Moon()
```javascript
Moon(["#selector" | HTMLCollection | NodeList]);
```
`Moon()` function is the main function of Moon.js. It accepts an array of CSS selectors, HTMLCollections or NodeLists and returns an Moon instance (internally named Moon.pt). What you can do with it? Animate everything, of course! How? Take a look:

###animate()

```javascript
.animate({"propertie": "value"});
```

The `animate()` function is a function of Moon.pt, and works with any Moon instance. To use it, you just have to pass the properties you want to change as a JavaScript object. You can than use `"duration": 1000`, `"delay": 500` (in milliseconds) and `"easing": "ease"` to change the behavior of your animation.

To create chained animations, just use:
```javascript
Moon("#selector").animate().animate()
```

Yes, it's this simple.

###play()

```javascript
.play(callback);
```

In order to play a Moon.js animation, you must use `play()`. It is a function of Moon.pt just as `.animate()`. `play()` plays (Ohh!) the animations that were defined using `.animate()` and fires a callback function right at the end of everything.

##Wrap-up

For now, I'll improve these main functions to deploy a v0.1 as soon as possible. Feel free to send pull requests with improvements to existing code or fill issues with feature requests. To maintain my sanity, please do not report bugs yet. You know, I just started this thing. When a pre-release version shows up, I will be happy if you send bug reports and even unit tests to ensure it will never happen again.

##Contact

I'm reachable at Twitter ([@hugobessaa](https://twitter.com/hugobessaa)), ADN ([@bessa](https://alpha.app.net/bessa)) or email ([hugobessaa+moon@gmail.com](mailto:hugobessaa+moon@gmail.com)). Contact me. I work full-time and study, but I will reply you.

##License

MIT, freak out …and read the LICENSE file.