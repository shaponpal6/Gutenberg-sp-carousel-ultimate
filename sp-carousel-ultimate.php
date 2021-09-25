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
        add_action( 'admin_enqueue_scripts', [ $this, 'register_admin_scripts' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'register_public_scripts' ] );
        add_action( 'init', [ $this, 'register_blocks' ] );
    }

    /**
     * Register Block Editor Assets
     */
    public function register_block_editor_assets() {
        // automatically load dependencies and version
        $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
        $js_file = SPCU_PLUGIN_URL . '/build/index.js';
        wp_enqueue_script(
            'spcu-gutenberg-carousel-block',
            $js_file,
            $asset_file['dependencies'],
            $asset_file['version'],
            true
        );
    }

    /**
     * Register Admin Scripts
     */
    public function register_admin_scripts() {
        $editor_js = SPCU_PLUGIN_URL . '/assets/js/editor.js';
        wp_enqueue_script(
            'spcu-editor',
            $editor_js,
            [],
            filemtime($editor_js),
            true
        );

        $editor_css = SPCU_PLUGIN_URL . '/assets/css/editor.css';
        wp_enqueue_style(
            'spcu-editor',
            filemtime($editor_css),
            [],
            filemtime($editor_css),
            'all'
        );
    }

    /**
     * Register Public Scripts
     */
    public function register_public_scripts() {
        $public_js = SPCU_PLUGIN_URL . '/assets/js/scripts.js';
        wp_enqueue_script(
            'spcu-public',
            $public_js,
            [],
            filemtime($public_js),
            true
        );

        $public_css = SPCU_PLUGIN_URL . '/assets/css/style.css';
        wp_enqueue_style(
            'spcu-public',
            $public_css,
            [],
            filemtime($public_css),
            'all'
        );
    }

    /**
     * Register Blocks
     */
    public function register_blocks() {
        if ( ! function_exists( 'register_block_type' ) ) {
            // Block editor is not available.
            return;
        }
        register_block_type( 'spcu-block/carousel', [
            'attributes' => array(),
            'render_callback' => function(){
                // server side rendering
            },
            'editor_scripts'  => 'spcu-gutenberg-carousel-block',
            'editor_style'    => 'spcu-editor',
            'script'          => 'spcu-public',
            'style'           => 'spcu-public',
        ] );
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
