# Nba Props Table

This is a quick React + Vite + Typescript project utilizing [ReactDataGrid](https://github.com/adazzle/react-data-grid#react-data-grid) to showcase different proposition markets for an Nba matchup between the Lakers and the Warriors!

## Table of Contents

- [Nba Props Table](#nba-props-table)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Demo](#demo)
  - [Development](#development)
  - [Testing](#testing)
  - [Contributing](#contributing)

## Introduction

This was a fun coding challenge! Helped me better learn how to setup a react and typescript project. The ultimate goal was to create a table that merges two different data points and sets up the data so that each row represents a different prop market.

## Features

- Merges the data so that it finds all of the alternates for a given player and market and returns the high and low lines.
- Athlete and team search functionality.
- Dropdown filters for position, market type, and market status.
- Programmatically can determine whether a market should be open or suspended by the following criteria:

  - the market is suspended
  - the optimal line does not exist
  - checks if any of the 3 probabilities for the optimal line are greater than 40%

- For development purposes all of the data is localized and this project uses Json Server to mock the requests. All Data is located in the `db.json` file.

## Demo

TBD

## Development

_Easily set up a local development environment!_

```bash
clone
npm install
npm run server # runs the local development server
npm run dev
```

**Start coding!** 🎉

## Testing

Testing was done using Vitest with React Testing library. You will see that Mock Service worker has been installed, but I haven't had time to get it setup.

```bash
npm run test
```

## Contributing

All contributions are welcome!
