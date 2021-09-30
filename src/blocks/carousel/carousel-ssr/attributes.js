import { __ } from '@wordpress/i18n';
export default function Attributes() {
    return {
        title: {
            type: 'string',
            default: __('Latest Post')
        },
        count: {
            type: 'integer',
            default: 4
        },
    };
}