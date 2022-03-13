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

function register_blocks() {
  $plugin_dir_path = plugin_dir_path( __FILE__ );

  register_block_type( $plugin_dir_path . "build/cool" );
  register_block_type( $plugin_dir_path . "build/cute" );
}
add_action( 'init', 'register_blocks' );

function allowed_block_types( $allowed_block_types, $block_editor_context ) {
  return array(
    'custom-blocks/cool',
    'custom-blocks/cute',
  );
}
add_filter( 'allowed_block_types_all', 'allowed_block_types', 10, 2 );

function enqueue_styles() {
  wp_enqueue_style( 'custom-block-styles', plugins_url( 'build/index.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'enqueue_styles' );
