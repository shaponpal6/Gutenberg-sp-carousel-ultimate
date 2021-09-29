import { registerBlockType } from '@wordpress/blocks'
const { RichText } = wp.editor;
import { __ } from '@wordpress/i18n'

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
    },
    edit: (props) => {
        console.log('props :>> ', props);
        const { className, attributes: { text, social_site, site_url } } = props;

        function onChangeContentURL(content) {
            props.setAttributes({ site_url: content })
        }

        function onChangeContentName(content) {
            props.setAttributes({ social_site: content })
        }

        return (
            <div id="block-editable-box">
                <h1>{text}</h1>
                <label>Name:</label>
                <RichText
                    tagName='h2'
                    className={className}
                    onChange={onChangeContentName}
                    allowedFormats={['core/bold', 'core/italic']}
                    value={social_site}
                    placeholder={__("Name of the Social Site")}
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
        )
    },
    save: (props) => {
        const { attributes: { text, social_site, site_url } } = props;
        return (
            <div id="block-editable-box">
                <h1>{text}</h1>
                <label>Name:</label>
                <RichText.Content
                    tagName='h2'
                    value={social_site}
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