import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
const {
    RichText,
    InnerBlocks
} = wp.editor;

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
    // console.log('props :>> ', props);
    const { attributes: { text, social_site, site_url, alignment, site_color, background_image, overlay_color, overlay_opacity } } = props;
    return (
        <div {...useBlockProps.save()} className="block-editable-box" style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="block-editable-overlay" style={{
                background: overlay_color, opacity: overlay_opacity, position: 'absolute', inset: '0px'
            }}></div>
            <h1>{text}</h1>
            <label>Name:</label>
            <RichText.Content
                tagName='h2'
                value={social_site}
                style={{ color: site_color, textAlign: alignment }}
            />
            <label>URL:</label>
            <RichText.Content
                tagName='p'
                value={site_url}
            />
            <InnerBlocks.Content />
        </div>
    );
}
