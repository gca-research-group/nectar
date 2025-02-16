<h1 align="center">
  <br>
  <img src="assets/logo-rounded-background-256.png" alt="Nectar Logo">
  <br>
  Smart Contract Execution Monitoring System
  <br>
</h1>

<h4 align="center">A framework for execution and monitoring of smart contracts</h4>

<p align="center">
    <img src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white" alt="Go package">
</p>
<br/>

## Table of contents
  <details open>
    <summary><a href="#architectural-design">Architectural Design</a></summary>

  - [Inbound Events Queue](#inbound-events-queue)
  - [Event Handler](#event-handler)
  - [Smart Contract Execution Queue](#smart-contract-execution-queue)
  - [Contract Invoker](#contract-invoker)
  - [Smart Contract Outbound Queue](#smart-contract-outbound-queue)
  - [Event Updater](#event-updater)
  
  </details>
  
<details open>
    <summary><a href="#docs">Docs</a></summary>

  - [Requirements](#requirements)
  - [Developing](#developing)
  - [Building](#building)

  </details>

## Architectural Design

<img src="assets/architecture.png">

### Inbound Events Queue
### Event Handler
### Smart Contract Execution Queue
### Contract Invoker
### Smart Contract Outbound Queue
### Event Updater

## Docs

> This project uses [mkdocs](https://www.mkdocs.org/) as documentation tool

### Requirements
- [Python +3.11](https://www.python.org/)
- [Poetry](https://python-poetry.org/)

### Developing

```shell
cd mkdocs

poetry shell

mkdocs serve
```

### Building

```shell
cd mkdocs

poetry shell

mkdocs build --site-dir ../docs
```

## License
Copyright © 2024 [The Applied Computing Research Group (GCA)](https://github.com/gca-research-group).<br />
This project is [MIT](https://github.com/gca-research-group/jabuti-dsl-language-model-transformation/blob/master/LICENSE) licensed.