
![Vitest](https://github.com/HillwoodPark/http-response-errors/actions/workflows/vitest.yml/badge.svg)

# Hillwood Park HTTP Response Errors

Nodejs HTTP Response Error classes

Part of https://epicroadtripplanner.com. Let's GO!

## Description

This module provides a few convenience classes to help us simplify our error handling for HTTP errors in Node.js.

There's almost certainly something lightweight like this out there, but I already spent more time looking for it than I did creating this module.


## Installation

We've only used this with npm, and haven't tried it with yarn or pnpm or any other package managers for Node.

```
npm i @hillwoodpark/http-response-errors
```

## Usage

The module exports a number of error classes, the intent of which is to check for them explicity in upstream error handling, which can
greatly simplify error handling.

### createHTTPResponseError (i.e. where you'd throw HTTP response errors)
```
async function myRoutine(): Promise<any> {

    const response = await fetch("https://example.com");

    const { ok, status } = response;

    if (!ok) {
      throw createHTTPResponseError(status, 'Unexpected response from Example.com');
    }

    return await response.json();
```

### catch (i.e. the whole point of this)

See [MDN Conditional catch blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_blocks) for a more general JavaScript pattern and use cases, and the code below is simplified,
but represents a set of relatively common use cases that come up often in HTTP client-server communication. Defining 
robust models for generalized or at least shared client-server semantics, particularly around HTTP application and 
transport level error handling, are well beyond the scope of this document, but this library can be integrated into 
a model-specific layer in some of those cases, and can certainly be used stand-alone in a great many very simple cases.

```
try {
  myRoutine(); // calls fetch, and if !ok, creates then throws the corresponding error with createHTTPResponseError.
} catch (e) {
  if (e instanceof HTTPBadRequestError) {
    // HTTPBadRequestError - basically, bad parameters - not much we can do, but we probably want a warning in the 
    // log, or maybe pass more information all the way back up to the user, if our client and server share 
    // application-level error handling semantics.
  } else if (e instanceof HTTPNotFoundError) {
    // HTTPNotFoundError - We might want to deal with this differently depending on our client-server semantics
    // for THIS particular API endpoint. For instance, if we were passing an id in the URL, and it's not found,
    // there may be application level semantics, whereas in other cases, this might indicate a typo in an SDK URL
    // string, or even that reauthorization is needed. TL;DR: It depends.
  } else if (e instanceof HTTPUnauthorizedError) {
    // HTTPUnauthorizedError - one common use case is we log, immediately re-authorize, and immediately retry once.
  } else if (e instanceof HTTPServerResponseError) {
    // HTTPServerResponseError - there may be additional possible semantics for specific HTTPServerResponseErrors,
    // and we might want to handle those differently, but generally if there's a server error we might want to
    // do something like retry with exponential backoff.
  } else {
    // Something we didn't envision, don't know how to handle at all, or we consider catastophic. Let it 
    // propogate up so we can envision it, assess implications and broader impact, or deal with it where 
    // we might have more context.
    throw e;
  }
}
```


