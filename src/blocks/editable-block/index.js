import { registerBlockType, RichText, source } from '@wordpress/blocks'
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
            selector: 'a', // tag a
            source: 'children',  // children of a, to bind the link text
        },
        site_url: {
            selector: 'a',  // tag a
            source: 'attribute', // attribute of the tag
            attribute: 'href', // attribute href, to bind the href of the link
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
            <div id="block-editable-box"> {/* You have to have a wrapper tag when your markup has more than 1 tag */}
                <h1>{text}</h1>
                <label>Name:</label>
                <RichText
                    className={className} // Automatic class: gutenberg-blocks-sample-block-editable
                    onChange={onChangeContentName} // onChange event callback
                    value={social_site} // Binding
                    placeholder="Name of the Social Site"
                />
                <label>URL:</label>
                <RichText
                    format="string"             // Default is 'element'. Wouldn't work for a tag attribute
                    className={className} // Automatic class: gutenberg-blocks-sample-block-editable
                    onChange={onChangeContentURL} // onChange event callback
                    value={site_url} // Binding
                    placeholder="URL of the site"
                />
            </div>
        )
    },
    save: (props) => {
        const { attributes: { text, social_site, site_url } } = props;
        return (
            <div>
                <h1>{text}</h1>
                <a href={site_url}>{social_site}</a>
            </div>
        );
    }
});