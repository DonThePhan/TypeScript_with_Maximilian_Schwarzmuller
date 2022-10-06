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
 *        FIRST -> "tsc --init" - ONLY required ONCE, inside directory folder - creates a 'tsconfig.json' file
 *            1.  "tsc -w" and ALL TS files will enter WATCH MODE
 *            2.  "tsc" to compile ALL TS files just once 
 * 
 *  3.  tsconfig.json - used to config (see tsconfig.json)
 *        1.  ** If both 'include' & 'exclude' are present, compiler will do (Include - Exclude)
 *            1.  EXCLUDE - files to ignore when compiling
 *            2.  INCLUDE - files to include when compiling
 *            3.  FILES - Similar to INCLUDE except can't specify folders (not very common, usually just use Include)
 *        2.  TARGET - can specify what version to JS to compile (i.e. es6, which includes let & const)
 *        3.  LIB - what libraries to include. 
 *              - If we don't include it, TS will use defaul JS libraries from the TARGET es version we chose. 
 *              - if included, no libraries included until we add to list in LIB.
 *        4.  CHECK JS - can enable if you're working in just JS and want TS to still check
 *        5.  SOURCE MAP - makes TS files available in dev tools source (in case we want to debug in the browser)
 *        6.  OUTDIR - Specify where TS to put compiled JS files, else default is same TS file directory
 *        7.  ROOTDIR - Specify where the TS files are, else default is project directory
 *        8.  REMOVE COMMENTS - Compiled TS file comments will be excluded
 *        9.  NO EMIT ON ERROR
 *              - default tsconfig doesn't have this. It is automatically set to false - Will create JS files even w/ errors
 *              - set to true to not compile if there are any TS errors in project
 *        10. STRICT - dictates what errors TS looks for. Default is everything
*/

const button = document.querySelector('button')!

button.addEventListener('click', () => {
  console.log('Clicked!')
})