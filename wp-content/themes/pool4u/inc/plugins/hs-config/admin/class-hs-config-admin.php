<?php
/**
 * The admin-specific functionali_tag_idy of the plugin.
 *
 * @link       https://www.headspin.no
 * @since      1.0.0
 *
 * @package    HS_Config
 * @subpackage HS_Config/admin
 */

/**
 * The admin-specific functionali_tag_idy of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    HS_Config
 * @subpackage HS_Config/admin
 * @author     Marcos Oliveira <marcos@headspin.no>
 */

class HS_Config_Admin {

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
			$this->url = MY_HS_CONFIG_URL . '/admin';
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

		wp_enqueue_style( $this->plugin_name, $this->url . '/css/hs-config-admin.css', array(), $this->version, 'all' );

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

		wp_enqueue_script( $this->plugin_name, $this->url . '/js/hs-config-admin.js', array( 'jquery' ), $this->version, false );
	}

	public function add_admin_page() {
		// add top level menu page
		add_menu_page(
			'Settings', //Page Title
			'Pool4u внутренние настройки', //Menu Title
			'manage_hs', //Capabili_tag_idy
			'hs-config', //Page slug
			array(__CLASS__, 'admin_page'), //Callback to print html
			'dashicons-admin-generic', // icon_url
			99 // position
		);
	}

	public static function admin_page() {

		if(current_user_can('manage_hs'))
			include('partials/hs-config-admin-display.php');

	}

	public function hs_config_register_settings() {

		register_setting(
			'hs_config', // option_group
			'hs_options', // option_name
			array( $this, 'hs_settings_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'hs_settings_section_general', // id
			'General', // title
			array( $this, 'hs_settings_info' ), // callback
			'hs-general-settings-admin' // page
		);

		add_settings_section(
			'hs_settings_section_analytics', // id
			'Analytics', // title
			array( $this, 'hs_settings_info' ), // callback
			'hs-analytics-settings-admin' // page
		);

		add_settings_section(
			'hs_settings_section_email', // id
			'Email', // title
			array( $this, 'hs_settings_info' ), // callback
			'hs-email-settings-admin' // page
		);

		add_settings_section(
			'hs_settings_section_menu', // id
			'Admin Menu', // title
			array( $this, 'hs_settings_info' ), // callback
			'hs-menu-settings-admin' // page
		);

		#=========================================================================
		#
		# GENERAL AND SECURITY
		#
		#=========================================================================

		add_settings_field(
			'disable_comments', // id
			'Disable Comments', // title
			array( $this, 'disable_comments_callback' ), // callback
			'hs-general-settings-admin', // page
			'hs_settings_section_general' // section
		);

		add_settings_field(
			'hide_login', // id
			'Change Login Path', // title
			array( $this, 'hide_login_callback' ), // callback
			'hs-general-settings-admin', // page
			'hs_settings_section_general' // section
		);

		add_settings_field(
			'login_path', // id
			'New Login Path', // title
			array( $this, 'login_path_callback' ), // callback
			'hs-general-settings-admin', // page
			'hs_settings_section_general' // section
		);

		add_settings_field(
			'mask_admin', // id
			'Mask wp-admin', // title
			array( $this, 'mask_admin_callback' ), // callback
			'hs-general-settings-admin', // page
			'hs_settings_section_general' // section
		);

		add_settings_field(
			'admin_path', // id
			'New wp-admin Path', // title
			array( $this, 'admin_path_callback' ), // callback
			'hs-general-settings-admin', // page
			'hs_settings_section_general' // section
		);

		#=========================================================================
		#
		# ANALITICS
		#
		#=========================================================================

		add_settings_field(
			'ga_id', // id
			'Google Analytics', // title
			array( $this, 'ga_id_callback' ), // callback
			'hs-analytics-settings-admin', // page
			'hs_settings_section_analytics' // section
		);

		add_settings_field(
			'gtm_id', // id
			'Google Tag Manager', // title
			array( $this, 'gtm_id_callback' ), // callback
			'hs-analytics-settings-admin', // page
			'hs_settings_section_analytics' // section
		);

		add_settings_field(
			'facebook_pixel_id', // id
			'Facebook pixel', // title
			array( $this, 'facebook_pixel_id_callback' ), // callback
			'hs-analytics-settings-admin', // page
			'hs_settings_section_analytics' // section
		);

		add_settings_field(
			'bing_webmaster_tools_id', // id
			'Bing Webmaster Tools', // title
			array( $this, 'bing_webmaster_tools_id_callback' ), // callback
			'hs-analytics-settings-admin', // page
			'hs_settings_section_analytics' // section
		);

		add_settings_field(
			'li_tag_id', // id
			'LinkedIn Insight Tag', // title
			array( $this, 'li_tag_id_callback' ), // callback
			'hs-analytics-settings-admin', // page
			'hs_settings_section_analytics' // section
		);

		#=========================================================================
		#
		# EMAIL
		#
		#=========================================================================

		add_settings_field(
			'recaptcha', // id
			'Recaptcha secret', // title
			array( $this, 'recaptcha_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'use_smtp', // id
			'Use SMTP', // title
			array( $this, 'use_smtp_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'from', // id
			'Address', // title
			array( $this, 'email_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'from_name', // id
			'Name', // title
			array( $this, 'name_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'host', // id
			'SMTP Host', // title
			array( $this, 'host_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'port', // id
			'SMTP Port', // title
			array( $this, 'port_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'encryption', // id
			'Encryption', // title
			array( $this, 'encryption_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'authentication', // id
			'Authentication', // title
			array( $this, 'authentication_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'username', // id
			'Username', // title
			array( $this, 'username_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		add_settings_field(
			'password', // id
			'Password', // title
			array( $this, 'password_callback' ), // callback
			'hs-email-settings-admin', // page
			'hs_settings_section_email' // section
		);

		#=========================================================================
		#
		# ADMIN MENU
		#
		#=========================================================================

		add_settings_field(
			'menu_lock', // id
			'Menu options', // title
			array( $this, 'menu_callback' ), // callback
			'hs-menu-settings-admin', // page
			'hs_settings_section_menu' // section
		);
	}

	public function hs_settings_sanitize( $input ) {
		$sanitary_values = array();
		if ( isset( $input['ga_id'] ) ) {
			$sanitary_values['ga_id'] = sanitize_text_field( $input['ga_id'] );
		}

		if ( isset( $input['gtm_id'] ) ) {
			$sanitary_values['gtm_id'] = sanitize_text_field( $input['gtm_id'] );
		}

		if ( isset( $input['facebook_pixel_id'] ) ) {
			$sanitary_values['facebook_pixel_id'] = sanitize_text_field( $input['facebook_pixel_id'] );
		}

		if ( isset( $input['bing_webmaster_tools_id'] ) ) {
			$sanitary_values['bing_webmaster_tools_id'] = sanitize_text_field( $input['bing_webmaster_tools_id'] );
		}

		if ( isset( $input['li_tag_id'] ) ) {
			$sanitary_values['li_tag_id'] = sanitize_text_field( $input['li_tag_id'] );
		}

		if ( isset( $input['recaptcha'] ) ) {
			$sanitary_values['recaptcha'] = sanitize_text_field( $input['recaptcha'] );
		}

		if ( isset( $input['use_smtp'] ) ) {
			$sanitary_values['use_smtp'] = $input['use_smtp'];
		}

		if ( isset( $input['from'] ) ) {
			$sanitary_values['from'] = sanitize_text_field( $input['from'] );
		}

		if ( isset( $input['from_name'] ) ) {
			$sanitary_values['from_name'] = sanitize_text_field( $input['from_name'] );
		}

		if ( isset( $input['host'] ) ) {
			$sanitary_values['host'] = sanitize_text_field( $input['host'] );
		}

		if ( isset( $input['port'] ) ) {
			$sanitary_values['port'] = sanitize_text_field( $input['port'] );
		}

		if ( isset( $input['encryption'] ) ) {
			$sanitary_values['encryption'] = $input['encryption'];
		}

		if ( isset( $input['authentication'] ) ) {
			$sanitary_values['authentication'] = $input['authentication'];
		}

		if ( isset( $input['username'] ) ) {
			$sanitary_values['username'] = sanitize_text_field( $input['username'] );
		}

		if ( isset( $input['password'] ) ) {
			$sanitary_values['password'] = sanitize_text_field( $input['password'] );
		}

		if ( isset( $input['menu_lock'] ) ) {
			$sanitary_values['menu_lock'] = $input['menu_lock'];
		}

		if ( isset( $input['disable_comments'] ) ) {
			$sanitary_values['disable_comments'] = $input['disable_comments'];
		}

		if ( isset( $input['hide_login'] ) ) {
			$sanitary_values['hide_login'] = $input['hide_login'];
		}

		if ( isset( $input['mask_admin'] ) ) {
			$sanitary_values['mask_admin'] = $input['mask_admin'];
		}

		if ( isset( $input['admin_path'] ) ) {
			$sanitary_values['admin_path'] = sanitize_text_field( $input['admin_path'] );
		}

		return $sanitary_values;
	}

	public function hs_settings_info() {

	}

	public function disable_comments_callback() {
		printf(
			'<label for="disable_comments" class="hsswitch"><input type="checkbox" name="hs_options[disable_comments]" id="disable_comments" value="disable_comments" %s><span class="slider round"></label>',
			( isset( $this->hs_options['disable_comments'] ) && $this->hs_options['disable_comments'] === 'disable_comments' ) ? 'checked' : ''
		);
	}

	public function hide_login_callback() {
		printf(
			'<label for="hide_login" class="hidefield hsswitch"><input type="checkbox" name="hs_options[hide_login]" id="hide_login" value="hide_login" %s><span class="slider round"></label>',
			( isset( $this->hs_options['hide_login'] ) && $this->hs_options['hide_login'] === 'hide_login' ) ? 'checked' : ''
		);
	}

	public function login_path_callback() {
		printf(
			'%s/<input placeholder="login_path" class="hidefield login_path regular-text" type="text" name="hs_options[login_path]" id="login_path" value="%s"  width="48">',
			site_url(), isset( $this->hs_options['login_path'] ) ? esc_attr( $this->hs_options['login_path']) : 'login'
		);
	}

	public function mask_admin_callback() {
		printf(
			'<label for="mask_admin" class="hsswitch"><input type="checkbox" name="hs_options[mask_admin]" id="mask_admin" value="mask_admin" %s><span class="slider round"></label>',
			( isset( $this->hs_options['mask_admin'] ) && $this->hs_options['mask_admin'] === 'mask_admin' ) ? 'checked' : ''
		);
	}

	public function admin_path_callback() {
		printf(
			'%s/<input placeholder="admin_path" class="hidefield admin_path regular-text" type="text" name="hs_options[admin_path]" id="admin_path" value="%s"  width="48">',
			site_url(), isset( $this->hs_options['admin_path'] ) ? esc_attr( $this->hs_options['admin_path']) : 'admin-panel'
		);
	}

	public function ga_id_callback() {
		printf(
			'<input placeholder="G-XXXXXXXXXX" class="regular-text" type="text" name="hs_options[ga_id]" id="ga_id" value="%s">',
			isset( $this->hs_options['ga_id'] ) ? esc_attr( $this->hs_options['ga_id']) : ''
		);
	}

	public function gtm_id_callback() {
		printf(
			'<input placeholder="GTM-XXXXXXX" class="regular-text" type="text" name="hs_options[gtm_id]" id="gtm_id" value="%s">',
			isset( $this->hs_options['gtm_id'] ) ? esc_attr( $this->hs_options['gtm_id']) : ''
		);
	}

	public function facebook_pixel_id_callback() {
		printf(
			'<input placeholder="XXXXXXXXXXXXXXXX" class="regular-text" type="text" name="hs_options[facebook_pixel_id]" id="facebook_pixel_id" value="%s">',
			isset( $this->hs_options['facebook_pixel_id'] ) ? esc_attr( $this->hs_options['facebook_pixel_id']) : ''
		);
	}

	public function bing_webmaster_tools_id_callback() {
		printf(
			'<input placeholder="XXXXXXXXXX" class="regular-text" type="text" name="hs_options[bing_webmaster_tools_id]" id="bing_webmaster_tools_id" value="%s">',
			isset( $this->hs_options['bing_webmaster_tools_id'] ) ? esc_attr( $this->hs_options['bing_webmaster_tools_id']) : ''
		);
	}

	public function li_tag_id_callback() {
		printf(
			'<input placeholder="XXXXXXX" class="regular-text" type="text" name="hs_options[li_tag_id]" id="li_tag_id" value="%s">',
			isset( $this->hs_options['li_tag_id'] ) ? esc_attr( $this->hs_options['li_tag_id']) : ''
		);
	}

	public function recaptcha_callback() {
		printf(
			'<input class="regular-text" type="password" name="hs_options[recaptcha]" id="recaptcha" value="%s">',
			isset( $this->hs_options['recaptcha'] ) ? esc_attr( $this->hs_options['recaptcha']) : ''
		);
	}

	public function use_smtp_callback() {
		printf(
			'<label for="use_smtp" class="hsswitch"><input type="checkbox" name="hs_options[use_smtp]" id="use_smtp" value="use_smtp" %s><span class="slider round"></label>',
			( isset( $this->hs_options['use_smtp'] ) && $this->hs_options['use_smtp'] === 'use_smtp' ) ? 'checked' : ''
		);
	}

	public function email_callback() {
		printf(
			'<input class="hidefield smtp regular-text" type="text" name="hs_options[from]" id="from" value="%s">',
			isset( $this->hs_options['from'] ) ? esc_attr( $this->hs_options['from']) : ''
		);
	}

	public function name_callback() {
		printf(
			'<input class="hidefield smtp regular-text" type="text" name="hs_options[from_name]" id="from_name" value="%s">',
			isset( $this->hs_options['from_name'] ) ? esc_attr( $this->hs_options['from_name']) : ''
		);
	}

	public function host_callback() {
		printf(
			'<input class="hidefield smtp regular-text" type="text" name="hs_options[host]" id="host" value="%s">',
			isset( $this->hs_options['host'] ) ? esc_attr( $this->hs_options['host']) : ''
		);
	}

	public function port_callback() {
		printf(
			'<input class="hidefield smtp regular-text" type="text" name="hs_options[port]" id="port" value="%s">',
			isset( $this->hs_options['port'] ) ? esc_attr( $this->hs_options['port']) : ''
		);
	}

	public function encryption_callback() {
		?> <fieldset class="hsradiolist hidefield smtp">
			<?php $checked = ( isset( $this->hs_options['encryption'] ) && $this->hs_options['encryption'] === 'none' ) ? 'checked' : '' ; ?><input type="radio" name="hs_options[encryption]" id="encryption-0" value="none" <?php echo $checked; ?>><label for="encryption-0">None</label><?php $checked = ( isset( $this->hs_options['encryption'] ) && $this->hs_options['encryption'] === 'ssl' ) ? 'checked' : '' ; ?><input type="radio" name="hs_options[encryption]" id="encryption-1" value="ssl" <?php echo $checked; ?>><label for="encryption-1">SSL</label><?php $checked = ( isset( $this->hs_options['encryption'] ) && $this->hs_options['encryption'] === 'tls' ) ? 'checked' : '' ; ?><input type="radio" name="hs_options[encryption]" id="encryption-2" value="tls" <?php echo $checked; ?>><label for="encryption-2">TLS</label>
		</fieldset> <?php
	}

	public function authentication_callback() {
		printf(
			'<div class="hidefield smtp"><label for="authentication" class="hsswitch"><input type="checkbox" name="hs_options[authentication]" id="authentication" value="authentication" %s><span class="slider round"></span></label></div>',
			( isset( $this->hs_options['authentication'] ) && $this->hs_options['authentication'] === 'authentication' ) ? 'checked' : ''
		);
	}

	public function username_callback() {
		printf(
			'<input class="hidefield auth regular-text" type="text" name="hs_options[username]" id="username" value="%s">',
			isset( $this->hs_options['username'] ) ? esc_attr( $this->hs_options['username']) : ''
		);
	}

	public function password_callback() {
		printf(
			'<input class="hidefield auth regular-text" type="password" name="hs_options[password]" id="password" value="%s">',
			isset( $this->hs_options['password'] ) ? esc_attr( $this->hs_options['password']) : ''
		);
	}

	public function menu_callback() {
		printf(
			'<input class="regular-text" type="hidden" name="hs_options[menu_lock]" id="menu_lock" value="%s">',
			isset( $this->hs_options['menu_lock'] ) ? esc_attr( $this->hs_options['menu_lock']) : ''
		);
	}

	public function hs_update_settings( $option, $old, $values ){

		if($option !== 'hs_options')
			return;

		$file = file_get_contents( ABSPATH . '.htaccess');
		$conf = file( ABSPATH . 'wp-config.php');

		if( isset( $values['admin_path'] ) ){

			$conf = array_map( function($conf){
				return stristr( $conf,'WP_ADMIN_DIR' ) ? '' : $conf;
			}, $conf );

			$conf = array_map( function($conf){
				return stristr( $conf,'ADMIN_COOKIE_PATH' ) ? '' : $conf;
			}, $conf );

			if( isset( $values['mask_admin'] ) ){
				array_splice( $conf, 1, 0, "define( 'ADMIN_COOKIE_PATH', '/' . WP_ADMIN_DIR);\n" );
				array_splice( $conf, 1, 0, "define( 'WP_ADMIN_DIR', '{$values['admin_path']}');\n" );
			}

			file_put_contents( ABSPATH . 'wp-config.php', $conf );

			$new_val = "RewriteRule ^{$values['admin_path']}/(.*) wp-admin/$1?%{QUERY_STRING} [L]";
			$str = $file;
			$str = preg_replace( '/RewriteRule(?:.*\n)?.*?wp-admin\/?.*?%{QUERY_STRING} \[L\]/', '', $str );
			$str = trim($str);
			if( isset( $values['mask_admin'] ) )
					$str = $new_val . PHP_EOL . $str;

			file_put_contents( ABSPATH . '.htaccess', $str );

		}

	}

}
