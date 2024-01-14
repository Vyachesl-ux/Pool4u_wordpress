<?php
global $submenu, $menu;

$hs_menu_lock_options = JSON_decode(get_option( 'hs_options' )['menu_lock']);
$hidden = []; // default to empty

if($hs_menu_lock_options)
	$hidden = array_merge($hs_menu_lock_options->menu, $hs_menu_lock_options->submenu);

$removables = [
	'menu-dashboard', // non removable
	'toplevel_page_edit?post_type=acf-field-group', // removed by default
	'toplevel_page_hs-config' //removed by default
];

function checkLock($name, $array, $locked = 'locked'){
	$found = array_filter(
		$array,
		function ($e) use (&$name) {
			return $e->name == $name;
		}
	);
	return $found ? $locked : '';
}

function clearString( $string ){
	$string = preg_replace('~<span class="(.*?)</span>~Usi', '', $string);
	$string = strip_tags($string);
	return $string;
}

function addCheckbox( $entry = null, $hidden = null, $parent = null, $key = null){

	$id = $parent ? $parent . '_' . $key : end( $entry );
	$val = $entry[2];
	// check if allready hidden
	$checked = ''; //default
	if( $hidden )
		$checked = checkLock( $id, $hidden, 'checked');
	return "<label for=\"{$id}\" class=\"hsswitch\">
		<input type=\"checkbox\" name=\"{$id}\" id=\"{$id}\" value=\"{$val}\" data-parent=\"{$parent}\" data-key=\"{$key}\" {$checked}><span class=\"slider round\"></span></label>";
}

function renderMenu( $menu = null, $hidden = null, $level = null){

	$sub = $level ? 'sub' : '';
	$html =  "<ul class=\"{$sub}menu_entries\">";
	foreach($menu as $key => $entry){
		// setup selector id string
		$entry[] = strtolower( str_replace( ' ', '_', clearString( $entry[0] ) ) );

		$id = $level ? $level . '_' . $key : end( $entry );
		// check if allready hidden
		$locked = '';
		if( $hidden )
			$locked = checkLock( $id, $hidden);
		// render on conditions
		$submenu = is_array( $entry[3] ) ? renderMenu( $entry[3], $hidden, $entry[2]) : NULL;
		$html .='<li class="menuentry ' . $sub .'menu '. $locked .'"><span>' .
			addCheckBox( $entry, $hidden, $level, $key )
		. '<span>' .
			clearString($entry[0])
		. '</span></span>' . $submenu .'</li>'; // TOP LEVEL MENUS
	}
	$html .= '</ul>';

	return $html;
}

?>
<div id="tab4" class="form-table tab-pane<?php echo " ".$add2first; ?>">
	<h2>Admin Menu</h2>
	<p class="description">
		This tab will manage the admin menu.<br>
		The selected items will be locked and removed for all users and only be available to users with the <kbd>HS Administrator</kbd> role.
	</p>
	<?php
	do_settings_fields( 'hs-menu-settings-admin', 'hs_settings_section_menu' );
	if ( current_user_can('manage_hs') ) { // ONLY DO THIS FOR ADMIN

		$adminmenu = [];

		ini_set('xdebug.var_display_max_depth', 10);
		ini_set('xdebug.var_display_max_children', 256);
		ini_set('xdebug.var_display_max_data', 1024);

		foreach($menu as $entry){
			if($entry[4] !== 'wp-menu-separator')
				if( !in_array( $entry[5], $removables) ){
					$entry = array_slice($entry, 0, 3);
					$entry[3] = $submenu[$entry[2]];
					$adminmenu[] = $entry;
				}
		}

		echo renderMenu($adminmenu, $hidden);
    }
	?>
</div>
<script type="text/javascript">
	const menuList = document.querySelectorAll("li.menuentry");
	let wp_setting = document.getElementById("menu_lock");
	let settings;

	const setItems = function(){
		settings = { menu: [], submenu: [] };
		menuList.forEach((item) => {
			selector = item.querySelector("input");
			if(item.matches(".menu.locked"))
				settings.menu.push({ 'name': selector.id, 'value': selector.value});

			if(item.matches(".submenu.locked"))
				settings.submenu.push({ 'name': selector.id, 'value': selector.value, 'parent': selector.dataset.parent, 'key': selector.dataset.key});
		});
		return JSON.stringify(settings);
	}

    menuList.forEach((item) => {
		let selector = item.querySelector("input");
		selector.addEventListener('change', function() {
			let parent = this.closest('li');
			if (this.checked) {
				parent.classList.add('locked');
			} else {
				parent.classList.remove('locked');
			}
			wp_setting.value = setItems();
		})
	})
</script>
