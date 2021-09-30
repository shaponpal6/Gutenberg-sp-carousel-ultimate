<?php
/**
 * Plugin Name:     Sp Carousel Ultimate
 * Plugin URI:      https://profiles.wordpress.org/shaponpal/
 * Description:     Simple post carousel block by Gutenberg. It's Gutenberg Block related simple plugin with sample work for rtCamp.
 * Author:          Shapon Pal
 * Author URI:      https://shapon.me
 * Text Domain:     sp-carousel-ultimate
 * Domain Path:     /languages
 * Version:         1.0.0
 *
 * @package         Sp_Carousel_Ultimate
 */

if( ! defined( 'ABSPATH' ) ) : exit(); endif;

final class SP_Carousel_Ultimate_Main {

    const VERSION = '1.0.0';

    /**
     * Construct Function
     */
    private function __construct() {
        $this->init_constants();
        add_action( 'plugins_loaded', [ $this, 'load_plugin' ] );
    }

    /**
     * Define plugin constants
     */
    public function init_constants() {
        define( 'SPCU_VERSION', self::VERSION );
        define( 'SPCU_PLUGIN_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
        define( 'SPCU_PLUGIN_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );
    }

    /**
     * Plugin Init
     */
    public function load_plugin() {
        $this->enqueue_scripts();
        include_once SPCU_PLUGIN_PATH.'classes/Loader.php';
        new SPCU\Classes\Loader();
    }

    /**
     * Singleton Instance
     */
    public static function init() {
        static $instance = false;
        if( ! $instance ) {
            $instance = new self();
        }
        return $instance;
    }

    /**
     * Enqueue Scripts
     */
    public function enqueue_scripts() {
        add_action( 'enqueue_block_editor_assets', [ $this, 'register_block_editor_assets' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts_common' ] );
        // add_action( 'init', [ $this, 'register_blocks' ] );
    }

    
    /**
     * Register Blocks
     */
    public function register_blocks() {
        register_block_type( __DIR__ );
        return;
        if ( ! function_exists( 'register_block_type' ) ) {
            // Block editor is not available.
            return;
        }
        register_block_type( 'spcu-blocks/carousel', array(
            'apiVersion'=> '2',
            'version'=> '1.0.0',
            'title'=> 'Sp Carousel',
            'category'=> 'common',
            'icon'=> 'smiley',
            'description'=> 'Example block written with ESNext standard and JSX support – build step required.',
            'supports'=> [
                "html"=> false
            ],
            'textdomain'=> 'spcu-blocks',
            'attributes' => array(),
            'render_callback' => function(){
                // server side rendering
            },
            'editor_scripts'  => 'spcu-gutenberg-carousel-block',
            'editor_style'    => 'spcu-editor',
            'style'           => 'spcu-public',
         ) );
    }

    /**
     * Only load in Backend
     * Register Block Editor Assets
     */
    public function register_block_editor_assets() {
        // automatically load dependencies and version
        $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
        // Make paths variables so we don't write em twice 😉
        $editor_js = SPCU_PLUGIN_URL . 'build/index.js';
        $editor_css = SPCU_PLUGIN_URL . 'build/index.css';

        // Enqueue the bundled block JS file
        wp_enqueue_script('spcu-gutenberg-carousel-block', $editor_js, array('wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ),$asset_file['version'],true);
        
        // Enqueue optional editor only styles
        wp_enqueue_style('spcu-public',$editor_css,[],filemtime($editor_css),'all');

        $this->register_scripts_common();
        // if(is_rtl()){ }
        wp_localize_script('spcu-gutenberg-carousel-block', 'spcu_data', array(
            'url' => site_url(),
            'ajax' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('spcu-nonce'),
            'upload' => wp_upload_dir()['basedir'] . '/spcu',
        ));

        wp_set_script_translations( 'spcu-gutenberg-carousel-block', 'spcu-blocks', SPCU_PLUGIN_PATH . 'languages/' );
    }

    /**
	 * Common Frontend and Backend CSS and JS Scripts
     * 
     * @since v.1.0.0
	 * @return NULL
	 */
    public function register_scripts_common(){
        // automatically load dependencies and version
        $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
        // Make paths variables so we don't write em twice 😉
        $public_js = SPCU_PLUGIN_URL . 'assets/js/scripts.js';
        $public_css = SPCU_PLUGIN_URL . 'build/style-index.css';

         // Enqueue frontend and editor js
        wp_enqueue_script('spcu-public-script', $public_js, ['jQuery'], $asset_file['version'],true );
        
         // Enqueue frontend and editor block styles
        wp_enqueue_style('spcu-public', $public_css, [], filemtime($public_css), 'all');

        wp_localize_script('spcu-public-script', 'spcu_data_frontend', array(
            'url' => site_url(),
            'ajax' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('spcu-nonce')
        ));

    }
 

}

/**
 * Init Main Plugin
 */
function spcu_run_plugin() {
    return SP_Carousel_Ultimate_Main::init();
}
// Run the plugin
spcu_run_plugin();
