# pandoc-reveal.js-slides

Here is my setup to create slide decks with
[pandoc](https://pandoc.org/chunkedhtml-demo/10-slide-shows.html) and
[reveal.js](https://revealjs.com/). See also my [blog
post](https://yohan.beugin.org/posts/2024_06_slides_setup.html) about it.

## How it works

Each slide deck is created from a Markdown file with some specific syntax (see
[`slides/demo.md`](slides/demo.md)), that is then parsed by pandoc to create a
reveal.js HTML presentation hosted locally or somewhere on the web. Then, you
can just access this HTML presentation to give a talk (with support for
presenter mode and notes taking) or export it to PDF.

You can edit the template and theme used by pandoc and reveal.js to make the
slides look like you want (see files under [`theme/`](theme/)). You can also
import reveal.js plugins to enable other features. Git submodules are used to
track and manage all of these dependencies properly, and a
[`Makefile`](Makefile) is used to automate everything.

## Demo

See the demo at https://yohhaan.github.io/pandoc-reveal.js-slides/demo.html

## To build it locally

- Clone this repository and its corresponding submodules:
   - `git clone --recurse-submodules git@github.com:yohhaan/pandoc-reveal.js-slides.git` (SSH)
   - `git clone --recurse-submodules
     https://github.com/yohhaan/pandoc-reveal.js-slides.git` (HTTPS)

- You will find a [`Dockerfile`](.devcontainer/Dockerfile) under `.devcontainer/`,
see [here](https://gist.github.com/yohhaan/b492e165b77a84d9f8299038d21ae2c9) for
direct integration with VS code or for manual deployment instructions.

- `make dependencies && make build`

- Open the HTML presentation [`html/demo.html`](html/demo.html)


## Shortcuts for HTML presentation

- 'B': activate whiteboard
- 'C': activate canvas
- 'D': download annotations
- 'E': export as PDF file
- 'F': full screen
- 'G': go to slide #
- 'M': menu
- 'S': speaker view
- 'Esc or O': slides view
- 'Ctrl + click': zoom-in/out on slide

Note: the list of shortcuts is also in the side menu
