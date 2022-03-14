<?php

add_action( 'init', function() {
  $block_name = 'dynamic';
  $plugin_dir_path = plugin_dir_path( __FILE__ );
  $asset_file = include( "$plugin_dir_path../build/$block_name/index.asset.php" );

  wp_register_script(
    'dynamic',
    plugins_url( "../build/$block_name/index.js", __FILE__ ),
    $asset_file['dependencies'],
    $asset_file['version']
  );

  register_block_type( "$plugin_dir_path../build/$block_name", array(
    'render_callback' => function ( $block_attributes, $content ) {
      return "<div data-component=\"Cool\">$content</div>";
    }
  ) );
} );
