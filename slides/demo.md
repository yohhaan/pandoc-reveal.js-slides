---
title: "Title"
subtitle: "Subtitle"
author: <b>Author 1</b>, Author 2, ...
institute: Institution
date: Month Day, Year
duration: 10 #amount of time in minutes for presentation
slideNumber: true
width: 1600
height: 900
transition: fade
transitionSpeed: fast
theme: uw-madison
logo:
    - {src: ./assets/logo/cdis.svg, style: height:110px;}
    - {src: ./assets/logo/madsnp.svg, style: height:77px;}
logoheader: ./assets/logo/uw-crest.svg
title-slide-attributes:
    data-background-image: ./assets/background/uw.svg
    data-background-size: contain
---

## Slide 1

- Just Some
- Text
- A [Link](https://github/com/yohhaan/pandoc-reveal.js-slides)
- and icons <i class="fa-brands fa-github"></i> <i class="fa-solid fa-house" style="color: #C5050C;"></i>

<br />

<div class="block" name="Block demo">
Description block demo
</div>

<br />

Term
: Definition [1]

::: cite
[1] *Cite Title - Authors - Venue*
:::


::: notes
Here you can write notes visible only in the speaker mode
:::
<!------------------------>

## Columns Layout

::: columns
:::: {.column width=70% .text-align-center}
~~~~~~~ {.json caption="JSON Logs"}
{
    "origin": "",
    "api": "",
}
~~~~~~~
::::
:::: {.column width=30% .text-align-center}
#### Latex Equation
$\int_{a}^{b} x^2 \,dx$
::::
:::

::: notes
Here you can write notes visible only in the speaker mode
:::
<!------------------------>

## Table & Media

::: columns
:::: {.column width=70% .text-align-center}
| Column 1                            | Column 2 | Column 3                               | Column 4 |
| ----------------------------------- | -------- | -------------------------------------- | -------- |
| <i class="fa-brands fa-github"></i> |          | <i class="fa-regular fa-file-pdf"></i> |          |

::::
:::: {.column width=30%}
#### Findings
- Finding 1
- Finding 2
- Finding 3
::::
:::

::: columns
:::: {.column width=70% .text-align-center}

![Caption](./assets/logo/uw-crest.svg){width=10%}

::::
:::: {.column width=30% .text-align-center}

![](./assets/logo/uw-crest.svg){width=25%}

::::
:::

::: notes
Here you can write notes visible only in the speaker mode
:::
<!------------------------>

<!------------------------>
# Additional Slides {data-visibility="uncounted" data-background-image="./assets/background/uw.svg" data-background-size="contain"}
<!------------------------>

<!------------------------>

# Vertical Slides A {data-visibility="uncounted"}
<!------------------------>

## Vertical A.1 {data-visibility="uncounted"}

Slide A.1

<!------------------------>

## Vertical A.2 {data-visibility="uncounted"}

Slide A.2

<!------------------------>

# Vertical Slides B {data-visibility="uncounted"}
<!------------------------>

## Vertical B.1 {data-visibility="uncounted"}

Slide B.1

<!------------------------>

## Vertical B.2 {data-visibility="uncounted"}

Slide B.2

<!------------------------>