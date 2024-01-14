<form class="search-form" method="GET" action="<?php echo home_url(); ?>">
	<input class="search-field" type="text" placeholder="<?php hsl_e( "Søk" ); ?>" name="s" value="<?php echo get_search_query(); ?>">
	<button class="search-button" type="submit" role="button" aria-label="<?php hsl_e( "Søk" ); ?>"></button>
</form>
