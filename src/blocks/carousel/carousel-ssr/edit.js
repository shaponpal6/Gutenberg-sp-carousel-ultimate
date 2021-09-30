import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
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
    const posts = useSelect((select) => {
        return select('core').getEntityRecords('postType', 'post');
    }, []);
    return (
        <p {...useBlockProps()}>
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
        </p>
    );
}
