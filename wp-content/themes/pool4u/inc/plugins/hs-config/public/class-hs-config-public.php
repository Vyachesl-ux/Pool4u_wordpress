<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.headspin.no
 * @since      1.0.0
 *
 * @package    HS_Config
 * @subpackage HS_Config/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    HS_Config
 * @subpackage HS_Config/public
 * @author     Marcos Oliveira <marcos@headspin.no>
 */
class HS_Config_Public {

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
	 * @var      array    $hs_options    The list of options.
	 */
	private $hs_options;

	/** @var array The plugin base url. */
	private $url;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		$this->hs_options = get_option( 'hs_options' );

		$this->url = plugin_dir_url( __FILE__ );
		if (defined('MY_HS_CONFIG_URL'))
			$this->url = MY_HS_CONFIG_URL . '/public';

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
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

		wp_enqueue_style( $this->plugin_name, $this->url . '/css/hs-config-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
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

		wp_enqueue_script( $this->plugin_name, $this->url . '/js/hs-config-public.js', array( 'jquery' ), $this->version, false );

	}


	/**
	* Dynamically add Google Analytics or other tracking/analytics tools to the head.
	* Tracking codes can be added in theme settings
	*/
	public function hs_analytics_head() {
		if ( $this->hs_options ):
			// Google analytic
			if ( $ga_id = $this->hs_options["ga_id"] ) echo <<<HTML
				<!-- Global site tag (gtag.js) - Google Analytics -->
				<script async src="https://www.googletagmanager.com/gtag/js?id={$ga_id}"></script>
				<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '{$ga_id}', {'anonymize_ip': true});
				</script>
			HTML;

			// Google Tag Manage
			if ( $gtm_id = $this->hs_options["gtm_id"] ) echo <<<HTML
				<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','{$gtm_id}');</script>
			HTML;

			// Facebook pixe
			if ( $fbp_id = $this->hs_options["facebook_pixel_id"] ) echo <<<HTML
				<script>
				!function(f,b,e,v,n,t,s)
				{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				n.callMethod.apply(n,arguments):n.queue.push(arguments)};
				if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
				n.queue=[];t=b.createElement(e);t.async=!0;
				t.src=v;s=b.getElementsByTagName(e)[0];
				s.parentNode.insertBefore(t,s)}(window, document,'script',
				'https://connect.facebook.net/en_US/fbevents.js');
				fbq('init', '{$fbp_id}');
				fbq('track', 'PageView');
				</script>
				<noscript>
				<img height="1" width="1" style="display:none"
					src="https://www.facebook.com/tr?id={$fbp_id}&ev=PageView&noscript=1"/>
				</noscript>
			HTML;

			// Bing webmaster tools
			if ( $bwt_id = $this->hs_options["bing_webmaster_tools_id"] ) echo <<<HTML
					<script type="text/javascript"> (function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "{$bwt_id}"); </script>
			HTML;
		endif;
   }

    /**
	 * Dynamically add Google Analytics or other tracking/analytics tools to the footer.
	 * Tracking codes can be added in theme settings
	 */
	public function hs_analytics_footer() {
		// LinkedIn Insight Ta
		if ( $li_tag_id = $this->hs_options["li_tag_id"] ) echo <<<HTML
			<script type="text/javascript"> _linkedin_partner_id = "{$li_tag_id}"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); </script><script type="text/javascript"> (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore	(b, s);})(); </script> <noscript> <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid={$li_tag_id}&fmt=gif" /> </noscript>
		HTML;
	}

	/**
	 * Dynamically add Google Analytics or other tracking/analytics tools to the footer.
	 * Tracking codes can be added in theme settings
	 */
	public function hs_analytics_after_body() {
		// Google Tag Manage
		if ( $gtm_id = $this->hs_options["gtm_id"] ) echo <<<HTML
			<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={$gtm_id}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		HTML;
	}

	/**
	 * Send mail through SMTP if enabled in settings
	 *
	 * @param  PHPMailer  $phpmailer  The PHPMailer instance
	 */
	public function hs_smtp_settings( $phpmailer ) {

		if ( !$this->hs_options ) return;
		if ( !isset( $this->hs_options["use_smtp"] ) ) return;

		$phpmailer->isSMTP();
		$phpmailer->Host = $this->hs_options["host"];
		$phpmailer->Port = $this->hs_options["port"];
		$phpmailer->SMTPSecure = $this->hs_options["encryption"];
		$phpmailer->SMTPAuth = $this->hs_options["authentication"];

		if ( $this->hs_options["from"] ) $phpmailer->From = $this->hs_options["from"];
		if ( $this->hs_options["from_name"] ) $phpmailer->FromName = $this->hs_options["from_name"];

		if ( $this->hs_options["authentication"] ) {
			$phpmailer->Username = $this->hs_options["username"];
			$phpmailer->Password = $this->hs_options["password"];
		}
	}
}