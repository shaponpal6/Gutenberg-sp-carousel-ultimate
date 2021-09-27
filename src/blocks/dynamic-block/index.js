import { registerBlockType } from '@wordpress/blocks'
import { useSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'

registerBlockType('spcu-block/carousel', {
    apiVersion: 2,
    title: __('SP Latest Post'),
    icon: 'megaphone',
    category: 'widgets',
    attributes: {
        // title: {
        //     type: 'string',
        //     default: __('Latest Post')
        // },
        // count: {
        //     type: 'integer',
        //     default: 4
        // },
    },

    edit: function (props) {
        const blockProps = useBlockProps();
        return (
            <div {...blockProps}>
                <ServerSideRender
                    block="spcu-block/carousel"
                    attributes={props.attributes}
                />
            </div>
        );
    },
    save: function () {
        return (
            <h1>Hellllll0</h1>
        )
    }
});