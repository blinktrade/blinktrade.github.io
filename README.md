[blinktrade.com](http://blinktrade.com)
=============

Blinktrade landing page

## How it works?

We use [jekyll](http://jekyllrb.com/), a static generator in Ruby, to create this website.

## First Steps

1 - Install [Git](http://git-scm.com/downloads) and [Ruby](https://www.ruby-lang.org/pt/downloads/), in case you don't have them yet.

2 - Once installed these dependecies, open up the terminal and install [Jekyll](http://jekyllrb.com) with the following commands.

```sh
$ gem install jekyll
```

3 - Now clone the project
```sh
$ git clone git@github.com:blinktrade/blinktrade.github.io.git
```

4 - Navigate to the project folder
```sh
$ cd blinktrade.github.io
```

5 - And finally run: 
```sh
$ jekyll server --watch
```

You'll have access to the website at `localhost:4000` :D

## Browser Support

![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_64x64.png "Internet Explorer") | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_64x64.png "Google Chrome") | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_64x64.png "Firefox") | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_64x64.png "Opera") | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_64x64.png "Safari")
|:---:|:---:|:---:|:---:|:---:|
| IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## File Structure

The file structure for the project is organized in the following way:

```
.
|-- _includes
|-- _layouts
|-- _posts
|-- _config.yml
`-- index.html
```

### [_includes](https://github.com/blinktrade/blinktrade.github.io/_includes)

They're blocks of code used to generate the main page of the site (index.html).

### [_layouts](https://github.com/blinktrade/blinktrade.github.io/_layouts)

Here you'll find the default template of the application.

### [_posts](https://github.com/blinktrade/blinktrade.github.io/_posts)

Here you'll find a list of files for each post.

### [_config.yml](https://github.com/blinktrade/blinktrade.github.io/_config.yml)

It stores most of the settings of the application.

### [index.html](https://github.com/blinktrade/blinktrade.github.io/index.html)

It's the file responsible for all application sections.

_More information about Jekyll's file structure [here](https://github.com/mojombo/jekyll/wiki/Usage)._

## Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
[GNU GENERAL PUBLIC LICENSE](https://github.com/randsonjs/blinktrade.github.io/blob/master/LICENSE) © Blinktrade, Inc.
