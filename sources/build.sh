#!/usr/bin/bash

BUILD_PID=
MTIME=

start_build() {
    npm run dev &
    BUILD_PID=$!
}

restart_build() {
    echo "package.json modified. Restarting..."
    kill -9 $BUILD_PID
    start_build
}

check_link() {
    if [[ ! -e ~/.local/share/cockpit/hacking ]] && \
      [[ -e /home/development/sources/dist ]]; then
        ln -s /home/development/sources/dist \
            ~/.local/share/cockpit/hacking
    fi
}


watch_package() {
    if [[ -z $MTIME ]]; then
        MTIME=$(stat package.json | grep Mod)
    fi

    while [[ true ]]; do
        if [[ "$(stat package.json | grep Mod)" != "$MTIME" ]]; then
            MTIME=$(stat package.json | grep Mod)
            restart_build
        fi
        sleep 1
    done
}

check_link
yarn install
start_build
watch_package
