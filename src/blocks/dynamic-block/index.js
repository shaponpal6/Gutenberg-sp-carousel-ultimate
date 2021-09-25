import { registerBlockType } from '@wordpress/blocks'
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'

registerBlockType('spcu-block/spcu-dynamic-block-wp-data', {
    apiVersion: 2,
    title: __('SP Latest Post'),
    icon: 'megaphone',
    category: 'widgets',
    attributes: {
        title: {
            type: 'string',
            default: __('Latest Post')
        },
        count: {
            type: 'integer',
            default: 4
        },
    },

    edit: (props) => {
        const blockProps = useBlockProps();
        const posts = useSelect((select) => {
            return select('core').getEntityRecords('postType', 'post');
        }, []);

        return (
            <div {...blockProps}>
                {!posts && 'Loading'}
                {posts && posts.length === 0 ? 'No Posts' : <h2>{props.attributes.title}</h2>}
                {posts && posts.length > 0 && (
                    <div className="spcu-dynamic-block-wp-data">
                        {posts.slice(0, props.attributes.count).map((post) => {
                            return (<p key={post.id}>
                                <a href={post.link}>
                                    {post.title.rendered}
                                </a>
                            </p>);
                        })}
                    </div>
                )}
            </div>
        );
    },
});