import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Cute } from 'components';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export const Save = () => {
  return (
    <div {...useBlockProps.save()}>
      <Cute>Hello, World!</Cute>
      <p>{__('Test – hello from the saved content!', 'static')}</p>
    </div>
  );
};
