import{_ as r,c as o,ag as t,o as a}from"./chunks/framework.CB8iguzh.js";const c=JSON.parse('{"title":"Changelog","description":"","frontmatter":{},"headers":[],"relativePath":"changelog.md","filePath":"changelog.md","lastUpdated":null}'),i={name:"changelog.md"};function n(g,e,m,l,s,h){return a(),o("div",null,e[0]||(e[0]=[t('<h1 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-label="Permalink to &quot;Changelog&quot;">​</a></h1><h2 id="043-(2025-02-20)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.4.2...0.4.3" target="_blank" rel="noreferrer">0.4.3</a> (2025-02-20) <a class="header-anchor" href="#043-(2025-02-20)" aria-label="Permalink to &quot;[0.4.3](https://github.com/nvim-orgmode/orgmode/compare/0.4.2...0.4.3) (2025-02-20)&quot;">​</a></h2><h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li><strong>images</strong>: add support for image previewing with Snacks (#907) (<a href="https://github.com/nvim-orgmode/orgmode/commit/80ca17e" target="_blank" rel="noreferrer">80ca17e</a>)</li><li><strong>health</strong>: Add healthcheck (<a href="https://github.com/nvim-orgmode/orgmode/commit/a802d2e" target="_blank" rel="noreferrer">a802d2e</a>)</li><li><strong>files</strong>: add methods for tag addition/removal/toggling (#894) (<a href="https://github.com/nvim-orgmode/orgmode/commit/09c1595" target="_blank" rel="noreferrer">09c1595</a>)</li><li><strong>utils</strong>: add optional flag to `utils.writefile()` for exclusive writes (#893) (<a href="https://github.com/nvim-orgmode/orgmode/commit/500004f" target="_blank" rel="noreferrer">500004f</a>)</li><li><strong>hyperlinks</strong>: add ability to add custom hyperlink sources (#892) (<a href="https://github.com/nvim-orgmode/orgmode/commit/356ff3f" target="_blank" rel="noreferrer">356ff3f</a>)</li><li><strong>tests</strong>: add tests for `utils.fs` and `utils.current_file_path()` (#890) (<a href="https://github.com/nvim-orgmode/orgmode/commit/3583fac" target="_blank" rel="noreferrer">3583fac</a>)</li><li><strong>properties</strong>: add option `org_use_property_inheritance` (#880) (<a href="https://github.com/nvim-orgmode/orgmode/commit/48f32e6" target="_blank" rel="noreferrer">48f32e6</a>)</li></ul><h3 id="bug-fixes" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>ui</strong>: allow built-in completions in orgmode.ui.input (#903) (<a href="https://github.com/nvim-orgmode/orgmode/commit/af90f8f" target="_blank" rel="noreferrer">af90f8f</a>)</li></ul><h2 id="042-(2025-02-01)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.4.1...0.4.2" target="_blank" rel="noreferrer">0.4.2</a> (2025-02-01) <a class="header-anchor" href="#042-(2025-02-01)" aria-label="Permalink to &quot;[0.4.2](https://github.com/nvim-orgmode/orgmode/compare/0.4.1...0.4.2) (2025-02-01)&quot;">​</a></h2><h3 id="features-1" tabindex="-1">Features <a class="header-anchor" href="#features-1" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li>Add support for footnotes (#874) (<a href="https://github.com/nvim-orgmode/orgmode/commit/4f62b7f" target="_blank" rel="noreferrer">4f62b7f</a>)</li></ul><h3 id="bug-fixes-1" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-1" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li>remove double ts parsing (<a href="https://github.com/nvim-orgmode/orgmode/commit/b587545" target="_blank" rel="noreferrer">b587545</a>)</li><li><strong>refile</strong>: remove unnecessary escaping for refile autocompletion (<a href="https://github.com/nvim-orgmode/orgmode/commit/d56c691" target="_blank" rel="noreferrer">d56c691</a>)</li><li><strong>archive</strong>: Set correct archive category on archived headline (<a href="https://github.com/nvim-orgmode/orgmode/commit/63d2cbb" target="_blank" rel="noreferrer">63d2cbb</a>)</li><li><strong>calendar</strong>: default to current time when switching to time input (<a href="https://github.com/nvim-orgmode/orgmode/commit/c68a87c" target="_blank" rel="noreferrer">c68a87c</a>)</li></ul><h2 id="041-(2025-01-28)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.4.0...0.4.1" target="_blank" rel="noreferrer">0.4.1</a> (2025-01-28) <a class="header-anchor" href="#041-(2025-01-28)" aria-label="Permalink to &quot;[0.4.1](https://github.com/nvim-orgmode/orgmode/compare/0.4.0...0.4.1) (2025-01-28)&quot;">​</a></h2><h3 id="features-2" tabindex="-1">Features <a class="header-anchor" href="#features-2" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li><strong>api</strong>: Add get_headline_at_cursor to Agenda api (<a href="https://github.com/nvim-orgmode/orgmode/commit/2c806ca" target="_blank" rel="noreferrer">2c806ca</a>)</li><li><strong>input</strong>: Add async input (#871) (<a href="https://github.com/nvim-orgmode/orgmode/commit/377c295" target="_blank" rel="noreferrer">377c295</a>)</li><li><strong>links</strong>: Add support for visual mode for insert link (<a href="https://github.com/nvim-orgmode/orgmode/commit/0ef840a" target="_blank" rel="noreferrer">0ef840a</a>)</li><li><strong>folds</strong>: Add org_cycle_separator_lines (<a href="https://github.com/nvim-orgmode/orgmode/commit/ab87a9b" target="_blank" rel="noreferrer">ab87a9b</a>)</li><li><strong>markup</strong>: Allow markup in link descriptions (<a href="https://github.com/nvim-orgmode/orgmode/commit/f7c669a" target="_blank" rel="noreferrer">f7c669a</a>)</li></ul><h3 id="bug-fixes-2" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-2" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>note</strong>: Fix capturing note (<a href="https://github.com/nvim-orgmode/orgmode/commit/e65a661" target="_blank" rel="noreferrer">e65a661</a>)</li><li><strong>filter</strong>: Fix or matching for todos in tags match filter (<a href="https://github.com/nvim-orgmode/orgmode/commit/429409b" target="_blank" rel="noreferrer">429409b</a>)</li><li><strong>agenda</strong>: Do not jump cursor to first line (<a href="https://github.com/nvim-orgmode/orgmode/commit/271a6fa" target="_blank" rel="noreferrer">271a6fa</a>)</li></ul><h2 id="040-(2025-01-24)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.3.9...0.4.0" target="_blank" rel="noreferrer">0.4.0</a> (2025-01-24) <a class="header-anchor" href="#040-(2025-01-24)" aria-label="Permalink to &quot;[0.4.0](https://github.com/nvim-orgmode/orgmode/compare/0.3.9...0.4.0) (2025-01-24)&quot;">​</a></h2><h3 id="features-3" tabindex="-1">Features <a class="header-anchor" href="#features-3" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li><strong>notifications</strong>: Show icon in cron notify-send notification (<a href="https://github.com/nvim-orgmode/orgmode/commit/1881ac9" target="_blank" rel="noreferrer">1881ac9</a>)</li><li><strong>globals</strong>: Add install_treesitter_grammar to global command (<a href="https://github.com/nvim-orgmode/orgmode/commit/0939e49" target="_blank" rel="noreferrer">0939e49</a>)</li></ul><h3 id="bug-fixes-3" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-3" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>indents</strong>: Trigger reindent when closing block or drawers (<a href="https://github.com/nvim-orgmode/orgmode/commit/e385fcf" target="_blank" rel="noreferrer">e385fcf</a>)</li><li><strong>checkboxes</strong>: Do not uncheck current line checkbox on new entry (<a href="https://github.com/nvim-orgmode/orgmode/commit/f18a66b" target="_blank" rel="noreferrer">f18a66b</a>)</li></ul><h2 id="039-(2025-01-21)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.3.8...0.3.9" target="_blank" rel="noreferrer">0.3.9</a> (2025-01-21) <a class="header-anchor" href="#039-(2025-01-21)" aria-label="Permalink to &quot;[0.3.9](https://github.com/nvim-orgmode/orgmode/compare/0.3.8...0.3.9) (2025-01-21)&quot;">​</a></h2><h3 id="breaking-changes" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes" aria-label="Permalink to &quot;Breaking changes&quot;">​</a></h3><ul><li><strong>agenda</strong>: rewrite agenda rendering and fix filters (#848) (<a href="https://github.com/nvim-orgmode/orgmode/commit/8667167" target="_blank" rel="noreferrer">8667167</a>)</li></ul><h3 id="features-4" tabindex="-1">Features <a class="header-anchor" href="#features-4" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li>Rename search arguments to agenda views (<a href="https://github.com/nvim-orgmode/orgmode/commit/6d23709" target="_blank" rel="noreferrer">6d23709</a>)</li><li><strong>api</strong>: Add match_query and header to agenda api (<a href="https://github.com/nvim-orgmode/orgmode/commit/ed49550" target="_blank" rel="noreferrer">ed49550</a>)</li><li><strong>agenda</strong>: Add custom agenda commands (#850) (<a href="https://github.com/nvim-orgmode/orgmode/commit/e6ae773" target="_blank" rel="noreferrer">e6ae773</a>)</li><li><strong>edit_src</strong>: Add mapping to write and close special edit buffer (<a href="https://github.com/nvim-orgmode/orgmode/commit/c9027f9" target="_blank" rel="noreferrer">c9027f9</a>)</li><li><strong>api</strong>: Add more options for agenda (<a href="https://github.com/nvim-orgmode/orgmode/commit/7e815f0" target="_blank" rel="noreferrer">7e815f0</a>)</li><li><strong>api</strong>: Add todo_ignore opts for tags and tags_todo views (<a href="https://github.com/nvim-orgmode/orgmode/commit/91f5a9e" target="_blank" rel="noreferrer">91f5a9e</a>)</li><li><strong>api</strong>: Add open_by_key function for agenda (<a href="https://github.com/nvim-orgmode/orgmode/commit/1afac86" target="_blank" rel="noreferrer">1afac86</a>)</li><li><strong>docs</strong>: Add orgmode docs (#864) (<a href="https://github.com/nvim-orgmode/orgmode/commit/9801148" target="_blank" rel="noreferrer">9801148</a>)</li><li>Add global `:Org` command and global `Org` lua variable (<a href="https://github.com/nvim-orgmode/orgmode/commit/b2285be" target="_blank" rel="noreferrer">b2285be</a>)</li><li><strong>globals</strong>: Add Org.capture global helper (<a href="https://github.com/nvim-orgmode/orgmode/commit/3b120ea" target="_blank" rel="noreferrer">3b120ea</a>)</li><li><strong>globals</strong>: Rename `open` to `agenda`, add default prompt for `agenda` and `capture` (<a href="https://github.com/nvim-orgmode/orgmode/commit/940b067" target="_blank" rel="noreferrer">940b067</a>)</li><li><strong>indent</strong>: Add filetype indentation in src blocks (<a href="https://github.com/nvim-orgmode/orgmode/commit/7092f81" target="_blank" rel="noreferrer">7092f81</a>)</li><li>Publish event when heading is toggled with &lt;prefix&gt;* (<a href="https://github.com/nvim-orgmode/orgmode/commit/8b92e84" target="_blank" rel="noreferrer">8b92e84</a>)</li></ul><h3 id="bug-fixes-4" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-4" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>indent</strong>: Default block indent to 0 (<a href="https://github.com/nvim-orgmode/orgmode/commit/738de39" target="_blank" rel="noreferrer">738de39</a>)</li><li><strong>autocompletion</strong>: correctly autocomplete non-absolute paths (<a href="https://github.com/nvim-orgmode/orgmode/commit/7f975b1" target="_blank" rel="noreferrer">7f975b1</a>)</li><li><strong>filters</strong>: Fix parsing dates in tags filter (<a href="https://github.com/nvim-orgmode/orgmode/commit/43361ba" target="_blank" rel="noreferrer">43361ba</a>)</li><li><strong>dates</strong>: Check if date is without a time when doing comparison (<a href="https://github.com/nvim-orgmode/orgmode/commit/fccccd4" target="_blank" rel="noreferrer">fccccd4</a>)</li><li><strong>sort</strong>: Sort associative tables alphabetically where necessary (<a href="https://github.com/nvim-orgmode/orgmode/commit/1e97173" target="_blank" rel="noreferrer">1e97173</a>)</li><li><strong>agenda</strong>: Use custom header for tags and tags_todo agenda if provided (<a href="https://github.com/nvim-orgmode/orgmode/commit/9a3f009" target="_blank" rel="noreferrer">9a3f009</a>)</li><li><strong>windows</strong>: Correctly read file with any fileformat (<a href="https://github.com/nvim-orgmode/orgmode/commit/b1922c6" target="_blank" rel="noreferrer">b1922c6</a>)</li><li><strong>agenda</strong>: use only available filters for matching (<a href="https://github.com/nvim-orgmode/orgmode/commit/4dcba70" target="_blank" rel="noreferrer">4dcba70</a>)</li><li><strong>agenda</strong>: Pass global agenda filter to custom commands (<a href="https://github.com/nvim-orgmode/orgmode/commit/d62fd3c" target="_blank" rel="noreferrer">d62fd3c</a>)</li><li><strong>filter</strong>: Fix tags agenda view matcher to allow -tags at start (<a href="https://github.com/nvim-orgmode/orgmode/commit/95cecdd" target="_blank" rel="noreferrer">95cecdd</a>)</li><li><strong>filter</strong>: Exclude &amp; in property match (<a href="https://github.com/nvim-orgmode/orgmode/commit/e3e8204" target="_blank" rel="noreferrer">e3e8204</a>)</li><li><strong>input</strong>: stop action when input prompt is canceled (<a href="https://github.com/nvim-orgmode/orgmode/commit/86ed523" target="_blank" rel="noreferrer">86ed523</a>)</li><li><strong>links</strong>: Unfold when jumping to headline (<a href="https://github.com/nvim-orgmode/orgmode/commit/51ed95f" target="_blank" rel="noreferrer">51ed95f</a>)</li><li><strong>tags</strong>: Allow non-ascii chars in tags (<a href="https://github.com/nvim-orgmode/orgmode/commit/122c534" target="_blank" rel="noreferrer">122c534</a>)</li><li><strong>filter</strong>: Use start of day for relative date matching (<a href="https://github.com/nvim-orgmode/orgmode/commit/f25f96d" target="_blank" rel="noreferrer">f25f96d</a>)</li><li><strong>syntax</strong>: Enable vim syntax hl if latex highlights are enabled (<a href="https://github.com/nvim-orgmode/orgmode/commit/ebbf28c" target="_blank" rel="noreferrer">ebbf28c</a>)</li><li><strong>input</strong>: Do not set completion function if not provided (<a href="https://github.com/nvim-orgmode/orgmode/commit/3ba6db7" target="_blank" rel="noreferrer">3ba6db7</a>)</li><li><strong>mappings</strong>: Correctly fall back to previously defined &lt;CR&gt; mapping (<a href="https://github.com/nvim-orgmode/orgmode/commit/6566b69" target="_blank" rel="noreferrer">6566b69</a>)</li><li><strong>filters</strong>: Use start of day for dates in match filter (<a href="https://github.com/nvim-orgmode/orgmode/commit/c889000" target="_blank" rel="noreferrer">c889000</a>)</li><li><strong>tags</strong>: Do not sort tags in tags change prompt (<a href="https://github.com/nvim-orgmode/orgmode/commit/42a4ccf" target="_blank" rel="noreferrer">42a4ccf</a>)</li><li><strong>agenda</strong>: Get last line from buffer for separator (<a href="https://github.com/nvim-orgmode/orgmode/commit/e0ba9dc" target="_blank" rel="noreferrer">e0ba9dc</a>)</li></ul><h2 id="038-(2025-01-06)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.3.7...0.3.8" target="_blank" rel="noreferrer">0.3.8</a> (2025-01-06) <a class="header-anchor" href="#038-(2025-01-06)" aria-label="Permalink to &quot;[0.3.8](https://github.com/nvim-orgmode/orgmode/compare/0.3.7...0.3.8) (2025-01-06)&quot;">​</a></h2><h3 id="breaking-changes-1" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes-1" aria-label="Permalink to &quot;Breaking changes&quot;">​</a></h3><ul><li><strong>version</strong>: Drop support for Neovim &lt; v0.10.0 (<a href="https://github.com/nvim-orgmode/orgmode/commit/e5562a0" target="_blank" rel="noreferrer">e5562a0</a>)</li></ul><h3 id="features-5" tabindex="-1">Features <a class="header-anchor" href="#features-5" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li><strong>archive</strong>: set outline path when archiving (#746) (<a href="https://github.com/nvim-orgmode/orgmode/commit/dfcb945" target="_blank" rel="noreferrer">dfcb945</a>)</li><li><strong>priority</strong>: improve priority cycling (#817) (<a href="https://github.com/nvim-orgmode/orgmode/commit/1657948" target="_blank" rel="noreferrer">1657948</a>)</li><li><strong>refile</strong>: improve ux by matching files more fuzzily (#815) (<a href="https://github.com/nvim-orgmode/orgmode/commit/625f060" target="_blank" rel="noreferrer">625f060</a>)</li><li><strong>completion</strong>: Add blink.cmp source (<a href="https://github.com/nvim-orgmode/orgmode/commit/73f3263" target="_blank" rel="noreferrer">73f3263</a>)</li><li><strong>log-state</strong>: align with the emacs orgmode format (#837) (<a href="https://github.com/nvim-orgmode/orgmode/commit/f8c0fd3" target="_blank" rel="noreferrer">f8c0fd3</a>)</li></ul><h3 id="bug-fixes-5" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-5" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>calendar</strong>: Re-center once Neovim is resized (<a href="https://github.com/nvim-orgmode/orgmode/commit/8ead368" target="_blank" rel="noreferrer">8ead368</a>)</li><li>fix autocomplete for tags search prompt (#812) (<a href="https://github.com/nvim-orgmode/orgmode/commit/a38f5c4" target="_blank" rel="noreferrer">a38f5c4</a>)</li><li><strong>nightly</strong>: Toggle headline checkbox cookie (<a href="https://github.com/nvim-orgmode/orgmode/commit/c654095" target="_blank" rel="noreferrer">c654095</a>)</li><li><strong>completion</strong>: Do not complete plan types on headline line (<a href="https://github.com/nvim-orgmode/orgmode/commit/8b1dfcd" target="_blank" rel="noreferrer">8b1dfcd</a>)</li><li><strong>virtual indent</strong>: handle invalid buffer gracefully (#825) (<a href="https://github.com/nvim-orgmode/orgmode/commit/1d8c9b9" target="_blank" rel="noreferrer">1d8c9b9</a>)</li><li><strong>refile</strong>: Autocomplete nested paths (#835) (<a href="https://github.com/nvim-orgmode/orgmode/commit/956897b" target="_blank" rel="noreferrer">956897b</a>)</li><li><strong>float</strong>: Set filetype for capture window (<a href="https://github.com/nvim-orgmode/orgmode/commit/94894f3" target="_blank" rel="noreferrer">94894f3</a>)</li><li><strong>buffer</strong>: Disable tmp flag on buffer after edit (<a href="https://github.com/nvim-orgmode/orgmode/commit/6c39469" target="_blank" rel="noreferrer">6c39469</a>)</li><li><strong>formatexpr</strong>: Correctly fallback to internal formatexpr (<a href="https://github.com/nvim-orgmode/orgmode/commit/3f37829" target="_blank" rel="noreferrer">3f37829</a>)</li><li>retain direct tags even if they are excluded from inheritance (#839) (<a href="https://github.com/nvim-orgmode/orgmode/commit/92e8b51" target="_blank" rel="noreferrer">92e8b51</a>)</li><li><strong>help</strong>: ignore disabled mappings (#840) (<a href="https://github.com/nvim-orgmode/orgmode/commit/4c2528a" target="_blank" rel="noreferrer">4c2528a</a>)</li><li><strong>template</strong>: expandable variables in lua expr (#841) (<a href="https://github.com/nvim-orgmode/orgmode/commit/db7f044" target="_blank" rel="noreferrer">db7f044</a>)</li><li><strong>mininit</strong>: Ensure minimal init works on 0.11 (<a href="https://github.com/nvim-orgmode/orgmode/commit/12d2324" target="_blank" rel="noreferrer">12d2324</a>)</li><li><strong>mininit</strong>: Ensure minimal init works on 0.11 (<a href="https://github.com/nvim-orgmode/orgmode/commit/bf65774" target="_blank" rel="noreferrer">bf65774</a>)</li><li><strong>tests</strong>: Move validator version check outside (<a href="https://github.com/nvim-orgmode/orgmode/commit/2e45a6a" target="_blank" rel="noreferrer">2e45a6a</a>)</li></ul><h2 id="037-(2024-09-24)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.3.61...0.3.7" target="_blank" rel="noreferrer">0.3.7</a> (2024-09-24) <a class="header-anchor" href="#037-(2024-09-24)" aria-label="Permalink to &quot;[0.3.7](https://github.com/nvim-orgmode/orgmode/compare/0.3.61...0.3.7) (2024-09-24)&quot;">​</a></h2><h3 id="bug-fixes-6" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-6" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>calendar</strong>: Do not modify time when switching months (<a href="https://github.com/nvim-orgmode/orgmode/commit/ac6e02a" target="_blank" rel="noreferrer">ac6e02a</a>)</li></ul><h2 id="0361-(2024-09-23)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.3.6...0.3.61" target="_blank" rel="noreferrer">0.3.61</a> (2024-09-23) <a class="header-anchor" href="#0361-(2024-09-23)" aria-label="Permalink to &quot;[0.3.61](https://github.com/nvim-orgmode/orgmode/compare/0.3.6...0.3.61) (2024-09-23)&quot;">​</a></h2><h3 id="bug-fixes-7" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-7" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>loader</strong>: Fix typo in persisting loaded file (<a href="https://github.com/nvim-orgmode/orgmode/commit/08d763d" target="_blank" rel="noreferrer">08d763d</a>)</li></ul><h2 id="036-(2024-09-23)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.3.5...0.3.6" target="_blank" rel="noreferrer">0.3.6</a> (2024-09-23) <a class="header-anchor" href="#036-(2024-09-23)" aria-label="Permalink to &quot;[0.3.6](https://github.com/nvim-orgmode/orgmode/compare/0.3.5...0.3.6) (2024-09-23)&quot;">​</a></h2><h3 id="breaking-changes-2" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes-2" aria-label="Permalink to &quot;Breaking changes&quot;">​</a></h3><ul><li><strong>links</strong>: Use refactor links structure (#803) (<a href="https://github.com/nvim-orgmode/orgmode/commit/c5940d3" target="_blank" rel="noreferrer">c5940d3</a>)</li></ul><h3 id="features-6" tabindex="-1">Features <a class="header-anchor" href="#features-6" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li><strong>links</strong>: Add unused refactored links structure (#802) (<a href="https://github.com/nvim-orgmode/orgmode/commit/c6bdb07" target="_blank" rel="noreferrer">c6bdb07</a>)</li><li>Setting filetype to org will treat file as an org file (<a href="https://github.com/nvim-orgmode/orgmode/commit/a006c93" target="_blank" rel="noreferrer">a006c93</a>)</li><li><strong>dev</strong>: Add persist option to load_file method (<a href="https://github.com/nvim-orgmode/orgmode/commit/2a10172" target="_blank" rel="noreferrer">2a10172</a>)</li><li><strong>dev</strong>: Update add_to_paths to behave as load_file with persist option (<a href="https://github.com/nvim-orgmode/orgmode/commit/fd95708" target="_blank" rel="noreferrer">fd95708</a>)</li></ul><h3 id="bug-fixes-8" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-8" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>nightly</strong>: Fix compatibility with Neovim nightly (<a href="https://github.com/nvim-orgmode/orgmode/commit/e3500ad" target="_blank" rel="noreferrer">e3500ad</a>)</li><li><strong>loader</strong>: Load files concurrently with a limit to avoid &quot;too many open files&quot; errors (<a href="https://github.com/nvim-orgmode/orgmode/commit/1692af5" target="_blank" rel="noreferrer">1692af5</a>)</li></ul><h2 id="035-(2024-08-22)" tabindex="-1"><a href="https://github.com/nvim-orgmode/orgmode/compare/0.3.4...0.3.5" target="_blank" rel="noreferrer">0.3.5</a> (2024-08-22) <a class="header-anchor" href="#035-(2024-08-22)" aria-label="Permalink to &quot;[0.3.5](https://github.com/nvim-orgmode/orgmode/compare/0.3.4...0.3.5) (2024-08-22)&quot;">​</a></h2><h3 id="breaking-changes-3" tabindex="-1">Breaking changes <a class="header-anchor" href="#breaking-changes-3" aria-label="Permalink to &quot;Breaking changes&quot;">​</a></h3><ul><li><strong>closing note</strong>: Use different title per closing note type (<a href="https://github.com/nvim-orgmode/orgmode/commit/f874118" target="_blank" rel="noreferrer">f874118</a>)</li><li>Drop official support for v0.9.4 (<a href="https://github.com/nvim-orgmode/orgmode/commit/2ce9a8d" target="_blank" rel="noreferrer">2ce9a8d</a>)</li><li><strong>injections</strong>: Do not use vim.filetype.match for injections (<a href="https://github.com/nvim-orgmode/orgmode/commit/7ee1f13" target="_blank" rel="noreferrer">7ee1f13</a>)</li></ul><h3 id="features-7" tabindex="-1">Features <a class="header-anchor" href="#features-7" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li><strong>injection</strong>: Add some languages to TS injection blocks (<a href="https://github.com/nvim-orgmode/orgmode/commit/d2fde79" target="_blank" rel="noreferrer">d2fde79</a>)</li><li>support org_toggle_timestamp_type (#651) (<a href="https://github.com/nvim-orgmode/orgmode/commit/82af22f" target="_blank" rel="noreferrer">82af22f</a>)</li><li><strong>api</strong>: Allow to insert links through API (#731) (<a href="https://github.com/nvim-orgmode/orgmode/commit/36c76c2" target="_blank" rel="noreferrer">36c76c2</a>)</li><li>enhance calendar widget with time picker (#650) (<a href="https://github.com/nvim-orgmode/orgmode/commit/7af6cbd" target="_blank" rel="noreferrer">7af6cbd</a>)</li><li>Add support for org log repeat (#738) (<a href="https://github.com/nvim-orgmode/orgmode/commit/b26b1f2" target="_blank" rel="noreferrer">b26b1f2</a>)</li><li>Bump minimum version to 0.9.4 (<a href="https://github.com/nvim-orgmode/orgmode/commit/ac9a6e0" target="_blank" rel="noreferrer">ac9a6e0</a>)</li><li><strong>folds</strong>: Add option to use old folds highlights (<a href="https://github.com/nvim-orgmode/orgmode/commit/c69245e" target="_blank" rel="noreferrer">c69245e</a>)</li><li>support cursor keys for calendar navigation (#767) (<a href="https://github.com/nvim-orgmode/orgmode/commit/a84a748" target="_blank" rel="noreferrer">a84a748</a>)</li><li><strong>core</strong>: enhance org-insert-link, add completion for `~/` prefix. (#749) (<a href="https://github.com/nvim-orgmode/orgmode/commit/47c3d92" target="_blank" rel="noreferrer">47c3d92</a>)</li><li><strong>highlights</strong>: Add hlgroups for priority high and low (<a href="https://github.com/nvim-orgmode/orgmode/commit/c8877c7" target="_blank" rel="noreferrer">c8877c7</a>)</li><li>allow configuring keymap descriptions (#789) (<a href="https://github.com/nvim-orgmode/orgmode/commit/5169ac3" target="_blank" rel="noreferrer">5169ac3</a>)</li><li><strong>hyperlinks</strong>: Add OSC 8 hyperlink support to links (<a href="https://github.com/nvim-orgmode/orgmode/commit/eb7a110" target="_blank" rel="noreferrer">eb7a110</a>)</li><li><strong>hyperlinks</strong>: Add OSC 8 hyperlink support (<a href="https://github.com/nvim-orgmode/orgmode/commit/0683da9" target="_blank" rel="noreferrer">0683da9</a>)</li><li><strong>luarocks</strong>: Add dev version to luarocks (<a href="https://github.com/nvim-orgmode/orgmode/commit/4616941" target="_blank" rel="noreferrer">4616941</a>)</li></ul><h3 id="bug-fixes-9" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-9" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h3><ul><li><strong>ts</strong>: Fix TS injections on mac os (<a href="https://github.com/nvim-orgmode/orgmode/commit/4bbe8ea" target="_blank" rel="noreferrer">4bbe8ea</a>)</li><li><strong>deprecated</strong>: Update deprecated tbl_islist call (<a href="https://github.com/nvim-orgmode/orgmode/commit/dbcff9e" target="_blank" rel="noreferrer">dbcff9e</a>)</li><li><strong>archive</strong>: Properly archive headlines with level &gt; 1 (<a href="https://github.com/nvim-orgmode/orgmode/commit/2c82236" target="_blank" rel="noreferrer">2c82236</a>)</li><li><strong>archive</strong>: Set archive properties on correct headline (<a href="https://github.com/nvim-orgmode/orgmode/commit/2bc0072" target="_blank" rel="noreferrer">2bc0072</a>)</li><li><strong>date</strong>: persist all attributes passed by options (#735) (<a href="https://github.com/nvim-orgmode/orgmode/commit/46c839b" target="_blank" rel="noreferrer">46c839b</a>)</li><li><strong>calendar</strong>: Exit time mode when switching month (<a href="https://github.com/nvim-orgmode/orgmode/commit/52f85be" target="_blank" rel="noreferrer">52f85be</a>)</li><li><strong>perf</strong>: Memoize few headline methods (<a href="https://github.com/nvim-orgmode/orgmode/commit/772c7c6" target="_blank" rel="noreferrer">772c7c6</a>)</li><li><strong>links</strong>: insert id link properly (#742) (<a href="https://github.com/nvim-orgmode/orgmode/commit/8e319bf" target="_blank" rel="noreferrer">8e319bf</a>)</li><li><strong>calendar</strong>: Properly go to previous/next year (<a href="https://github.com/nvim-orgmode/orgmode/commit/c9bf6d8" target="_blank" rel="noreferrer">c9bf6d8</a>)</li><li><strong>calendar</strong>: fix bug with empty date (#744) (<a href="https://github.com/nvim-orgmode/orgmode/commit/3e4dbeb" target="_blank" rel="noreferrer">3e4dbeb</a>)</li><li><strong>listitems</strong>: Handle text edits order on Neovim nightly (<a href="https://github.com/nvim-orgmode/orgmode/commit/ab5183c" target="_blank" rel="noreferrer">ab5183c</a>)</li><li>fix file type detection in `org-edit-special` on macOS. (#757) (<a href="https://github.com/nvim-orgmode/orgmode/commit/d7d0fc5" target="_blank" rel="noreferrer">d7d0fc5</a>)</li><li><strong>injection</strong>: Default to lower filetype if not detected (<a href="https://github.com/nvim-orgmode/orgmode/commit/225eba8" target="_blank" rel="noreferrer">225eba8</a>)</li><li><strong>nightly</strong>: Remove reversing of lsp edits (<a href="https://github.com/nvim-orgmode/orgmode/commit/328ef85" target="_blank" rel="noreferrer">328ef85</a>)</li><li><strong>tests</strong>: Fix tests that causes false negative results (<a href="https://github.com/nvim-orgmode/orgmode/commit/de02a0c" target="_blank" rel="noreferrer">de02a0c</a>)</li><li><strong>highlights</strong>: Highlight table hr line separately (<a href="https://github.com/nvim-orgmode/orgmode/commit/e365b85" target="_blank" rel="noreferrer">e365b85</a>)</li><li>explicitly pass treesitter language to `get_node()` (#795) (<a href="https://github.com/nvim-orgmode/orgmode/commit/56c8246" target="_blank" rel="noreferrer">56c8246</a>)</li><li><strong>dates</strong>: Fix parsing dates from headlines (<a href="https://github.com/nvim-orgmode/orgmode/commit/d0baf31" target="_blank" rel="noreferrer">d0baf31</a>)</li><li><strong>Enter</strong>: Return early if mapping callback returns nil (<a href="https://github.com/nvim-orgmode/orgmode/commit/16cf859" target="_blank" rel="noreferrer">16cf859</a>)</li><li><strong>ci</strong>: Inherit secrets in reusable workflows (<a href="https://github.com/nvim-orgmode/orgmode/commit/1dd91cc" target="_blank" rel="noreferrer">1dd91cc</a>)</li></ul>',55)]))}const f=r(i,[["render",n]]);export{c as __pageData,f as default};
