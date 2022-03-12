<?php
/**
 * Plugin Name:       Custom Blocks
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-blocks
 *
 * @package           custom-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function init_custom_blocks() {
	$build_dir = __DIR__ . '/build';
	$block_dirs = array_diff( scandir( $build_dir ), array( '.', '..' ) );

	foreach( $block_dirs as $block_dir ) {
		register_block_type( "$build_dir/$block_dir" );
	}
}
add_action( 'init', 'init_custom_blocks' );

function allowed_block_types( $allowed_block_types, $block_editor_context ) {
	return array(
		'namespace/test',
		'namespace/test2',
	);
}
add_filter( 'allowed_block_types_all' , 'allowed_block_types', 10, 2 );
