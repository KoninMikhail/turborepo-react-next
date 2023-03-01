FROM node:18-bullseye as base

# env vars
ENV DEBIAN_FRONTEND noninteractive
ENV TERM xterm-color

ENV REACT_EDITOR code
ENV NEXT_TELEMETRY_DISABLED 1
ENV STORYBOOK_DISABLE_TELEMETRY 1

ENV HOME /root
ENV YARN_CACHE_FOLDER /root/.cache/yarn
ENV PATH /usr/src/app/node_modules/.bin:/usr/local/bin:$PATH

ENV GIT_USER_NAME "docker"
ENV GIT_USER_EMAIL "docker@localhost"

# Configure Locale and Timezone
ENV LC_ALL=en_US.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8

ENV TZ=Europe/Berlin

RUN apt-get update && \
    apt-get install -y locales && \
    apt-get clean -y && rm -rf /var/lib/apt/lists/* && \
    echo 'en_US.UTF-8 UTF-8\nde_DE ISO-8859-1' > /etc/locale.gen && \
    locale-gen && \
    dpkg-reconfigure locales

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install essentials
RUN apt-get update && \
    apt-get install -y git zsh zsh && \
    apt-get clean -y && rm -rf /var/lib/apt/lists/*

ENV SHELL /bin/zsh

# Configure git
RUN git config --global user.email "${GIT_USER_EMAIL}" && \
    git config --global user.name "${GIT_USER_NAME}" && \
    git config --global pull.rebase false && \
    git config --global color.ui auto

# Add github to known hosts
RUN mkdir ~/.ssh && \
    touch ~/.ssh_config && \
    mkdir -p ~/.ssh && ssh-keyscan -H github.com >>~/.ssh/known_hosts

# Prepare package manager(s) and global dependencies
RUN npm install npm@latest -g

# enables yarn and pnpm:
RUN corepack enable

RUN npm install -g yarn@latest --force && \
    yarn set version berry && \
    yarn config set --home enableTelemetry 0

# configure workdir and ports
WORKDIR /usr/src/app

# website

# storybook
EXPOSE 6006

