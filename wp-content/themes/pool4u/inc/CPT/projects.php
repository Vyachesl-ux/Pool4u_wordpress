<?php 
/**
*██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗░██████╗
*██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝
*██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░╚█████╗░
*██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░╚═══██╗
*██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██████╔╝
*╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═════╝░

*/
function vl_CPT_projects() {
	$labels = array(
		"singular_name"			=> __( "Проект", "pool4u" ),
		"name"					=> __( "Проекты", "pool4u" ),
		"menu_name"				=> __( "Проекты", "pool4u" ),
		"add_new"				=> __( "Добавить новый проект", "pool4u" ),
		"add_new_item"			=> __( "Добавить в новый проект", "pool4u" ),
		"edit_item"				=> __( "Изменить проект", "pool4u" ),
		"new_item"				=> __( "Новый проект", "pool4u" ),
		"view_item"				=> __( "Показать проект", "pool4u" ),
		"view_items"			=> __( "Показать проекты"),
		"search_items"			=> __( "Найти в проектах", "pool4u" ),
		"not_found"				=> __( "Ни одного проекта не найдено", "pool4u" ),
		"not_found_in_trash"	=> __( "Ни одного проекта не найдено в корзине", "pool4u" ),
		"all_items"				=> __( "Все проекты", "pool4u" ),
		"uploaded_to_this_item"	=> __( "Загрузить в этот проект", "pool4u" ),
	);

	register_post_type( "projects",
		array(
			"labels"				=> $labels,
			"capability_type"		=> "post",
			"public"				=> true,
			"publicly_queryable"	=> true,
			"has_archive"			=> true,
			"exclude_from_search"	=> false,
			"menu_position"			=> 22,
			"supports"				=> array("title", "thumbnail"),
			"can_export"			=> true,
			"rewrite"				=> true,
			"show_in_rest"			=> true,
			"menu_icon"				=> "data:image/svg+xml;base64," . base64_encode('<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/></svg>'),
			
		)
	);
}
add_action( "init", "vl_CPT_projects" );