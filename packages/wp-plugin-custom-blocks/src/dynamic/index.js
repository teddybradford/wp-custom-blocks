import { registerBlockType } from '@wordpress/blocks';
import { Edit } from './edit';
import './style.scss';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('custom/dynamic', {
  edit: Edit,
});
