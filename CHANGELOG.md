# Changelog

This file will document all notable changes to this project.

The format comes from [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

+ foo

### Fixed

+ foo

### Changed

+ Change Gulp targets
+ Replaced Evil Icons CDN support with NPM module and gulp task; SVGs are now inlined in .hbs files
+ Updated README

### Removed

+ foo

## [5.0.2] - 2023-03-08

### Added

+ Added a "package" target for building the theme

### Changed

+ Moved the source files into a src directory
+ Replaced the jQuery fitvids plugin with a standalone version from npm
+ Updated gulpfile to support new folder structure and build/package targets
+ Updated README

### Removed

+ Removed outdated version of jQuery
+ Removed the "Share on Google+" link, only 4 years late!
+ Removed the main.min.css file, as it's now built from source

## [5.0.1] - 2022-10-04

### Changed

+ Updated Evil Icons to v1.9.0
+ Updated Gulp to v4.0.2
+ Updated Gulpfile for new version
+ Updated normalize.css to v8.0.1

### Removed

+ Removed link to Google Fonts stylesheet for unused Merriweather font
+ Removed underline transition on site title

## [5.0.0] - 2022-08-07

### Fixed

+ Add CSS and package.json metadata for Ghost v5 compatibility
+ Updated calc() operations for Sass

### Changed

+ Updated copyright info in LICENSE now that Aspire Themes no longer maintains this theme
+ Updated main.min.css
+ Updated version number; going forward the major version number of the theme will change to match newer versions of Ghost when compatibility is added

## [3.9.9] - 2021-11-30

### Fixed

+ Replaced references to @blog with @site for Ghost v4 compatibility

### Changed

+ Cleaned up formatting in README
+ Replaced author info in package.json now that Aspire Themes no longer maintains this theme

## [1.9.9] - 2018-08-21

### Added

+ Added keywords to package.json

### Fixed

+ Replaced references to #author with #primary_author for Ghost v2 compatibility

### Removed

+ Removed placeholder favicon intended for my personal site

## [1.0.2] - 2023-03-08

NOTE: v1.0.2 includes changes from a private fork of Typewriter for my (John's) personal site

### Added

+ Added LICENSE [main]
+ Added support for responsive videos from ted.com [main]

### Fixed

+ Fixed heading line-height spacing [main]

### Changed

+ Replace Merriweather with Libre Baskerville [main]

### Removed

+ Removed support for Disqus comments [je]

## [1.0.1] - 2023-03-08

NOTE: v1.0.1 includes changes from a private fork of Typewriter for my (John's) personal site

### Added

+ Added favicon for personal site [je]
+ Added sections to author.hbs for links to Twitter and Facebook (if specified in author profile) [je]

### Fixed

+ Various changes for Ghost v1 compatibility [je]

### Changed

+ Replaced gulp-minify-css with gulp-clean-css [main]
+ Updated Disqus shortname [main]
+ Updated Gulp plugins [main]
+ Updated main.min.css [main]
+ Updated normalize.css to v7.0.0 [main]

### Removed

+ Removed unused Gulp plugins [main]

## [1.0.0] - 2016-01-29

### Added

+ Initial commit by Aspire Themes

[unreleased]: https://github.com/JElmore/typewriter/compare/v5.0.2...HEAD
[5.0.2]: https://github.com/JElmore/typewriter/compare/v5.0.1...v5.0.2
[5.0.1]: https://github.com/JElmore/typewriter/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/JElmore/typewriter/compare/v3.9.9...v5.0.0
[3.9.9]: https://github.com/JElmore/typewriter/compare/v1.9.9...v3.9.9
[1.9.9]: https://github.com/JElmore/typewriter/compare/v1.0.2...v1.9.9
[1.0.2]: https://github.com/JElmore/typewriter/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/JElmore/typewriter/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/JElmore/typewriter/releases/tag/v1.0.0
