# com.td.oca.examplePersonal


## Installation

### bower

To install this App into an Experience:

    > bower install td-example-personal --save

Declare the dependency in your Experience's module:

    angular.module('myExperience', ['com.td.oca.examplePersonal']);

## Usage

### The tdExampleHelloWorld directive

A sample directive that shows a localized message.

Here is an example of how to use the tdExampleHelloWorld directive as an attribute:

    ...
    <div data-td-example-hello-world data-td-hello-world-msg="{{msg}}"></div>
    ...
 
### The tdExampleHelloData directive

A sample directive that uses td-core-resource to call the API.

Here is an example of how to use the tdExampleHelloData directive as an attribute:

    ...
    <div data-td-examplehello-data data-td-hello-data-msg="{{msg}}"></div>
    ...
    

## Options

(Put configuration options here)

## Supported browsers/environments

(e.g. Has this App been tested in IE8? on mobile/phone?)

## Dependencies

To use this App you'll need to make sure your Experience makes available these dependencies:

* angular@~1.2
* [fill in additional dependencies]

## Testing

Tests can be run by running "npm test" from the command line.

## Building

The distribution version of the App can be built by running "npm run dist" from the command line.

## Reports

When testing or running dist the following reports are generated

- *reports/test-results.xml* xml formatted testing report
- *reports/sloc.json* json formatted cource code info
- *reports/coverage/lcov.info* lcov formatted code coverage report
- *reports/coverage/coverage.json* json formatted code coverage
- *reports/coverage/cobertura.xml* cobertura formatted code coverage (used by jenkins)
- *reports/coverage/lcov-report/index.html* html formatted code coverage, for developers use to drill down into the coverage report

## Issue and Enhancement

If you find a bug or would like to suggest
an enhancement, please go to [OCA Support](https://track.dcts.tdbank.com/browse/OCASUP) to
create a new issue. You can also participate in discussions on existing issues.

## How to Contribute to this Project

**Note**: the instruction has been updated for projects that leverage the Jira / Stash integration, where the branching strategy is used. Please update if this is not applicable for your project. 

We are an open development community, and you are very welcome to contribute
to this project. Here's how to contribute enhancements (bug fixes or new features):

1. Select or create an issue in the [OCA Support](https://track.dcts.tdbank.com/browse/OCASUP).
2. Create a Bugfix or Feature branch from the issue and based on the related project repository.
3. Make updates and commit your changes to your branch.
4. From your branch, submit a Pull (Merge) request to the project maintainers.
5. The project maintainer will review your code and incorporate it into the project.

## Release Notes

### Version 0.0.0
- Put your release notes here
