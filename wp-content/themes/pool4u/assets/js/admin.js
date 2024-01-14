"use strict";

/**
 *       .o.             .o8                     o8o
 *      .888.           "888                     `"'
 *     .8"888.      .oooo888  ooo. .oo.  .oo.   oooo  ooo. .oo.
 *    .8' `888.    d88' `888  `888P"Y88bP"Y88b  `888  `888P"Y88b
 *   .88ooo8888.   888   888   888   888   888   888   888   888
 *  .8'     `888.  888   888   888   888   888   888   888   888
 * o88o     o8888o `Y8bod88P" o888o o888o o888o o888o o888o o888o
 *
 *
 */

(function () {
  /**
   * Gutenberg
   */
  if (wp.blocks) {
    wp.domReady(function () {
      /**
       * Unregister default Block styles
       */

      // Image
      wp.blocks.unregisterBlockStyle("core/image", "default");
      wp.blocks.unregisterBlockStyle("core/image", "rounded");

      // Quote
      wp.blocks.unregisterBlockStyle("core/quote", "default");
      wp.blocks.unregisterBlockStyle("core/quote", "large");

      // Pullquote
      wp.blocks.unregisterBlockStyle("core/pullquote", "default");
      wp.blocks.unregisterBlockStyle("core/pullquote", "solid-color");

      // Separator
      wp.blocks.unregisterBlockStyle("core/separator", "default");
      wp.blocks.unregisterBlockStyle("core/separator", "wide");
      wp.blocks.unregisterBlockStyle("core/separator", "dots");

      // Table
      wp.blocks.unregisterBlockStyle("core/table", "regular");
      wp.blocks.unregisterBlockStyle("core/table", "stripes");

      // Buttons
      wp.blocks.unregisterBlockStyle("core/button", "default");
      wp.blocks.unregisterBlockStyle("core/button", "fill");
      wp.blocks.unregisterBlockStyle("core/button", "outline");

      //image-text block
      wp.blocks.registerBlockStyle("headspin/image-text", {
        name: "img-icon",
        label: "Use image as icon"
      });
      wp.blocks.registerBlockStyle("headspin/image-text", {
        name: "video",
        label: "Video"
      });
      wp.blocks.registerBlockStyle("headspin/image-text", {
        name: "frame",
        label: "Add yellow frame"
      });
      wp.blocks.registerBlockStyle("headspin/image-text", {
        name: "link",
        label: "Block news link"
      });

      //separator
      wp.blocks.registerBlockStyle("core/separator", {
        name: "right",
        label: "Alignment right"
      });
      wp.blocks.registerBlockStyle("core/separator", {
        name: "left",
        label: "Alignment left"
      });

      //headings
      wp.blocks.registerBlockStyle("core/heading", {
        name: "orange",
        label: "Orange color"
      });

      //paragraph
      wp.blocks.registerBlockStyle("core/paragraph", {
        name: "orange",
        label: "Orange color"
      });

      //section
      wp.blocks.registerBlockStyle("headspin/section", {
        name: "yellow",
        label: "Yellow background"
      });
      wp.blocks.registerBlockStyle("headspin/section", {
        name: "margin-top",
        label: "Add top space"
      });

      //short line separator

      wp.blocks.registerBlockStyle("headspin/short-line", {
        name: "center",
        label: "Alignment center"
      });
      wp.blocks.registerBlockStyle("headspin/short-line", {
        name: "right",
        label: "Alignment right"
      });

      /**
       * Unregister block types
       */
      var coreBlocksToKeep = ["core/audio", "core/classic", "core/buttons", "core/button", "core/code", "core/column", "core/columns", "core/embed", "core/freeform", "core/file", "core/gallery", "core/group", "core/heading", "core/html", "core/image", "core/list", "core/list-item", "core/paragraph", "core/quote", "core/table", "core/separator", "core/shortcode", "core/spacer", "core/video"];
      wp.blocks.getBlockTypes().forEach(function (block) {
        if (block.name.match(/^core\//) && !coreBlocksToKeep.includes(block.name)) {
          wp.blocks.unregisterBlockType(block.name);
        }
      });

      // Unregister embed variations
      wp.blocks.unregisterBlockVariation("core/embed", "facebook");
      wp.blocks.unregisterBlockVariation("core/embed", "wordpress");
      wp.blocks.unregisterBlockVariation("core/embed", "flickr");
      wp.blocks.unregisterBlockVariation("core/embed", "animoto");
      wp.blocks.unregisterBlockVariation("core/embed", "cloudup");
      wp.blocks.unregisterBlockVariation("core/embed", "collegehumor");
      wp.blocks.unregisterBlockVariation("core/embed", "crowdsignal");
      wp.blocks.unregisterBlockVariation("core/embed", "dailymotion");
      wp.blocks.unregisterBlockVariation("core/embed", "imgur");
      wp.blocks.unregisterBlockVariation("core/embed", "issuu");
      wp.blocks.unregisterBlockVariation("core/embed", "kickstarter");
      wp.blocks.unregisterBlockVariation("core/embed", "meetup-com");
      wp.blocks.unregisterBlockVariation("core/embed", "mixcloud");
      wp.blocks.unregisterBlockVariation("core/embed", "reddit");
      wp.blocks.unregisterBlockVariation("core/embed", "reverbnation");
      wp.blocks.unregisterBlockVariation("core/embed", "screencast");
      wp.blocks.unregisterBlockVariation("core/embed", "scribd");
      wp.blocks.unregisterBlockVariation("core/embed", "slideshare");
      wp.blocks.unregisterBlockVariation("core/embed", "smugmug");
      wp.blocks.unregisterBlockVariation("core/embed", "speaker-deck");
      wp.blocks.unregisterBlockVariation("core/embed", "tiktok");
      wp.blocks.unregisterBlockVariation("core/embed", "ted");
      wp.blocks.unregisterBlockVariation("core/embed", "tumblr");
      wp.blocks.unregisterBlockVariation("core/embed", "videopress");
      wp.blocks.unregisterBlockVariation("core/embed", "wordpress-tv");
      wp.blocks.unregisterBlockVariation("core/embed", "amazon-kindle");
      wp.blocks.unregisterBlockVariation("core/embed", "pocketcasts");
      wp.blocks.unregisterBlockVariation("core/embed", "wolfram-cloud");
    });
  }
})();