<div class="field-group textarea" data-field="<?php echo $args["field_id"]; ?>">
	<textarea
		name="<?php echo $args["name"]; ?>"
		id="<?php echo $args["field_id"]; ?>"
		rows="8"
		placeholder="<?php the_sub_field( "placeholder" ); ?>"
		<?php if ( get_sub_field( "required" ) ) echo "required"; ?>
	></textarea>
	<label for="<?php echo $args["field_id"]; ?>"><?php echo $args["label"]; ?></label>
</div>
