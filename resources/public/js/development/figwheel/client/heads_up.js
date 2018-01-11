// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39409 = arguments.length;
var i__31363__auto___39410 = (0);
while(true){
if((i__31363__auto___39410 < len__31362__auto___39409)){
args__31369__auto__.push((arguments[i__31363__auto___39410]));

var G__39411 = (i__31363__auto___39410 + (1));
i__31363__auto___39410 = G__39411;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((2) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31370__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__39401_39412 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__39402_39413 = null;
var count__39403_39414 = (0);
var i__39404_39415 = (0);
while(true){
if((i__39404_39415 < count__39403_39414)){
var k_39416 = cljs.core._nth.call(null,chunk__39402_39413,i__39404_39415);
e.setAttribute(cljs.core.name.call(null,k_39416),cljs.core.get.call(null,attrs,k_39416));

var G__39417 = seq__39401_39412;
var G__39418 = chunk__39402_39413;
var G__39419 = count__39403_39414;
var G__39420 = (i__39404_39415 + (1));
seq__39401_39412 = G__39417;
chunk__39402_39413 = G__39418;
count__39403_39414 = G__39419;
i__39404_39415 = G__39420;
continue;
} else {
var temp__5457__auto___39421 = cljs.core.seq.call(null,seq__39401_39412);
if(temp__5457__auto___39421){
var seq__39401_39422__$1 = temp__5457__auto___39421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39401_39422__$1)){
var c__31014__auto___39423 = cljs.core.chunk_first.call(null,seq__39401_39422__$1);
var G__39424 = cljs.core.chunk_rest.call(null,seq__39401_39422__$1);
var G__39425 = c__31014__auto___39423;
var G__39426 = cljs.core.count.call(null,c__31014__auto___39423);
var G__39427 = (0);
seq__39401_39412 = G__39424;
chunk__39402_39413 = G__39425;
count__39403_39414 = G__39426;
i__39404_39415 = G__39427;
continue;
} else {
var k_39428 = cljs.core.first.call(null,seq__39401_39422__$1);
e.setAttribute(cljs.core.name.call(null,k_39428),cljs.core.get.call(null,attrs,k_39428));

var G__39429 = cljs.core.next.call(null,seq__39401_39422__$1);
var G__39430 = null;
var G__39431 = (0);
var G__39432 = (0);
seq__39401_39412 = G__39429;
chunk__39402_39413 = G__39430;
count__39403_39414 = G__39431;
i__39404_39415 = G__39432;
continue;
}
} else {
}
}
break;
}

var seq__39405_39433 = cljs.core.seq.call(null,children);
var chunk__39406_39434 = null;
var count__39407_39435 = (0);
var i__39408_39436 = (0);
while(true){
if((i__39408_39436 < count__39407_39435)){
var ch_39437 = cljs.core._nth.call(null,chunk__39406_39434,i__39408_39436);
e.appendChild(ch_39437);

var G__39438 = seq__39405_39433;
var G__39439 = chunk__39406_39434;
var G__39440 = count__39407_39435;
var G__39441 = (i__39408_39436 + (1));
seq__39405_39433 = G__39438;
chunk__39406_39434 = G__39439;
count__39407_39435 = G__39440;
i__39408_39436 = G__39441;
continue;
} else {
var temp__5457__auto___39442 = cljs.core.seq.call(null,seq__39405_39433);
if(temp__5457__auto___39442){
var seq__39405_39443__$1 = temp__5457__auto___39442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39405_39443__$1)){
var c__31014__auto___39444 = cljs.core.chunk_first.call(null,seq__39405_39443__$1);
var G__39445 = cljs.core.chunk_rest.call(null,seq__39405_39443__$1);
var G__39446 = c__31014__auto___39444;
var G__39447 = cljs.core.count.call(null,c__31014__auto___39444);
var G__39448 = (0);
seq__39405_39433 = G__39445;
chunk__39406_39434 = G__39446;
count__39407_39435 = G__39447;
i__39408_39436 = G__39448;
continue;
} else {
var ch_39449 = cljs.core.first.call(null,seq__39405_39443__$1);
e.appendChild(ch_39449);

var G__39450 = cljs.core.next.call(null,seq__39405_39443__$1);
var G__39451 = null;
var G__39452 = (0);
var G__39453 = (0);
seq__39405_39433 = G__39450;
chunk__39406_39434 = G__39451;
count__39407_39435 = G__39452;
i__39408_39436 = G__39453;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq39398){
var G__39399 = cljs.core.first.call(null,seq39398);
var seq39398__$1 = cljs.core.next.call(null,seq39398);
var G__39400 = cljs.core.first.call(null,seq39398__$1);
var seq39398__$2 = cljs.core.next.call(null,seq39398__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__39399,G__39400,seq39398__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__31138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31139__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31140__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31142__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__31138__auto__,prefer_table__31139__auto__,method_cache__31140__auto__,cached_hierarchy__31141__auto__,hierarchy__31142__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__31138__auto__,prefer_table__31139__auto__,method_cache__31140__auto__,cached_hierarchy__31141__auto__,hierarchy__31142__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31142__auto__,method_table__31138__auto__,prefer_table__31139__auto__,method_cache__31140__auto__,cached_hierarchy__31141__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_39454 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_39454.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_39454.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_39454.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_39454);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__39455,st_map){
var map__39456 = p__39455;
var map__39456__$1 = ((((!((map__39456 == null)))?((((map__39456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39456):map__39456);
var container_el = cljs.core.get.call(null,map__39456__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__39456,map__39456__$1,container_el){
return (function (p__39458){
var vec__39459 = p__39458;
var k = cljs.core.nth.call(null,vec__39459,(0),null);
var v = cljs.core.nth.call(null,vec__39459,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__39456,map__39456__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__39462,dom_str){
var map__39463 = p__39462;
var map__39463__$1 = ((((!((map__39463 == null)))?((((map__39463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39463):map__39463);
var c = map__39463__$1;
var content_area_el = cljs.core.get.call(null,map__39463__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__39465){
var map__39466 = p__39465;
var map__39466__$1 = ((((!((map__39466 == null)))?((((map__39466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39466):map__39466);
var content_area_el = cljs.core.get.call(null,map__39466__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__){
return (function (state_39483){
var state_val_39484 = (state_39483[(1)]);
if((state_val_39484 === (1))){
var inst_39468 = (state_39483[(7)]);
var inst_39468__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39469 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39470 = ["10px","10px","100%","68px","1.0"];
var inst_39471 = cljs.core.PersistentHashMap.fromArrays(inst_39469,inst_39470);
var inst_39472 = cljs.core.merge.call(null,inst_39471,style);
var inst_39473 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39468__$1,inst_39472);
var inst_39474 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39468__$1,msg);
var inst_39475 = cljs.core.async.timeout.call(null,(300));
var state_39483__$1 = (function (){var statearr_39485 = state_39483;
(statearr_39485[(8)] = inst_39474);

(statearr_39485[(9)] = inst_39473);

(statearr_39485[(7)] = inst_39468__$1);

return statearr_39485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39483__$1,(2),inst_39475);
} else {
if((state_val_39484 === (2))){
var inst_39468 = (state_39483[(7)]);
var inst_39477 = (state_39483[(2)]);
var inst_39478 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_39479 = ["auto"];
var inst_39480 = cljs.core.PersistentHashMap.fromArrays(inst_39478,inst_39479);
var inst_39481 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39468,inst_39480);
var state_39483__$1 = (function (){var statearr_39486 = state_39483;
(statearr_39486[(10)] = inst_39477);

return statearr_39486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39483__$1,inst_39481);
} else {
return null;
}
}
});})(c__34571__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto____0 = (function (){
var statearr_39487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39487[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto__);

(statearr_39487[(1)] = (1));

return statearr_39487;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto____1 = (function (state_39483){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39488){if((e39488 instanceof Object)){
var ex__34485__auto__ = e39488;
var statearr_39489_39491 = state_39483;
(statearr_39489_39491[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39492 = state_39483;
state_39483 = G__39492;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto__ = function(state_39483){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto____1.call(this,state_39483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__))
})();
var state__34573__auto__ = (function (){var statearr_39490 = f__34572__auto__.call(null);
(statearr_39490[(6)] = c__34571__auto__);

return statearr_39490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__))
);

return c__34571__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__39494 = arguments.length;
switch (G__39494) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__39496){
var map__39497 = p__39496;
var map__39497__$1 = ((((!((map__39497 == null)))?((((map__39497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39497):map__39497);
var file = cljs.core.get.call(null,map__39497__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39497__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39497__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__30083__auto__ = file;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__39499){
var vec__39500 = p__39499;
var typ = cljs.core.nth.call(null,vec__39500,(0),null);
var line_number = cljs.core.nth.call(null,vec__39500,(1),null);
var line = cljs.core.nth.call(null,vec__39500,(2),null);
var pred__39503 = cljs.core._EQ_;
var expr__39504 = typ;
if(cljs.core.truth_(pred__39503.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__39504))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__39503.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__39504))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__39503.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__39504))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__39506_SHARP_){
return cljs.core.update_in.call(null,p1__39506_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__39507_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__39507_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__39510){
var map__39511 = p__39510;
var map__39511__$1 = ((((!((map__39511 == null)))?((((map__39511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39511):map__39511);
var exception = map__39511__$1;
var message = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__30071__auto__ = file;
if(cljs.core.truth_(and__30071__auto__)){
return line;
} else {
return and__30071__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__39511,map__39511__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__39508_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39508_SHARP_),"</div>"].join('');
});})(last_message,map__39511,map__39511__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__39511,map__39511__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__39509_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__39509_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__39509_SHARP_)))].join('');
});})(last_message,map__39511,map__39511__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__39513){
var map__39514 = p__39513;
var map__39514__$1 = ((((!((map__39514 == null)))?((((map__39514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39514):map__39514);
var file = cljs.core.get.call(null,map__39514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39514__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39514__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__39517 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__39517__$1 = ((((!((map__39517 == null)))?((((map__39517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39517):map__39517);
var head = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__39520){
var map__39521 = p__39520;
var map__39521__$1 = ((((!((map__39521 == null)))?((((map__39521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39521):map__39521);
var warning_data = map__39521__$1;
var file = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__30071__auto__ = file;
if(cljs.core.truth_(and__30071__auto__)){
return line;
} else {
return and__30071__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__39521,map__39521__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__39519_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39519_SHARP_),"</div>"].join('');
});})(last_message,map__39521,map__39521__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__39523 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__39523__$1 = ((((!((map__39523 == null)))?((((map__39523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39523):map__39523);
var head = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__39525){
var map__39526 = p__39525;
var map__39526__$1 = ((((!((map__39526 == null)))?((((map__39526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39526):map__39526);
var warning_data = map__39526__$1;
var message = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39528 = message;
var G__39528__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39528)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39528);
var G__39528__$2 = (cljs.core.truth_((function (){var and__30071__auto__ = line;
if(cljs.core.truth_(and__30071__auto__)){
return column;
} else {
return and__30071__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39528__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__39528__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39528__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__39528__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__39529){
var map__39530 = p__39529;
var map__39530__$1 = ((((!((map__39530 == null)))?((((map__39530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39530):map__39530);
var warning_data = map__39530__$1;
var message = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__39532 = figwheel.client.heads_up.ensure_container.call(null);
var map__39532__$1 = ((((!((map__39532 == null)))?((((map__39532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39532):map__39532);
var content_area_el = cljs.core.get.call(null,map__39532__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__){
return (function (state_39551){
var state_val_39552 = (state_39551[(1)]);
if((state_val_39552 === (1))){
var inst_39534 = (state_39551[(7)]);
var inst_39534__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39535 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39536 = ["0.0"];
var inst_39537 = cljs.core.PersistentHashMap.fromArrays(inst_39535,inst_39536);
var inst_39538 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39534__$1,inst_39537);
var inst_39539 = cljs.core.async.timeout.call(null,(300));
var state_39551__$1 = (function (){var statearr_39553 = state_39551;
(statearr_39553[(7)] = inst_39534__$1);

(statearr_39553[(8)] = inst_39538);

return statearr_39553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39551__$1,(2),inst_39539);
} else {
if((state_val_39552 === (2))){
var inst_39534 = (state_39551[(7)]);
var inst_39541 = (state_39551[(2)]);
var inst_39542 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_39543 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_39544 = cljs.core.PersistentHashMap.fromArrays(inst_39542,inst_39543);
var inst_39545 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39534,inst_39544);
var inst_39546 = cljs.core.async.timeout.call(null,(200));
var state_39551__$1 = (function (){var statearr_39554 = state_39551;
(statearr_39554[(9)] = inst_39545);

(statearr_39554[(10)] = inst_39541);

return statearr_39554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39551__$1,(3),inst_39546);
} else {
if((state_val_39552 === (3))){
var inst_39534 = (state_39551[(7)]);
var inst_39548 = (state_39551[(2)]);
var inst_39549 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39534,"");
var state_39551__$1 = (function (){var statearr_39555 = state_39551;
(statearr_39555[(11)] = inst_39548);

return statearr_39555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39551__$1,inst_39549);
} else {
return null;
}
}
}
});})(c__34571__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__34482__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__34482__auto____0 = (function (){
var statearr_39556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39556[(0)] = figwheel$client$heads_up$clear_$_state_machine__34482__auto__);

(statearr_39556[(1)] = (1));

return statearr_39556;
});
var figwheel$client$heads_up$clear_$_state_machine__34482__auto____1 = (function (state_39551){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39557){if((e39557 instanceof Object)){
var ex__34485__auto__ = e39557;
var statearr_39558_39560 = state_39551;
(statearr_39558_39560[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39561 = state_39551;
state_39551 = G__39561;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__34482__auto__ = function(state_39551){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__34482__auto____1.call(this,state_39551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__34482__auto____0;
figwheel$client$heads_up$clear_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__34482__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__))
})();
var state__34573__auto__ = (function (){var statearr_39559 = f__34572__auto__.call(null);
(statearr_39559[(6)] = c__34571__auto__);

return statearr_39559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__))
);

return c__34571__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__){
return (function (state_39572){
var state_val_39573 = (state_39572[(1)]);
if((state_val_39573 === (1))){
var inst_39562 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_39572__$1 = state_39572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39572__$1,(2),inst_39562);
} else {
if((state_val_39573 === (2))){
var inst_39564 = (state_39572[(2)]);
var inst_39565 = cljs.core.async.timeout.call(null,(400));
var state_39572__$1 = (function (){var statearr_39574 = state_39572;
(statearr_39574[(7)] = inst_39564);

return statearr_39574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39572__$1,(3),inst_39565);
} else {
if((state_val_39573 === (3))){
var inst_39567 = (state_39572[(2)]);
var inst_39568 = figwheel.client.heads_up.clear.call(null);
var state_39572__$1 = (function (){var statearr_39575 = state_39572;
(statearr_39575[(8)] = inst_39567);

return statearr_39575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39572__$1,(4),inst_39568);
} else {
if((state_val_39573 === (4))){
var inst_39570 = (state_39572[(2)]);
var state_39572__$1 = state_39572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39572__$1,inst_39570);
} else {
return null;
}
}
}
}
});})(c__34571__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto____0 = (function (){
var statearr_39576 = [null,null,null,null,null,null,null,null,null];
(statearr_39576[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto__);

(statearr_39576[(1)] = (1));

return statearr_39576;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto____1 = (function (state_39572){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_39572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e39577){if((e39577 instanceof Object)){
var ex__34485__auto__ = e39577;
var statearr_39578_39580 = state_39572;
(statearr_39578_39580[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39581 = state_39572;
state_39572 = G__39581;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto__ = function(state_39572){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto____1.call(this,state_39572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__))
})();
var state__34573__auto__ = (function (){var statearr_39579 = f__34572__auto__.call(null);
(statearr_39579[(6)] = c__34571__auto__);

return statearr_39579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__))
);

return c__34571__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1515667575241
