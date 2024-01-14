<?php
/**
 * 
* ░█████╗░░█████╗░░██████╗███████╗  ░██████╗████████╗██╗░░░██╗██████╗░██╗███████╗░██████╗
* ██╔══██╗██╔══██╗██╔════╝██╔════╝  ██╔════╝╚══██╔══╝██║░░░██║██╔══██╗██║██╔════╝██╔════╝
* ██║░░╚═╝███████║╚█████╗░█████╗░░  ╚█████╗░░░░██║░░░██║░░░██║██║░░██║██║█████╗░░╚█████╗░
* ██║░░██╗██╔══██║░╚═══██╗██╔══╝░░  ░╚═══██╗░░░██║░░░██║░░░██║██║░░██║██║██╔══╝░░░╚═══██╗
* ╚█████╔╝██║░░██║██████╔╝███████╗  ██████╔╝░░░██║░░░╚██████╔╝██████╔╝██║███████╗██████╔╝
* ░╚════╝░╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═════╝░░░░╚═╝░░░░╚═════╝░╚═════╝░╚═╝╚══════╝╚═════╝░
 */
function hs_CPT_case_studies() {
	$labels = array(
		"singular_name"			=> __( "Case-studies", "headspin" ),
		"name"					=> __( "Case-studies", "headspin" ),
		"menu_name"				=> __( "Case-studies", "headspin" ),
		"add_new"				=> __( "Legg til ny", "headspin" ),
		"add_new_item"			=> __( "Legg til ny Case-studies", "headspin" ),
		"edit_item"				=> __( "Rediger Case-studies", "headspin" ),
		"new_item"				=> __( "Ny Case-studies", "headspin" ),
		"view_item"				=> __( "Vis Case-studies", "headspin" ),
		"view_items"			=> __( "Vis Case-studies"),
		"search_items"			=> __( "Søk i Case-studies", "headspin" ),
		"not_found"				=> __( "Ingen Case-studies funnet", "headspin" ),
		"not_found_in_trash"	=> __( "Ingen Case-studies funnet i papirkurven", "headspin" ),
		"all_items"				=> __( "Alle Case-studies", "headspin" ),
		"uploaded_to_this_item"	=> __( "Lastet opp til denne Case-studies-en", "headspin" ),
	);

	register_post_type( "case_studies",
		array(
			"labels"				=> $labels,
			"capability_type"		=> "post",
			"public"				=> true,
			"publicly_queryable"	=> true,
			"has_archive"			=> true,
			"exclude_from_search"	=> false,
			"menu_position"			=> 22,
			"supports"				=> array("title", "editor", "thumbnail"),
			"can_export"			=> true,
			"rewrite"				=> true,
			"show_in_rest"			=> true,
			"menu_icon"				=> "data:image/svg+xml;base64," . base64_encode('<svg fill="#ffffff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 6c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h5v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h5zm0 2.5c0-.276-.224-.5-.5-.5h-19c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h19c.276 0 .5-.224.5-.5v-11zm-9 4.5h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3zm1.5-9h-5c-.276 0-.5.224-.5.5v1.5h6v-1.5c0-.276-.224-.5-.5-.5"/></svg>'),
		)
	);

	$tag_labels = array(
		"singular_name" 				=> __( "Case-studies-kategori", "taxonomy singular name", "headspin" ),
		"name" 							=> __( "Case-studies-kategorier", "taxonomy general name", "headspin" ),
		"search_items" 					=> __( "Søk i Case-studies-kategorier", "headspin" ),
		"popular_items" 				=> __( "Populære Case-studies-kategorier", "headspin" ),
		"all_items" 					=> __( "Alle Case-studies-kategorier", "headspin" ),
		"edit_item" 					=> __( "Rediger Case-studies-kategori" , "headspin"),
		"update_item" 					=> __( "Oppdater Case-studies-kategori", "headspin" ),
		"add_new_item" 					=> __( "Legg til ny Case-studies-kategori", "headspin" ),
		"new_item_name" 				=> __( "Ny Case-studies-kategori", "headspin" ),
		"separate_items_with_commas" 	=> __( "Skill Case-studies-kategorier med komma", "headspin" ),
		"add_or_remove_items" 			=> __( "Legg til eller fjern Case-studies-kategorier", "headspin" ),
		"choose_from_most_used" 		=> __( "Velg blant de mest brukte Case-studies-kategorier", "headspin" ),
	);
}
add_action( "init", "hs_CPT_case_studies" );
