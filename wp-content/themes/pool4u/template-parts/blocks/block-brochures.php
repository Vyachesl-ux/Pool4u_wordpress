<?php
/**
 * Block Name: Reports and presentations
 *
 * Template for rendering the reports and presentations Gutenberg block
 */

$id 		= "brochures-" . $block["id"];
$class 		= array_key_exists( "className", $block ) ? $block["className"] : "";
$class .= " alignwide";
$brochures = new WP_Query( [
    "post_type" => "brochures",
    "posts_per_page" => -1,
 ] );
 if ( $brochures->found_posts == 0 ) return;
 ?>
 <div id="<?php echo $id; ?>" class="brochures-block <?php echo $class; ?>">
    <?php foreach($brochures->posts as $post):
        $attachment_id = get_field("brochure_url", $post->ID);
        $url = wp_get_attachment_url($attachment_id);
        $title = $post->post_title;
        $desc = get_field("brochure_description", $post->ID);
        $attachment_meta = filesize( get_attached_file( $attachment_id ) );
        $metadata = wp_get_attachment_metadata($attachment_id);
        $pdf_img = wp_get_attachment_image($attachment_id, "thumbnail");
        if(!function_exists("formatSizeUnits")){
            function formatSizeUnits($bytes) {
                $units = array('byte', 'KB', 'MB', 'GB', 'TB');
                $bytes = max($bytes, 0);
                $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
                $pow = min($pow, count($units) - 1);
                $bytes /= pow(1024, $pow);
                return round($bytes, 2) . ' ' . $units[$pow];
            }
        }

        
        ?>
        <div class="brochures-block__wrapper">
            <?php if($pdf_img) echo $pdf_img ?>
            <h3 class="brochures-block__wrapper-title"><?php if($title) echo $title ?></h3>
            <div class="brochures-block__wrapper-desc"><?php if($desc) echo $desc ?></div>
            <div class="wp-block-buttons">
                <a href="<?php if($url) echo $url ?>" download class="wp-block-button__link"><?php hsl_e("download pdf"); echo "(".  formatSizeUnits($attachment_meta) . ")"?></a>
            </div>
        </div>
    <?php endforeach ?>
 </div>