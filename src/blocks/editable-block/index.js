import { registerBlockType } from '@wordpress/blocks'
const {
    RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload
} = wp.editor;
import { __ } from '@wordpress/i18n'
const { IconButton, RangeControl, PanelBody } = wp.components;

registerBlockType('spcu-gutenberg/block-editable', {
    title: __('SP Editable Block'),
    icon: 'screenoptions',
    category: 'common',
    keywords: ['Block', 'editable', 'Gutenberg'],
    attributes: {
        text: {
            type: 'string',
            default: __('Add Social Link')
        },
        social_site: {
            type: "string",
            selector: 'h2',
            source: 'html',
        },
        site_url: {
            type: "string",
            selector: 'p',
            source: 'html',
        },
        site_color: {
            type: "string",
            default: '#333',
        },
        background_image: {
            type: 'string',
            default: null
        },
        overlay_color: {
            type: 'string',
            default: 'black'
        },
        overlay_opacity: {
            type: 'number',
            default: 0.4
        }
    },
    edit: (props) => {
        console.log('props :>> ', props);
        const { className, attributes: { text, social_site, site_url, site_color, background_image, overlay_color, overlay_opacity } } = props;

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
                <div className="block-editable-box" style={{
                    backgroundImage: `url(${background_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="block-editable-overlay" style={{ background: overlay_color, opacity: overlay_opacity, position: 'absolute', inset: '0px' }}></div>

                    <h1>{text}</h1>
                    <label>Name:</label>
                    <RichText
                        tagName='h2'
                        className={className}
                        onChange={onChangeContentName}
                        allowedFormats={['core/bold', 'core/italic']}
                        value={social_site}
                        placeholder={__("Name of the Social Site")}
                        style={{ color: site_color }}
                    />
                    <label>URL:</label>
                    <RichText
                        tagName='p'
                        className={className}
                        onChange={onChangeContentURL}
                        value={site_url}
                        placeholder={__("Site Url")}
                    />
                </div>
            ]
        )
    },
    save: (props) => {
        console.log('props :>> ', props);
        const { attributes: { text, social_site, site_url, site_color, background_image, overlay_color, overlay_opacity } } = props;
        return (
            <div className="block-editable-box" style={{
                backgroundImage: `url(${background_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="block-editable-overlay" style={{ background: overlay_color, opacity: overlay_opacity }}></div>
                <h1>{text}</h1>
                <label>Name:</label>
                <RichText.Content
                    tagName='h2'
                    value={social_site}
                    style={{ color: site_color }}
                />
                <label>URL:</label>
                <RichText.Content
                    tagName='p'
                    value={site_url}
                />
            </div>
        );
    }
});