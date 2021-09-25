import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

registerBlockType('spcu-block/spcu-post-carousel', {
    title: __('SP Simple Block'),
    icon: 'screenoptions',
    category: 'common',
    keywords: ['Block', 'Carousel', 'Gutenberg'],
    attributes: {
        text: {
            type: 'string',
            default: __('This is simple block')
        }
    },
    edit: (props) => {
        console.log('props :>> ', props);
        const { attributes: { text } } = props;
        return (
            <h1>{text}</h1>
        )
    },
    save: (props) => {
        const { attributes: { text } } = props
        return (
            <h1>{text}</h1>
        )
    }
});