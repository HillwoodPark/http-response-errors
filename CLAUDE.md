# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Project

`@hillwoodpark/http-response-errors` — a small Node.js library that exports HTTP response error classes (`BadRequestError`, `NotFoundError`, etc.) and a `createHTTPResponseError` helper. Used across the Epic Road Trip Planner stack and other Hillwood Park projects to simplify error handling at the controller / middleware boundary.

## Essential Commands

- `npm test` — Run the Vitest test suite (with TypeScript checking).
- `npm run build` — Compile TypeScript to `dist/`.

## Specialist Agents

For work matching these areas, invoke the named agent via the Agent tool:

- **ddd-expert** — Domain modeling and value-object design. The error classes are effectively a small **published language** consumed by downstream codebases — relevant when adding, renaming, or restructuring error classes, since naming choices propagate everywhere the library is consumed.
- **owasp-security-expert** — AppSec review. Invoke for changes that affect how error messages or stack traces are constructed: sensitive-data exposure in error responses is OWASP A09 (Security Logging and Monitoring Failures) / A04 (Insecure Design) territory.
