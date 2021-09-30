import { __ } from '@wordpress/i18n';
export default function Attributes() {
    return {
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
        alignment: {
            type: 'string',
            default: 'none',
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
    };
}