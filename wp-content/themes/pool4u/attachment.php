<?php
global $post;
if ( $post && $post->guid ) {
    wp_redirect( esc_url( get_permalink( $post->guid ) ), 301 );
    exit;
} else {
    global $wp_query;
	$wp_query->is_404();
	status_header( 404 );
	get_template_part( 404 );
	exit();
}
