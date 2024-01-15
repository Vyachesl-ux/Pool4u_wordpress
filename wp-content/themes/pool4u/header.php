<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * 
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="cannonical" href="<?php echo get_site_url() . '/' ?>">
	<link rel="apple-touch-icon" sizes="100x100" href="<?php echo get_template_directory_uri() . '/assets/images/favicons/apple-touch-icon.webp'?>">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() . '/assets/images/favicons/favicon-32x32.png'  ?>">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() . '/assets/images/favicons/favicon-16x16.png' ?>">
	<link rel="shortcut-icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() . '/assets/images/favicons/favicon-16x16.png' ?>">
	<link rel="manifest" href="<?php echo get_template_directory_uri() . '/assets/images/favicons/site.webmanifest' ?> ">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	<meta name="apple-mobile-web-app-title" content="Будівніцтво бассейнів в Україні">
	<meta name="application-name" content="Будівніцтво бассейнів в Україні">

	<script>
		var decodeHtmlNumeric=function(a){return a.replace(/&#([0-9]{1,7});/g,function(a,b){return String.fromCharCode(parseInt(b,10))}).replace(/&#[xX]([0-9a-fA-F]{1,6});/g,function(a,b){return String.fromCharCode(parseInt(b,16))})};
	</script>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php do_action( "wp_body_open" ); ?>
<div id="page" class="site">
		<header id="masthead" class="site-header <?php echo is_admin_bar_showing() ? 'has-admin-bar' : '' ?>">
			<?php
				$logo_path = get_template_directory_uri() . "/assets/images/favicons/apple-touch-icon.webp";
				$title_tag = "div";
			?>
				<div class="site-header__container">
				<<?php echo $title_tag; ?> class="site-branding">
					<a class="site-title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php hsl_e( "Gå til forsiden" ); ?>" aria-label="Go to home page">
						<img src="<?php echo $logo_path ?>" width="70" alt="логотип">
					</a>
				</<?php echo $title_tag; ?>><!-- .site-branding -->
		
				<nav id="site-navigation" class="main-navigation">
					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'headspin' ); ?></button>
					<?php
					wp_nav_menu( array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
					) );
					?>
				</nav><!-- #site-navigation -->
				</div>
			</header><!-- #masthead -->

	<div id="content" class="site-content">
