<?php 
$employees = new WP_Query([
    "post_type" => "employees",
    "posts_per_page" => 10,
    ]
);
 $id = "employees-" . $block["id"];
 $class = array_key_exists( "className", $block ) ? $block["className"] : "";
 $class .= " alignfull";
 
 ?>
 
 <div class="wp-block-headspin-employees<?php echo $class ?>" id="<?php echo $id; ?>">

    <section class="wp-block-headspin-section center">
        <h6><?php echo hsl_e("Get in touch")?></h6>
        <div class="employee-container alignwide">
            <?php 
            foreach($employees->posts as $post):?>
                <div class="employee-container__wrapper">
                
                <?php if($image_data = get_field('image', $post->ID)) : ?>
                    <img src="<?php echo $image_data["url"] ?>" alt="">
                <?php endif ?>
                    <h3><?php echo $post->post_title ?></h3>
                    <p><?php echo get_field("position", $post->ID) ?></p>
                    <div class="wp-block-buttons">
                        <a class="wp-block-button__link" href="mailto:<?php echo get_field("e-mail") ?>"><?php echo hsl_e("Send en email") ?></a>
                    </div>
                </div>
            <?php endforeach ?>
        </div>
    </section>
 </div>