<div class="field-group input" data-field="<?php echo $args["field_id"]; ?>">
	<input
		type="<?php echo get_row_layout(); ?>"
		name="<?php echo $args["name"]; ?>"
		id="<?php echo $args["field_id"]; ?>"
		placeholder="<?php the_sub_field( "placeholder" ); ?>"
		<?php if ( get_sub_field( "required" ) ) echo "required"; ?>
	>
	<label for="<?php echo $args["field_id"]; ?>"><?php echo $args["label"]; ?></label>
</div>