# Headspin Theme
The Headspin starter theme is a modified and customized version of the [underscores](https://github.com/automattic/_s) theme. It uses [Gulp](https://gulpjs.com/) to compile SCSS, concatenata and minify javascript, image optimizations, prepare for translation, set up local server with browsersync and more.

##### **`GULP`**
After downloading the theme run the following tasks and commands:
1. **`edit wpgulp.config.js`** changing URL, FTP folders and theme folder name to match the project.
2. **`npm install`** to install all npm packages and build dependencies.
3. **`npm start`** to start building.

##### **`Important!! DON'T edit css files directly!`**
The CSS files are compiled from the SCSS files. If changes are done directly to the compiled CSS files, they will be overwritten the next time the gulp tasks are run.

## SCSS structure
The file and folder structure of the SCSS files are based on the [Inverted Triangle CSS architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).
All files are divided into seven layers (folders) with increasing level of specificity. The idea is that the most general rules will be included first, and then the more specific rules at the end of the file. This will reduce the amount of overwriting rules.

##### The seven layers are as follows:
1. **Settings:** Contains colors and other variables. Does _not_ output any CSS.
2. **Tools:** Globally used mixins and functions. Does _not_ output any CSS.
3. **Generic:** Resets, normalizing, box-sizing definitions etc. This is the first layer that outputs any CSS.
4. **Base:** Styling for the basic HTML elements (h1, a, p, etc). Defines how all elements without classes or IDs will look.
5. **Objects:** Basic elements styled by classes or elements that can be reused around the page
6. **Blocks:** Styles for specific UI components. This can be modules that are used several places or certain pages, templates or layouts.
7. **Trumps:** Utilities, helper classes and overrides. Like center text etc.

![The Inverted Triangle](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10154630/itcss-key-metrics.svg)

## Media queries
The media queries are set up based on the theories explained in [this article](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/). The setup is mobile first, and include breakpoints at 600px, 900px, 1200px, 1500px and 1800px. Seven mixins are included for responsive adjustments:
1. **`tablet-p-up`:** For tablets in portrait orientation (screens with a minimum width of 600px)
2. **`tablet-l-up`:** For tablets in landscape orientation (screens with a minimum width of 900px)
3. **`desktop-up`:** For laptops and small desktop (screens with a minimum width of 1200px)
4. **`medium-desktop-up`:** For larger laptops and desktop (screens with a minimum width of 1500px)
5. **`big-desktop-up`:** For large desktops (screens with a minimum width of 1500px)
6. **`phone-only`:** _Use scarcely._ Specific for phones (screens with a maximum width of 599px)
7. **`non-desktop`:** _Use scarcely._ Specific for phones and tablets (screens with a maximum width of 1199px)

##### Usage
SCSS mixins can be nested inside elements. It is best to keep the media query mixins with the related elements that they effect.

```scss
.selector {
    width: 100%;

    @include tablet-l-up {
        width: 50%;
    }

    @include desktop-up {
        width: 25%;
    }
}
```
