# hyper-content-for

This module adds directives that allow you to store blocks of HTML for use other
places in your application. It is inspired by the Ruby on Rails view helper `content_for`,
which is useful when you need to change something outside of the view's own scope.

Another way to accomplish this is to use `$rootScope`, but that's generally considered
bad practice (much like leaking variables onto your `window` scope in plain JavaScript).

## Usage

So how do you actually use this thing? It's quite simple, actually! The module
exposes two directives, `hyper-content` and `hyper-yield`. The `hyper-content`
directive wraps around the content and takes an ID through the `for` attribute.
The `hyper-yield` directive is filled by the content that shares the same ID,
passed through the attribute `to`. An example:

_In the template file (e.g. index.html):_

```html
<hyper-content for="header">
  <h2>All articles</h2>
</hyper-content>
```

_In the layout file:_

```html
<header>
  <h1>Blog 2000</h1>
  <hyper-yield to="header"></hyper-yield>
</header>
```

_Resulting layout:_

```html
<header>
  <h1>Blog 2000</h1>
  <hyper-yield to="header">
    <h2>All articles</h2>
  </hyper-yield>
</header>
```

## Contributing

Please check our [playbook] for guidelines on contributing.

[playbook]: https://github.com/hyperoslo/playbook/blob/master/GIT_AND_GITHUB.md

## Credits

[Hyper] made this. We're a digital communications agency with a passion for good
code, and if you're using this library we probably want to [hire you].

[hyper]: http://hyper.no
[hire you]: http://www.hyper.no/jobs

## License

This project is available under the MIT license. See the [LICENSE].

[license]: https://github.com/hyperoslo/hyper-content-for-angular/blob/master/LICENSE.md
