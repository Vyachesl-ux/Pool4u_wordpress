<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://www.headspin.no
 * @since      1.0.0
 *
 * @package    HS_Config
 * @subpackage HS_Config/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    HS_Config
 * @subpackage HS_Config/includes
 * @author     Marcos Oliveira <marcos@headspin.no>
 */

if ( ! class_exists( 'HS_Config' ) ) :
	class HS_Config {

		/**
		 * The loader that's responsible for maintaining and registering all hooks that power
		 * the plugin.
		 *
		 * @since    1.0.0
		 * @access   protected
		 * @var      HS_Config_Loader    $loader    Maintains and registers all hooks for the plugin.
		 */
		protected $loader;

		/**
		 * The unique identifier of this plugin.
		 *
		 * @since    1.0.0
		 * @access   protected
		 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
		 */
		protected $plugin_name;

		/**
		 * The current version of the plugin.
		 *
		 * @since    1.0.0
		 * @access   protected
		 * @var      string    $version    The current version of the plugin.
		 */
		protected $version;

		/** @var array The plugin settings array. */
		private $settings = array();

		/**
		 * Define the core functionality of the plugin.
		 *
		 * Set the plugin name and the plugin version that can be used throughout the plugin.
		 * Load the dependencies, define the locale, and set the hooks for the admin area and
		 * the public-facing side of the site.
		 *
		 * @since    1.0.0
		 */
		public function __construct() {
			if ( defined( 'HS_CONFIG_VERSION' ) ) {
				$this->version = HS_CONFIG_VERSION;
			} else {
				$this->version = '1.0.0';
			}
			$this->plugin_name = 'hs-config';

			// Define settings.
			$this->settings = array(
				'url' => get_theme_file_uri( __FILE__ ),
			);

			$this->load_dependencies();
			$this->set_locale();

			$this->initialize_requirements();

			$this->define_admin_hooks();
			$this->define_public_hooks();

		}

		/**
		 * Load the required dependencies for this plugin.
		 *
		 * Include the following files that make up the plugin:
		 *
		 * - HS_Config_Loader. Orchestrates the hooks of the plugin.
		 * - HS_Config_i18n. Defines internationalization functionality.
		 * - HS_Config_General. Defines all hooks general functionality.
		 * - HS_Config_Admin. Defines all hooks for the admin area.
		 * - HS_Config_Public. Defines all hooks for the public side of the site.
		 *
		 * Create an instance of the loader which will be used to register the hooks
		 * with WordPress.
		 *
		 * @since    1.0.0
		 * @access   private
		 */
		private function load_dependencies() {

			/**
			 * The class responsible for orchestrating the actions and filters of the
			 * core plugin.
			 */
			require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-hs-config-loader.php';

			/**
			 * The class responsible for defining internationalization functionality
			 * of the plugin.
			 */
			require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-hs-config-i18n.php';

			/**
			 * The class responsible for defining all actions that occur in the
			 * admin area.
			 */
			require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-hs-config-admin.php';

			/**
			 * The class responsible for defining all actions that occur in the public-facing
			 * side of the site.
			 */
			require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-hs-config-public.php';

			/**
			 * The class responsible for defining all generic actions
			 * side of the site.
			 */
			require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-hs-config-general.php';

			/**
			 * The class responsible for defining all actions related
			 * to comments.
			 */
			require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-hs-config-comments.php';


			$this->loader = new HS_Config_Loader();

		}

		/**
		 * Define the locale for this plugin for internationalization.
		 *
		 * Uses the HS_Config_i18n class in order to set the domain and to register the hook
		 * with WordPress.
		 *
		 * @since    1.0.0
		 * @access   private
		 */
		private function set_locale() {

			$plugin_i18n = new HS_Config_i18n();

			$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

		}

		/**
		 * Register all of the hooks related to the admin area functionality
		 * of the plugin.
		 *
		 * @since    1.0.0
		 * @access   private
		 */
		private function initialize_requirements() {

			$plugin_general = new HS_Config_General( $this->get_plugin_name(), $this->get_version(), $this->get_settings() );
			$plugin_comments = new HS_Config_Comments( $this->get_plugin_name(), $this->get_version(), $this->get_settings() );

			$this->loader->add_action( 'init', $plugin_general, 'hs_setup_requirements' );
			$this->loader->add_action( 'init', $plugin_general, 'hs_lock_wpadmin', 1 );
			$this->loader->add_action( 'init', $plugin_comments, 'hs_setup_comments' );

			$this->loader->add_action( 'admin_init', $plugin_general, 'hs_manage_admin_menu' );

			$this->loader->add_filter( 'site_url', $plugin_general, 'hs_wpadmin_filter', 10, 3 );
			$this->loader->add_filter( 'editable_roles', $plugin_general, 'hs_exclude_admin_role');
			$this->loader->add_filter( 'pre_user_query', $plugin_general, 'hs_exclude_users');
			$this->loader->add_filter( 'views_users', $plugin_general, 'hs_remove_admin_tab');
		}

		/**
		 * Register all of the hooks related to the admin area functionality
		 * of the plugin.
		 *
		 * @since    1.0.0
		 * @access   private
		 */
		private function define_admin_hooks() {

			$plugin_admin = new HS_Config_Admin( $this->get_plugin_name(), $this->get_version(), $this->get_settings() );

			$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
			$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

			$this->loader->add_action( 'admin_menu', $plugin_admin, 'add_admin_page');
			$this->loader->add_action( 'admin_init', $plugin_admin, 'hs_config_register_settings' );

			$this->loader->add_action( 'updated_option', $plugin_admin, 'hs_update_settings', 10, 3);
		}

		/**
		 * Register all of the hooks related to the public-facing functionality
		 * of the plugin.
		 *
		 * @since    1.0.0
		 * @access   private
		 */
		private function define_public_hooks() {

			$plugin_public = new HS_Config_Public( $this->get_plugin_name(), $this->get_version(), $this->get_settings() );

			$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
			$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

			$this->loader->add_action( 'wp_head', $plugin_public, 'hs_analytics_head', 1 );
			$this->loader->add_action( 'wp_footer', $plugin_public, 'hs_analytics_footer', 75  );
			$this->loader->add_action( 'wp_body_open', $plugin_public, 'hs_analytics_after_body', 1 );
			$this->loader->add_action( 'phpmailer_init', $plugin_public, 'hs_smtp_settings' );
		}

		/**
		 * Run the loader to execute all of the hooks with WordPress.
		 *
		 * @since    1.0.0
		 */
		public function run() {
			$this->loader->run();
		}

		/**
		 * The name of the plugin used to uniquely identify it within the context of
		 * WordPress and to define internationalization functionality.
		 *
		 * @since     1.0.0
		 * @return    string    The name of the plugin.
		 */
		public function get_plugin_name() {
			return $this->plugin_name;
		}

		/**
		 * The reference to the class that orchestrates the hooks with the plugin.
		 *
		 * @since     1.0.0
		 * @return    HS_Config_Loader    Orchestrates the hooks of the plugin.
		 */
		public function get_loader() {
			return $this->loader;
		}

		/**
		 * Retrieve the version number of the plugin.
		 *
		 * @since     1.0.0
		 * @return    string    The version number of the plugin.
		 */
		public function get_version() {
			return $this->version;
		}

		/**
		 * Retrieve the settings of the plugin.
		 *
		 * @since     1.0.0
		 * @return    string    The settings of the plugin.
		 */
		public function get_settings() {
			return $this->settings;
		}

	}
endif;
