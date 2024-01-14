<?php
/**
 * Theme init
 *
 * @package _headspin
 * @author Ole-Martin Bratteng <ole-martin.bratteng@headspin.no>
 * @version 1.0.0
 * @since 1.0.0
 */


/**
 * Disable theme and plugin editor
 */
define( 'DISALLOW_FILE_EDIT', true );


if ( !function_exists("headspin_theme_init") ) :
	function headspin_theme_init () {
		remove_action( "wp_head", "wp_generator" );
		remove_action( "wp_head", "rest_output_link_wp_head" );
		remove_action( "wp_head", "rsd_link" );
		remove_action( "wp_head", "wlwmanifest_link" );

		add_filter("the_generator", "__return_false");
		add_filter( "xmlrpc_methods", function( $methods ) {
			unset( $methods["pingback.ping"] );
			return $methods;
		});

		// Disable auto update of themes and plugins
		add_filter( "auto_update_plugin", "__return_false" );
		add_filter( "auto_update_theme", "__return_false" );
		remove_action( "wp_head", "wp_shortlink_wp_head" );

		// Higher image quality
		add_filter( 'jpeg_quality', function() { return 95; } );
	}

	add_action( "init", "headspin_theme_init" );
endif;


// Disable emojicons
if ( !function_exists("disable_wp_emojicons") ) :
	function disable_wp_emojicons() {
		// all actions related to emojis
		remove_action("admin_print_styles", "print_emoji_styles");
		remove_action("wp_head", "print_emoji_detection_script", 7);
		remove_action("admin_print_scripts", "print_emoji_detection_script");
		remove_action("wp_print_styles", "print_emoji_styles");
		remove_filter("wp_mail", "wp_staticize_emoji_for_email");
		remove_filter("the_content_feed", "wp_staticize_emoji");
		remove_filter("comment_text_rss", "wp_staticize_emoji");

		// filter to remove TinyMCE emojis
		add_filter("tiny_mce_plugins", "disable_emojicons_tinymce");
		add_filter("emoji_svg_url", "__return_false");
	}

	function disable_emojicons_tinymce( $plugins ) {
		if (is_array($plugins)) {
			return array_diff($plugins, array("wpemoji"));
		} else {
			return array();
		}
	}

	add_action("init", "disable_wp_emojicons");
endif;

// Removes Wordpres logo from menu bar
if ( !function_exists("remove_wp_logo") ) :
	function remove_wp_logo( $wp_admin_bar ) {
		$wp_admin_bar->remove_node("wp-logo");
	}

	add_action( "admin_bar_menu", "remove_wp_logo", 999 );
endif;


/**
 * Produces cleaner filenames for uploads
 *
 * @param  string $filename
 * @return string
 */
if ( !function_exists("headspin_sanitize_file_name") ) :
	function headspin_sanitize_file_name( $filename ) {
		$sanitized_filename = remove_accents( $filename ); // Convert to ASCII
		// Standard replacements
		$invalid = array(
			' '   => '-',
			'%20' => '-',
			'_'   => '-',
		);
		$sanitized_filename = str_replace( array_keys( $invalid ), array_values( $invalid ), $sanitized_filename );
		$sanitized_filename = preg_replace('/[^A-Za-z0-9-\. ]/', '', $sanitized_filename); // Remove all non-alphanumeric except .
		$sanitized_filename = preg_replace('/\.(?=.*\.)/', '', $sanitized_filename); // Remove all but last .
		$sanitized_filename = preg_replace('/-+/', '-', $sanitized_filename); // Replace any more than one - in a row
		$sanitized_filename = str_replace('-.', '.', $sanitized_filename); // Remove last - if at the end
		$sanitized_filename = strtolower( $sanitized_filename ); // Lowercase
		return $sanitized_filename;
	}

	add_filter( "sanitize_file_name", "headspin_sanitize_file_name", 10, 1 );
endif;
