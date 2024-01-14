<?php 
/**
 * Render the pagination links
 *
 * @param  array  $options  Array of options
 */
function hs_pagination( $options = array() ) {
	$default_options = array(
		"paged"			=> null,
		"max_page"		=> null,
		"before"		=> "<div class='hs-pagination'>",
		"after"			=> "</div>",
		"prev_next"		=> false,
		"end_size"		=> 1,
		"mid_size"		=> 2,
		"add_fragment"	=> "",
	);

	$options = array_merge( $default_options, $options );

	global $wp_query;
	$big = 999999999999;

	if ( !$options["paged"] ) $options["paged"] = get_query_var( "paged" );
	if ( !$options["max_page"] ) $options["max_page"] = $wp_query->max_num_pages;

	if ( $options["before"] ) echo $options["before"];
	echo "<div class='hs-pagination__pagination'>";
	echo paginate_links( array(
		"base"			=> str_replace( $big, "%#%", esc_url( get_pagenum_link( $big ) ) ),
		"format"		=> "?paged=%#%",
		"current"		=> max( 1, $options["paged"] ),
		"total"			=> $options["max_page"],
		"prev_next"		=> $options["prev_next"],
		"end_size"		=> $options["end_size"],
		"mid_size"		=> $options["mid_size"],
		"add_fragment"	=> $options["add_fragment"],
	) );
	echo "</div>";
	if ( $options["after"] ) echo $options["after"];
}