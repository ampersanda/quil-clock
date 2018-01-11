// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39296){
var map__39297 = p__39296;
var map__39297__$1 = ((((!((map__39297 == null)))?((((map__39297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39297):map__39297);
var m = map__39297__$1;
var n = cljs.core.get.call(null,map__39297__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39299_39321 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39300_39322 = null;
var count__39301_39323 = (0);
var i__39302_39324 = (0);
while(true){
if((i__39302_39324 < count__39301_39323)){
var f_39325 = cljs.core._nth.call(null,chunk__39300_39322,i__39302_39324);
cljs.core.println.call(null,"  ",f_39325);

var G__39326 = seq__39299_39321;
var G__39327 = chunk__39300_39322;
var G__39328 = count__39301_39323;
var G__39329 = (i__39302_39324 + (1));
seq__39299_39321 = G__39326;
chunk__39300_39322 = G__39327;
count__39301_39323 = G__39328;
i__39302_39324 = G__39329;
continue;
} else {
var temp__5457__auto___39330 = cljs.core.seq.call(null,seq__39299_39321);
if(temp__5457__auto___39330){
var seq__39299_39331__$1 = temp__5457__auto___39330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39299_39331__$1)){
var c__31014__auto___39332 = cljs.core.chunk_first.call(null,seq__39299_39331__$1);
var G__39333 = cljs.core.chunk_rest.call(null,seq__39299_39331__$1);
var G__39334 = c__31014__auto___39332;
var G__39335 = cljs.core.count.call(null,c__31014__auto___39332);
var G__39336 = (0);
seq__39299_39321 = G__39333;
chunk__39300_39322 = G__39334;
count__39301_39323 = G__39335;
i__39302_39324 = G__39336;
continue;
} else {
var f_39337 = cljs.core.first.call(null,seq__39299_39331__$1);
cljs.core.println.call(null,"  ",f_39337);

var G__39338 = cljs.core.next.call(null,seq__39299_39331__$1);
var G__39339 = null;
var G__39340 = (0);
var G__39341 = (0);
seq__39299_39321 = G__39338;
chunk__39300_39322 = G__39339;
count__39301_39323 = G__39340;
i__39302_39324 = G__39341;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39342 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30083__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39342);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39342)))?cljs.core.second.call(null,arglists_39342):arglists_39342));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39303_39343 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39304_39344 = null;
var count__39305_39345 = (0);
var i__39306_39346 = (0);
while(true){
if((i__39306_39346 < count__39305_39345)){
var vec__39307_39347 = cljs.core._nth.call(null,chunk__39304_39344,i__39306_39346);
var name_39348 = cljs.core.nth.call(null,vec__39307_39347,(0),null);
var map__39310_39349 = cljs.core.nth.call(null,vec__39307_39347,(1),null);
var map__39310_39350__$1 = ((((!((map__39310_39349 == null)))?((((map__39310_39349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39310_39349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39310_39349):map__39310_39349);
var doc_39351 = cljs.core.get.call(null,map__39310_39350__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39352 = cljs.core.get.call(null,map__39310_39350__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39348);

cljs.core.println.call(null," ",arglists_39352);

if(cljs.core.truth_(doc_39351)){
cljs.core.println.call(null," ",doc_39351);
} else {
}

var G__39353 = seq__39303_39343;
var G__39354 = chunk__39304_39344;
var G__39355 = count__39305_39345;
var G__39356 = (i__39306_39346 + (1));
seq__39303_39343 = G__39353;
chunk__39304_39344 = G__39354;
count__39305_39345 = G__39355;
i__39306_39346 = G__39356;
continue;
} else {
var temp__5457__auto___39357 = cljs.core.seq.call(null,seq__39303_39343);
if(temp__5457__auto___39357){
var seq__39303_39358__$1 = temp__5457__auto___39357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39303_39358__$1)){
var c__31014__auto___39359 = cljs.core.chunk_first.call(null,seq__39303_39358__$1);
var G__39360 = cljs.core.chunk_rest.call(null,seq__39303_39358__$1);
var G__39361 = c__31014__auto___39359;
var G__39362 = cljs.core.count.call(null,c__31014__auto___39359);
var G__39363 = (0);
seq__39303_39343 = G__39360;
chunk__39304_39344 = G__39361;
count__39305_39345 = G__39362;
i__39306_39346 = G__39363;
continue;
} else {
var vec__39312_39364 = cljs.core.first.call(null,seq__39303_39358__$1);
var name_39365 = cljs.core.nth.call(null,vec__39312_39364,(0),null);
var map__39315_39366 = cljs.core.nth.call(null,vec__39312_39364,(1),null);
var map__39315_39367__$1 = ((((!((map__39315_39366 == null)))?((((map__39315_39366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39315_39366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39315_39366):map__39315_39366);
var doc_39368 = cljs.core.get.call(null,map__39315_39367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39369 = cljs.core.get.call(null,map__39315_39367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39365);

cljs.core.println.call(null," ",arglists_39369);

if(cljs.core.truth_(doc_39368)){
cljs.core.println.call(null," ",doc_39368);
} else {
}

var G__39370 = cljs.core.next.call(null,seq__39303_39358__$1);
var G__39371 = null;
var G__39372 = (0);
var G__39373 = (0);
seq__39303_39343 = G__39370;
chunk__39304_39344 = G__39371;
count__39305_39345 = G__39372;
i__39306_39346 = G__39373;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__39317 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39318 = null;
var count__39319 = (0);
var i__39320 = (0);
while(true){
if((i__39320 < count__39319)){
var role = cljs.core._nth.call(null,chunk__39318,i__39320);
var temp__5457__auto___39374__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39374__$1)){
var spec_39375 = temp__5457__auto___39374__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39375));
} else {
}

var G__39376 = seq__39317;
var G__39377 = chunk__39318;
var G__39378 = count__39319;
var G__39379 = (i__39320 + (1));
seq__39317 = G__39376;
chunk__39318 = G__39377;
count__39319 = G__39378;
i__39320 = G__39379;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39317);
if(temp__5457__auto____$1){
var seq__39317__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39317__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__39317__$1);
var G__39380 = cljs.core.chunk_rest.call(null,seq__39317__$1);
var G__39381 = c__31014__auto__;
var G__39382 = cljs.core.count.call(null,c__31014__auto__);
var G__39383 = (0);
seq__39317 = G__39380;
chunk__39318 = G__39381;
count__39319 = G__39382;
i__39320 = G__39383;
continue;
} else {
var role = cljs.core.first.call(null,seq__39317__$1);
var temp__5457__auto___39384__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39384__$2)){
var spec_39385 = temp__5457__auto___39384__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39385));
} else {
}

var G__39386 = cljs.core.next.call(null,seq__39317__$1);
var G__39387 = null;
var G__39388 = (0);
var G__39389 = (0);
seq__39317 = G__39386;
chunk__39318 = G__39387;
count__39319 = G__39388;
i__39320 = G__39389;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1515667574660
