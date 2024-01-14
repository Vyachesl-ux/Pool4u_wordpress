<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://www.headspin.no
 * @since      1.0.0
 *
 * @package    Hs_Config
 * @subpackage Hs_Config/admin/partials
 */
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<!-- Our admin page content should all be inside .wrap -->

<?php
	$config_areas = [
		[
			"id" => 1,
			"name" => "General settings",
			"secure" => true
		],
		[
			"id" => 2,
			"name" => "Analytics tools",
			"secure" => true
		],
		[
			"id" => 3,
			"name" => "Email setup",
			"secure" => true
		],
		[
			"id" => 4,
			"name" => "Admin lock",
			"secure" => true
		]
	]
?>

<div class="wrap hs-config">
	<!-- Here are our tabs -->
	<h2>Pool4u Site Settings</h2>
	<div class="card">
		<h2>Важно!</h2>
		<p>Эти настройки только для административных целей<br/>
		Большинство этих настроек касаются только back-end функций.</p>
	</div>
	<p>&nbsp;</p>
	<?php settings_errors(); ?>
	<nav class="nav-tab-wrapper">
		<?php
			$add2first = "nav-tab-active";
			foreach($config_areas as $tab):
				if($tab['secure'])
					echo "<a href=\"#tab{$tab['id']}\" class=\"nav-tab {$add2first}\">{$tab['name']}</a>";

				$add2first = "";
			endforeach;
		?>
	</nav>
	<form method="post" action="options.php" id="hsoptions">
		<div class="tab-content">
		<?php
		settings_fields( 'hs_config' );
		$add2first = "nav-tab-active";
		foreach($config_areas as $tab):
			if($tab['secure'])
				include("hs-config-tab{$tab['id']}.php");
			$add2first = "";
		endforeach;
		?>
		</div>

		<?php submit_button('Save Settings'); ?>
	</form>
</div>
