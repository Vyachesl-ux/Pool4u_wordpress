<?php
/**
 * The general functionali_tag_idy of the plugin.
 *
 * @link       https://www.headspin.no
 * @since      1.0.0
 *
 * @package    HS_Config
 * @subpackage HS_Config/general
 */

/**
 * The general functionalty of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the general-specific stylesheet and JavaScript.
 *
 * @package    HS_Config
 * @subpackage HS_Config/general
 * @author     Marcos Oliveira <marcos@headspin.no>
 */

class HS_Config_General {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * The required options groups.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      object    $version    The list of options.
	 */
	private $hs_options;

	/** @var array The plugin base url. */
	private $url;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		$this->hs_options = get_option( 'hs_options' );

		if (defined('MY_HS_CONFIG_URL')) {
			$this->url = MY_HS_CONFIG_URL . '/includes';
		} else {
			$this->url = plugin_dir_url( __FILE__ );
		}
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in HS_Config_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The HS_Config_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		 // Prepend to plugin path -> plugin_dir_url( __FILE__ ) .  when in plugins directory

		//wp_enqueue_style( $this->plugin_name, $this->url . '/css/hs-config-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in HS_Config_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The HS_Config_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		//wp_enqueue_script( $this->plugin_name, $this->url . '/js/hs-config-admin.js', array( 'jquery' ), $this->version, false );
	}

	public function hs_setup_requirements() {

		// Clone Role
		global $wp_roles;
		if ( ! isset( $wp_roles ) )
			$wp_roles = new WP_Roles();

		// Setup new role
		if( !$wp_roles->get_role('hs_administrator') ) {
			$adm = $wp_roles->get_role('administrator');
			$wp_roles->add_role('hs_administrator', 'HS Administrator', $adm->capabilities);
		}

		// Add new capabilities
		if(!$wp_roles->get_role('hs_administrator')->has_cap('manage_hs')){
			$wp_roles->get_role('hs_administrator')->add_cap('manage_hs');
		}

		// Change default user to new role
		$user = get_user_by( 'ID', 1 );
		if ( !in_array( 'hs_administrator', (array) $user->roles ) ) {
			$user->add_role( 'hs_administrator' );
		}
	}

	public function hs_exclude_admin_role( $roles ) {

		// If the user is not a hs_administrator cannot view or set role
		$user = wp_get_current_user();
		if ( is_a( $user, 'WP_User' ) && in_array( 'hs_administrator', $user->roles ) ) {
			return $roles;
		}

		if ( isset( $roles['hs_administrator'] ) ) {
			unset( $roles['hs_administrator'] );
		}

		return $roles;
	}

	public function hs_manage_admin_menu() {

		$hs_menu_lock_options = JSON_decode(get_option( 'hs_options' )['menu_lock']);
		global $submenu;
		if($hs_menu_lock_options){
			foreach($hs_menu_lock_options->menu as $menu_entry){
				if( !current_user_can('manage_hs')){
					remove_menu_page($menu_entry->value);
				}
			}
			foreach($hs_menu_lock_options->submenu as $menu_entry){
				if( !current_user_can('manage_hs')){
					remove_submenu_page($menu_entry->parent, urldecode($menu_entry->value));
					// double tap
					if($menu_entry->key)
						unset($submenu[$menu_entry->parent][$menu_entry->key]);
				}
			}
		}

		if( !current_user_can('manage_hs')){
			remove_menu_page('edit.php?post_type=acf-field-group'); // ACF
		}
	}

	public function hs_exclude_users( $user_query ){
		if ( !current_user_can('manage_hs') ) {
			global $wpdb;
			$user_query->query_where = str_replace(
				'WHERE 1=1',
				"WHERE 1=1 AND {$wpdb->users}.ID IN (
					SELECT {$wpdb->usermeta}.user_id FROM $wpdb->usermeta
						WHERE {$wpdb->usermeta}.meta_key = '{$wpdb->prefix}capabilities'
						AND {$wpdb->usermeta}.meta_value NOT LIKE '%hs_administrator%')",
				$user_query->query_where
			);
		}
	}

	public function hs_remove_admin_tab($views){
		if ( !current_user_can('manage_hs') ) {
			$users = count_users();
			unset( $views['hs_administrator']);
			$all_num = $users['total_users'] - $users['avail_roles']['hs_administrator'];
			$class_all = ( strpos($views['all'], 'current') === false ) ? "" : "current";
			$views['all'] = '<a href="users.php" class="' . $class_all . '">' . __('All') . ' <span class="count">(' . $all_num . ')</span></a>';

		}
		return $views;
	}

	public function hs_wpadmin_filter( $url, $path, $orig_scheme ) {
		if( defined( 'WP_ADMIN_DIR' ) ){
			$old  = array( "/(wp-admin)/");
			$admin_dir = WP_ADMIN_DIR;
			$new  = array( $admin_dir );
			$url =  preg_replace( $old, $new, $url, 1);
		}
		return $url;
	}

	public function hs_lock_wpadmin() {
		$requested_uri = $_SERVER["REQUEST_URI"];

		switch( $requested_uri ){
			case ( preg_match('/wp-admin.*/', $requested_uri) ? true : false ):
				if( isset( $this->hs_options['mask_admin'] ) &&  isset( $this->hs_options['admin_path'] ) ){
					status_header( 404 );
					nocache_headers();
					wp_safe_redirect( home_url('404') );
					die();
				}
				break;
			case '/wp-login.php':
				if( isset( $this->hs_options['hide_login'] ) && isset( $this->hs_options['login_path'] )){
					status_header( 404 );
					nocache_headers();
					include( get_query_template( '404' ) );
					die();
				}
				break;
		}
	}

}
