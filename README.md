# grunt-wp-plugin

> Create a WordPress plugin with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

#Credits

This is based on the awesome work by Eric Mann: [grunt-wp-plugin]: https://github.com/10up/grunt-wp-plugin

## What's different to 10up's version?

1. We only use Sass at Sennza so I stripped out the CSS Preprocessor prompts and logic.
2. We always use Compass & Sass so I baked that in.
3. I've modified the directory structure (which I think I'll modify further soon ).
4. I haven't run `grunt build` yet.

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

### Linux/Mac Users

```
git clone git@github.com:sennza/grunt-wp-plugin.git ~/.grunt-init/wp-plugin
```

### Windows Users

```
git clone git@github.com:sennza/grunt-wp-plugin.git %USERPROFILE%/.grunt-init/wp-plugin
```

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init sennza-wp-plugin
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

Install the NPM modules required to actually process your newly-created project by running:

```
npm install
```

## Watching your plugin

I used to create a config.rb file and use [Compass.app]: http://compass.handlino.com/ to watch a theme or plugin folder that used Compass & Sass in the past but thanks to the wonder that is Grunt this app isn't needed anymore.

All you have to do is run `grunt watch` from the directory where you ran `grunt-init grunt-wp-plugin` while you're in development and Grunt will do everything for you!

## Potential Issues You Might Encounter

You might be missing a few Ruby gems for this repository. E.g. Ruby, Sass, Compass

I already had Ruby installed. You can check if you have it install by running `ruby -v` in your terminal.

###Installing Sass

Simply run `gem install sass` once you've got Ruby on your system.

###Installing Compass

Simply run `gem update --system && gem install compass` once you've got Ruby on your system.

## Scaffold

After running the init command above, you will be presented with a standard directory structure similar to:

    /plugin
    .. /css
    .. .. /src
    .. .. /sass
    .. /js
    .. .. /src
    /images
    .. /src
    .. /includes
    .. /languages
    .. .. plugin.pot
    .. .gitignore
    .. Gruntfile.js
    .. plugin.php
    .. readme.php

### JavaScript

You should only ever be modifying script files in the `/js/src` directory.  Grunt will automatically concatenate and minify your scripts into `/js/filename.js` and `/js/filename.min.js`.  These generated files should never be modified directly.

### Images

The `/images/src` directory exists only to allow you to keep track of source files (like PSDs or separate images that have been merged into sprites).  This helps keep source files under version control, and allows you to bundle them with the distribution of your new GPL plugin.

## Release History

* 2013-09-05   v0.1.1   Tweaked it more for Compass.
* 2013-09-03   v0.1.0   Initial beta release.