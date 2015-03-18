# hyp-content-for

Allows you to store HTML for use (and re-use) later.

## Description

This module adds a couple of directives that allows you to store blocks of HTML
for use other places in your application. It is highly inspired by the Ruby on
Rails view helper `content_for`, and it is useful in cases where you have a
layout file and template files and need to alter the layout based on which
template you are currently displaying.

Why not just put the data that you want to keep dynamic on a scope variable on
the _$rootScope_ and change that data in each template's controller? Well, first
of all, polluting the $rootScope is generally considered a bad practice, just
like leaking variables onto your global (`window`) scope in JavaScript in
general. Furthermore, if you need to change more than just a plain text – like
multiple HTML elements – this method quickly gets out of hands. And you would
need to write HTML in your Angular JavaScript code. And you would need to use
`ng-bind-html` so that the HTML is not automatically sanitized. And it's
probably more code.

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
