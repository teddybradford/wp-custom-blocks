import { useBlockProps } from '@wordpress/block-editor';
import { Cool } from 'components';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export const Edit = () => {
  return (
    <div {...useBlockProps()}>
      <Cool />
    </div>
  );
};
