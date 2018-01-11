// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38501 = arguments.length;
var i__31363__auto___38502 = (0);
while(true){
if((i__31363__auto___38502 < len__31362__auto___38501)){
args__31369__auto__.push((arguments[i__31363__auto___38502]));

var G__38503 = (i__31363__auto___38502 + (1));
i__31363__auto___38502 = G__38503;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq38500){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38500));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38505 = arguments.length;
var i__31363__auto___38506 = (0);
while(true){
if((i__31363__auto___38506 < len__31362__auto___38505)){
args__31369__auto__.push((arguments[i__31363__auto___38506]));

var G__38507 = (i__31363__auto___38506 + (1));
i__31363__auto___38506 = G__38507;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq38504){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38504));
});

var g_QMARK__38508 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_38509 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38508){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__38508))
,null));
var mkg_38510 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38508,g_38509){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__38508,g_38509))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__38508,g_38509,mkg_38510){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38508).call(null,x);
});})(g_QMARK__38508,g_38509,mkg_38510))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__38508,g_38509,mkg_38510){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_38510).call(null,gfn);
});})(g_QMARK__38508,g_38509,mkg_38510))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__38508,g_38509,mkg_38510){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_38509).call(null,generator);
});})(g_QMARK__38508,g_38509,mkg_38510))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31465__auto___38530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31465__auto___38530){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38531 = arguments.length;
var i__31363__auto___38532 = (0);
while(true){
if((i__31363__auto___38532 < len__31362__auto___38531)){
args__31369__auto__.push((arguments[i__31363__auto___38532]));

var G__38533 = (i__31363__auto___38532 + (1));
i__31363__auto___38532 = G__38533;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38530))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38530),args);
});})(g__31465__auto___38530))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31465__auto___38530){
return (function (seq38511){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38511));
});})(g__31465__auto___38530))
;


var g__31465__auto___38534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31465__auto___38534){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38535 = arguments.length;
var i__31363__auto___38536 = (0);
while(true){
if((i__31363__auto___38536 < len__31362__auto___38535)){
args__31369__auto__.push((arguments[i__31363__auto___38536]));

var G__38537 = (i__31363__auto___38536 + (1));
i__31363__auto___38536 = G__38537;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38534))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38534),args);
});})(g__31465__auto___38534))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31465__auto___38534){
return (function (seq38512){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38512));
});})(g__31465__auto___38534))
;


var g__31465__auto___38538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31465__auto___38538){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38539 = arguments.length;
var i__31363__auto___38540 = (0);
while(true){
if((i__31363__auto___38540 < len__31362__auto___38539)){
args__31369__auto__.push((arguments[i__31363__auto___38540]));

var G__38541 = (i__31363__auto___38540 + (1));
i__31363__auto___38540 = G__38541;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38538))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38538),args);
});})(g__31465__auto___38538))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31465__auto___38538){
return (function (seq38513){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38513));
});})(g__31465__auto___38538))
;


var g__31465__auto___38542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31465__auto___38542){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38543 = arguments.length;
var i__31363__auto___38544 = (0);
while(true){
if((i__31363__auto___38544 < len__31362__auto___38543)){
args__31369__auto__.push((arguments[i__31363__auto___38544]));

var G__38545 = (i__31363__auto___38544 + (1));
i__31363__auto___38544 = G__38545;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38542))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38542),args);
});})(g__31465__auto___38542))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31465__auto___38542){
return (function (seq38514){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38514));
});})(g__31465__auto___38542))
;


var g__31465__auto___38546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31465__auto___38546){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38547 = arguments.length;
var i__31363__auto___38548 = (0);
while(true){
if((i__31363__auto___38548 < len__31362__auto___38547)){
args__31369__auto__.push((arguments[i__31363__auto___38548]));

var G__38549 = (i__31363__auto___38548 + (1));
i__31363__auto___38548 = G__38549;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38546))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38546),args);
});})(g__31465__auto___38546))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31465__auto___38546){
return (function (seq38515){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38515));
});})(g__31465__auto___38546))
;


var g__31465__auto___38550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31465__auto___38550){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38551 = arguments.length;
var i__31363__auto___38552 = (0);
while(true){
if((i__31363__auto___38552 < len__31362__auto___38551)){
args__31369__auto__.push((arguments[i__31363__auto___38552]));

var G__38553 = (i__31363__auto___38552 + (1));
i__31363__auto___38552 = G__38553;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38550))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38550),args);
});})(g__31465__auto___38550))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31465__auto___38550){
return (function (seq38516){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38516));
});})(g__31465__auto___38550))
;


var g__31465__auto___38554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31465__auto___38554){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38555 = arguments.length;
var i__31363__auto___38556 = (0);
while(true){
if((i__31363__auto___38556 < len__31362__auto___38555)){
args__31369__auto__.push((arguments[i__31363__auto___38556]));

var G__38557 = (i__31363__auto___38556 + (1));
i__31363__auto___38556 = G__38557;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38554))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38554),args);
});})(g__31465__auto___38554))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31465__auto___38554){
return (function (seq38517){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38517));
});})(g__31465__auto___38554))
;


var g__31465__auto___38558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31465__auto___38558){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38559 = arguments.length;
var i__31363__auto___38560 = (0);
while(true){
if((i__31363__auto___38560 < len__31362__auto___38559)){
args__31369__auto__.push((arguments[i__31363__auto___38560]));

var G__38561 = (i__31363__auto___38560 + (1));
i__31363__auto___38560 = G__38561;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38558))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38558),args);
});})(g__31465__auto___38558))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31465__auto___38558){
return (function (seq38518){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38518));
});})(g__31465__auto___38558))
;


var g__31465__auto___38562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31465__auto___38562){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38563 = arguments.length;
var i__31363__auto___38564 = (0);
while(true){
if((i__31363__auto___38564 < len__31362__auto___38563)){
args__31369__auto__.push((arguments[i__31363__auto___38564]));

var G__38565 = (i__31363__auto___38564 + (1));
i__31363__auto___38564 = G__38565;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38562))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38562),args);
});})(g__31465__auto___38562))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31465__auto___38562){
return (function (seq38519){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38519));
});})(g__31465__auto___38562))
;


var g__31465__auto___38566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31465__auto___38566){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38567 = arguments.length;
var i__31363__auto___38568 = (0);
while(true){
if((i__31363__auto___38568 < len__31362__auto___38567)){
args__31369__auto__.push((arguments[i__31363__auto___38568]));

var G__38569 = (i__31363__auto___38568 + (1));
i__31363__auto___38568 = G__38569;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38566))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38566),args);
});})(g__31465__auto___38566))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31465__auto___38566){
return (function (seq38520){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38520));
});})(g__31465__auto___38566))
;


var g__31465__auto___38570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31465__auto___38570){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38571 = arguments.length;
var i__31363__auto___38572 = (0);
while(true){
if((i__31363__auto___38572 < len__31362__auto___38571)){
args__31369__auto__.push((arguments[i__31363__auto___38572]));

var G__38573 = (i__31363__auto___38572 + (1));
i__31363__auto___38572 = G__38573;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38570))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38570),args);
});})(g__31465__auto___38570))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31465__auto___38570){
return (function (seq38521){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38521));
});})(g__31465__auto___38570))
;


var g__31465__auto___38574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31465__auto___38574){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38575 = arguments.length;
var i__31363__auto___38576 = (0);
while(true){
if((i__31363__auto___38576 < len__31362__auto___38575)){
args__31369__auto__.push((arguments[i__31363__auto___38576]));

var G__38577 = (i__31363__auto___38576 + (1));
i__31363__auto___38576 = G__38577;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38574))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38574),args);
});})(g__31465__auto___38574))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31465__auto___38574){
return (function (seq38522){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38522));
});})(g__31465__auto___38574))
;


var g__31465__auto___38578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31465__auto___38578){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38579 = arguments.length;
var i__31363__auto___38580 = (0);
while(true){
if((i__31363__auto___38580 < len__31362__auto___38579)){
args__31369__auto__.push((arguments[i__31363__auto___38580]));

var G__38581 = (i__31363__auto___38580 + (1));
i__31363__auto___38580 = G__38581;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38578))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38578),args);
});})(g__31465__auto___38578))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31465__auto___38578){
return (function (seq38523){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38523));
});})(g__31465__auto___38578))
;


var g__31465__auto___38582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31465__auto___38582){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38583 = arguments.length;
var i__31363__auto___38584 = (0);
while(true){
if((i__31363__auto___38584 < len__31362__auto___38583)){
args__31369__auto__.push((arguments[i__31363__auto___38584]));

var G__38585 = (i__31363__auto___38584 + (1));
i__31363__auto___38584 = G__38585;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38582))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38582),args);
});})(g__31465__auto___38582))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31465__auto___38582){
return (function (seq38524){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38524));
});})(g__31465__auto___38582))
;


var g__31465__auto___38586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31465__auto___38586){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38587 = arguments.length;
var i__31363__auto___38588 = (0);
while(true){
if((i__31363__auto___38588 < len__31362__auto___38587)){
args__31369__auto__.push((arguments[i__31363__auto___38588]));

var G__38589 = (i__31363__auto___38588 + (1));
i__31363__auto___38588 = G__38589;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38586))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38586){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38586),args);
});})(g__31465__auto___38586))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31465__auto___38586){
return (function (seq38525){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38525));
});})(g__31465__auto___38586))
;


var g__31465__auto___38590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31465__auto___38590){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38591 = arguments.length;
var i__31363__auto___38592 = (0);
while(true){
if((i__31363__auto___38592 < len__31362__auto___38591)){
args__31369__auto__.push((arguments[i__31363__auto___38592]));

var G__38593 = (i__31363__auto___38592 + (1));
i__31363__auto___38592 = G__38593;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38590))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38590){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38590),args);
});})(g__31465__auto___38590))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31465__auto___38590){
return (function (seq38526){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38526));
});})(g__31465__auto___38590))
;


var g__31465__auto___38594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31465__auto___38594){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38595 = arguments.length;
var i__31363__auto___38596 = (0);
while(true){
if((i__31363__auto___38596 < len__31362__auto___38595)){
args__31369__auto__.push((arguments[i__31363__auto___38596]));

var G__38597 = (i__31363__auto___38596 + (1));
i__31363__auto___38596 = G__38597;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38594))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38594),args);
});})(g__31465__auto___38594))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31465__auto___38594){
return (function (seq38527){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38527));
});})(g__31465__auto___38594))
;


var g__31465__auto___38598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31465__auto___38598){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38599 = arguments.length;
var i__31363__auto___38600 = (0);
while(true){
if((i__31363__auto___38600 < len__31362__auto___38599)){
args__31369__auto__.push((arguments[i__31363__auto___38600]));

var G__38601 = (i__31363__auto___38600 + (1));
i__31363__auto___38600 = G__38601;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38598))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38598){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38598),args);
});})(g__31465__auto___38598))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31465__auto___38598){
return (function (seq38528){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38528));
});})(g__31465__auto___38598))
;


var g__31465__auto___38602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31465__auto___38602){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38603 = arguments.length;
var i__31363__auto___38604 = (0);
while(true){
if((i__31363__auto___38604 < len__31362__auto___38603)){
args__31369__auto__.push((arguments[i__31363__auto___38604]));

var G__38605 = (i__31363__auto___38604 + (1));
i__31363__auto___38604 = G__38605;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38602))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38602){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38602),args);
});})(g__31465__auto___38602))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31465__auto___38602){
return (function (seq38529){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38529));
});})(g__31465__auto___38602))
;

var g__31478__auto___38627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31478__auto___38627){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38628 = arguments.length;
var i__31363__auto___38629 = (0);
while(true){
if((i__31363__auto___38629 < len__31362__auto___38628)){
args__31369__auto__.push((arguments[i__31363__auto___38629]));

var G__38630 = (i__31363__auto___38629 + (1));
i__31363__auto___38629 = G__38630;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38627))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38627){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38627);
});})(g__31478__auto___38627))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31478__auto___38627){
return (function (seq38606){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38606));
});})(g__31478__auto___38627))
;


var g__31478__auto___38631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31478__auto___38631){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38632 = arguments.length;
var i__31363__auto___38633 = (0);
while(true){
if((i__31363__auto___38633 < len__31362__auto___38632)){
args__31369__auto__.push((arguments[i__31363__auto___38633]));

var G__38634 = (i__31363__auto___38633 + (1));
i__31363__auto___38633 = G__38634;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38631))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38631){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38631);
});})(g__31478__auto___38631))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31478__auto___38631){
return (function (seq38607){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38607));
});})(g__31478__auto___38631))
;


var g__31478__auto___38635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31478__auto___38635){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38636 = arguments.length;
var i__31363__auto___38637 = (0);
while(true){
if((i__31363__auto___38637 < len__31362__auto___38636)){
args__31369__auto__.push((arguments[i__31363__auto___38637]));

var G__38638 = (i__31363__auto___38637 + (1));
i__31363__auto___38637 = G__38638;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38635))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38635){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38635);
});})(g__31478__auto___38635))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31478__auto___38635){
return (function (seq38608){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38608));
});})(g__31478__auto___38635))
;


var g__31478__auto___38639 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31478__auto___38639){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38640 = arguments.length;
var i__31363__auto___38641 = (0);
while(true){
if((i__31363__auto___38641 < len__31362__auto___38640)){
args__31369__auto__.push((arguments[i__31363__auto___38641]));

var G__38642 = (i__31363__auto___38641 + (1));
i__31363__auto___38641 = G__38642;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38639))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38639){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38639);
});})(g__31478__auto___38639))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31478__auto___38639){
return (function (seq38609){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38609));
});})(g__31478__auto___38639))
;


var g__31478__auto___38643 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31478__auto___38643){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38644 = arguments.length;
var i__31363__auto___38645 = (0);
while(true){
if((i__31363__auto___38645 < len__31362__auto___38644)){
args__31369__auto__.push((arguments[i__31363__auto___38645]));

var G__38646 = (i__31363__auto___38645 + (1));
i__31363__auto___38645 = G__38646;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38643))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38643){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38643);
});})(g__31478__auto___38643))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31478__auto___38643){
return (function (seq38610){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38610));
});})(g__31478__auto___38643))
;


var g__31478__auto___38647 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31478__auto___38647){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38648 = arguments.length;
var i__31363__auto___38649 = (0);
while(true){
if((i__31363__auto___38649 < len__31362__auto___38648)){
args__31369__auto__.push((arguments[i__31363__auto___38649]));

var G__38650 = (i__31363__auto___38649 + (1));
i__31363__auto___38649 = G__38650;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38647))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38647){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38647);
});})(g__31478__auto___38647))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31478__auto___38647){
return (function (seq38611){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38611));
});})(g__31478__auto___38647))
;


var g__31478__auto___38651 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31478__auto___38651){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38652 = arguments.length;
var i__31363__auto___38653 = (0);
while(true){
if((i__31363__auto___38653 < len__31362__auto___38652)){
args__31369__auto__.push((arguments[i__31363__auto___38653]));

var G__38654 = (i__31363__auto___38653 + (1));
i__31363__auto___38653 = G__38654;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38651))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38651){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38651);
});})(g__31478__auto___38651))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31478__auto___38651){
return (function (seq38612){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38612));
});})(g__31478__auto___38651))
;


var g__31478__auto___38655 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31478__auto___38655){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38656 = arguments.length;
var i__31363__auto___38657 = (0);
while(true){
if((i__31363__auto___38657 < len__31362__auto___38656)){
args__31369__auto__.push((arguments[i__31363__auto___38657]));

var G__38658 = (i__31363__auto___38657 + (1));
i__31363__auto___38657 = G__38658;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38655))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38655){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38655);
});})(g__31478__auto___38655))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31478__auto___38655){
return (function (seq38613){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38613));
});})(g__31478__auto___38655))
;


var g__31478__auto___38659 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31478__auto___38659){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38660 = arguments.length;
var i__31363__auto___38661 = (0);
while(true){
if((i__31363__auto___38661 < len__31362__auto___38660)){
args__31369__auto__.push((arguments[i__31363__auto___38661]));

var G__38662 = (i__31363__auto___38661 + (1));
i__31363__auto___38661 = G__38662;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38659))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38659){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38659);
});})(g__31478__auto___38659))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31478__auto___38659){
return (function (seq38614){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38614));
});})(g__31478__auto___38659))
;


var g__31478__auto___38663 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31478__auto___38663){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38664 = arguments.length;
var i__31363__auto___38665 = (0);
while(true){
if((i__31363__auto___38665 < len__31362__auto___38664)){
args__31369__auto__.push((arguments[i__31363__auto___38665]));

var G__38666 = (i__31363__auto___38665 + (1));
i__31363__auto___38665 = G__38666;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38663))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38663){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38663);
});})(g__31478__auto___38663))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31478__auto___38663){
return (function (seq38615){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38615));
});})(g__31478__auto___38663))
;


var g__31478__auto___38667 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31478__auto___38667){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38668 = arguments.length;
var i__31363__auto___38669 = (0);
while(true){
if((i__31363__auto___38669 < len__31362__auto___38668)){
args__31369__auto__.push((arguments[i__31363__auto___38669]));

var G__38670 = (i__31363__auto___38669 + (1));
i__31363__auto___38669 = G__38670;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38667))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38667){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38667);
});})(g__31478__auto___38667))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31478__auto___38667){
return (function (seq38616){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38616));
});})(g__31478__auto___38667))
;


var g__31478__auto___38671 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31478__auto___38671){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38672 = arguments.length;
var i__31363__auto___38673 = (0);
while(true){
if((i__31363__auto___38673 < len__31362__auto___38672)){
args__31369__auto__.push((arguments[i__31363__auto___38673]));

var G__38674 = (i__31363__auto___38673 + (1));
i__31363__auto___38673 = G__38674;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38671))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38671){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38671);
});})(g__31478__auto___38671))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31478__auto___38671){
return (function (seq38617){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38617));
});})(g__31478__auto___38671))
;


var g__31478__auto___38675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31478__auto___38675){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38676 = arguments.length;
var i__31363__auto___38677 = (0);
while(true){
if((i__31363__auto___38677 < len__31362__auto___38676)){
args__31369__auto__.push((arguments[i__31363__auto___38677]));

var G__38678 = (i__31363__auto___38677 + (1));
i__31363__auto___38677 = G__38678;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38675))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38675){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38675);
});})(g__31478__auto___38675))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31478__auto___38675){
return (function (seq38618){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38618));
});})(g__31478__auto___38675))
;


var g__31478__auto___38679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31478__auto___38679){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38680 = arguments.length;
var i__31363__auto___38681 = (0);
while(true){
if((i__31363__auto___38681 < len__31362__auto___38680)){
args__31369__auto__.push((arguments[i__31363__auto___38681]));

var G__38682 = (i__31363__auto___38681 + (1));
i__31363__auto___38681 = G__38682;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38679))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38679){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38679);
});})(g__31478__auto___38679))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31478__auto___38679){
return (function (seq38619){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38619));
});})(g__31478__auto___38679))
;


var g__31478__auto___38683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31478__auto___38683){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38684 = arguments.length;
var i__31363__auto___38685 = (0);
while(true){
if((i__31363__auto___38685 < len__31362__auto___38684)){
args__31369__auto__.push((arguments[i__31363__auto___38685]));

var G__38686 = (i__31363__auto___38685 + (1));
i__31363__auto___38685 = G__38686;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38683))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38683){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38683);
});})(g__31478__auto___38683))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31478__auto___38683){
return (function (seq38620){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38620));
});})(g__31478__auto___38683))
;


var g__31478__auto___38687 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31478__auto___38687){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38688 = arguments.length;
var i__31363__auto___38689 = (0);
while(true){
if((i__31363__auto___38689 < len__31362__auto___38688)){
args__31369__auto__.push((arguments[i__31363__auto___38689]));

var G__38690 = (i__31363__auto___38689 + (1));
i__31363__auto___38689 = G__38690;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38687))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38687){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38687);
});})(g__31478__auto___38687))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31478__auto___38687){
return (function (seq38621){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38621));
});})(g__31478__auto___38687))
;


var g__31478__auto___38691 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31478__auto___38691){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38692 = arguments.length;
var i__31363__auto___38693 = (0);
while(true){
if((i__31363__auto___38693 < len__31362__auto___38692)){
args__31369__auto__.push((arguments[i__31363__auto___38693]));

var G__38694 = (i__31363__auto___38693 + (1));
i__31363__auto___38693 = G__38694;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38691))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38691){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38691);
});})(g__31478__auto___38691))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31478__auto___38691){
return (function (seq38622){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38622));
});})(g__31478__auto___38691))
;


var g__31478__auto___38695 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31478__auto___38695){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38696 = arguments.length;
var i__31363__auto___38697 = (0);
while(true){
if((i__31363__auto___38697 < len__31362__auto___38696)){
args__31369__auto__.push((arguments[i__31363__auto___38697]));

var G__38698 = (i__31363__auto___38697 + (1));
i__31363__auto___38697 = G__38698;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38695))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38695){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38695);
});})(g__31478__auto___38695))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31478__auto___38695){
return (function (seq38623){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38623));
});})(g__31478__auto___38695))
;


var g__31478__auto___38699 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31478__auto___38699){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38700 = arguments.length;
var i__31363__auto___38701 = (0);
while(true){
if((i__31363__auto___38701 < len__31362__auto___38700)){
args__31369__auto__.push((arguments[i__31363__auto___38701]));

var G__38702 = (i__31363__auto___38701 + (1));
i__31363__auto___38701 = G__38702;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38699))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38699){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38699);
});})(g__31478__auto___38699))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31478__auto___38699){
return (function (seq38624){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38624));
});})(g__31478__auto___38699))
;


var g__31478__auto___38703 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31478__auto___38703){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38704 = arguments.length;
var i__31363__auto___38705 = (0);
while(true){
if((i__31363__auto___38705 < len__31362__auto___38704)){
args__31369__auto__.push((arguments[i__31363__auto___38705]));

var G__38706 = (i__31363__auto___38705 + (1));
i__31363__auto___38705 = G__38706;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38703))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38703){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38703);
});})(g__31478__auto___38703))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31478__auto___38703){
return (function (seq38625){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38625));
});})(g__31478__auto___38703))
;


var g__31478__auto___38707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31478__auto___38707){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38708 = arguments.length;
var i__31363__auto___38709 = (0);
while(true){
if((i__31363__auto___38709 < len__31362__auto___38708)){
args__31369__auto__.push((arguments[i__31363__auto___38709]));

var G__38710 = (i__31363__auto___38709 + (1));
i__31363__auto___38709 = G__38710;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38707))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38707){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38707);
});})(g__31478__auto___38707))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31478__auto___38707){
return (function (seq38626){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38626));
});})(g__31478__auto___38707))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38713 = arguments.length;
var i__31363__auto___38714 = (0);
while(true){
if((i__31363__auto___38714 < len__31362__auto___38713)){
args__31369__auto__.push((arguments[i__31363__auto___38714]));

var G__38715 = (i__31363__auto___38714 + (1));
i__31363__auto___38714 = G__38715;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38711_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38711_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38712){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38712));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38716_SHARP_){
return (new Date(p1__38716_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1515667570412
