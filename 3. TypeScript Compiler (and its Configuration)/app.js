"use strict";
/**
 *  0.  COMPILE
 *      1.  Specific file - "tsc <fileName.ts>"
 *      2.  ALL - see 2.3
 *
 *  1.  WATCH MODE - SINGLE FILE - "tsc <fileName.ts> -w"
 *        - compiles as we make changes
 *        - CTRL + C to quit
 *
 *  2.  WATCH MODE - ALL
 *        1.  *** FIRST *** "tsc --init" - ONLY required ONCE, inside directory folder
 *            - creates a 'tsconfig.json' file
 *        2.  then "tsc -w" and ALL TS files will enter WATCH MODE
 *        3.  OR "tsc" to compile ALL TS files just once
 *
 *  3.  tsconfig.json - used to config (see tsconfig.json)
 *        1.  EXCLUDE - files to ignore when compiling
 *        2.  INCLUDE - files to include when compiling
 *        3.  If both Include & Exclude are present, compiler will do (Include - Exclude)
 *        4.  FILES - Similar to INCLUDE except can't specify folders (not very common, usually just use Include)
 * 
 *        5.  TARGET - can specify what version to JS to compile (i.e. es6, which includes let & const)
 *
 */
var userName = 'Donny';
console.log(userName);
