var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);
    
var isNode = typeof module !== 'undefined' && module.exports;
var isRequirejs = typeof define === 'function' && define.amd;

var HA;
var env;
if(isRequirejs){
    
} else if(isNode){
    HA = require("../histogram-analyze");
    var should = require("chai").should();
    env = "Node";
}else{
    HA = root.HistogramAnalyze;
    env = "Only Browser"
} 

describe('Open with '+env, function(){
    describe('#histogram module', function(){
        it('is ok', function(){
            HA.should.be.ok;
        })
    })
    describe('#histogram1D()', function(){
        it('is function', function(){
            HA.histogram1D.should.be.a('function');   
        })
    })
    describe('#histogram1DCircular()', function(){
        it('is function', function(){
            HA.circularHistogram1D.should.be.a('function');      
        })
    })
    describe('#histogram2D()', function(){
        it('is function', function(){
            HA.histogram2D.should.be.a('function');      
        })
    })
})