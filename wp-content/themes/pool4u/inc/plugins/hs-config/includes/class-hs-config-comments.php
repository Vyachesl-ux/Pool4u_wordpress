<?php
/**
 * The commnets functionality of the plugin.
 *
 * @link       https://www.headspin.no
 * @since      1.0.0
 *
 * @package    HS_Config
 * @subpackage HS_Config/commnets
 */

/**
 * The commnets functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the commnets-specific stylesheet and JavaScript.
 *
 * @package    HS_Config
 * @subpackage HS_Config/commnets
 * @author     Marcos Oliveira <marcos@headspin.no>
 */

class HS_Config_Comments {

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
	public function hs_setup_comments() {

		if( isset( $this->hs_options['disable_comments'] ) ) {
			add_action('widgets_init', array($this, 'disable_rc_widget'));
			add_filter('wp_headers', array($this, 'filter_wp_headers'));
			add_action('template_redirect', array($this, 'filter_query'), 9);   // before redirect_canonical.

			// Admin bar filtering has to happen here since WP 3.6.
			add_action('template_redirect', array($this, 'filter_admin_bar'));
			add_action('admin_init', array($this, 'filter_admin_bar'));

			// Disable Comments REST API Endpoint
			add_filter('rest_endpoints', array($this, 'filter_rest_endpoints'));
			add_filter('xmlrpc_methods', array($this, 'disable_xmlrc_comments'));
			add_filter('rest_pre_insert_comment', array($this, 'disable_rest_API_comments'));
			// These can happen later.
			// Disable "Latest comments" block in Gutenberg.
			add_action('enqueue_block_editor_assets', array($this, 'filter_gutenberg_blocks'));
			add_action('admin_menu', array($this, 'filter_admin_menu'), 9999);  // do this as late as possible.
			add_action('wp_dashboard_setup', array($this, 'filter_dashboard'));
		}

	}

	public function disable_rc_widget()
	{
		unregister_widget('WP_Widget_Recent_Comments');
		/**
		 * The widget has added a style action when it was constructed - which will
		 * still fire even if we now unregister the widget... so filter that out
		 */
		add_filter('show_recent_comments_widget_style', '__return_false');
	}

	/**
	 * Remove the X-Pingback HTTP header
	 */
	public function filter_wp_headers($headers)
	{
		unset($headers['X-Pingback']);
		return $headers;
	}

	/**
	 * Issue a 403 for all comment feed requests.
	 */
	public function filter_query()
	{
		if (is_comment_feed()) {
			wp_die(__('Comments are closed.', 'disable-comments'), '', array('response' => 403));
		}
	}

	/**
	 * Remove comment links from the admin bar.
	 */
	public function filter_admin_bar()
	{
		if (is_admin_bar_showing()) {
			// Remove comments links from admin bar.
			remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
			if (is_multisite()) {
				add_action('admin_bar_menu', array($this, 'remove_network_comment_links'), 500);
			}
		}
	}

	/**
	 * Remove the comments endpoint for the REST API
	 */
	public function filter_rest_endpoints($endpoints)
	{
		unset($endpoints['comments']);
		return $endpoints;
	}

	/**
	 * Determines if scripts should be enqueued
	 */
	public function filter_gutenberg_blocks($hook)
	{
		return $this->disable_comments_script();
	}

	/**
	 * Enqueues scripts
	 */
	public function disable_comments_script()
	{
		wp_enqueue_script('disable-comments-gutenberg', plugin_dir_url(__FILE__) . 'admin/js/disable-comments.js', array(), false, true);
	}

	/**
	 * remove method wp.newComment
	 */
	public function disable_xmlrc_comments($methods)
	{
		unset($methods['wp.newComment']);
		return $methods;
	}

	public function disable_rest_API_comments($prepared_comment, $request)
	{
		return;
	}

	public function filter_admin_menu()
	{
		global $pagenow;

		if ($pagenow == 'comment.php' || $pagenow == 'edit-comments.php') {
			wp_die(__('Comments are closed.', 'disable-comments'), '', array('response' => 403));
		}

		remove_menu_page('edit-comments.php');

		if (!$this->discussion_settings_allowed()) {
			if ($pagenow == 'options-discussion.php') {
				wp_die(__('Comments are closed.', 'disable-comments'), '', array('response' => 403));
			}

			remove_submenu_page('options-general.php', 'options-discussion.php');
		}
	}

	public function filter_dashboard()
	{
		remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
	}

	private function discussion_settings_allowed()
	{
		if (defined('DISABLE_COMMENTS_ALLOW_DISCUSSION_SETTINGS') && DISABLE_COMMENTS_ALLOW_DISCUSSION_SETTINGS == true) {
			return true;
		}
	}

}
