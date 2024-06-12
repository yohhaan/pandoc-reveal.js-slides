# .SUFFIXES: .html .md
MARKDOWNSRCFILES := $(wildcard slides/*.md)
HTML := $(MARKDOWNSRCFILES:slides/%.md=%.html)
vpath %.md slides
vpath %.html html

%.html: %.md
	pandoc --standalone --mathjax --slide-level=2 -t revealjs -o html/$@ $< --template=theme/revealjs-template.md -V center=false -V history=false -V revealjs-url=./dependencies/reveal.js -V mathjax -V mathjaxurl=./dependencies/mathjax/es5/tex-mml-chtml.js

dependencies: cleandependencies
	mkdir -p dependencies/public/
	cp -R dependencies/reveal.js dependencies/public
	cp -R dependencies/elapsed-time-bar/plugin/elapsed-time-bar dependencies/public/reveal.js/plugin
	cp -R dependencies/menu dependencies/public/reveal.js/plugin
	cp -R dependencies/pdfexport dependencies/public/reveal.js/plugin
	cp -R dependencies/revealjs-plugins/animate dependencies/public/reveal.js/plugin
	cp -R dependencies/revealjs-plugins/anything dependencies/public/reveal.js/plugin
	cp -R dependencies/revealjs-plugins/chalkboard dependencies/public/reveal.js/plugin
	cp -R dependencies/revealjs-plugins/chart dependencies/public/reveal.js/plugin
	cp -R dependencies/revealjs-plugins/customcontrols dependencies/public/reveal.js/plugin
	cp -R dependencies/revealjs-plugins/fullscreen dependencies/public/reveal.js/plugin
	cp -R dependencies/revealjs-plugins/loadcontent dependencies/public/reveal.js/plugin
	cp theme/source/* dependencies/public/reveal.js/css/theme/source/.
	cp theme/template/* dependencies/public/reveal.js/css/theme/template/.
	cd dependencies/public/reveal.js && rm -v package-lock.json && yarn install && yarn build
	cp -R dependencies/mathjax-src dependencies/public
	cd dependencies/public/mathjax-src && rm -v package-lock.json && yarn install && yarn compile && yarn make-components
	rm -rf html/dependencies
	mkdir -p html/dependencies/reveal.js html/dependencies/mathjax html/dependencies/reveal.js/font-awesome
	cp -R dependencies/public/reveal.js/dist html/dependencies/reveal.js/dist
	cp -R dependencies/public/reveal.js/plugin html/dependencies/reveal.js/plugin
	cp -R dependencies/public/mathjax-src/es5 html/dependencies/mathjax/
	cp -R dependencies/font-awesome/css html/dependencies/reveal.js/font-awesome/
	cp -R dependencies/font-awesome/js html/dependencies/reveal.js/font-awesome/
	cp -R dependencies/font-awesome/less html/dependencies/reveal.js/font-awesome/
	cp -R dependencies/font-awesome/scss html/dependencies/reveal.js/font-awesome/
	cp -R dependencies/font-awesome/svgs html/dependencies/reveal.js/font-awesome/
	cp -R dependencies/font-awesome/webfonts html/dependencies/reveal.js/font-awesome/


cleandependencies:
	rm -rf html/dependencies

build: $(HTML) index.md
	pandoc --standalone -o html/index.html index.md

clean:
	rm -rf html/*.html
