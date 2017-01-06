# repub-magic
An easy to use republishing interface for stories on the NPR API.

## How It Works

For security and flexibility, Repub Magic is structured in two parts: a client-side application that reads a story's API info then adds a republish link to it and a serverless AWS Lambda application (written in Python with Flask and Zappa) that queries the NPR API for story information and assembles a web page with republication instructions.