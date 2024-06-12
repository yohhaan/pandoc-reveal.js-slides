---
title: "Title"
subtitle: "Subtitle"
author: <b>Author 1</b>, Author 2, ...
institute: Institution
date: Month Day, Year
duration: 5 #amount of time in minutes for presentation
slideNumber: true
width: 1600
height: 900
transition: fade
theme: uw-madison
logo:
    - {src: ./assets/logo/cdis.png, style: height:150px;}
    - {src: ./assets/logo/madsnp.svg, style: height:105px;}
logoheader: ./assets/logo/uw-crest.svg
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
: Definition

::: notes
Here you can write notes visible only in the speaker mode
:::
<!------------------------>

## Columns Layout

::: columns
:::: {.column width=70%}
~~~~~~~ {.json caption="JSON Logs"}
{
    "origin": "",
    "api": "",
}
~~~~~~~
::::
:::: {.column width=30%}
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
:::: {.column width=70%}
| Column 1 | Column 2 | Column 3 | Column 4 |
| -------- | -------- | -------- | -------- |
| <i class="fa-brands fa-github"></i> | | <i class="fa-regular fa-file-pdf"></i>| |

::::
:::: {.column width=30%}
#### Findings
- Finding 1
- Finding 2
- Finding 3
::::
:::

::: columns
:::: {.column width=50%}

![Centered with Caption](./assets/logo/uw-crest.svg){width=20%}

::::
:::: {.column width=50%}

<!-- Centered without caption -->
<p style="text-align:center;">
![](./assets/logo/uw-crest.svg){width=20%}
</p>

::::
:::

::: notes
Here you can write notes visible only in the speaker mode
:::
<!------------------------>

<!------------------------>
# Additional Slides
<!------------------------>

<!------------------------>

# Vertical Slides A
<!------------------------>

## Vertical A.1

Slide A.1

<!------------------------>

## Vertical A.2

Slide A.2

<!------------------------>

# Vertical Slides B
<!------------------------>

## Vertical B.1

Slide B.1

<!------------------------>

## Vertical B.2

Slide B.2

<!------------------------>cd w