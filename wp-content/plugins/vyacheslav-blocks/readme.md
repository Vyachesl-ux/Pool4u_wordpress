# Headspin Blocks

**This plugin extends the Gutenberg with custom blocks. It's based on the [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) package, but modified to support multiple blocks.**

## Installation
1. Clone this repository into your Wordpress installation's `plugins` folder.
2. Unsync the repository by deleting the `.git` folder. This will prevent you from committing to this starting template repository.
3. Run `npm install` to install all required packages.
4. Run `npm start` to start the auto compiler.

## Creating blocks
To create a block, create a new folder in the `src/blocks` folder. This folder must contain the following:

* `block.json` containing the block's metadata, like name, description, title, icon, attributes etc. See [the Wordpress documentation](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/) for details.
* `index.js` containing the main javascript for the block.

The blocks will automatically be registered in `headspin-blocks.php` and `webpack.config.js`.

### The example block
There is an example block in the `src/blocks` folder. This is a very basic block that shows you the bare minimum of how a block works. You can copy this folder and use as a template for your block.

## Nown issues
As of now, the build process will create a folder in the `build` folder for each block. This means that when you delete a block from the `src` folder, you must also delete it from the `build` folder. Alternatively, you can delete the entire `build` folder and rerun the build command (`npm run build`).


## Resources
* **[Block Editor Handbook](https://developer.wordpress.org/block-editor/)** The official Gutenberg documentation.
* **[Gutenberg github repo](https://github.com/WordPress/gutenberg)** Very useful to discover available components.
* **[WPGB](https://wp-gb.com/)** Explore and see examples of components that's hard to find or have no official documentation.
