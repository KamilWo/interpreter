/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */
var _Language = function(name){
    this.name = name; // nazwa jezyka
    this.treeForPreprocessor = {}; // obiekt odpowiadajacy za budowanie drzewa dla Lexera

    this.getName = function() {return this.name;}; // pobieranie nazwy jezyka
    this.getTreeForPreprocessor = function() {return this.treeForPreprocessor;}; // pobieranie drzewa dla Preprocesora
    this.setTreeForPreprocessor = function(change) {this.treeForPreprocessor = change;}; // zmiana drzewa dla Preprocesora

};