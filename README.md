# UBot

> UBot, a Minecraft bot based on Mineflayer.

[![Open in Visual Studio Code Online](https://img.shields.io/badge/-open%20in%20vscode-blue?style=for-the-badge&logo=visualstudiocode)](https://open.vscode.dev/xiaozhu2007/UBot) ![Next Version](https://img.shields.io/npm/v/UBot/next.svg?style=for-the-badge&logo=npm) ![Beta Version](https://img.shields.io/npm/v/UBot/beta.svg?style=for-the-badge&logo=npm) ![Downloads](https://img.shields.io/npm/dw/UBot?logo=npm&style=for-the-badge) ![Total downloads](https://img.shields.io/npm/dt/UBot?style=for-the-badge&logo=npm)

English | [简体中文](./README.zh.md)

## Features

- Module
- Auto Move
- Follow Player(s)
- Fast Search
- Data Recorder
- Auto Login
- CLI Support

## Installtion

```bash
    $ git clone https://gitee.com/xiaozhu2007/UBot
    $ cd UBot
    $ pnpm install
```

### Set the environment

Copy `.env.sample` to `.env`(e.g. `cp .env.sample .env`)

```env
UB_HOST="localhost"
UB_PORT="25565"
UB_USERNAME="user@foo.bar"
UB_PASSWORD="password"
LOGIN="no"
LOGIN_PASSWORD="passwd"
```

## Usage

### Start

```txt
    $ npm start
```

## Docker

### Build

```bash
docker build -t <yourname>/UBot .
```

### Run it!

```bash
docker run -d \
  --name UBot \
  <yourname>/UBot
```

## LICENCE

[WTFPL](LICENSE)

## Ref

- TemzinBot
- NTBot