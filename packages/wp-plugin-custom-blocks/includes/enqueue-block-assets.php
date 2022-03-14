<?php

add_action( 'enqueue_block_assets', function () {
  wp_enqueue_style(
    'custom-block-styles',
    plugins_url( '../build/components.css', __FILE__ )
  );

  wp_enqueue_script(
    'render-components-script',
    plugins_url( '../build/render-components.js', __FILE__ ),
    array( 'wp-element' )
  );
} );
