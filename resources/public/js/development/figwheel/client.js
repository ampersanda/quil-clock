// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39584){if((e39584 instanceof Error)){
var e = e39584;
return "Error: Unable to stringify";
} else {
throw e39584;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39587 = arguments.length;
switch (G__39587) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39585_SHARP_){
if(typeof p1__39585_SHARP_ === 'string'){
return p1__39585_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39585_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39590 = arguments.length;
var i__31363__auto___39591 = (0);
while(true){
if((i__31363__auto___39591 < len__31362__auto___39590)){
args__31369__auto__.push((arguments[i__31363__auto___39591]));

var G__39592 = (i__31363__auto___39591 + (1));
i__31363__auto___39591 = G__39592;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39589){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39589));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39594 = arguments.length;
var i__31363__auto___39595 = (0);
while(true){
if((i__31363__auto___39595 < len__31362__auto___39594)){
args__31369__auto__.push((arguments[i__31363__auto___39595]));

var G__39596 = (i__31363__auto___39595 + (1));
i__31363__auto___39595 = G__39596;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39593){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39593));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39597){
var map__39598 = p__39597;
var map__39598__$1 = ((((!((map__39598 == null)))?((((map__39598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39598):map__39598);
var message = cljs.core.get.call(null,map__39598__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39598__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30083__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30071__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30071__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30071__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34571__auto___39677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___39677,ch){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___39677,ch){
return (function (state_39649){
var state_val_39650 = (state_39649[(1)]);
if((state_val_39650 === (7))){
var inst_39645 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
var statearr_39651_39678 = state_39649__$1;
(statearr_39651_39678[(2)] = inst_39645);

(statearr_39651_39678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (1))){
var state_39649__$1 = state_39649;
var statearr_39652_39679 = state_39649__$1;
(statearr_39652_39679[(2)] = null);

(statearr_39652_39679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (4))){
var inst_39602 = (state_39649[(7)]);
var inst_39602__$1 = (state_39649[(2)]);
var state_39649__$1 = (function (){var statearr_39653 = state_39649;
(statearr_39653[(7)] = inst_39602__$1);

return statearr_39653;
})();
if(cljs.core.truth_(inst_39602__$1)){
var statearr_39654_39680 = state_39649__$1;
(statearr_39654_39680[(1)] = (5));

} else {
var statearr_39655_39681 = state_39649__$1;
(statearr_39655_39681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (15))){
var inst_39609 = (state_39649[(8)]);
var inst_39624 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39609);
var inst_39625 = cljs.core.first.call(null,inst_39624);
var inst_39626 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39625);
var inst_39627 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39626)].join('');
var inst_39628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39627);
var state_39649__$1 = state_39649;
var statearr_39656_39682 = state_39649__$1;
(statearr_39656_39682[(2)] = inst_39628);

(statearr_39656_39682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (13))){
var inst_39633 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
var statearr_39657_39683 = state_39649__$1;
(statearr_39657_39683[(2)] = inst_39633);

(statearr_39657_39683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (6))){
var state_39649__$1 = state_39649;
var statearr_39658_39684 = state_39649__$1;
(statearr_39658_39684[(2)] = null);

(statearr_39658_39684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (17))){
var inst_39631 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
var statearr_39659_39685 = state_39649__$1;
(statearr_39659_39685[(2)] = inst_39631);

(statearr_39659_39685[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (3))){
var inst_39647 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39649__$1,inst_39647);
} else {
if((state_val_39650 === (12))){
var inst_39608 = (state_39649[(9)]);
var inst_39622 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39608,opts);
var state_39649__$1 = state_39649;
if(cljs.core.truth_(inst_39622)){
var statearr_39660_39686 = state_39649__$1;
(statearr_39660_39686[(1)] = (15));

} else {
var statearr_39661_39687 = state_39649__$1;
(statearr_39661_39687[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (2))){
var state_39649__$1 = state_39649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39649__$1,(4),ch);
} else {
if((state_val_39650 === (11))){
var inst_39609 = (state_39649[(8)]);
var inst_39614 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39615 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39609);
var inst_39616 = cljs.core.async.timeout.call(null,(1000));
var inst_39617 = [inst_39615,inst_39616];
var inst_39618 = (new cljs.core.PersistentVector(null,2,(5),inst_39614,inst_39617,null));
var state_39649__$1 = state_39649;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39649__$1,(14),inst_39618);
} else {
if((state_val_39650 === (9))){
var inst_39609 = (state_39649[(8)]);
var inst_39635 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39636 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39609);
var inst_39637 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39636);
var inst_39638 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39637)].join('');
var inst_39639 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39638);
var state_39649__$1 = (function (){var statearr_39662 = state_39649;
(statearr_39662[(10)] = inst_39635);

return statearr_39662;
})();
var statearr_39663_39688 = state_39649__$1;
(statearr_39663_39688[(2)] = inst_39639);

(statearr_39663_39688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (5))){
var inst_39602 = (state_39649[(7)]);
var inst_39604 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39605 = (new cljs.core.PersistentArrayMap(null,2,inst_39604,null));
var inst_39606 = (new cljs.core.PersistentHashSet(null,inst_39605,null));
var inst_39607 = figwheel.client.focus_msgs.call(null,inst_39606,inst_39602);
var inst_39608 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39607);
var inst_39609 = cljs.core.first.call(null,inst_39607);
var inst_39610 = figwheel.client.autoload_QMARK_.call(null);
var state_39649__$1 = (function (){var statearr_39664 = state_39649;
(statearr_39664[(8)] = inst_39609);

(statearr_39664[(9)] = inst_39608);

return statearr_39664;
})();
if(cljs.core.truth_(inst_39610)){
var statearr_39665_39689 = state_39649__$1;
(statearr_39665_39689[(1)] = (8));

} else {
var statearr_39666_39690 = state_39649__$1;
(statearr_39666_39690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (14))){
var inst_39620 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
var statearr_39667_39691 = state_39649__$1;
(statearr_39667_39691[(2)] = inst_39620);

(statearr_39667_39691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (16))){
var state_39649__$1 = state_39649;
var statearr_39668_39692 = state_39649__$1;
(statearr_39668_39692[(2)] = null);

(statearr_39668_39692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (10))){
var inst_39641 = (state_39649[(2)]);
var state_39649__$1 = (function (){var statearr_39669 = state_39649;
(statearr_39669[(11)] = inst_39641);

return statearr_39669;
})();
var statearr_39670_39693 = state_39649__$1;
(statearr_39670_39693[(2)] = null);

(statearr_39670_39693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (8))){
var inst_39608 = (state_39649[(9)]);
var inst_39612 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39608,opts);
var state_39649__$1 = state_39649;
if(cljs.core.truth_(inst_39612)){
var statearr_39671_39694 = state_39649__$1;
(statearr_39671_39694[(1)] = (11));

} else {
var statearr_39672_39695 = state_39649__$1;
(statearr_39672_39695[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34571__auto___39677,ch))
;
return ((function (switch__34481__auto__,c__34571__auto___39677,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____0 = (function (){
var statearr_39673 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39673[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__);

(statearr_39673[(1)] = (1));

return statearr_39673;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____1 = (function (state_39649){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39674){if((e39674 instanceof Object)){
var ex__34485__auto__ = e39674;
var statearr_39675_39696 = state_39649;
(statearr_39675_39696[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39697 = state_39649;
state_39649 = G__39697;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__ = function(state_39649){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____1.call(this,state_39649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34482__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___39677,ch))
})();
var state__34573__auto__ = (function (){var statearr_39676 = f__34572__auto__.call(null);
(statearr_39676[(6)] = c__34571__auto___39677);

return statearr_39676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___39677,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39698_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39698_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39700 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39700){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39699){if((e39699 instanceof Error)){
var e = e39699;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39700], null));
} else {
var e = e39699;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39700))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39701){
var map__39702 = p__39701;
var map__39702__$1 = ((((!((map__39702 == null)))?((((map__39702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39702):map__39702);
var opts = map__39702__$1;
var build_id = cljs.core.get.call(null,map__39702__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39702,map__39702__$1,opts,build_id){
return (function (p__39704){
var vec__39705 = p__39704;
var seq__39706 = cljs.core.seq.call(null,vec__39705);
var first__39707 = cljs.core.first.call(null,seq__39706);
var seq__39706__$1 = cljs.core.next.call(null,seq__39706);
var map__39708 = first__39707;
var map__39708__$1 = ((((!((map__39708 == null)))?((((map__39708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39708):map__39708);
var msg = map__39708__$1;
var msg_name = cljs.core.get.call(null,map__39708__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39706__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39705,seq__39706,first__39707,seq__39706__$1,map__39708,map__39708__$1,msg,msg_name,_,map__39702,map__39702__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39705,seq__39706,first__39707,seq__39706__$1,map__39708,map__39708__$1,msg,msg_name,_,map__39702,map__39702__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39702,map__39702__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39710){
var vec__39711 = p__39710;
var seq__39712 = cljs.core.seq.call(null,vec__39711);
var first__39713 = cljs.core.first.call(null,seq__39712);
var seq__39712__$1 = cljs.core.next.call(null,seq__39712);
var map__39714 = first__39713;
var map__39714__$1 = ((((!((map__39714 == null)))?((((map__39714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39714):map__39714);
var msg = map__39714__$1;
var msg_name = cljs.core.get.call(null,map__39714__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39712__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39716){
var map__39717 = p__39716;
var map__39717__$1 = ((((!((map__39717 == null)))?((((map__39717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39717):map__39717);
var on_compile_warning = cljs.core.get.call(null,map__39717__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39717__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39717,map__39717__$1,on_compile_warning,on_compile_fail){
return (function (p__39719){
var vec__39720 = p__39719;
var seq__39721 = cljs.core.seq.call(null,vec__39720);
var first__39722 = cljs.core.first.call(null,seq__39721);
var seq__39721__$1 = cljs.core.next.call(null,seq__39721);
var map__39723 = first__39722;
var map__39723__$1 = ((((!((map__39723 == null)))?((((map__39723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39723):map__39723);
var msg = map__39723__$1;
var msg_name = cljs.core.get.call(null,map__39723__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39721__$1;
var pred__39725 = cljs.core._EQ_;
var expr__39726 = msg_name;
if(cljs.core.truth_(pred__39725.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39726))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39725.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39726))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39717,map__39717__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__,msg_hist,msg_names,msg){
return (function (state_39815){
var state_val_39816 = (state_39815[(1)]);
if((state_val_39816 === (7))){
var inst_39735 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39735)){
var statearr_39817_39864 = state_39815__$1;
(statearr_39817_39864[(1)] = (8));

} else {
var statearr_39818_39865 = state_39815__$1;
(statearr_39818_39865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (20))){
var inst_39809 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39819_39866 = state_39815__$1;
(statearr_39819_39866[(2)] = inst_39809);

(statearr_39819_39866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (27))){
var inst_39805 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39820_39867 = state_39815__$1;
(statearr_39820_39867[(2)] = inst_39805);

(statearr_39820_39867[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (1))){
var inst_39728 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39728)){
var statearr_39821_39868 = state_39815__$1;
(statearr_39821_39868[(1)] = (2));

} else {
var statearr_39822_39869 = state_39815__$1;
(statearr_39822_39869[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (24))){
var inst_39807 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39823_39870 = state_39815__$1;
(statearr_39823_39870[(2)] = inst_39807);

(statearr_39823_39870[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (4))){
var inst_39813 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39815__$1,inst_39813);
} else {
if((state_val_39816 === (15))){
var inst_39811 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39824_39871 = state_39815__$1;
(statearr_39824_39871[(2)] = inst_39811);

(statearr_39824_39871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (21))){
var inst_39764 = (state_39815[(2)]);
var inst_39765 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39766 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39765);
var state_39815__$1 = (function (){var statearr_39825 = state_39815;
(statearr_39825[(7)] = inst_39764);

return statearr_39825;
})();
var statearr_39826_39872 = state_39815__$1;
(statearr_39826_39872[(2)] = inst_39766);

(statearr_39826_39872[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (31))){
var inst_39794 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39794)){
var statearr_39827_39873 = state_39815__$1;
(statearr_39827_39873[(1)] = (34));

} else {
var statearr_39828_39874 = state_39815__$1;
(statearr_39828_39874[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (32))){
var inst_39803 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39829_39875 = state_39815__$1;
(statearr_39829_39875[(2)] = inst_39803);

(statearr_39829_39875[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (33))){
var inst_39790 = (state_39815[(2)]);
var inst_39791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39792 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39791);
var state_39815__$1 = (function (){var statearr_39830 = state_39815;
(statearr_39830[(8)] = inst_39790);

return statearr_39830;
})();
var statearr_39831_39876 = state_39815__$1;
(statearr_39831_39876[(2)] = inst_39792);

(statearr_39831_39876[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (13))){
var inst_39749 = figwheel.client.heads_up.clear.call(null);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(16),inst_39749);
} else {
if((state_val_39816 === (22))){
var inst_39770 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39771 = figwheel.client.heads_up.append_warning_message.call(null,inst_39770);
var state_39815__$1 = state_39815;
var statearr_39832_39877 = state_39815__$1;
(statearr_39832_39877[(2)] = inst_39771);

(statearr_39832_39877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (36))){
var inst_39801 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39833_39878 = state_39815__$1;
(statearr_39833_39878[(2)] = inst_39801);

(statearr_39833_39878[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (29))){
var inst_39781 = (state_39815[(2)]);
var inst_39782 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39783 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39782);
var state_39815__$1 = (function (){var statearr_39834 = state_39815;
(statearr_39834[(9)] = inst_39781);

return statearr_39834;
})();
var statearr_39835_39879 = state_39815__$1;
(statearr_39835_39879[(2)] = inst_39783);

(statearr_39835_39879[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (6))){
var inst_39730 = (state_39815[(10)]);
var state_39815__$1 = state_39815;
var statearr_39836_39880 = state_39815__$1;
(statearr_39836_39880[(2)] = inst_39730);

(statearr_39836_39880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (28))){
var inst_39777 = (state_39815[(2)]);
var inst_39778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39779 = figwheel.client.heads_up.display_warning.call(null,inst_39778);
var state_39815__$1 = (function (){var statearr_39837 = state_39815;
(statearr_39837[(11)] = inst_39777);

return statearr_39837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(29),inst_39779);
} else {
if((state_val_39816 === (25))){
var inst_39775 = figwheel.client.heads_up.clear.call(null);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(28),inst_39775);
} else {
if((state_val_39816 === (34))){
var inst_39796 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(37),inst_39796);
} else {
if((state_val_39816 === (17))){
var inst_39755 = (state_39815[(2)]);
var inst_39756 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39757 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39756);
var state_39815__$1 = (function (){var statearr_39838 = state_39815;
(statearr_39838[(12)] = inst_39755);

return statearr_39838;
})();
var statearr_39839_39881 = state_39815__$1;
(statearr_39839_39881[(2)] = inst_39757);

(statearr_39839_39881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (3))){
var inst_39747 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39747)){
var statearr_39840_39882 = state_39815__$1;
(statearr_39840_39882[(1)] = (13));

} else {
var statearr_39841_39883 = state_39815__$1;
(statearr_39841_39883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (12))){
var inst_39743 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39842_39884 = state_39815__$1;
(statearr_39842_39884[(2)] = inst_39743);

(statearr_39842_39884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (2))){
var inst_39730 = (state_39815[(10)]);
var inst_39730__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39815__$1 = (function (){var statearr_39843 = state_39815;
(statearr_39843[(10)] = inst_39730__$1);

return statearr_39843;
})();
if(cljs.core.truth_(inst_39730__$1)){
var statearr_39844_39885 = state_39815__$1;
(statearr_39844_39885[(1)] = (5));

} else {
var statearr_39845_39886 = state_39815__$1;
(statearr_39845_39886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (23))){
var inst_39773 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39773)){
var statearr_39846_39887 = state_39815__$1;
(statearr_39846_39887[(1)] = (25));

} else {
var statearr_39847_39888 = state_39815__$1;
(statearr_39847_39888[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (35))){
var state_39815__$1 = state_39815;
var statearr_39848_39889 = state_39815__$1;
(statearr_39848_39889[(2)] = null);

(statearr_39848_39889[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (19))){
var inst_39768 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39768)){
var statearr_39849_39890 = state_39815__$1;
(statearr_39849_39890[(1)] = (22));

} else {
var statearr_39850_39891 = state_39815__$1;
(statearr_39850_39891[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (11))){
var inst_39739 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39851_39892 = state_39815__$1;
(statearr_39851_39892[(2)] = inst_39739);

(statearr_39851_39892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (9))){
var inst_39741 = figwheel.client.heads_up.clear.call(null);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(12),inst_39741);
} else {
if((state_val_39816 === (5))){
var inst_39732 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39815__$1 = state_39815;
var statearr_39852_39893 = state_39815__$1;
(statearr_39852_39893[(2)] = inst_39732);

(statearr_39852_39893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (14))){
var inst_39759 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39759)){
var statearr_39853_39894 = state_39815__$1;
(statearr_39853_39894[(1)] = (18));

} else {
var statearr_39854_39895 = state_39815__$1;
(statearr_39854_39895[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (26))){
var inst_39785 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39785)){
var statearr_39855_39896 = state_39815__$1;
(statearr_39855_39896[(1)] = (30));

} else {
var statearr_39856_39897 = state_39815__$1;
(statearr_39856_39897[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (16))){
var inst_39751 = (state_39815[(2)]);
var inst_39752 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39753 = figwheel.client.heads_up.display_exception.call(null,inst_39752);
var state_39815__$1 = (function (){var statearr_39857 = state_39815;
(statearr_39857[(13)] = inst_39751);

return statearr_39857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(17),inst_39753);
} else {
if((state_val_39816 === (30))){
var inst_39787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39788 = figwheel.client.heads_up.display_warning.call(null,inst_39787);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(33),inst_39788);
} else {
if((state_val_39816 === (10))){
var inst_39745 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39858_39898 = state_39815__$1;
(statearr_39858_39898[(2)] = inst_39745);

(statearr_39858_39898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (18))){
var inst_39761 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39762 = figwheel.client.heads_up.display_exception.call(null,inst_39761);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(21),inst_39762);
} else {
if((state_val_39816 === (37))){
var inst_39798 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39859_39899 = state_39815__$1;
(statearr_39859_39899[(2)] = inst_39798);

(statearr_39859_39899[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (8))){
var inst_39737 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(11),inst_39737);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34571__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34481__auto__,c__34571__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____0 = (function (){
var statearr_39860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39860[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__);

(statearr_39860[(1)] = (1));

return statearr_39860;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____1 = (function (state_39815){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39861){if((e39861 instanceof Object)){
var ex__34485__auto__ = e39861;
var statearr_39862_39900 = state_39815;
(statearr_39862_39900[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39901 = state_39815;
state_39815 = G__39901;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__ = function(state_39815){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____1.call(this,state_39815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__,msg_hist,msg_names,msg))
})();
var state__34573__auto__ = (function (){var statearr_39863 = f__34572__auto__.call(null);
(statearr_39863[(6)] = c__34571__auto__);

return statearr_39863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__,msg_hist,msg_names,msg))
);

return c__34571__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34571__auto___39930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___39930,ch){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___39930,ch){
return (function (state_39916){
var state_val_39917 = (state_39916[(1)]);
if((state_val_39917 === (1))){
var state_39916__$1 = state_39916;
var statearr_39918_39931 = state_39916__$1;
(statearr_39918_39931[(2)] = null);

(statearr_39918_39931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (2))){
var state_39916__$1 = state_39916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39916__$1,(4),ch);
} else {
if((state_val_39917 === (3))){
var inst_39914 = (state_39916[(2)]);
var state_39916__$1 = state_39916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39916__$1,inst_39914);
} else {
if((state_val_39917 === (4))){
var inst_39904 = (state_39916[(7)]);
var inst_39904__$1 = (state_39916[(2)]);
var state_39916__$1 = (function (){var statearr_39919 = state_39916;
(statearr_39919[(7)] = inst_39904__$1);

return statearr_39919;
})();
if(cljs.core.truth_(inst_39904__$1)){
var statearr_39920_39932 = state_39916__$1;
(statearr_39920_39932[(1)] = (5));

} else {
var statearr_39921_39933 = state_39916__$1;
(statearr_39921_39933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (5))){
var inst_39904 = (state_39916[(7)]);
var inst_39906 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39904);
var state_39916__$1 = state_39916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39916__$1,(8),inst_39906);
} else {
if((state_val_39917 === (6))){
var state_39916__$1 = state_39916;
var statearr_39922_39934 = state_39916__$1;
(statearr_39922_39934[(2)] = null);

(statearr_39922_39934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (7))){
var inst_39912 = (state_39916[(2)]);
var state_39916__$1 = state_39916;
var statearr_39923_39935 = state_39916__$1;
(statearr_39923_39935[(2)] = inst_39912);

(statearr_39923_39935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (8))){
var inst_39908 = (state_39916[(2)]);
var state_39916__$1 = (function (){var statearr_39924 = state_39916;
(statearr_39924[(8)] = inst_39908);

return statearr_39924;
})();
var statearr_39925_39936 = state_39916__$1;
(statearr_39925_39936[(2)] = null);

(statearr_39925_39936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34571__auto___39930,ch))
;
return ((function (switch__34481__auto__,c__34571__auto___39930,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34482__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34482__auto____0 = (function (){
var statearr_39926 = [null,null,null,null,null,null,null,null,null];
(statearr_39926[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34482__auto__);

(statearr_39926[(1)] = (1));

return statearr_39926;
});
var figwheel$client$heads_up_plugin_$_state_machine__34482__auto____1 = (function (state_39916){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39927){if((e39927 instanceof Object)){
var ex__34485__auto__ = e39927;
var statearr_39928_39937 = state_39916;
(statearr_39928_39937[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39938 = state_39916;
state_39916 = G__39938;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34482__auto__ = function(state_39916){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34482__auto____1.call(this,state_39916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34482__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34482__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___39930,ch))
})();
var state__34573__auto__ = (function (){var statearr_39929 = f__34572__auto__.call(null);
(statearr_39929[(6)] = c__34571__auto___39930);

return statearr_39929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___39930,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__){
return (function (state_39944){
var state_val_39945 = (state_39944[(1)]);
if((state_val_39945 === (1))){
var inst_39939 = cljs.core.async.timeout.call(null,(3000));
var state_39944__$1 = state_39944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39944__$1,(2),inst_39939);
} else {
if((state_val_39945 === (2))){
var inst_39941 = (state_39944[(2)]);
var inst_39942 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39944__$1 = (function (){var statearr_39946 = state_39944;
(statearr_39946[(7)] = inst_39941);

return statearr_39946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39944__$1,inst_39942);
} else {
return null;
}
}
});})(c__34571__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____0 = (function (){
var statearr_39947 = [null,null,null,null,null,null,null,null];
(statearr_39947[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__);

(statearr_39947[(1)] = (1));

return statearr_39947;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____1 = (function (state_39944){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39948){if((e39948 instanceof Object)){
var ex__34485__auto__ = e39948;
var statearr_39949_39951 = state_39944;
(statearr_39949_39951[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39952 = state_39944;
state_39944 = G__39952;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__ = function(state_39944){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____1.call(this,state_39944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34482__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__))
})();
var state__34573__auto__ = (function (){var statearr_39950 = f__34572__auto__.call(null);
(statearr_39950[(6)] = c__34571__auto__);

return statearr_39950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__))
);

return c__34571__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39959){
var state_val_39960 = (state_39959[(1)]);
if((state_val_39960 === (1))){
var inst_39953 = cljs.core.async.timeout.call(null,(2000));
var state_39959__$1 = state_39959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39959__$1,(2),inst_39953);
} else {
if((state_val_39960 === (2))){
var inst_39955 = (state_39959[(2)]);
var inst_39956 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39957 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39956);
var state_39959__$1 = (function (){var statearr_39961 = state_39959;
(statearr_39961[(7)] = inst_39955);

return statearr_39961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39959__$1,inst_39957);
} else {
return null;
}
}
});})(c__34571__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto____0 = (function (){
var statearr_39962 = [null,null,null,null,null,null,null,null];
(statearr_39962[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto__);

(statearr_39962[(1)] = (1));

return statearr_39962;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto____1 = (function (state_39959){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39963){if((e39963 instanceof Object)){
var ex__34485__auto__ = e39963;
var statearr_39964_39966 = state_39959;
(statearr_39964_39966[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39967 = state_39959;
state_39959 = G__39967;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto__ = function(state_39959){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto____1.call(this,state_39959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34573__auto__ = (function (){var statearr_39965 = f__34572__auto__.call(null);
(statearr_39965[(6)] = c__34571__auto__);

return statearr_39965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__,figwheel_version,temp__5457__auto__))
);

return c__34571__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39968){
var map__39969 = p__39968;
var map__39969__$1 = ((((!((map__39969 == null)))?((((map__39969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39969):map__39969);
var file = cljs.core.get.call(null,map__39969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39969__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39969__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39971 = "";
var G__39971__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39971),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39971);
var G__39971__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39971__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39971__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = line;
if(cljs.core.truth_(and__30071__auto__)){
return column;
} else {
return and__30071__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39971__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39971__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39972){
var map__39973 = p__39972;
var map__39973__$1 = ((((!((map__39973 == null)))?((((map__39973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39973):map__39973);
var ed = map__39973__$1;
var formatted_exception = cljs.core.get.call(null,map__39973__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39973__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39973__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39975_39979 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39976_39980 = null;
var count__39977_39981 = (0);
var i__39978_39982 = (0);
while(true){
if((i__39978_39982 < count__39977_39981)){
var msg_39983 = cljs.core._nth.call(null,chunk__39976_39980,i__39978_39982);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39983);

var G__39984 = seq__39975_39979;
var G__39985 = chunk__39976_39980;
var G__39986 = count__39977_39981;
var G__39987 = (i__39978_39982 + (1));
seq__39975_39979 = G__39984;
chunk__39976_39980 = G__39985;
count__39977_39981 = G__39986;
i__39978_39982 = G__39987;
continue;
} else {
var temp__5457__auto___39988 = cljs.core.seq.call(null,seq__39975_39979);
if(temp__5457__auto___39988){
var seq__39975_39989__$1 = temp__5457__auto___39988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39975_39989__$1)){
var c__31014__auto___39990 = cljs.core.chunk_first.call(null,seq__39975_39989__$1);
var G__39991 = cljs.core.chunk_rest.call(null,seq__39975_39989__$1);
var G__39992 = c__31014__auto___39990;
var G__39993 = cljs.core.count.call(null,c__31014__auto___39990);
var G__39994 = (0);
seq__39975_39979 = G__39991;
chunk__39976_39980 = G__39992;
count__39977_39981 = G__39993;
i__39978_39982 = G__39994;
continue;
} else {
var msg_39995 = cljs.core.first.call(null,seq__39975_39989__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39995);

var G__39996 = cljs.core.next.call(null,seq__39975_39989__$1);
var G__39997 = null;
var G__39998 = (0);
var G__39999 = (0);
seq__39975_39979 = G__39996;
chunk__39976_39980 = G__39997;
count__39977_39981 = G__39998;
i__39978_39982 = G__39999;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40000){
var map__40001 = p__40000;
var map__40001__$1 = ((((!((map__40001 == null)))?((((map__40001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40001):map__40001);
var w = map__40001__$1;
var message = cljs.core.get.call(null,map__40001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30071__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30071__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40003 = cljs.core.seq.call(null,plugins);
var chunk__40004 = null;
var count__40005 = (0);
var i__40006 = (0);
while(true){
if((i__40006 < count__40005)){
var vec__40007 = cljs.core._nth.call(null,chunk__40004,i__40006);
var k = cljs.core.nth.call(null,vec__40007,(0),null);
var plugin = cljs.core.nth.call(null,vec__40007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40013 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40003,chunk__40004,count__40005,i__40006,pl_40013,vec__40007,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40013.call(null,msg_hist);
});})(seq__40003,chunk__40004,count__40005,i__40006,pl_40013,vec__40007,k,plugin))
);
} else {
}

var G__40014 = seq__40003;
var G__40015 = chunk__40004;
var G__40016 = count__40005;
var G__40017 = (i__40006 + (1));
seq__40003 = G__40014;
chunk__40004 = G__40015;
count__40005 = G__40016;
i__40006 = G__40017;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40003);
if(temp__5457__auto__){
var seq__40003__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40003__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__40003__$1);
var G__40018 = cljs.core.chunk_rest.call(null,seq__40003__$1);
var G__40019 = c__31014__auto__;
var G__40020 = cljs.core.count.call(null,c__31014__auto__);
var G__40021 = (0);
seq__40003 = G__40018;
chunk__40004 = G__40019;
count__40005 = G__40020;
i__40006 = G__40021;
continue;
} else {
var vec__40010 = cljs.core.first.call(null,seq__40003__$1);
var k = cljs.core.nth.call(null,vec__40010,(0),null);
var plugin = cljs.core.nth.call(null,vec__40010,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40022 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40003,chunk__40004,count__40005,i__40006,pl_40022,vec__40010,k,plugin,seq__40003__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40022.call(null,msg_hist);
});})(seq__40003,chunk__40004,count__40005,i__40006,pl_40022,vec__40010,k,plugin,seq__40003__$1,temp__5457__auto__))
);
} else {
}

var G__40023 = cljs.core.next.call(null,seq__40003__$1);
var G__40024 = null;
var G__40025 = (0);
var G__40026 = (0);
seq__40003 = G__40023;
chunk__40004 = G__40024;
count__40005 = G__40025;
i__40006 = G__40026;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__40028 = arguments.length;
switch (G__40028) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40029_40034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40030_40035 = null;
var count__40031_40036 = (0);
var i__40032_40037 = (0);
while(true){
if((i__40032_40037 < count__40031_40036)){
var msg_40038 = cljs.core._nth.call(null,chunk__40030_40035,i__40032_40037);
figwheel.client.socket.handle_incoming_message.call(null,msg_40038);

var G__40039 = seq__40029_40034;
var G__40040 = chunk__40030_40035;
var G__40041 = count__40031_40036;
var G__40042 = (i__40032_40037 + (1));
seq__40029_40034 = G__40039;
chunk__40030_40035 = G__40040;
count__40031_40036 = G__40041;
i__40032_40037 = G__40042;
continue;
} else {
var temp__5457__auto___40043 = cljs.core.seq.call(null,seq__40029_40034);
if(temp__5457__auto___40043){
var seq__40029_40044__$1 = temp__5457__auto___40043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40029_40044__$1)){
var c__31014__auto___40045 = cljs.core.chunk_first.call(null,seq__40029_40044__$1);
var G__40046 = cljs.core.chunk_rest.call(null,seq__40029_40044__$1);
var G__40047 = c__31014__auto___40045;
var G__40048 = cljs.core.count.call(null,c__31014__auto___40045);
var G__40049 = (0);
seq__40029_40034 = G__40046;
chunk__40030_40035 = G__40047;
count__40031_40036 = G__40048;
i__40032_40037 = G__40049;
continue;
} else {
var msg_40050 = cljs.core.first.call(null,seq__40029_40044__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40050);

var G__40051 = cljs.core.next.call(null,seq__40029_40044__$1);
var G__40052 = null;
var G__40053 = (0);
var G__40054 = (0);
seq__40029_40034 = G__40051;
chunk__40030_40035 = G__40052;
count__40031_40036 = G__40053;
i__40032_40037 = G__40054;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31369__auto__ = [];
var len__31362__auto___40059 = arguments.length;
var i__31363__auto___40060 = (0);
while(true){
if((i__31363__auto___40060 < len__31362__auto___40059)){
args__31369__auto__.push((arguments[i__31363__auto___40060]));

var G__40061 = (i__31363__auto___40060 + (1));
i__31363__auto___40060 = G__40061;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40056){
var map__40057 = p__40056;
var map__40057__$1 = ((((!((map__40057 == null)))?((((map__40057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40057):map__40057);
var opts = map__40057__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40055){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40055));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40062){if((e40062 instanceof Error)){
var e = e40062;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40062;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40063){
var map__40064 = p__40063;
var map__40064__$1 = ((((!((map__40064 == null)))?((((map__40064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40064):map__40064);
var msg_name = cljs.core.get.call(null,map__40064__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515667576051
