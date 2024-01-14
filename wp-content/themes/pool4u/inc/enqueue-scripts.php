<?php
/**
 * Enqueues all scripts and styles for frontend and backend use
 *
 * @package _headspin
 */



/**
 * Asset version number. Matches the version number of the theme.
 *
 * To update, update version number in main style.scss
 */
define( "ASSETS_VERSION", wp_get_theme()->get( "Version" ) );



/**
 * Register shared scripts and styles
 *
 * For scripts that are used both for frontend and admin.
 * For fonts etc. use wp_register_style/wp_register_script, and put them in dependencies for other scripts/styles
 */
function headspin_shared_scripts() {
	wp_enqueue_style( "google-montserrat", "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" );

	wp_enqueue_style( "swiper-slider", "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css");
}
add_action( "init", "headspin_shared_scripts" );

function load_swiper_js() {
    wp_enqueue_style( 'swiper', 'https://unpkg.com/swiper/swiper-bundle.min.css' );
    wp_enqueue_script( 'swiper', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), '6.4.15', true );
}

add_action( 'wp_enqueue_scripts', 'load_swiper_js' );


/**
 * Enqueue scripts and styles.
 */
function headspin_scripts() {
	wp_enqueue_style( "headspin-style", headspin_asset_url( "style.css" ), array(), ASSETS_VERSION );

	wp_enqueue_script( "headspin-custom", headspin_asset_url( "assets/js/custom.js" ), array("jquery"), ASSETS_VERSION, true );

	wp_enqueue_script( "headspin-vendors", headspin_asset_url( "assets/js/vendor.js" ), array(), ASSETS_VERSION, true );

	wp_enqueue_script('swiper-slider', get_template_directory_uri() . '/assets/js/custom/swiper-bundle.min.js', false, null, 'footer');

	if ( is_singular() && has_block( "acf/subscribe-form" ) ) {
		wp_enqueue_script( "google-recaptcha", "https://www.google.com/recaptcha/api.js?render=6LcJSiUoAAAAAEgeaFT3TmET3--IIrHeNzCfFHjK" );
		}
}
add_action( "wp_enqueue_scripts", "headspin_scripts" );


/**
 * Enqueue editor scripts and styles.
 */
function headspin_editor_scripts() {
	wp_enqueue_style( "headspin-editor", headspin_asset_url( "editor.css" ), array(), ASSETS_VERSION );
}
add_action( "enqueue_block_editor_assets", "headspin_editor_scripts" );


/**
 * Enqueue admin scripts and styles
 */
function headspin_admin_scripts() {
	// wp_enqueue_style( "headspin-admin", headspin_asset_url( "admin.css" ), array( "ah-icons" ), ASSETS_VERSION );

	wp_enqueue_script( "headspin-admin", headspin_asset_url( "assets/js/admin.js" ), array(), ASSETS_VERSION, true );
}
add_action( "admin_enqueue_scripts", "headspin_admin_scripts" );





