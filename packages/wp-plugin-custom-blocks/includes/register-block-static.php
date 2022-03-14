<?php

add_action( 'init', function () {
  $block_name = 'static';
  $plugin_dir_path = plugin_dir_path( __FILE__ );

  register_block_type( "$plugin_dir_path../build/$block_name" );
} );
