/**
 * A JavaScript Error object representing an HTTP Response Error
 * (i.e. a 400-level or 500-level HTTP status response)
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export class HTTPResponseError extends Error {
  public readonly httpStatusCode;
  constructor(httpStatusCode: number, errorMessage: string, message?: string) {
    super(message ? `${errorMessage}: ${message}` : errorMessage)
    this.httpStatusCode = httpStatusCode;
  }
}

/**
 * A JavaScript Error object representing an HTTP Client Error Response
 * (i.e. a 400-level HTTP status)
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
 */
export class HTTPClientResponseError extends HTTPResponseError {};

/**
 * A JavaScript Error object representing an HTTP Server Error Response
 * (i.e. a 500-level HTTP status)
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses
 */
export class HTTPServerResponseError extends HTTPResponseError {};

export class HTTPUnauthorizedError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(401, "Unauthorized", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
 */
export class HTTPBadRequestError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(400, "Bad Request", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 */
export class HTTPPaymentRequiredError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(402, "Payment Required", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export class HTTPForbiddenError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(403, "Forbidden", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
 */
export class HTTPNotFoundError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(404, "Not Found", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
 */
export class HTTPMethodNotAllowedError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(405, "Method Not Allowed", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
 */
export class HTTPNotAcceptableError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(406, "Not Acceptable", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 */
export class HTTPProxyAuthenticationRequiredError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(407, "Proxy Authentication Required", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
 */
export class HTTPRequestTimeoutError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(408, "Request Timeout", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
 */
export class HTTPConflictError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(409, "Conflict", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
 */
export class HTTPGoneError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(410, "Gone", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
 */
export class HTTPLengthRequiredError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(411, "Length Required", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
 */
export class HTTPPreconditionFailedError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(412, "Precondition Failed", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 */
export class HTTPContentTooLargeError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(413, "Content Too Large", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
 */
export class HTTPURITooLongError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(414, "URI Too Long", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
 */
export class HTTPUnsupportedMediaTypeError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(415, "Unsupported Media Type", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 */
export class HTTPRangeNotSatisfiableError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(416, "Range Not Satisfiable", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
 */
export class HTTPExpectationFailedError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(417, "Expectation Failed", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
 */
export class HTTPImATeapotError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(418, "I'm a teapot", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421
 */
export class HTTPMisdirectedRequestError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(421, "Misdirected Request", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
 */
export class HTTPUnprocessableContentError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(422, "Unprocessable Content", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423
 */
export class HTTPLockedError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(423, "Locked", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424
 */
export class HTTPFailedDependencyError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(424, "Failed Dependency", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425
 */
export class HTTPTooEarlyError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(425, "Too Early", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
 */
export class HTTPUpgradeRequiredError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(426, "Upgrade Required", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
 */
export class HTTPPreconditionRequiredError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(428, "Precondition Required", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 */
export class HTTPTooManyRequestsError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(429, "Too Many Requests", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
 */
export class HTTPRequestHeaderFieldsTooLargeError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(431, "Request Header Fields Too Large", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
 */
export class HTTPUnavailableForLegalReasonsError extends HTTPClientResponseError {
  constructor(message?: string) {
    super(451, "Unavailable For Legal Reasons", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
 */
export class HTTPInternalServerError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(500, "Internal Server Error", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 */
export class HTTPNotImplementedError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(501, "Not Implemented", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
 */
export class HTTPBadGatewayError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(502, "Bad Gateway", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
 */
export class HTTPServiceUnavailableError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(503, "Service Unavailable", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */
export class HTTPGatewayTimeoutError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(504, "Gateway Timeout", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
 */
export class HTTPVersionNotSupportedError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(505, "HTTP Version Not Supported", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
 */
export class HTTPVariantAlsoNegotiatesError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(506, "Variant Also Negotiates", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507
 */
export class HTTPInsufficientStorageError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(507, "Insufficient Storage", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
 */
export class HTTPLoopDetectedError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(508, "Loop Detected", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510
 */
export class HTTPNotExtendedError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(510, "Not Extended", message)
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
 */
export class HTTPNetworkAuthenticationRequiredError extends HTTPServerResponseError {
  constructor(message?: string) {
    super(511, "Network Authentication Required", message)
  }
}

/**
 * Given an HTTP statusCode from a response, create an appropriate HTTPResponseError object
 * of the appropriate type.
 * 
 * @param statusCode -  HTTP status code; see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @param message - An optional message to include in the error object, appeneded to the default 
 * message for the specified status code
 * 
 * @returns an HTTPResponseError object of the appropriate type, or a generic HTTPResponseError object if the status code is not recognized
 */
export function createHTTPResponseError(statusCode: number, message?: string): HTTPResponseError {
  switch (statusCode) {
    case 400: return new HTTPBadRequestError(message);
    case 401: return new HTTPUnauthorizedError(message);
    case 402: return new HTTPPaymentRequiredError(message);
    case 403: return new HTTPForbiddenError(message);
    case 404: return new HTTPNotFoundError(message);
    case 405: return new HTTPMethodNotAllowedError(message);
    case 406: return new HTTPNotAcceptableError(message);
    case 407: return new HTTPProxyAuthenticationRequiredError(message);
    case 408: return new HTTPRequestTimeoutError(message);
    case 409: return new HTTPConflictError(message);
    case 410: return new HTTPGoneError(message);
    case 411: return new HTTPLengthRequiredError(message);
    case 412: return new HTTPPreconditionFailedError(message);
    case 413: return new HTTPContentTooLargeError(message);
    case 414: return new HTTPURITooLongError(message);
    case 415: return new HTTPUnsupportedMediaTypeError(message);
    case 416: return new HTTPRangeNotSatisfiableError(message);
    case 417: return new HTTPExpectationFailedError(message);
    case 418: return new HTTPImATeapotError(message);
    case 421: return new HTTPMisdirectedRequestError(message);
    case 422: return new HTTPUnprocessableContentError(message);
    case 423: return new HTTPLockedError(message);
    case 424: return new HTTPFailedDependencyError(message);
    case 425: return new HTTPTooEarlyError(message);
    case 426: return new HTTPUpgradeRequiredError(message);
    case 428: return new HTTPPreconditionRequiredError(message);
    case 429: return new HTTPTooManyRequestsError(message);
    case 431: return new HTTPRequestHeaderFieldsTooLargeError(message);
    case 451: return new HTTPUnavailableForLegalReasonsError(message);
    case 500: return new HTTPInternalServerError(message);
    case 501: return new HTTPNotImplementedError(message);
    case 502: return new HTTPBadGatewayError(message);
    case 503: return new HTTPServiceUnavailableError(message);
    case 504: return new HTTPGatewayTimeoutError(message);
    case 505: return new HTTPVersionNotSupportedError(message);
    case 506: return new HTTPVariantAlsoNegotiatesError(message);
    case 507: return new HTTPInsufficientStorageError(message);
    case 508: return new HTTPLoopDetectedError(message);
    case 510: return new HTTPNotExtendedError(message);
    case 511: return new HTTPNetworkAuthenticationRequiredError(message);
    default: 
      if(statusCode >= 400 && statusCode <= 499) return new HTTPClientResponseError(statusCode, "HTTP Client Response Error", message);
      if(statusCode >= 500 && statusCode <= 599) return new HTTPServerResponseError(statusCode, "HTTP Server Response Error", message);
      return new HTTPResponseError(statusCode, "HTTP Error", message);
  }
}

