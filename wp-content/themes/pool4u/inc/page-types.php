<?php


/**
 * Define custom page types here.
 *
 * Each type will get a dropdown in Settings->Reading (similar to 'Homepage' and 'Posts page'), a
 * tag will be added to the selected page in the edit pages table, and page template parts can automatically
 * be routed by naming the template part 'content-page-{page_type}.php'. Can also be targeted in ACF, to
 * for example only show a field group on certain page types.
 */
define( "PAGE_TYPES", array(
    "news" => "News archive",
    "case_studies" => "Case studies archive"
) );




/**
 * Add CPT Page Option
 * ----------
 * Adds a CPT field on in settings "options-reading.php" and sets the state of a page to be a CPT archive page.
 *
 * @param   [type]  $cpt_slug  The slug of the CPT (stored in options in the database) "page_for_XXX"
 * @param   [type]  $label     The label to be used for the state and in options-reading.php.
 */
function hs_add_cpt_page_option( $cpt_slug, $label ) {
    add_action('admin_init', function() use ( $cpt_slug, $label ) {
        hs_register_admin_reading_setting( $cpt_slug, $label );
    }, 11 );

    add_filter( 'display_post_states', function( $states, $post ) use ( $cpt_slug, $label ) {
        return hs_add_custom_post_states( $states, $post, $cpt_slug, $label );
    }, 10, 2 );

    //add slug in body classes
    add_filter( 'body_class', function( $classes ) use ( $cpt_slug ) {
        if( hs_is_page_type( $cpt_slug ) ) array_push( $classes, $cpt_slug . "-page" );
        return $classes;
    } );

    if( class_exists('ACF') ) {
        //add pages to page_type select in ACF
        add_filter( 'acf/location/rule_values/page_type', function( $choices ) use ( $cpt_slug, $label ) {
            return hs_acf_rule_values_page_type( $choices, $cpt_slug, $label );
        } );

        //add the fields for the new selected ACF page_type to the selected page
        add_filter( 'acf/location/rule_match/page_type', function( $result, $rule, $screen ) use ( $cpt_slug ) {
            return hs_acf_rule_match_page_type( $result, $rule, $screen, $cpt_slug );
        }, 10, 3 );
    }
}


function hs_register_admin_reading_setting( $cpt_slug, $label ){

    // register our setting
    $args = array(
        'type' => 'string',
        'sanitize_callback' => 'sanitize_text_field',
        'default' => NULL,
    );

    register_setting(
        'reading', // option group "reading", default WP group
        'page_for_' . $cpt_slug, // option name
        $args
    );

    // add our new setting
    add_settings_field(
        'page_for_' . $cpt_slug, // ID
        $label, // Title
        'hs_setting_callback_function', // Callback
        'reading', // page
        'default', // section
        array( 'label' =>  'page_for_' . $cpt_slug )
    );
}

/**
 * Custom field callback
 */
function hs_setting_callback_function( $args ){

    // get saved project page ID
    $project_page_id = get_option( $args['label'] );

    echo '<select id="' . $args['label'] . '" name="' .  $args['label'] . '">';
    // empty option as default
    echo '<option value="0">' . hsl__( '— Velg —' ) . '</option>';

    // get all pages
    $query = array(
        'posts_per_page'   => -1,
        'orderby'          => 'name',
        'order'            => 'ASC',
        'post_type'        => 'page',
    );

    $page_objects = new WP_Query( $query );

	$pages = $page_objects->posts;

    // foreach page we create an option element, with the post-ID as value
    foreach($pages as $item) {

        // add selected to the option if value is the same as $project_page_id
        $selected = ($project_page_id == $item->ID) ? 'selected="selected"' : '';

        echo '<option value="'.$item->ID.'" '.$selected.'>'.$item->post_title.'</option>';
    }

    echo '</select>';
}

/**
 * Add custom state to post/page list
 */
function hs_add_custom_post_states( $states, $post, $cpt_slug, $label ) {

    // get saved project page ID
    $project_page_id = get_option( 'page_for_' . $cpt_slug );

    // add our custom state after the post title if post id matches any of the language connected post ids or is the post. Post also have to be of type page and not have the ID 0
    if( 'page' == get_post_type( $post->ID ) && $project_page_id != '0') {
        if( hsl_is_translated_post_of( $project_page_id, $post ) ) {
            $states[] = $label;
        }
        else if( $post->ID == $project_page_id )
            $states[] = $label;
    }

    return $states;
}

/**
 * ACF Rule Values: Page Type
 *
 * @author Bill Erickson
 * @see http://www.billerickson.net/acf-custom-location-rules
 *
 * @param array $choices, available rule values for this type
 * @return array
 */
function hs_acf_rule_values_page_type( $choices, $cpt_slug, $label ) {
    $choices[$cpt_slug] = $label;
    return $choices;
}

/**
 * ACF Rule Match: Page Type
 * ----------
 * Based on the @acf_location_page_type class
 *
 * @param boolean $match, whether the rule matches (true/false)
 * @param array $rule, the current rule you're matching. Includes 'param', 'operator' and 'value' parameters
 * @param array $options, data about the current edit screen (post_id, page_template...)
 * @return boolean $match
 */
function hs_acf_rule_match_page_type( $result, $rule, $screen, $cpt_slug ) {

    if( !$screen || empty( $screen['post_type'] ) || $screen['post_type'] !== "page" ) return false;

    $post_id = $screen['post_id'];

    if( !$post_id ) return false;

    $post = get_post( $post_id );

    if( !$post ) return false;

    if( $rule['value'] == $cpt_slug ) {
        $product_page = (int) get_option('page_for_' . $cpt_slug);
        $result = ( $product_page === $post->ID || hsl_is_translated_post_of( $product_page, $post ) );

        if( $rule['operator'] == '!=' ) {
            $result = !$result;
        }
    }

    return $result;
}

/**
 * Check if current or given page is of a certain type
 *
 * @param   String       $type     Page type
 * @param   WP_Post|int  $post_id  Post object or ID. Defaults to current post
 *
 * @return  bool
 */
function hs_is_page_type( $type, $post_id = false ) {
	global $post;
	if( $post && ! $post_id ) $post_id = $post->ID;

	return hsl_is_translated_post_of( get_option( "page_for_{$type}" ) ) ?? get_option( "page_for_{$type}" ) === strval( hsl_get_post( $post_id ) );
}

/**
 * Get the post registered as post for given type
 *
 * @param   String  $type  Page type
 *
 * @return  WP_Post|bool
 */
function hs_get_page_type( $type ) {
    $page_type = get_option( "page_for_{$type}" );
	return $page_type ? get_post( hsl_get_post( $page_type ) ) : false;
}


/**
 * Get the page type of the current or given page
 *
 * @param   WP_Post|int  $post_id  Post ID or object. Defaults to current post
 *
 * @return  string|bool            The page type, or false.
 */
function hs_get_page_type_by_post( $post_id = null ) {
    if ( !defined( "PAGE_TYPES" ) || !is_array( PAGE_TYPES ) ) return false;

    foreach ( array_keys( PAGE_TYPES ) as $type ) {
        if ( hs_is_page_type( $type, $post_id ) ) return $type;
    }

    return false;
}


/**
 * Create custom page types
 */
add_action( 'init', function() {
    if ( !defined( "PAGE_TYPES" ) ) return;

	foreach ( PAGE_TYPES as $type => $label ) {
		hs_add_cpt_page_option( $type, $label );
	}
} );
