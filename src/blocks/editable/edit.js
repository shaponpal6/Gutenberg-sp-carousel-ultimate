import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
const {
    RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload,
    InnerBlocks,
    BlockControls,
    AlignmentToolbar
} = wp.editor;
const { IconButton, RangeControl, PanelBody } = wp.components;
const ALLOWED_BLOCKS = ['core/button'];
const MY_TEMPLATE = [
    ["core/image", {}],
    ["core/heading", { placeholder: "Title" }],
    ["core/paragraph", { placeholder: "description" }],
    // Custom block for Social Media!
    ["core/button", { placeholder: "Call to Action Button" }]
]
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
    // console.log('props :>> ', props);
    const { className, attributes: { text, social_site, site_url, alignment, site_color, background_image, overlay_color, overlay_opacity } } = props;

    function onChangeContentURL(content) {
        props.setAttributes({ site_url: content })
    }

    function onChangeContentName(content) {
        props.setAttributes({ social_site: content })
    }

    return (
        [
            <InspectorControls style={{ background: '#ccc' }}>
                <PanelBody title={'SP Block Color Settings'}>
                    <p><strong>Choose a block color:</strong></p>
                    <ColorPalette value={site_color}
                        onChange={(color) => props.setAttributes({ site_color: color })} />
                </PanelBody>
                <PanelBody title={'SP Block Media Upload'}>
                    <p><strong>Choose background image:</strong></p>
                    <MediaUpload
                        onSelect={(image) => props.setAttributes({ background_image: image.sizes.full.url })}
                        key="keyMedia"
                        type="image"
                        value={background_image}
                        render={({ open }) => (
                            <IconButton
                                className="editor-media-placeholder__button is-button is-default is-large"
                                icon="upload"
                                onClick={open}>
                                Choose Background Image
                            </IconButton>
                        )} />
                </PanelBody>
                <PanelBody title={'SP Block Background Settings'}>
                    <p><strong>Overlay Color:</strong></p>
                    <ColorPalette value={overlay_color}
                        onChange={(color) => props.setAttributes({ overlay_color: color })} />
                    <p><strong>Overlay Opacity:</strong></p>
                    <RangeControl
                        label={'Overlay Opacity'}
                        value={overlay_opacity}
                        onChange={(opacity) => props.setAttributes({ overlay_opacity: opacity })}
                        min={0}
                        max={1}
                        step={0.03} />
                </PanelBody>
            </InspectorControls>,
            <div {...useBlockProps()} className="block-editable-box" style={{
                backgroundImage: `url(${background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="block-editable-overlay" style={{
                    background: overlay_color, opacity: overlay_opacity, position: 'absolute', inset: '0px', zIndex: '-1'
                }}></div>
                {
                    <BlockControls>
                        <AlignmentToolbar
                            value={alignment}
                            onChange={(alignment) => props.setAttributes({ alignment: !!alignment ? alignment : 'none' })}
                        />
                    </BlockControls>
                }

                <h1>{text}</h1>
                <label>Name:</label>
                <RichText
                    tagName='h2'
                    className={className}
                    onChange={onChangeContentName}
                    allowedFormats={['core/bold', 'core/italic']}
                    value={social_site}
                    placeholder={__("Name of the Social Site")}
                    style={{ color: site_color, textAlign: alignment }}
                />
                <label>URL:</label>
                <RichText
                    tagName='p'
                    className={className}
                    onChange={onChangeContentURL}
                    value={site_url}
                    placeholder={__("Site Url")}
                />
                <InnerBlocks template={MY_TEMPLATE} templateLock="insert" />
                <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
            </div>
        ]
    )
}
