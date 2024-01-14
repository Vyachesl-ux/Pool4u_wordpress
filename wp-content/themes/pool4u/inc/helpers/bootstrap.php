<?php
/**
 * Boostrap file for helper functions
 *
 * @package _headspin
 * @author Steinar Utstrand <steinar@headspin.no>
 */

$files = glob( __DIR__ . DIRECTORY_SEPARATOR . "*.php" );

foreach ( $files as $file ) {

	if ( $file !== __FILE__ ) require $file;
}
