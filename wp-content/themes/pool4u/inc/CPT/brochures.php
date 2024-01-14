<?php
/*
 * ooooooooo.                                               .
 * `888   `Y88.                                           .o8
 *  888   .d88'  .ooooo.  oo.ooooo.   .ooooo.  oooo d8b .o888oo
 *  888ooo88P'  d88' `88b  888' `88b d88' `88b `888""8P   888
 *  888`88b.    888ooo888  888   888 888   888  888       888
 *  888  `88b.  888    .o  888   888 888   888  888       888 .
 * o888o  o888o `Y8bod8P'  888bod8P' `Y8bod8P' d888b      "888"
 *                         888
 *                        o888o
 *
 *
 * Register custom post type for brochures
 *
 * @uses register_post_type
 */
function abp_CTP_brochures() {
	$labels = array(
		"name"					=> __( "Brochures og presentations", "headspin" ),
		"menu_name"				=> __( "Brochures og pres.", "headspin" ),
		"singular_name"			=> __( "Brochure", "headspin" ),
		"add_new"				=> __( "Legg til ny", "headspin" ),
		"add_new_item"			=> __( "Legg til ny brochure", "headspin" ),
		"edit_item"				=> __( "Rediger brochure", "headspin" ),
		"new_item"				=> __( "Nytt brochure", "headspin" ),
		"view_item"				=> __( "Vis brochure", "headspin" ),
		"view_items"			=> __( "Vis brochures", "headspin"),
		"search_items"			=> __( "Søk i brochures", "headspin" ),
		"not_found"				=> __( "Ingen brochures funnet", "headspin" ),
		"not_found_in_trash"	=> __( "Ingen brochures funnet i papirkurven", "headspin" ),
		"all_items"				=> __( "Alle brochures", "headspin" ),
		"uploaded_to_this_item"	=> __( "Lastet opp til denne brochure", "headspin" ),
	);

	register_post_type( "brochures",
		array(
			"labels"				=> $labels,
			"capability_type"		=> "page",
			"public"				=> true,
			"publicly_queryable"	=> true,
			"has_archive"			=> false,
			"exclude_from_search"	=> true,
			"menu_position"			=> 26,
			"supports"				=> array( "title", "page-attributes" ),
			"can_export"			=> true,
			"show_in_rest"			=> false,
			"show_in_menu"			=> true,
			"menu_icon"				=> "dashicons-analytics",
		)
	);

	$cat_labels = array(
		"name" 							=> __( "brochure-typer", "taxonomy general name", "headspin" ),
		"menu_name" 					=> __( "brochure-typer", "headspin" ),
		"singular_name" 				=> __( "brochure-type", "taxonomy singular name", "headspin" ),
		"search_items" 					=> __( "Søk i brochure-typer", "headspin" ),
		"popular_items" 				=> __( "Populære brochure-typer", "headspin" ),
		"all_items" 					=> __( "Alle brochure-typer", "headspin" ),
		"parent_item" 					=> null,
		"parent_item_colon" 			=> null,
		"edit_item" 					=> __( "Rediger brochure-type" , "headspin"),
		"update_item" 					=> __( "Oppdater brochure-type", "headspin" ),
		"add_new_item" 					=> __( "Legg til ny brochure-type", "headspin" ),
		"new_item_name" 				=> __( "Ny brochure-type", "headspin" ),
		"not_found"						=> __( "Fant ingen brochure-typer", "headspin" ),
		"separate_items_with_commas" 	=> __( "Skill brochure-typer med komma", "headspin" ),
		"add_or_remove_items" 			=> __( "Legg til eller fjern brochure-typer", "headspin" ),
		"choose_from_most_used" 		=> __( "Velg blant de mest brukte brochure-typer", "headspin" ),
	);

	register_taxonomy("brochures-type", "brochures", array(
		"hierarchical" 			=> true,
		"labels" 				=> $cat_labels,
		"show_ui" 				=> true,
		"show_in_rest"			=> true,
		"update_count_callback" => "_update_post_term_count",
		"query_var" 			=> true,
	));
}
add_action( "init", "abp_CTP_brochures" );
