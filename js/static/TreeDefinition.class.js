/**
 * Created with JetBrains WebStorm.
 * User: kamil
 * Date: 01.12.12
 * Time: 22:25
 * To change this template use File | Settings | File Templates.
 */

// definicja drzewa to sposób postępowania Leksera, który przygotowuje kod zgodnie z danym językiem

/**
* @param choice
*/

function _TreeDefinition(tokens){

        this.tokens = tokens;

        this.getTokens = function() { return this.tokens; }; // pobieranie drzewa dla Preprocesora
        this.setTokens = function( change ) { this.tokens = tokens; }; // zmiana drzewa dla Preprocesora
}