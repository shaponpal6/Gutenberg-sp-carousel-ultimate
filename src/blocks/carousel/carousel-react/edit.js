import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import Carousel from '../../../components/Carousel'
import Votes from '../../../components/Votes'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import "react-multi-carousel/lib/styles.css";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
    return (
        <p {...useBlockProps()}>
            {__('Sp Blocks – hello from the editor!222', 'sp-blocks')}
            <Votes />
            <Carousel />
        </p>
    );
}
