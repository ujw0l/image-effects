<?php
/**
 * Plugin Name:       Image Effects
 * Description:       Block to apply css filter effects to the image and embed them in post.
 * Requires at least: 5.7
 * Requires PHP:      7.4.9
 * Version:           1.2.0
 * Author:            Ujwol Bastakoti
 * Author URI:        https://ujw0l.github.io/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       image-effects
 *
 * @package           create-block
 */


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_image_effects_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_image_effects_block_init' );
