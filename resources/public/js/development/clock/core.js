// Compiled by ClojureScript 1.9.946 {}
goog.provide('clock.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
clock.core.setup = (function clock$core$setup(){
quil.core.frame_rate.call(null,(30));

return quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));
});
clock.core.draw_state = (function clock$core$draw_state(state){
quil.core.background.call(null,(150));

var max_scale_h = ((1) - ((1) / (12)));
var max_scale_m = ((1) - ((1) / (60)));
var max_scale_s = ((1) - ((1) / (60)));
var h = quil.core.map_range.call(null,(((quil.core.hour.call(null) > (12)))?(quil.core.hour.call(null) - (12)):quil.core.hour.call(null)),(0),(11),(0),max_scale_h);
var m = quil.core.map_range.call(null,quil.core.minute.call(null),(0),(59),(0),max_scale_m);
var s = quil.core.map_range.call(null,quil.core.seconds.call(null),(0),(59),(0),max_scale_s);
var half_width = (quil.core.width.call(null) / (2));
var half_height = (quil.core.height.call(null) / (2));
quil.core.translate.call(null,half_width,half_height);

quil.core.rotate.call(null,((-1) * quil.core.HALF_PI));

quil.core.stroke_weight.call(null,(8));

quil.core.no_fill.call(null);

var angle_32784 = (quil.core.TWO_PI * h);
quil.core.stroke.call(null,(255),(100),(150));

quil.core.arc.call(null,(0),(0),(300),(300),(0),angle_32784);

quil.core.push_style.call(null);

quil.core.rotate.call(null,angle_32784);

quil.core.line.call(null,(0),(0),(60),(0));

quil.core.pop_style.call(null);

var angle_32785 = (quil.core.TWO_PI * m);
quil.core.stroke.call(null,(150),(100),(255));

quil.core.arc.call(null,(0),(0),(280),(280),(0),angle_32785);

quil.core.push_style.call(null);

quil.core.rotate.call(null,angle_32785);

quil.core.line.call(null,(0),(0),(70),(0));

quil.core.pop_style.call(null);

var angle = (quil.core.TWO_PI * s);
quil.core.stroke.call(null,(150),(255),(100));

quil.core.arc.call(null,(0),(0),(260),(260),(0),angle);

quil.core.push_style.call(null);

quil.core.rotate.call(null,angle);

quil.core.line.call(null,(0),(0),(128),(0));

return quil.core.pop_style.call(null);
});
clock.core.run_sketch = (function clock$core$run_sketch(){
clock.core.clock = (function clock$core$run_sketch_$_clock(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"clock",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,clock.core.setup))?(function() { 
var G__32786__delegate = function (args){
return cljs.core.apply.call(null,clock.core.setup,args);
};
var G__32786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32787__i = 0, G__32787__a = new Array(arguments.length -  0);
while (G__32787__i < G__32787__a.length) {G__32787__a[G__32787__i] = arguments[G__32787__i + 0]; ++G__32787__i;}
  args = new cljs.core.IndexedSeq(G__32787__a,0,null);
} 
return G__32786__delegate.call(this,args);};
G__32786.cljs$lang$maxFixedArity = 0;
G__32786.cljs$lang$applyTo = (function (arglist__32788){
var args = cljs.core.seq(arglist__32788);
return G__32786__delegate(args);
});
G__32786.cljs$core$IFn$_invoke$arity$variadic = G__32786__delegate;
return G__32786;
})()
:clock.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,clock.core.draw_state))?(function() { 
var G__32789__delegate = function (args){
return cljs.core.apply.call(null,clock.core.draw_state,args);
};
var G__32789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32790__i = 0, G__32790__a = new Array(arguments.length -  0);
while (G__32790__i < G__32790__a.length) {G__32790__a[G__32790__i] = arguments[G__32790__i + 0]; ++G__32790__i;}
  args = new cljs.core.IndexedSeq(G__32790__a,0,null);
} 
return G__32789__delegate.call(this,args);};
G__32789.cljs$lang$maxFixedArity = 0;
G__32789.cljs$lang$applyTo = (function (arglist__32791){
var args = cljs.core.seq(arglist__32791);
return G__32789__delegate(args);
});
G__32789.cljs$core$IFn$_invoke$arity$variadic = G__32789__delegate;
return G__32789;
})()
:clock.core.draw_state));
});
goog.exportSymbol('clock.core.clock', clock.core.clock);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__31783__31784__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__31783__31784__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),clock.core.clock,new cljs.core.Keyword(null,"host-id","host-id",742376279),"clock"], null));
}
});
goog.exportSymbol('clock.core.run_sketch', clock.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1515676196946
