
![Vitest](https://github.com/HillwoodPark/http-errors/actions/workflows/vitest.yml/badge.svg)

# Hillwood Park HTTP Errors

Nodejs HTTP Error classes

Part of https://epicroadtripplanner.com. Let's GO!

## Description

This module provides a few convenience classes to help simplify error handling for HTTP errors in Node.js.

There's almost certainly something lightweight like this out there, but I spent more time looking for it than I did creating this module.


## Installation

We've only used this with npm, and haven't tried it with yarn or pnpm or any other package managers for Node.

```
npm i @hillwoodpark/http-errors
```

## Usage

The module exports a number of error classes, the intent of which is to check for them explicity in upstream error handling, which can
greatly simplify error handling.

### createHTTPResponseError (i.e. where you'd throw HTTP response errors)
```
async function someFunction(): Promise<any> {

    const response = await fetch("https://example.com");

    const { ok, status } = response;

    if (!ok) {
      throw createHTTPResponseError(status, 'Unexpected response from Example.com');
    }

    return await response.json();
```

### catch (i.e. the whole point of this)
```
try {
  const content = await someFunction
} catch(e) {
  
}
```


