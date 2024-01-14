<?php 
/**
*███╗░░██╗███████╗░██╗░░░░░░░██╗░██████╗
*████╗░██║██╔════╝░██║░░██╗░░██║██╔════╝
*██╔██╗██║█████╗░░░╚██╗████╗██╔╝╚█████╗░
*██║╚████║██╔══╝░░░░████╔═████║░░╚═══██╗
*██║░╚███║███████╗░░╚██╔╝░╚██╔╝░██████╔╝
*╚═╝░░╚══╝╚══════╝░░░╚═╝░░░╚═╝░░╚═════╝░ 
*/
function hs_CPT_news() {
	$labels = array(
		"singular_name"			=> __( "News", "headspin" ),
		"name"					=> __( "News", "headspin" ),
		"menu_name"				=> __( "News", "headspin" ),
		"add_new"				=> __( "Legg til ny", "headspin" ),
		"add_new_item"			=> __( "Legg til ny News", "headspin" ),
		"edit_item"				=> __( "Rediger News", "headspin" ),
		"new_item"				=> __( "Ny News", "headspin" ),
		"view_item"				=> __( "Vis News", "headspin" ),
		"view_items"			=> __( "Vis News"),
		"search_items"			=> __( "Søk i News", "headspin" ),
		"not_found"				=> __( "Ingen News funnet", "headspin" ),
		"not_found_in_trash"	=> __( "Ingen News funnet i papirkurven", "headspin" ),
		"all_items"				=> __( "Alle News", "headspin" ),
		"uploaded_to_this_item"	=> __( "Lastet opp til denne News-en", "headspin" ),
	);

	register_post_type( "news",
		array(
			"labels"				=> $labels,
			"capability_type"		=> "post",
			"public"				=> true,
			"publicly_queryable"	=> true,
			"has_archive"			=> false,
			"exclude_from_search"	=> false,
			"menu_position"			=> 22,
			"supports"				=> array("title", "editor", "thumbnail"),
			"can_export"			=> true,
			"rewrite"				=> true,
			"show_in_rest"			=> true,
			"menu_icon"				=> "data:image/svg+xml;base64," . base64_encode('<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/></svg>'),
		)
	);

	$tag_labels = array(
		"singular_name" 				=> __( "News-kategori", "taxonomy singular name", "headspin" ),
		"name" 							=> __( "News-kategorier", "taxonomy general name", "headspin" ),
		"search_items" 					=> __( "Søk i News-kategorier", "headspin" ),
		"popular_items" 				=> __( "Populære News-kategorier", "headspin" ),
		"all_items" 					=> __( "Alle News-kategorier", "headspin" ),
		"edit_item" 					=> __( "Rediger News-kategori" , "headspin"),
		"update_item" 					=> __( "Oppdater News-kategori", "headspin" ),
		"add_new_item" 					=> __( "Legg til ny News-kategori", "headspin" ),
		"new_item_name" 				=> __( "Ny News-kategori", "headspin" ),
		"separate_items_with_commas" 	=> __( "Skill News-kategorier med komma", "headspin" ),
		"add_or_remove_items" 			=> __( "Legg til eller fjern News-kategorier", "headspin" ),
		"choose_from_most_used" 		=> __( "Velg blant de mest brukte News-kategorier", "headspin" ),
	);
}
add_action( "init", "hs_CPT_news" );