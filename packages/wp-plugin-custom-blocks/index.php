<?php
/**
 * Plugin Name:       Custom Blocks
 * Description:       Example blocks scaffolded with Create Block tool.
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

include_once 'includes/register-block-dynamic.php';
include_once 'includes/register-block-static.php';

include_once 'includes/enqueue-block-assets.php';

function allowed_block_types( $allowed_block_types, $block_editor_context ) {
  return array(
    'custom/dynamic',
    'custom/static',
  );
}
add_filter( 'allowed_block_types_all', 'allowed_block_types', 10, 2 );
