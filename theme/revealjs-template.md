<!DOCTYPE html>
<html$if(lang)$ lang="$lang$"$endif$$if(dir)$ dir="$dir$"$endif$>
<head>
  <meta charset="utf-8">
  <meta name="generator" content="pandoc">
$for(author-meta)$
  <meta name="author" content="$author-meta$">
$endfor$
$if(date-meta)$
  <meta name="dcterms.date" content="$date-meta$">
$endif$
$if(keywords)$
  <meta name="keywords" content="$for(keywords)$$keywords$$sep$, $endfor$">
$endif$
  <title>$if(title-prefix)$$title-prefix$ – $endif$$pagetitle$</title>
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
  <link rel="stylesheet" href="$revealjs-url$/dist/reset.css">
  <link rel="stylesheet" href="$revealjs-url$/dist/reveal.css">
  <style>
    .reveal .sourceCode {  /* see #7635 */
      overflow: visible;
    }
    $styles.html()$
  </style>
$if(theme)$
  <link rel="stylesheet" href="$revealjs-url$/dist/theme/$theme$.css" id="theme">
$else$
  <link rel="stylesheet" href="$revealjs-url$/dist/theme/black.css" id="theme">
$endif$
  <!-- Font awesome is required for the chalkboard plugin -->
  <script src="$revealjs-url$/font-awesome/js/all.min.js"></script>
  <link rel="stylesheet" href="$revealjs-url$/font-awesome/css/all.min.css">
  <link rel="stylesheet" href="$revealjs-url$/plugin/customcontrols/style.css">
  <link rel="stylesheet" href="$revealjs-url$/plugin/chalkboard/style.css">
$for(css)$
  <link rel="stylesheet" href="$css$"/>
$endfor$
$if(logoheader)$
  <style>
    .reveal section.slide h2 {
    background-image: url('$logoheader$');
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
    }
  </style>
$endif$

$if(math)$
  $math$
$endif$
$for(header-includes)$
  $header-includes$
$endfor$
</head>
<body>
$for(include-before)$
$include-before$
$endfor$
  <div class="reveal">
    <div class="slides">

$if(title)$
<section id="$idprefix$title-slide"$for(title-slide-attributes/pairs)$ $it.key$="$it.value$"$endfor$>
  <h1 class="title">$title$</h1>
$if(subtitle)$
  <h3 class="subtitle">$subtitle$</h3>
$endif$
$for(author)$
  <p class="author">$author$</p>
$endfor$
$for(institute)$
  <p class="institute">$institute$</p>
$endfor$
$if(date)$
  <p class="date">$date$</p>
$endif$
$if(logo)$
<div class="logo">
$for(logo)$
  <img class ="logo" data-src="$logo.src$" alt="logo" style="$logo.style$" />
$endfor$
</div>
$endif$

</section>
$endif$
$if(toc)$
<section id="$idprefix$TOC">
<nav role="doc-toc">
$if(toc-title)$
<h2 id="$idprefix$toc-title">$toc-title$</h2>
$endif$
$table-of-contents$
</nav>
</section>
$endif$

$body$
    </div>
  </div>

  <script src="$revealjs-url$/dist/reveal.js"></script>

  <!-- reveal.js plugins -->
  <script src="$revealjs-url$/plugin/notes/notes.js"></script>
  <script src="$revealjs-url$/plugin/search/search.js"></script>
  <script src="$revealjs-url$/plugin/zoom/zoom.js"></script>
  <script src="$revealjs-url$/plugin/chart/plugin.js"></script>
  <script src="$revealjs-url$/plugin/menu/menu.js"></script>
  <!-- Custom controls plugin is used to for opening and closing annotation modes. -->
  <script src="$revealjs-url$/plugin/customcontrols/plugin.js"></script>
  <!-- Chalkboard plugin -->
  <script src="$revealjs-url$/plugin/chalkboard/plugin.js"></script>
  <script src="$revealjs-url$/plugin/fullscreen/plugin.js"></script>
  <script src="$revealjs-url$/plugin/pdfexport/pdfexport.js"></script>

$if(mathjax)$
  <script src="$revealjs-url$/plugin/math/math.js"></script>
$endif$

  <script>

      // Full list of configuration options available at:
      // https://revealjs.com/config/
      Reveal.initialize({
        // Shortcut for toggling between screen and PDF mode
	      pdfExportShortcut: 'E',

        // Separate fragments in pdf export
        pdfSeparateFragments: false,

        //Duration for elapsed time bar
$if(duration)$
        allottedTime: $duration$ * 60 * 1000,
$endif$
        // Display controls in the bottom right corner
        controls: $controls$,

        // Help the user learn the controls by providing hints, for example by
        // bouncing the down arrow when they first encounter a vertical slide
        controlsTutorial: $controlsTutorial$,

        // Determines where controls appear, "edges" or "bottom-right"
        controlsLayout: '$controlsLayout$',

        // Visibility rule for backwards navigation arrows; "faded", "hidden"
        // or "visible"
        controlsBackArrows: '$controlsBackArrows$',

        // Display a presentation progress bar
        progress: $progress$,

        // Display the page number of the current slide
        slideNumber: $slideNumber$,
        slideNumber: "c/t",

        // 'all', 'print', or 'speaker'
        showSlideNumber: '$showSlideNumber$',

        // Add the current slide number to the URL hash so that reloading the
        // page/copying the URL will return you to the same slide
        hash: $hash$,

        // Start with 1 for the hash rather than 0
        hashOneBasedIndex: $hashOneBasedIndex$,

        // Flags if we should monitor the hash and change slides accordingly
        respondToHashChanges: $respondToHashChanges$,

        // Push each slide change to the browser history
        history: $history$,

        // Enable keyboard shortcuts for navigation
        keyboard: $keyboard$,

        // Enable the slide overview mode
        overview: $overview$,

        // Disables the default reveal.js slide layout (scaling and centering)
        // so that you can use custom CSS layout
        disableLayout: $disableLayout$,

        // Vertical centering of slides
        center: $center$,

        // Enables touch navigation on devices with touch input
        touch: $touch$,

        // Loop the presentation
        loop: $loop$,

        // Change the presentation direction to be RTL
        rtl: $rtl$,

        // see https://revealjs.com/vertical-slides/#navigation-mode
        navigationMode: '$navigationMode$',

        // Randomizes the order of slides each time the presentation loads
        shuffle: $shuffle$,

        // Turns fragments on and off globally
        fragments: $fragments$,

        // Flags whether to include the current fragment in the URL,
        // so that reloading brings you to the same fragment position
        fragmentInURL: $fragmentInURL$,

        // Flags if the presentation is running in an embedded mode,
        // i.e. contained within a limited portion of the screen
        embedded: $embedded$,

        // Flags if we should show a help overlay when the questionmark
        // key is pressed
        help: $help$,

        // Flags if it should be possible to pause the presentation (blackout)
        pause: $pause$,

        // Flags if speaker notes should be visible to all viewers
        showNotes: $showNotes$,

        // Global override for autoplaying embedded media (null/true/false)
        autoPlayMedia: $autoPlayMedia$,

        // Global override for preloading lazy-loaded iframes (null/true/false)
        preloadIframes: $preloadIframes$,

        // Number of milliseconds between automatically proceeding to the
        // next slide, disabled when set to 0, this value can be overwritten
        // by using a data-autoslide attribute on your slides
        autoSlide: $autoSlide$,

        // Stop auto-sliding after user input
        autoSlideStoppable: $autoSlideStoppable$,

        // Use this method for navigation when auto-sliding
        autoSlideMethod: $autoSlideMethod$,

        // Specify the average time in seconds that you think you will spend
        // presenting each slide. This is used to show a pacing timer in the
        // speaker view
        defaultTiming: $defaultTiming$,

        // Enable slide navigation via mouse wheel
        mouseWheel: $mouseWheel$,

        // The display mode that will be used to show slides
        display: '$display$',

        // Hide cursor if inactive
        hideInactiveCursor: $hideInactiveCursor$,

        // Time before the cursor is hidden (in ms)
        hideCursorTime: $hideCursorTime$,

        // Opens links in an iframe preview overlay
        previewLinks: $previewLinks$,

        // Transition style (none/fade/slide/convex/concave/zoom)
        transition: '$transition$',

        // Transition speed (default/fast/slow)
        transitionSpeed: '$transitionSpeed$',

        // Transition style for full page slide backgrounds
        // (none/fade/slide/convex/concave/zoom)
        backgroundTransition: '$backgroundTransition$',

        // Number of slides away from the current that are visible
        viewDistance: $viewDistance$,

        // Number of slides away from the current that are visible on mobile
        // devices. It is advisable to set this to a lower number than
        // viewDistance in order to save resources.
        mobileViewDistance: $mobileViewDistance$,
$if(parallaxBackgroundImage)$

        // Parallax background image
        parallaxBackgroundImage: '$parallaxBackgroundImage/nowrap$', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
$else$
$if(background-image)$

       // Parallax background image
       parallaxBackgroundImage: '$background-image/nowrap$', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
$endif$
$endif$
$if(parallaxBackgroundSize)$

        // Parallax background size
        parallaxBackgroundSize: '$parallaxBackgroundSize/nowrap$', // CSS syntax, e.g. "2100px 900px"
$endif$
$if(parallaxBackgroundHorizontal)$

        // Amount to move parallax background (horizontal and vertical) on slide change
        // Number, e.g. 100
        parallaxBackgroundHorizontal: $parallaxBackgroundHorizontal/nowrap$,
$endif$
$if(parallaxBackgroundVertical)$

        parallaxBackgroundVertical: $parallaxBackgroundVertical/nowrap$,
$endif$
$if(width)$

        // The "normal" size of the presentation, aspect ratio will be preserved
        // when the presentation is scaled to fit different resolutions. Can be
        // specified using percentage units.
        width: $width$,
$endif$
$if(height)$

        height: $height$,
$endif$
$if(margin)$

        // Factor of the display size that should remain empty around the content
        margin: $margin$,
$endif$
$if(minScale)$

        // Bounds for smallest/largest possible scale to apply to content
        minScale: $minScale$,
$endif$
$if(maxScale)$

        maxScale: $maxScale$,
$endif$
$if(mathjax)$
        mathjax3: {
          mathjax: '$mathjaxurl$',
          tex: {
            inlineMath: [['\\(', '\\)']],
            displayMath: [['\\[','\\]']],
          },
          options: {
            skipHtmlTags: [ 'script', 'noscript', 'style', 'textarea', 'pre', 'code' ]
          },
        },
$endif$
        // reveal.js plugins
        plugins: [
$if(mathjax)$
          RevealMath.MathJax3,
$endif$
          RevealNotes,
          RevealSearch,
          RevealZoom,
          RevealChart,
          RevealChalkboard,
          RevealCustomControls,
          RevealMenu,
          RevealFullscreen,
          PdfExport,
        ],
        // customcontrols: {
        //     controls: [
        //     { icon: '<i class="fa fa-pen-square"></i>',
        //         title: 'Toggle chalkboard (B)',
        //         action: 'RevealChalkboard.toggleChalkboard();'
        //     },
        //     { icon: '<i class="fa fa-pen"></i>',
        //         title: 'Toggle notes canvas (C)',
        //         action: 'RevealChalkboard.toggleNotesCanvas();'
        //     },
        //     { icon: '<i class="fa fa-download"></i>',
        //         title: 'Download annotations (D)',
        //         action: 'RevealChalkboard.download();'
        //     }
        //     ]
        // },
        chalkboard: {
          boardmarkerWidth: 3,
          chalkWidth: 7,
          chalkEffect: 1.0,
          storage: null,
          src: null,
          readOnly: undefined,
          transition: 800,
          theme: "whiteboard",
          background: [ 'rgba(127,127,127,.1)' , path + 'img/whiteboard.png' ],
          grid: { color: 'rgb(50,50,10,0.5)', distance: 40, width: 2},
          eraser: { src: path + 'img/sponge.png', radius: 20},
          boardmarkers : [
                  { color: 'rgba(0,0,0,1)', cursor: 'url(' + path + 'img/boardmarker-black.png), auto'},
                  { color: 'rgba(30,144,255, 1)', cursor: 'url(' + path + 'img/boardmarker-blue.png), auto'},
                  { color: 'rgba(220,20,60,1)', cursor: 'url(' + path + 'img/boardmarker-red.png), auto'},
                  { color: 'rgba(50,205,50,1)', cursor: 'url(' + path + 'img/boardmarker-green.png), auto'},
          ],
          chalks: [
                  { color: 'rgba(0,0,0,1)', cursor: 'url(' + path + 'img/boardmarker-black.png), auto'},
                  { color: 'rgba(30,144,255, 1)', cursor: 'url(' + path + 'img/boardmarker-blue.png), auto'},
                  { color: 'rgba(220,20,60,1)', cursor: 'url(' + path + 'img/boardmarker-red.png), auto'},
                  { color: 'rgba(50,205,50,1)', cursor: 'url(' + path + 'img/boardmarker-green.png), auto'},
          ]
    },
    menu: {
    // Specifies which side of the presentation the menu will
    // be shown. Use 'left' or 'right'.
    side: 'left',

    // Specifies the width of the menu.
    // Can be one of the following:
    // 'normal', 'wide', 'third', 'half', 'full', or
    // any valid css length value
    width: 'normal',

    // Add slide numbers to the titles in the slide list.
    // Use 'true' or format string (same as reveal.js slide numbers)
    numbers: false,

    // Specifies which slide elements will be used for generating
    // the slide titles in the menu. The default selects the first
    // heading element found in the slide, but you can specify any
    // valid css selector and the text from the first matching
    // element will be used.
    // Note: that a section data-menu-title attribute or an element
    // with a menu-title class will take precedence over this option
    titleSelector: 'h1, h2, h3, h4, h5, h6',

    // If slides do not have a matching title, attempt to use the
    // start of the text content as the title instead
    useTextContentForMissingTitles: false,

    // Hide slides from the menu that do not have a title.
    // Set to 'true' to only list slides with titles.
    hideMissingTitles: false,

    // Adds markers to the slide titles to indicate the
    // progress through the presentation. Set to 'false'
    // to hide the markers.
    markers: true,

    // Specify custom panels to be included in the menu, by
    // providing an array of objects with 'title', 'icon'
    // properties, and either a 'src' or 'content' property.
    custom: [
      { icon: '<i class="fa-regular fa-keyboard"></i>',
        title: 'Shortcuts',
        content: '<ul><li>B: activate whiteboard</li><li>C: activate canvas</li><li>D: download annotations</li><li>E: export as PDF file</li><li>F: full screen</li><li>M: menu</li><li>S: speaker view</li><li>Esc: slides view</li><li>Ctrl + click: zoom-in/out on slide</li></ul>',
      }
    ],

    // Specifies the themes that will be available in the themes
    // menu panel. Set to 'true' to show the themes menu panel
    // with the default themes list. Alternatively, provide an
    // array to specify the themes to make available in the
    // themes menu panel, for example...
    //
    // [
    //     { name: 'Black', theme: 'dist/theme/black.css' },
    //     { name: 'White', theme: 'dist/theme/white.css' },
    //     { name: 'League', theme: 'dist/theme/league.css' },
    //     {
    //       name: 'Dark',
    //       theme: 'lib/reveal.js/dist/theme/black.css',
    //       highlightTheme: 'lib/reveal.js/plugin/highlight/monokai.css'
    //     },
    //     {
    //       name: 'Code: Zenburn',
    //       highlightTheme: 'lib/reveal.js/plugin/highlight/zenburn.css'
    //     }
    // ]
    //
    // Note: specifying highlightTheme without a theme will
    // change the code highlight theme while leaving the
    // presentation theme unchanged.
    themes: false,

    // Specifies the path to the default theme files. If your
    // presentation uses a different path to the standard reveal
    // layout then you need to provide this option, but only
    // when 'themes' is set to 'true'. If you provide your own
    // list of themes or 'themes' is set to 'false' the
    // 'themesPath' option is ignored.
    themesPath: 'dist/theme/',

    // Specifies if the transitions menu panel will be shown.
    // Set to 'true' to show the transitions menu panel with
    // the default transitions list. Alternatively, provide an
    // array to specify the transitions to make available in
    // the transitions panel, for example...
    // ['None', 'Fade', 'Slide']
    transitions: false,

    // Adds a menu button to the slides to open the menu panel.
    // Set to 'false' to hide the button.
    openButton: true,

    // If 'true' allows the slide number in the presentation to
    // open the menu panel. The reveal.js slideNumber option must
    // be displayed for this to take effect
    openSlideNumber: false,

    // If true allows the user to open and navigate the menu using
    // the keyboard. Standard keyboard interaction with reveal
    // will be disabled while the menu is open.
    keyboard: true,

    // Normally the menu will close on user actions such as
    // selecting a menu item, or clicking the presentation area.
    // If 'true', the sticky option will leave the menu open
    // until it is explicitly closed, that is, using the close
    // button or pressing the ESC or m key (when the keyboard
    // interaction option is enabled).
    sticky: false,

    // If 'true' standard menu items will be automatically opened
    // when navigating using the keyboard. Note: this only takes
    // effect when both the 'keyboard' and 'sticky' options are enabled.
    autoOpen: true,

    // If 'true' the menu will not be created until it is explicitly
    // requested by calling RevealMenu.init(). Note this will delay
    // the creation of all menu panels, including custom panels, and
    // the menu button.
    delayInit: false,

    // If 'true' the menu will be shown when the menu is initialised.
    openOnInit: false,

    // By default the menu will load it's own font-awesome library
    // icons. If your presentation needs to load a different
    // font-awesome library the 'loadIcons' option can be set to false
    // and the menu will not attempt to load the font-awesome library.
    loadIcons: false
  },
  dependencies: [
    // elapsed-time
    { src: '$revealjs-url$/plugin/elapsed-time-bar/elapsed-time-bar.js'},
    //mathjax
    // { src: '$revealjs-url$/plugin/math/math.js', async: true },
  ]
      });
    </script>
  $for(include-after)$
  $include-after$
  $endfor$
  </body>
</html>
