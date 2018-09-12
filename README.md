# pirateflix

> Stream piratebay movies directly from CLI

<img src="./preview.png" />

## Install from npm package
```sh
$ npm install pirateflix@1.0.15
```

## Install from git repo

```sh
# the output of "node -v" is referred as $NODE_VERSION
$ node -v
```

```sh
$ git clone https://github.com/Lisheng2016/pirateflix.git

# brew node is installed @ /usr/local/Cellar/node/$NODE_VERSION
# if you install node by itself, change node path accordingly
# to install pirateflix locally
$ npm install  

# run pirateflix manually as testing
$ cd /path/to/pirateflix
$ node bin/cli.js

# enable pirateflix globally by creating symlink /usr/local/Cellar/node/$NODE_VERSION/bin/pirateflix => /usr/local/Cellar/node/$NODE_VERSION/node_modules/pirateflix/bin/cli.js
$ npm install -g

# make sure pirateflix is correctly placed and reachable via $PATH
$ which pirateflix
  /usr/local/Cellar/node/$NODE_VERSION/bin/pirateflix
```

## Options

```sh
$ pirateflix --help
  Follow the steps by the wizard and
  make sure you have VLC installed.

  Options:
    --search Optional value to start the query.
    --history Starts with the history of watched torrents.
    --clear Clears history of watched torrents.

  Usage:
    pirateflix [options]
```

## Usage

```sh
$ pirateflix # will open movie wizard
$ pirateflix --search="Interstellar" # will perform a search
```

## Overview

Make sure you have VLC installed, it might take a while until the movie starts depeding on the number
of seeders/leechers. The movie will start streaming at `http://localhost:8888` you can always
manually access and check it out.

## Related

* [peerflix](https://github.com/mafintosh/peerflix)

## License
MIT © 2016 [Weslley Araujo](https://twitter.com/_weslleyaraujo)\
MIT © 2018 [Jim Li](https://lisheng2016.github.io/wavejsblog)
