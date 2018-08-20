# pirateflix

> Stream piratebay movies directly from CLI

<img src="./preview.png" />

## Install

Original pirateflix has been unpublished from its repo,using my repo instead.

```sh
# the output of "node -v" is referred as $NODE_VERSION
$ node -v

$ git clone https://github.com/Lisheng2016/pirateflix.git

# install pirateflix to /usr/local/Cellar/node/$NODE_VERSION/lib/node_modules/pirateflix/bin/cli.js
$ npm install  

# enable pirateflix globally by creating symlink
$ npm install -g

# make sure pirateflix is correctly placed
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
