<?php
/**
 * _headspin functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _headspin
 */

if ( ! function_exists( 'headspin_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function headspin_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on _headspin, use a find and replace
		 * to change 'headspin' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'headspin', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'headspin' ),
			'footer-menu' =>esc_html__('Footer menu', 'headspin'),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		/**
		 * Add support for responsive embeds
		 */
		add_theme_support( 'responsive-embeds' );

		/**
		 * Add support for wide and full-width gutenberg blocks
		 */
		add_theme_support( 'align-wide' );
	}
endif;
add_action( 'after_setup_theme', 'headspin_setup' );


/**
 * Returns the full path of an asset.
 * Adds ".min" if WP_DEBUG is false.
 *
 * @param   String  $path  Reative path from within theme folder
 *
 * @return  String         Full path
 */
function headspin_asset_url( $path ) {
	if ( substr( $path, 0, 1 ) ) $path = "/" . $path;

	if ( WP_DEBUG == false ) {
		$broken_path = explode( ".", $path );
		array_splice( $broken_path, count( $broken_path ) - 1, 0, "min" );
		$path = implode( ".", $broken_path );
	}

	return get_template_directory_uri() . $path;
}


/**
 * Enqueue scripts and styles
 */
require get_template_directory() . '/inc/enqueue-scripts.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Include helper functions
 */
require get_template_directory() . '/inc/helpers/bootstrap.php';

/**
 * Include custom post types
 */
require get_template_directory() . '/inc/CPT/bootstrap.php';

/**
 * Translation wrapper functions for Polylang
 */
require get_template_directory() . '/inc/translation.php';

/**
 * Include gutenberg customizations
 */
require get_template_directory() . '/inc/gutenberg.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Functions and definitions for setting up custom page types.
 */
require get_template_directory() . '/inc/page-types.php';

/**
 * Add some security fixes and remove minor bloat
 */
require get_template_directory() . '/inc/theme-init.php';
/**
 * Add ajax file
 */
require get_template_directory() . '/inc/ajax.php';
