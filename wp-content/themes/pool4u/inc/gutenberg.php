<?php

/*
 *   .oooooo.                    .                          .o8
 *  d8P'  `Y8b                 .o8                         "888
 * 888           oooo  oooo  .o888oo  .ooooo.  ooo. .oo.    888oooo.   .ooooo.  oooo d8b  .oooooooo
 * 888           `888  `888    888   d88' `88b `888P"Y88b   d88' `88b d88' `88b `888""8P 888' `88b
 * 888     ooooo  888   888    888   888ooo888  888   888   888   888 888ooo888  888     888   888
 * `88.    .88'   888   888    888 . 888    .o  888   888   888   888 888    .o  888     `88bod8P'
 *  `Y8bood8P'    `V88V"V8P'   "888" `Y8bod8P' o888o o888o  `Y8bod8P' `Y8bod8P' d888b    `8oooooo.
 *                                                                                       d"     YD
 *                                                                                       "Y88888P'
 *
 * Adds customizations to the Gutenberg editor
 */

/**
 * Register custom blocks
 */
function hs_acf_blocks_init() {

	if ( function_exists( "acf_register_block_type" ) ) {
		acf_register_block( array(
			"name"				=> "case_studies",
			"title"				=> __( "Case studies", "headspin" ),
			"description"		=> __( "Show all case studies", "headspin" ),
			"render_callback"	=> "hs_acf_render_block",
			"category"			=> "layout",
			"keywords"			=> array( "testimonial", "case", "case studies" ),
			"icon"				=> '<svg fill="#ffffff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 6c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h5v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h5zm0 2.5c0-.276-.224-.5-.5-.5h-19c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h19c.276 0 .5-.224.5-.5v-11zm-9 4.5h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3zm1.5-9h-5c-.276 0-.5.224-.5.5v1.5h6v-1.5c0-.276-.224-.5-.5-.5"/></svg>',
			"align"				=> "",
			"supports"			=> array(
				"align"			=> array(),
			),
		));

	}
	if ( function_exists( "acf_register_block_type" ) ) {
		acf_register_block( array(
			"name"				=> "employees",
			"title"				=> __( "Employees", "headspin" ),
			"description"		=> __( "Show all employees", "headspin" ),
			"render_callback"	=> "hs_acf_render_block",
			"category"			=> "layout",
			"keywords"			=> array( "employees","employee" ),
			"icon"				=> '<svg fill="#ffffff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 6c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h5v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h5zm0 2.5c0-.276-.224-.5-.5-.5h-19c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h19c.276 0 .5-.224.5-.5v-11zm-9 4.5h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3zm1.5-9h-5c-.276 0-.5.224-.5.5v1.5h6v-1.5c0-.276-.224-.5-.5-.5"/></svg>',
			"align"				=> "",
			"supports"			=> array(
				"align"			=> array(),
			),
		));
		acf_register_block( array(
			"name"				=> "news",
			"title"				=> __( "News", "headspin" ),
			"description"		=> __( "Show all news", "headspin" ),
			"render_callback"	=> "hs_acf_render_block",
			"category"			=> "layout",
			"keywords"			=> array( "news" ),
			"icon"				=> '<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/></svg>',
			"align"				=> "",
			"supports"			=> array(
				"align"			=> array("wide"),
			),
		));
		acf_register_block( array(
			"name"				=> "brochures",
			"title"				=> __( "Brochures og presentations", "headspin" ),
			"description"		=> __( "Shows brochures og presentations", "headspin" ),
			"render_callback"	=> "hs_acf_render_block",
			"category"			=> "layout",
			"keywords"			=> array( "rapport", "presentasjon", "report", "presentation" ),
			"icon"				=> "analytics",
			"supports"			=> array(
				"align"			=> array( "wide" ),
			),
		));
		acf_register_block( array(
			"name"				=> "subscribe_form",
			"title"				=> __( "Subscribe form", "headspin" ),
			"description"		=> __( "Shows subscribing form for news or / and other info", "headspin" ),
			"render_callback"	=> "hs_acf_render_block",
			"category"			=> "layout",
			"keywords"			=> array( "form", "subscribe", "news", "info" ),
			"icon"				=> '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/></svg>',
			"supports"			=> array(
				"align"			=> array( "wide" ),
			),
		));
		acf_register_block( array(
			"name"				=> "subscribe",
			"title"				=> __( "Nyhetsbrev", "headspin" ),
			"description"		=> __( "Viser påmeldingsskjema til nyhetsbrev", "headspin" ),
			"render_callback"	=> "hs_acf_render_block",
			"category"			=> "layout",
			"keywords"			=> array( "newsletter", "nyhetsbrev", "nyheter", "news", "subscribe" ),
			"icon"				=> "email-alt2",
			"supports"			=> array(
				"align"			=> array( "wide" ),
			),
		));
		acf_register_block( array(
			"name"				=> "newsletter",
			"title"				=> __( "Nyhetsbrev", "headspin" ),
			"description"		=> __( "Viser påmeldingsskjema til nyhetsbrev", "headspin" ),
			"render_callback"	=> "ah_acf_render_block",
			"category"			=> "layout",
			"keywords"			=> array( "newsletter", "nyhetsbrev", "nyheter", "news", "subscribe" ),
			"icon"				=> "email-alt2",
			"supports"			=> array(
				"align"			=> array( "wide", "full" ),
			),
		));


	}
	
}
add_action( "acf/init", "hs_acf_blocks_init" );


/**
 * Apply template to custom blocks
 */
function hs_acf_render_block( $block ) {

	$slug = str_replace("acf/", "", $block["name"]);
	$slug = str_replace("sidebar-notices", "notices", $slug);

	if ( file_exists( get_theme_file_path( "/template-parts/blocks/block-{$slug}.php" ) ) ) {
		include( get_theme_file_path( "template-parts/blocks/block-{$slug}.php" ) );
	}

}


/**
 * Setup custom color palettes
 */
function hs_gutenberg_color_palette() {
	add_theme_support(
		"editor-color-palette", array(
			// array(
			// 	"name"	=> "Grønn",
			// 	"slug"	=> "green",
			// 	"color"	=> "#007c8a",
			// ),
		)
	);

	// Disable custom colors
	// add_theme_support( "disable-custom-colors" );
}
// add_action( "after_setup_theme", "hs_gutenberg_color_palette" );


/**
 * Remove the core block patterns
 */
function hs_remove_core_block_patterns( $settings ) {
	$settings["__experimentalBlockPatterns"] = array();

	return $settings;
}
add_filter( "block_editor_settings_all", "hs_remove_core_block_patterns" );
