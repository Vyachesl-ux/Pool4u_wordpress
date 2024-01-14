<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package _headspin
 */

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'pingback_header' );

/**
 * Create theme settings page
 */
function hs_options_page() {

	if ( function_exists( "acf_add_options_page" ) ) {

		acf_add_options_page( array(
			"page_title"		=> __( "Site settings", "pool4u" ),
			"menu_title"		=> __( "Site settings", "pool4u" ),
			"menu_slug"			=> "theme-settings",
			"update_button"		=> __( "Save settings", "pool4u" ),
			"capability"		=> "edit_posts",
			"redirect"			=> false,
			"icon_url"			=> 'dashicons-admin-settings',
		) );
	}
}
add_action( "acf/init", "hs_options_page" );

/**
 * Load theme plugins
 */

 // HS_CONFIG
 // Define path and URL to the HS_CONFIG plugin.
define( 'MY_HS_CONFIG_PATH', get_template_directory() . '/inc/plugins/hs-config/' );
if( file_exists(MY_HS_CONFIG_PATH . 'hs-config.php' ) ):
	define( 'MY_HS_CONFIG_URL', get_template_directory_uri() . '/inc/plugins/hs-config/' );
	// load HS_Config if not already loaded
	if ( !class_exists( 'HS_Config' ) )
		include_once( MY_HS_CONFIG_PATH . 'hs-config.php');
endif;

 // ACF
 // Define path and URL to the ACF plugin.
define( 'MY_ACF_PATH', get_template_directory() . '/inc/plugins/acf/' );
define( 'ACF_JSON_PATH', get_template_directory() . '/inc/acf-json/' );

if( file_exists(MY_HS_CONFIG_PATH . 'hs-config.php' ) ):
	define( 'MY_ACF_URL', get_template_directory_uri() . '/inc/plugins/acf/' );

	// Include plugin
	include_once( MY_ACF_PATH . 'acf.php' );

	// 1. customize ACF path
	function my_acf_settings_path( $url ) {
		return MY_ACF_PATH;
	}
	add_filter('acf/settings/path', 'my_acf_settings_path');

	// Customize the url setting to fix incorrect asset URLs.
	function my_acf_settings_url( $url ) {
		return MY_ACF_URL;
	}
	add_filter('acf/settings/url', 'my_acf_settings_url');

	// JSON saving point
	function my_acf_json_save_point( $path ) {
		return ACF_JSON_PATH;
	}
	add_filter('acf/settings/save_json', 'my_acf_json_save_point');

	function my_acf_json_load_point( $paths ) {
		// remove original path (optional)
		unset($paths[0]);
		// append path
		$paths[] = ACF_JSON_PATH;
		// return
		return $paths;
	}
	add_filter('acf/settings/load_json', 'my_acf_json_load_point');
	add_filter('acf/settings/remove_wp_meta_box', '__return_false');
endif;

/**
 * Setup custom image sizes
 */
function hs_custom_image_sizes() {
	add_image_size( "hd", 1920 );
}
add_action( "after_setup_theme", "hs_custom_image_sizes" );

/**
 * Make custom image sizes appear in Gutenberg media object
 */
function hs_add_custom_image_sizes_to_media_object( $sizes ) {
	return array_merge( $sizes, array(
		"hd"			=> "HD",
		"medium_large"	=> "Medium-large",
	) );
}
add_filter( "image_size_names_choose", "hs_add_custom_image_sizes_to_media_object" );


/**
 * Change logo on WP login page
 */
function hs_custom_login_logo() {
?>
	<style type="text/css">
		body.login div#login h1 {
			margin: 0 auto;
			max-width: 300px;
			padding-left: 24px;
			padding-right: 24px;
		}

		body.login div#login h1 a {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2350.2 505.8'%3E%3Cpath class='filler' fill='%231d1d1b' d='M386.7 84.4L278 .6c-1.3-1-3.1-.8-4 .5-.4.5-.6 1.1-.6 1.8v500c0 1.6 1.3 2.9 2.9 2.9.6 0 1.3-.2 1.8-.6l108.7-83.9c1.6-1.2 2.6-3.2 2.6-5.2V89.6c-.2-2-1.1-3.9-2.7-5.2M258.2 209.8H118.7c-2 0-3.6-1.6-3.6-3.6V2.9c0-1.6-1.3-2.9-2.9-2.9-.6 0-1.3.2-1.8.6L2.6 84C1 85.3 0 87.2 0 89.2v327.3c0 2 .9 4 2.5 5.2l107.9 83.4c1.3 1 3.1.7 4-.5.4-.5.6-1.1.6-1.8V331.5c0-1.8.8-3.5 2.3-4.6l143.1-110.6c1.6-1.2 1.9-3.5.7-5.1-.7-.9-1.7-1.4-2.9-1.4'/%3E%3Cpath class='filler text' fill='%231d1d1b' d='M626.3 157.2h45.9v75.1H757v-75.1h45.9V347H757v-76.1h-84.8V347h-45.9zM926.2 270h73.4v-37.1h-73.4v-38.5h111.9v-37.2H880.5v189.9h159.1v-37.2H926.2zm240.6-2.4l27.8-61.6 27.7 61.6h-55.5zm7.2-110.3l-89.5 189.8h46.8l19.1-42.6h88.3l19.1 42.6h48l-89.5-189.8H1174zm327.6 95.4c0 33.6-25.4 56.7-62.9 56.7h-35.5V194.9h35.5c37.6 0 62.9 23.6 62.9 57.2v.6zm-62.9-95.4h-81.4v189.8h81.4c65.6 0 111-41.5 111-94.9v-.5c0-53.5-45.4-94.5-111-94.4m498.5 67c0 16.3-13.4 28.8-36.4 28.8h-36.4v-58h35.5c23 0 37.3 10 37.3 28.7v.5zm-33.4-67h-85.3v189.8h46v-57h34.9c46.9 0 84.4-22.8 84.4-66.7v-.5c0-38.9-30.2-65.7-80-65.6m137.2-.1h45.9V347H2041zm263.9 0v102.3l-142.8-110.7v198.3h45.3V242.8l142.8 111.8V157.2zm-620 76.8c-45.2 0-45.4-15.9-45.3-24.9.2-12.6 12.5-20.3 30.2-20.3 15.1-.2 30.1 1.6 44.7 5.5l34.4-26.5c-26.5-10.7-53.8-13.9-78.8-13.9-42.8 0-73.3 22.8-73.3 57.3v.6c1.6 29.6 23.7 54.3 69.4 57.1 52.5 2 44.5 27.7 44.5 27.7-1.3 6.7-4.6 17.8-34.1 17.7-18.7 0-37.4-2.8-55.3-8.2l-34.3 26.4c28.8 12.1 63 17.2 90.2 17.2 45.2 0 76.9-21.2 76.9-59v-.7c-1.4-26.4-23.4-54.2-69.2-56'/%3E%3C/svg%3E");
			background-size: contain;
			height: 0;
			padding-bottom: 22%;
			width: 100%;
		}
	</style>
 <?php
} add_action( 'login_enqueue_scripts', 'hs_custom_login_logo' );


/**
 * Javascript polyfill to add `forEach` to NodeLists in IE
 */
function hs_foreach_js_polyfill() {
?>
	<script>
		if (window.NodeList && !NodeList.prototype.forEach)
			NodeList.prototype.forEach = Array.prototype.forEach;
	</script>
<?php
}
add_action( "wp_head", "hs_foreach_js_polyfill" );


if( function_exists( 'hsl_is_translated_post_of' ) ) {
	/**
	 * ACF Rule March Default Page Types
	 * ----------
	 * Adds a field group to all the connected language pages.
	 * Used on page types as for example the front page and the posts page.
	 *
	 * @param   [type]  $result  [$result description]
	 * @param   [type]  $rule    [$rule description]
	 * @param   [type]  $screen  [$screen description]
	 *
	 * @return  [type]           [return description]
	 */
    function hs_acf_rule_match_default_page_types( $result, $rule, $screen ) {

        if( !$screen || empty( $screen['post_type'] ) || $screen['post_type'] !== "page" ) return false;

        $post_id = $screen['post_id'];

        if( !$post_id ) return false;

        $post = get_post( $post_id );

        if( !$post ) return false;

        if( $rule['value'] == 'front_page') {

            // vars
            $front_page = (int) get_option('page_on_front');


            // compare
            $result = ( $front_page === $post->ID || hsl_is_translated_post_of( $front_page, $post ) );

        } elseif( $rule['value'] == 'posts_page') {

            // vars
            $posts_page = (int) get_option('page_for_posts');


            // compare
            $result = ( $posts_page === $post->ID || hsl_is_translated_post_of( $posts_page, $post ) );

        }

        return $result;
    }

    add_filter( 'acf/location/rule_match/page_type', "hs_acf_rule_match_default_page_types", 10, 3 );
}


/**
 * Add "unfiltered_html" capability to multisite editors and admins
 */
function hs_multisite_editors_unfiltered_html() {
	if ( !is_multisite() ) return;

	$editor = get_role( "editor" );
	if ( !in_array( "unfiltered_html", $editor->capabilities ) ) {
		$editor->add_cap( "unfiltered_html" );
	}

	$administrator = get_role( "administrator" );
	if ( !in_array( "unfiltered_html", $administrator->capabilities ) ) {
		$editor->add_cap( "unfiltered_html" );
	}
}
add_action( "init", "hs_multisite_editors_unfiltered_html" );

function hs_multisite_override_caps( $caps, $cap, $user_id ) {
	$user = get_user_by( "id", $user_id );

	if ( $user && $cap === "unfiltered_html" && in_array( "unfiltered_html", $user->allcaps ) ) {

		$caps = array( 'unfiltered_html' );
	}

	return $caps;
}
add_filter( "map_meta_cap", "hs_multisite_override_caps", 10, 3);


/**
 * Change parameters for different queries
 */
function hs_customize_queries( $query ) {

	// Post type filter for search
	if (
		!is_admin() &&
		$query->is_search() &&
		$query->is_main_query() &&
		isset( $_GET["type"] ) &&
		post_type_exists( $_GET["type"] )
	) {
		$query->set( "post_type", $_GET["type"] );
	}

	return $query;
}

add_filter( "pre_get_posts", "hs_customize_queries" );

/**
 * Favicon
 * ----------
 * Adds a favicon. Use Real Favicon Generator.
 * @link https://realfavicongenerator.net/
 *
 * @return  [type]  [return description]
 */
function hs_favicon() {
    $favicon_url    = get_stylesheet_directory_uri() . "/assets/images/favicons";
    $site_title     = get_bloginfo( "name" );
    echo <<<HTML
		<link rel="apple-touch-icon" sizes="180x180" href="{$favicon_url}/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="{$favicon_url}/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="{$favicon_url}/favicon-16x16.png">
		<link rel="manifest" href="{$favicon_url}/site.webmanifest">
		<link rel="mask-icon" href="{$favicon_url}/safari-pinned-tab.svg" color="#1c2982">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="theme-color" content="#ffffff">
        <meta name="apple-mobile-web-app-title" content="{$site_title}">
        <meta name="application-name" content="{$site_title}">
HTML;
}
add_action( "admin_head", "hs_favicon" );
add_action( "wp_head", "hs_favicon" );


// Add block id to ACF blocks
add_filter( 'acf/pre_save_block', function( $attributes ) {
	if ( empty( $attributes['id'] ) ) {
		$attributes['id'] = 'acf-block-' . uniqid();
	}
	return $attributes;
}
);
