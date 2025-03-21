import { describe, expect, it, vi } from "vitest";
import {
  createHTTPResponseError,
  HTTPBadRequestError,
  HTTPClientResponseError,
  HTTPInternalServerError,
  HTTPResponseError,
  HTTPServerResponseError
} from "../src/httpResponseErrors"

describe('httpErrors', () => {

  describe('createHTTPResponseError', () => {

    describe('with a well-known client error response code (e.g. 400)', () => {

      it('should return instances of HTTPBadRequestError', () => {
        const error = createHTTPResponseError(400);
        expect(error).toBeInstanceOf(HTTPBadRequestError)
      })

      it('should return instances of HTTPClientResponseError', () => {
        const error = createHTTPResponseError(400);
        expect(error).toBeInstanceOf(HTTPClientResponseError)
      })

      it('should return instances of HTTPResponseError', () => {
        const error = createHTTPResponseError(400);
        expect(error).toBeInstanceOf(HTTPResponseError);
      })

      it('should return instances of Error', () => {
        const error = createHTTPResponseError(400);
        expect(error).toBeInstanceOf(Error);
      })

      it('should set the corresponding specific well-known default message in the error', () => {
        const error = createHTTPResponseError(400);
        expect(error.message).toEqual("Bad Request")
      })

      it('should set the message in the error to a generic prefix with the provided message', () => {
        const error = createHTTPResponseError(400, "POSTed body didn't contain what it should have");
        expect(error.message).toEqual("Bad Request: POSTed body didn't contain what it should have")
      })


    })

    describe('with a well-known server error response code (e.g. 500)', () => {

      it('should return instances of HTTPInternalServerError', () => {
        const error = createHTTPResponseError(500);
        expect(error).toBeInstanceOf(HTTPInternalServerError)
      })

      it('should return instances of HTTPServerResponseError', () => {
        const error = createHTTPResponseError(500);
        expect(error).toBeInstanceOf(HTTPServerResponseError)
      })

      it('should return instances of HTTPResponseError', () => {
        const error = createHTTPResponseError(500);
        expect(error).toBeInstanceOf(HTTPResponseError);
      })

      it('should return instances of Error', () => {
        const error = createHTTPResponseError(500);
        expect(error).toBeInstanceOf(Error);
      })

      it('should set the corresponding specific well-known default message in the error', () => {
        const error = createHTTPResponseError(500);
        expect(error.message).toEqual("Internal Server Error")
      })

      it('should set the message in the error to a generic prefix with the provided message', () => {
        const error = createHTTPResponseError(500, "Server is angry");
        expect(error.message).toEqual("Internal Server Error: Server is angry")
      })

    })
    

    describe('with an unassigned client error response code (i.e. 400-level status)', () => {

      it('should return instances of HTTPClientResponseError', () => {
        const error = createHTTPResponseError(499);
        expect(error).toBeInstanceOf(HTTPClientResponseError)
      })

      it('should return instances of HTTPResponseError', () => {
        const error = createHTTPResponseError(499);
        expect(error).toBeInstanceOf(HTTPResponseError);
      })

      it('should return instances of Error', () => {
        const error = createHTTPResponseError(499);
        expect(error).toBeInstanceOf(Error);
      })

      it('should set a generic default message in the error', () => {
        const error = createHTTPResponseError(499);
        expect(error.message).toEqual("HTTP Client Response Error")
      })

      it('should set the message in the error to a generic prefix with the provided message', () => {
        const error = createHTTPResponseError(499, "Currently Unassigned by IANA");
        expect(error.message).toEqual("HTTP Client Response Error: Currently Unassigned by IANA")
      })


    })

    describe('with an unassigned server error response code (i.e. 500-level status)', () => {

      it('should return instances of HTTPServerResponseError', () => {
        const error = createHTTPResponseError(599);
        expect(error).toBeInstanceOf(HTTPServerResponseError)
      })

      it('should return instances of HTTPResponseError', () => {
        const error = createHTTPResponseError(599);
        expect(error).toBeInstanceOf(HTTPResponseError);
      })

      it('should return instances of Error', () => {
        const error = createHTTPResponseError(599);
        expect(error).toBeInstanceOf(Error);
      })

      it('should set a generic default message in the error', () => {
        const error = createHTTPResponseError(599);
        expect(error.message).toEqual("HTTP Server Response Error")
      })

      it('should set the message in the error to a generic prefix with the provided message', () => {
        const error = createHTTPResponseError(599, "Currently Unassigned by IANA");
        expect(error.message).toEqual("HTTP Server Response Error: Currently Unassigned by IANA")
      })


    })

    describe('with an entirely non-standard and likely invalid response code (i.e. anything below 100 and above 599)', () => {

      it('should return instances of HTTPResponseError', () => {
        const error = createHTTPResponseError(600);
        expect(error).toBeInstanceOf(HTTPResponseError);
      })

      it('should return instances of Error', () => {
        const error = createHTTPResponseError(600);
        expect(error).toBeInstanceOf(Error);
      })

      it('should set a generic default message in the error', () => {
        const error = createHTTPResponseError(600);
        expect(error.message).toEqual("HTTP Error")
      })

      it('should set the message in the error to a generic prefix with the provided message', () => {
        const error = createHTTPResponseError(600, "Non-standard and likely invalid response");
        expect(error.message).toEqual("HTTP Error: Non-standard and likely invalid response")
      })

    })

    /**
     * 
     * The behavior below is nonsensical, but would otherwise be undefined. Don't rely on it.
     * 
     * We're formally defining this behavior here primarily as a reminder to rev the version 
     * number of this package and add docs if this behavior ever changes, or we discover a use
     * case that isn't nonsensical. 
     * 
     * If you determine more intuitive semantics for this case, and change behavior to match,
     * and it breaks these tests, ensure the new behavior has adequate automated test coverage, 
     * feel free to throw THESE tests away, and rev the package major (or at LEAST minor) version
     * number with a note in the change log about a potentially breaking change.
     * 
     * If you somehow discover a use case that means this behavior isn't nonsensical after all,
     * and you happen to be reading this, replace this comment (and the description strings in 
     * the tests) to reflect that.
     * 
     */
    describe('with a status code that does not indicate an error (e.g. 200)', () => {

      it('should return instances of HTTPResponseError', () => {
        const error = createHTTPResponseError(200);
        expect(error).toBeInstanceOf(HTTPResponseError);
      })

      it('should return instances of Error', () => {
        const error = createHTTPResponseError(200);
        expect(error).toBeInstanceOf(Error);
      })

      it('should set a generic default message in the error', () => {
        const error = createHTTPResponseError(200);
        expect(error.message).toEqual("HTTP Error")
      })

      it('should set the message in the error to a generic prefix with the provided message', () => {
        const error = createHTTPResponseError(200, "REALLY?");
        expect(error.message).toEqual("HTTP Error: REALLY?")
      })


    })


  });

})

