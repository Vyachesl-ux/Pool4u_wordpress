<?php
/**
 * Plugin Name:       Vyacheslav Blocks
 * Description:       Extend the Gutenberg editor with custom blocks.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Vyacheslav Lobintsev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       vyacheslav-blocks
 *
 * @package           vyacheslav-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_headspin_blocks_block_init() {
	$blocks = glob( __DIR__ . '/build/blocks/*', GLOB_ONLYDIR );

	foreach ( $blocks as $block ) register_block_type( $block );
}
add_action( 'init', 'create_block_headspin_blocks_block_init' );
