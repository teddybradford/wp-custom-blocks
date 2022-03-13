import { registerBlockType } from '@wordpress/blocks';
import { Edit } from './edit';
import { Save } from './save';
import './style.scss';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('custom-blocks/cute', {
  edit: Edit,
  save: Save,
});
