// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30083__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30083__auto__){
return or__30083__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30083__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
var or__30083__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30083__auto____$1)){
return or__30083__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37819_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37819_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37820 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37821 = null;
var count__37822 = (0);
var i__37823 = (0);
while(true){
if((i__37823 < count__37822)){
var n = cljs.core._nth.call(null,chunk__37821,i__37823);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37824 = seq__37820;
var G__37825 = chunk__37821;
var G__37826 = count__37822;
var G__37827 = (i__37823 + (1));
seq__37820 = G__37824;
chunk__37821 = G__37825;
count__37822 = G__37826;
i__37823 = G__37827;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37820);
if(temp__5457__auto__){
var seq__37820__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37820__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__37820__$1);
var G__37828 = cljs.core.chunk_rest.call(null,seq__37820__$1);
var G__37829 = c__31014__auto__;
var G__37830 = cljs.core.count.call(null,c__31014__auto__);
var G__37831 = (0);
seq__37820 = G__37828;
chunk__37821 = G__37829;
count__37822 = G__37830;
i__37823 = G__37831;
continue;
} else {
var n = cljs.core.first.call(null,seq__37820__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37832 = cljs.core.next.call(null,seq__37820__$1);
var G__37833 = null;
var G__37834 = (0);
var G__37835 = (0);
seq__37820 = G__37832;
chunk__37821 = G__37833;
count__37822 = G__37834;
i__37823 = G__37835;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37836){
var vec__37837 = p__37836;
var _ = cljs.core.nth.call(null,vec__37837,(0),null);
var v = cljs.core.nth.call(null,vec__37837,(1),null);
var and__30071__auto__ = v;
if(cljs.core.truth_(and__30071__auto__)){
return v.call(null,dep);
} else {
return and__30071__auto__;
}
}),cljs.core.filter.call(null,(function (p__37840){
var vec__37841 = p__37840;
var k = cljs.core.nth.call(null,vec__37841,(0),null);
var v = cljs.core.nth.call(null,vec__37841,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37853_37861 = cljs.core.seq.call(null,deps);
var chunk__37854_37862 = null;
var count__37855_37863 = (0);
var i__37856_37864 = (0);
while(true){
if((i__37856_37864 < count__37855_37863)){
var dep_37865 = cljs.core._nth.call(null,chunk__37854_37862,i__37856_37864);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_37865;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37865));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37865,(depth + (1)),state);
} else {
}

var G__37866 = seq__37853_37861;
var G__37867 = chunk__37854_37862;
var G__37868 = count__37855_37863;
var G__37869 = (i__37856_37864 + (1));
seq__37853_37861 = G__37866;
chunk__37854_37862 = G__37867;
count__37855_37863 = G__37868;
i__37856_37864 = G__37869;
continue;
} else {
var temp__5457__auto___37870 = cljs.core.seq.call(null,seq__37853_37861);
if(temp__5457__auto___37870){
var seq__37853_37871__$1 = temp__5457__auto___37870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37853_37871__$1)){
var c__31014__auto___37872 = cljs.core.chunk_first.call(null,seq__37853_37871__$1);
var G__37873 = cljs.core.chunk_rest.call(null,seq__37853_37871__$1);
var G__37874 = c__31014__auto___37872;
var G__37875 = cljs.core.count.call(null,c__31014__auto___37872);
var G__37876 = (0);
seq__37853_37861 = G__37873;
chunk__37854_37862 = G__37874;
count__37855_37863 = G__37875;
i__37856_37864 = G__37876;
continue;
} else {
var dep_37877 = cljs.core.first.call(null,seq__37853_37871__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_37877;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37877));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37877,(depth + (1)),state);
} else {
}

var G__37878 = cljs.core.next.call(null,seq__37853_37871__$1);
var G__37879 = null;
var G__37880 = (0);
var G__37881 = (0);
seq__37853_37861 = G__37878;
chunk__37854_37862 = G__37879;
count__37855_37863 = G__37880;
i__37856_37864 = G__37881;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37857){
var vec__37858 = p__37857;
var seq__37859 = cljs.core.seq.call(null,vec__37858);
var first__37860 = cljs.core.first.call(null,seq__37859);
var seq__37859__$1 = cljs.core.next.call(null,seq__37859);
var x = first__37860;
var xs = seq__37859__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37858,seq__37859,first__37860,seq__37859__$1,x,xs,get_deps__$1){
return (function (p1__37844_SHARP_){
return clojure.set.difference.call(null,p1__37844_SHARP_,x);
});})(vec__37858,seq__37859,first__37860,seq__37859__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37882 = cljs.core.seq.call(null,provides);
var chunk__37883 = null;
var count__37884 = (0);
var i__37885 = (0);
while(true){
if((i__37885 < count__37884)){
var prov = cljs.core._nth.call(null,chunk__37883,i__37885);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37886_37894 = cljs.core.seq.call(null,requires);
var chunk__37887_37895 = null;
var count__37888_37896 = (0);
var i__37889_37897 = (0);
while(true){
if((i__37889_37897 < count__37888_37896)){
var req_37898 = cljs.core._nth.call(null,chunk__37887_37895,i__37889_37897);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37898,prov);

var G__37899 = seq__37886_37894;
var G__37900 = chunk__37887_37895;
var G__37901 = count__37888_37896;
var G__37902 = (i__37889_37897 + (1));
seq__37886_37894 = G__37899;
chunk__37887_37895 = G__37900;
count__37888_37896 = G__37901;
i__37889_37897 = G__37902;
continue;
} else {
var temp__5457__auto___37903 = cljs.core.seq.call(null,seq__37886_37894);
if(temp__5457__auto___37903){
var seq__37886_37904__$1 = temp__5457__auto___37903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37886_37904__$1)){
var c__31014__auto___37905 = cljs.core.chunk_first.call(null,seq__37886_37904__$1);
var G__37906 = cljs.core.chunk_rest.call(null,seq__37886_37904__$1);
var G__37907 = c__31014__auto___37905;
var G__37908 = cljs.core.count.call(null,c__31014__auto___37905);
var G__37909 = (0);
seq__37886_37894 = G__37906;
chunk__37887_37895 = G__37907;
count__37888_37896 = G__37908;
i__37889_37897 = G__37909;
continue;
} else {
var req_37910 = cljs.core.first.call(null,seq__37886_37904__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37910,prov);

var G__37911 = cljs.core.next.call(null,seq__37886_37904__$1);
var G__37912 = null;
var G__37913 = (0);
var G__37914 = (0);
seq__37886_37894 = G__37911;
chunk__37887_37895 = G__37912;
count__37888_37896 = G__37913;
i__37889_37897 = G__37914;
continue;
}
} else {
}
}
break;
}

var G__37915 = seq__37882;
var G__37916 = chunk__37883;
var G__37917 = count__37884;
var G__37918 = (i__37885 + (1));
seq__37882 = G__37915;
chunk__37883 = G__37916;
count__37884 = G__37917;
i__37885 = G__37918;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37882);
if(temp__5457__auto__){
var seq__37882__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37882__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__37882__$1);
var G__37919 = cljs.core.chunk_rest.call(null,seq__37882__$1);
var G__37920 = c__31014__auto__;
var G__37921 = cljs.core.count.call(null,c__31014__auto__);
var G__37922 = (0);
seq__37882 = G__37919;
chunk__37883 = G__37920;
count__37884 = G__37921;
i__37885 = G__37922;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37882__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37890_37923 = cljs.core.seq.call(null,requires);
var chunk__37891_37924 = null;
var count__37892_37925 = (0);
var i__37893_37926 = (0);
while(true){
if((i__37893_37926 < count__37892_37925)){
var req_37927 = cljs.core._nth.call(null,chunk__37891_37924,i__37893_37926);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37927,prov);

var G__37928 = seq__37890_37923;
var G__37929 = chunk__37891_37924;
var G__37930 = count__37892_37925;
var G__37931 = (i__37893_37926 + (1));
seq__37890_37923 = G__37928;
chunk__37891_37924 = G__37929;
count__37892_37925 = G__37930;
i__37893_37926 = G__37931;
continue;
} else {
var temp__5457__auto___37932__$1 = cljs.core.seq.call(null,seq__37890_37923);
if(temp__5457__auto___37932__$1){
var seq__37890_37933__$1 = temp__5457__auto___37932__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37890_37933__$1)){
var c__31014__auto___37934 = cljs.core.chunk_first.call(null,seq__37890_37933__$1);
var G__37935 = cljs.core.chunk_rest.call(null,seq__37890_37933__$1);
var G__37936 = c__31014__auto___37934;
var G__37937 = cljs.core.count.call(null,c__31014__auto___37934);
var G__37938 = (0);
seq__37890_37923 = G__37935;
chunk__37891_37924 = G__37936;
count__37892_37925 = G__37937;
i__37893_37926 = G__37938;
continue;
} else {
var req_37939 = cljs.core.first.call(null,seq__37890_37933__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37939,prov);

var G__37940 = cljs.core.next.call(null,seq__37890_37933__$1);
var G__37941 = null;
var G__37942 = (0);
var G__37943 = (0);
seq__37890_37923 = G__37940;
chunk__37891_37924 = G__37941;
count__37892_37925 = G__37942;
i__37893_37926 = G__37943;
continue;
}
} else {
}
}
break;
}

var G__37944 = cljs.core.next.call(null,seq__37882__$1);
var G__37945 = null;
var G__37946 = (0);
var G__37947 = (0);
seq__37882 = G__37944;
chunk__37883 = G__37945;
count__37884 = G__37946;
i__37885 = G__37947;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37948_37952 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37949_37953 = null;
var count__37950_37954 = (0);
var i__37951_37955 = (0);
while(true){
if((i__37951_37955 < count__37950_37954)){
var ns_37956 = cljs.core._nth.call(null,chunk__37949_37953,i__37951_37955);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37956);

var G__37957 = seq__37948_37952;
var G__37958 = chunk__37949_37953;
var G__37959 = count__37950_37954;
var G__37960 = (i__37951_37955 + (1));
seq__37948_37952 = G__37957;
chunk__37949_37953 = G__37958;
count__37950_37954 = G__37959;
i__37951_37955 = G__37960;
continue;
} else {
var temp__5457__auto___37961 = cljs.core.seq.call(null,seq__37948_37952);
if(temp__5457__auto___37961){
var seq__37948_37962__$1 = temp__5457__auto___37961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37948_37962__$1)){
var c__31014__auto___37963 = cljs.core.chunk_first.call(null,seq__37948_37962__$1);
var G__37964 = cljs.core.chunk_rest.call(null,seq__37948_37962__$1);
var G__37965 = c__31014__auto___37963;
var G__37966 = cljs.core.count.call(null,c__31014__auto___37963);
var G__37967 = (0);
seq__37948_37952 = G__37964;
chunk__37949_37953 = G__37965;
count__37950_37954 = G__37966;
i__37951_37955 = G__37967;
continue;
} else {
var ns_37968 = cljs.core.first.call(null,seq__37948_37962__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37968);

var G__37969 = cljs.core.next.call(null,seq__37948_37962__$1);
var G__37970 = null;
var G__37971 = (0);
var G__37972 = (0);
seq__37948_37952 = G__37969;
chunk__37949_37953 = G__37970;
count__37950_37954 = G__37971;
i__37951_37955 = G__37972;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30083__auto__ = goog.require__;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37973__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37974__i = 0, G__37974__a = new Array(arguments.length -  0);
while (G__37974__i < G__37974__a.length) {G__37974__a[G__37974__i] = arguments[G__37974__i + 0]; ++G__37974__i;}
  args = new cljs.core.IndexedSeq(G__37974__a,0,null);
} 
return G__37973__delegate.call(this,args);};
G__37973.cljs$lang$maxFixedArity = 0;
G__37973.cljs$lang$applyTo = (function (arglist__37975){
var args = cljs.core.seq(arglist__37975);
return G__37973__delegate(args);
});
G__37973.cljs$core$IFn$_invoke$arity$variadic = G__37973__delegate;
return G__37973;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37976_SHARP_,p2__37977_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37976_SHARP_)].join('')),p2__37977_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37978_SHARP_,p2__37979_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37978_SHARP_)].join(''),p2__37979_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37980 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37980.addCallback(((function (G__37980){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37980))
);

G__37980.addErrback(((function (G__37980){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37980))
);

return G__37980;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37981){if((e37981 instanceof Error)){
var e = e37981;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37981;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37982){if((e37982 instanceof Error)){
var e = e37982;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37982;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37983 = cljs.core._EQ_;
var expr__37984 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37983.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37984))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37983.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37984))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37983.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37984))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37983,expr__37984){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37983,expr__37984))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37986,callback){
var map__37987 = p__37986;
var map__37987__$1 = ((((!((map__37987 == null)))?((((map__37987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37987):map__37987);
var file_msg = map__37987__$1;
var request_url = cljs.core.get.call(null,map__37987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30083__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37987,map__37987__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37987,map__37987__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__){
return (function (state_38027){
var state_val_38028 = (state_38027[(1)]);
if((state_val_38028 === (7))){
var inst_38023 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38029_38056 = state_38027__$1;
(statearr_38029_38056[(2)] = inst_38023);

(statearr_38029_38056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (1))){
var state_38027__$1 = state_38027;
var statearr_38030_38057 = state_38027__$1;
(statearr_38030_38057[(2)] = null);

(statearr_38030_38057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (4))){
var inst_37991 = (state_38027[(7)]);
var inst_37991__$1 = (state_38027[(2)]);
var state_38027__$1 = (function (){var statearr_38031 = state_38027;
(statearr_38031[(7)] = inst_37991__$1);

return statearr_38031;
})();
if(cljs.core.truth_(inst_37991__$1)){
var statearr_38032_38058 = state_38027__$1;
(statearr_38032_38058[(1)] = (5));

} else {
var statearr_38033_38059 = state_38027__$1;
(statearr_38033_38059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (15))){
var inst_38008 = (state_38027[(8)]);
var inst_38005 = (state_38027[(9)]);
var inst_38010 = inst_38008.call(null,inst_38005);
var state_38027__$1 = state_38027;
var statearr_38034_38060 = state_38027__$1;
(statearr_38034_38060[(2)] = inst_38010);

(statearr_38034_38060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (13))){
var inst_38017 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38035_38061 = state_38027__$1;
(statearr_38035_38061[(2)] = inst_38017);

(statearr_38035_38061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (6))){
var state_38027__$1 = state_38027;
var statearr_38036_38062 = state_38027__$1;
(statearr_38036_38062[(2)] = null);

(statearr_38036_38062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (17))){
var inst_38014 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38037_38063 = state_38027__$1;
(statearr_38037_38063[(2)] = inst_38014);

(statearr_38037_38063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (3))){
var inst_38025 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38027__$1,inst_38025);
} else {
if((state_val_38028 === (12))){
var state_38027__$1 = state_38027;
var statearr_38038_38064 = state_38027__$1;
(statearr_38038_38064[(2)] = null);

(statearr_38038_38064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (2))){
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38027__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38028 === (11))){
var inst_37996 = (state_38027[(10)]);
var inst_38003 = figwheel.client.file_reloading.blocking_load.call(null,inst_37996);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38027__$1,(14),inst_38003);
} else {
if((state_val_38028 === (9))){
var inst_37996 = (state_38027[(10)]);
var state_38027__$1 = state_38027;
if(cljs.core.truth_(inst_37996)){
var statearr_38039_38065 = state_38027__$1;
(statearr_38039_38065[(1)] = (11));

} else {
var statearr_38040_38066 = state_38027__$1;
(statearr_38040_38066[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (5))){
var inst_37997 = (state_38027[(11)]);
var inst_37991 = (state_38027[(7)]);
var inst_37996 = cljs.core.nth.call(null,inst_37991,(0),null);
var inst_37997__$1 = cljs.core.nth.call(null,inst_37991,(1),null);
var state_38027__$1 = (function (){var statearr_38041 = state_38027;
(statearr_38041[(11)] = inst_37997__$1);

(statearr_38041[(10)] = inst_37996);

return statearr_38041;
})();
if(cljs.core.truth_(inst_37997__$1)){
var statearr_38042_38067 = state_38027__$1;
(statearr_38042_38067[(1)] = (8));

} else {
var statearr_38043_38068 = state_38027__$1;
(statearr_38043_38068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (14))){
var inst_37996 = (state_38027[(10)]);
var inst_38008 = (state_38027[(8)]);
var inst_38005 = (state_38027[(2)]);
var inst_38006 = console.log("Loading!",inst_37996);
var inst_38007 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38008__$1 = cljs.core.get.call(null,inst_38007,inst_37996);
var state_38027__$1 = (function (){var statearr_38044 = state_38027;
(statearr_38044[(8)] = inst_38008__$1);

(statearr_38044[(9)] = inst_38005);

(statearr_38044[(12)] = inst_38006);

return statearr_38044;
})();
if(cljs.core.truth_(inst_38008__$1)){
var statearr_38045_38069 = state_38027__$1;
(statearr_38045_38069[(1)] = (15));

} else {
var statearr_38046_38070 = state_38027__$1;
(statearr_38046_38070[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (16))){
var inst_38005 = (state_38027[(9)]);
var inst_38012 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38005);
var state_38027__$1 = state_38027;
var statearr_38047_38071 = state_38027__$1;
(statearr_38047_38071[(2)] = inst_38012);

(statearr_38047_38071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (10))){
var inst_38019 = (state_38027[(2)]);
var state_38027__$1 = (function (){var statearr_38048 = state_38027;
(statearr_38048[(13)] = inst_38019);

return statearr_38048;
})();
var statearr_38049_38072 = state_38027__$1;
(statearr_38049_38072[(2)] = null);

(statearr_38049_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (8))){
var inst_37997 = (state_38027[(11)]);
var inst_37999 = console.log("Evaling!",inst_37997);
var inst_38000 = eval(inst_37997);
var state_38027__$1 = (function (){var statearr_38050 = state_38027;
(statearr_38050[(14)] = inst_37999);

return statearr_38050;
})();
var statearr_38051_38073 = state_38027__$1;
(statearr_38051_38073[(2)] = inst_38000);

(statearr_38051_38073[(1)] = (10));


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
});})(c__34571__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34482__auto__ = null;
var figwheel$client$file_reloading$state_machine__34482__auto____0 = (function (){
var statearr_38052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38052[(0)] = figwheel$client$file_reloading$state_machine__34482__auto__);

(statearr_38052[(1)] = (1));

return statearr_38052;
});
var figwheel$client$file_reloading$state_machine__34482__auto____1 = (function (state_38027){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_38027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e38053){if((e38053 instanceof Object)){
var ex__34485__auto__ = e38053;
var statearr_38054_38074 = state_38027;
(statearr_38054_38074[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38075 = state_38027;
state_38027 = G__38075;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34482__auto__ = function(state_38027){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34482__auto____1.call(this,state_38027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34482__auto____0;
figwheel$client$file_reloading$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34482__auto____1;
return figwheel$client$file_reloading$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__))
})();
var state__34573__auto__ = (function (){var statearr_38055 = f__34572__auto__.call(null);
(statearr_38055[(6)] = c__34571__auto__);

return statearr_38055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__))
);

return c__34571__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38077 = arguments.length;
switch (G__38077) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38079,callback){
var map__38080 = p__38079;
var map__38080__$1 = ((((!((map__38080 == null)))?((((map__38080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38080):map__38080);
var file_msg = map__38080__$1;
var namespace = cljs.core.get.call(null,map__38080__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38080,map__38080__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38080,map__38080__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38082){
var map__38083 = p__38082;
var map__38083__$1 = ((((!((map__38083 == null)))?((((map__38083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38083):map__38083);
var file_msg = map__38083__$1;
var namespace = cljs.core.get.call(null,map__38083__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38085){
var map__38086 = p__38085;
var map__38086__$1 = ((((!((map__38086 == null)))?((((map__38086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38086):map__38086);
var file_msg = map__38086__$1;
var namespace = cljs.core.get.call(null,map__38086__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30071__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30071__auto__){
var or__30083__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
var or__30083__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30083__auto____$1)){
return or__30083__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30071__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38088,callback){
var map__38089 = p__38088;
var map__38089__$1 = ((((!((map__38089 == null)))?((((map__38089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38089):map__38089);
var file_msg = map__38089__$1;
var request_url = cljs.core.get.call(null,map__38089__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38089__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34571__auto___38139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___38139,out){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___38139,out){
return (function (state_38124){
var state_val_38125 = (state_38124[(1)]);
if((state_val_38125 === (1))){
var inst_38098 = cljs.core.seq.call(null,files);
var inst_38099 = cljs.core.first.call(null,inst_38098);
var inst_38100 = cljs.core.next.call(null,inst_38098);
var inst_38101 = files;
var state_38124__$1 = (function (){var statearr_38126 = state_38124;
(statearr_38126[(7)] = inst_38100);

(statearr_38126[(8)] = inst_38101);

(statearr_38126[(9)] = inst_38099);

return statearr_38126;
})();
var statearr_38127_38140 = state_38124__$1;
(statearr_38127_38140[(2)] = null);

(statearr_38127_38140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (2))){
var inst_38101 = (state_38124[(8)]);
var inst_38107 = (state_38124[(10)]);
var inst_38106 = cljs.core.seq.call(null,inst_38101);
var inst_38107__$1 = cljs.core.first.call(null,inst_38106);
var inst_38108 = cljs.core.next.call(null,inst_38106);
var inst_38109 = (inst_38107__$1 == null);
var inst_38110 = cljs.core.not.call(null,inst_38109);
var state_38124__$1 = (function (){var statearr_38128 = state_38124;
(statearr_38128[(11)] = inst_38108);

(statearr_38128[(10)] = inst_38107__$1);

return statearr_38128;
})();
if(inst_38110){
var statearr_38129_38141 = state_38124__$1;
(statearr_38129_38141[(1)] = (4));

} else {
var statearr_38130_38142 = state_38124__$1;
(statearr_38130_38142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (3))){
var inst_38122 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38124__$1,inst_38122);
} else {
if((state_val_38125 === (4))){
var inst_38107 = (state_38124[(10)]);
var inst_38112 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38107);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(7),inst_38112);
} else {
if((state_val_38125 === (5))){
var inst_38118 = cljs.core.async.close_BANG_.call(null,out);
var state_38124__$1 = state_38124;
var statearr_38131_38143 = state_38124__$1;
(statearr_38131_38143[(2)] = inst_38118);

(statearr_38131_38143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (6))){
var inst_38120 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38132_38144 = state_38124__$1;
(statearr_38132_38144[(2)] = inst_38120);

(statearr_38132_38144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (7))){
var inst_38108 = (state_38124[(11)]);
var inst_38114 = (state_38124[(2)]);
var inst_38115 = cljs.core.async.put_BANG_.call(null,out,inst_38114);
var inst_38101 = inst_38108;
var state_38124__$1 = (function (){var statearr_38133 = state_38124;
(statearr_38133[(12)] = inst_38115);

(statearr_38133[(8)] = inst_38101);

return statearr_38133;
})();
var statearr_38134_38145 = state_38124__$1;
(statearr_38134_38145[(2)] = null);

(statearr_38134_38145[(1)] = (2));


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
});})(c__34571__auto___38139,out))
;
return ((function (switch__34481__auto__,c__34571__auto___38139,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____0 = (function (){
var statearr_38135 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38135[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__);

(statearr_38135[(1)] = (1));

return statearr_38135;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____1 = (function (state_38124){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_38124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e38136){if((e38136 instanceof Object)){
var ex__34485__auto__ = e38136;
var statearr_38137_38146 = state_38124;
(statearr_38137_38146[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38147 = state_38124;
state_38124 = G__38147;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__ = function(state_38124){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____1.call(this,state_38124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___38139,out))
})();
var state__34573__auto__ = (function (){var statearr_38138 = f__34572__auto__.call(null);
(statearr_38138[(6)] = c__34571__auto___38139);

return statearr_38138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___38139,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38148,opts){
var map__38149 = p__38148;
var map__38149__$1 = ((((!((map__38149 == null)))?((((map__38149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38149):map__38149);
var eval_body = cljs.core.get.call(null,map__38149__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38149__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30071__auto__ = eval_body;
if(cljs.core.truth_(and__30071__auto__)){
return typeof eval_body === 'string';
} else {
return and__30071__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38151){var e = e38151;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38152_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38152_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38153){
var vec__38154 = p__38153;
var k = cljs.core.nth.call(null,vec__38154,(0),null);
var v = cljs.core.nth.call(null,vec__38154,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38157){
var vec__38158 = p__38157;
var k = cljs.core.nth.call(null,vec__38158,(0),null);
var v = cljs.core.nth.call(null,vec__38158,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38164,p__38165){
var map__38166 = p__38164;
var map__38166__$1 = ((((!((map__38166 == null)))?((((map__38166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38166):map__38166);
var opts = map__38166__$1;
var before_jsload = cljs.core.get.call(null,map__38166__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38166__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38166__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38167 = p__38165;
var map__38167__$1 = ((((!((map__38167 == null)))?((((map__38167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38167):map__38167);
var msg = map__38167__$1;
var files = cljs.core.get.call(null,map__38167__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38167__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38167__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38321){
var state_val_38322 = (state_38321[(1)]);
if((state_val_38322 === (7))){
var inst_38181 = (state_38321[(7)]);
var inst_38184 = (state_38321[(8)]);
var inst_38183 = (state_38321[(9)]);
var inst_38182 = (state_38321[(10)]);
var inst_38189 = cljs.core._nth.call(null,inst_38182,inst_38184);
var inst_38190 = figwheel.client.file_reloading.eval_body.call(null,inst_38189,opts);
var inst_38191 = (inst_38184 + (1));
var tmp38323 = inst_38181;
var tmp38324 = inst_38183;
var tmp38325 = inst_38182;
var inst_38181__$1 = tmp38323;
var inst_38182__$1 = tmp38325;
var inst_38183__$1 = tmp38324;
var inst_38184__$1 = inst_38191;
var state_38321__$1 = (function (){var statearr_38326 = state_38321;
(statearr_38326[(11)] = inst_38190);

(statearr_38326[(7)] = inst_38181__$1);

(statearr_38326[(8)] = inst_38184__$1);

(statearr_38326[(9)] = inst_38183__$1);

(statearr_38326[(10)] = inst_38182__$1);

return statearr_38326;
})();
var statearr_38327_38410 = state_38321__$1;
(statearr_38327_38410[(2)] = null);

(statearr_38327_38410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (20))){
var inst_38224 = (state_38321[(12)]);
var inst_38232 = figwheel.client.file_reloading.sort_files.call(null,inst_38224);
var state_38321__$1 = state_38321;
var statearr_38328_38411 = state_38321__$1;
(statearr_38328_38411[(2)] = inst_38232);

(statearr_38328_38411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (27))){
var state_38321__$1 = state_38321;
var statearr_38329_38412 = state_38321__$1;
(statearr_38329_38412[(2)] = null);

(statearr_38329_38412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (1))){
var inst_38173 = (state_38321[(13)]);
var inst_38170 = before_jsload.call(null,files);
var inst_38171 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38172 = (function (){return ((function (inst_38173,inst_38170,inst_38171,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38161_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38161_SHARP_);
});
;})(inst_38173,inst_38170,inst_38171,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38173__$1 = cljs.core.filter.call(null,inst_38172,files);
var inst_38174 = cljs.core.not_empty.call(null,inst_38173__$1);
var state_38321__$1 = (function (){var statearr_38330 = state_38321;
(statearr_38330[(13)] = inst_38173__$1);

(statearr_38330[(14)] = inst_38171);

(statearr_38330[(15)] = inst_38170);

return statearr_38330;
})();
if(cljs.core.truth_(inst_38174)){
var statearr_38331_38413 = state_38321__$1;
(statearr_38331_38413[(1)] = (2));

} else {
var statearr_38332_38414 = state_38321__$1;
(statearr_38332_38414[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (24))){
var state_38321__$1 = state_38321;
var statearr_38333_38415 = state_38321__$1;
(statearr_38333_38415[(2)] = null);

(statearr_38333_38415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (39))){
var inst_38274 = (state_38321[(16)]);
var state_38321__$1 = state_38321;
var statearr_38334_38416 = state_38321__$1;
(statearr_38334_38416[(2)] = inst_38274);

(statearr_38334_38416[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (46))){
var inst_38316 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
var statearr_38335_38417 = state_38321__$1;
(statearr_38335_38417[(2)] = inst_38316);

(statearr_38335_38417[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (4))){
var inst_38218 = (state_38321[(2)]);
var inst_38219 = cljs.core.List.EMPTY;
var inst_38220 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38219);
var inst_38221 = (function (){return ((function (inst_38218,inst_38219,inst_38220,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38162_SHARP_){
var and__30071__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38162_SHARP_);
if(cljs.core.truth_(and__30071__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38162_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38162_SHARP_)));
} else {
return and__30071__auto__;
}
});
;})(inst_38218,inst_38219,inst_38220,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38222 = cljs.core.filter.call(null,inst_38221,files);
var inst_38223 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38224 = cljs.core.concat.call(null,inst_38222,inst_38223);
var state_38321__$1 = (function (){var statearr_38336 = state_38321;
(statearr_38336[(17)] = inst_38220);

(statearr_38336[(18)] = inst_38218);

(statearr_38336[(12)] = inst_38224);

return statearr_38336;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38337_38418 = state_38321__$1;
(statearr_38337_38418[(1)] = (16));

} else {
var statearr_38338_38419 = state_38321__$1;
(statearr_38338_38419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (15))){
var inst_38208 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
var statearr_38339_38420 = state_38321__$1;
(statearr_38339_38420[(2)] = inst_38208);

(statearr_38339_38420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (21))){
var inst_38234 = (state_38321[(19)]);
var inst_38234__$1 = (state_38321[(2)]);
var inst_38235 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38234__$1);
var state_38321__$1 = (function (){var statearr_38340 = state_38321;
(statearr_38340[(19)] = inst_38234__$1);

return statearr_38340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38321__$1,(22),inst_38235);
} else {
if((state_val_38322 === (31))){
var inst_38319 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38321__$1,inst_38319);
} else {
if((state_val_38322 === (32))){
var inst_38274 = (state_38321[(16)]);
var inst_38279 = inst_38274.cljs$lang$protocol_mask$partition0$;
var inst_38280 = (inst_38279 & (64));
var inst_38281 = inst_38274.cljs$core$ISeq$;
var inst_38282 = (cljs.core.PROTOCOL_SENTINEL === inst_38281);
var inst_38283 = (inst_38280) || (inst_38282);
var state_38321__$1 = state_38321;
if(cljs.core.truth_(inst_38283)){
var statearr_38341_38421 = state_38321__$1;
(statearr_38341_38421[(1)] = (35));

} else {
var statearr_38342_38422 = state_38321__$1;
(statearr_38342_38422[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (40))){
var inst_38296 = (state_38321[(20)]);
var inst_38295 = (state_38321[(2)]);
var inst_38296__$1 = cljs.core.get.call(null,inst_38295,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38297 = cljs.core.get.call(null,inst_38295,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38298 = cljs.core.not_empty.call(null,inst_38296__$1);
var state_38321__$1 = (function (){var statearr_38343 = state_38321;
(statearr_38343[(21)] = inst_38297);

(statearr_38343[(20)] = inst_38296__$1);

return statearr_38343;
})();
if(cljs.core.truth_(inst_38298)){
var statearr_38344_38423 = state_38321__$1;
(statearr_38344_38423[(1)] = (41));

} else {
var statearr_38345_38424 = state_38321__$1;
(statearr_38345_38424[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (33))){
var state_38321__$1 = state_38321;
var statearr_38346_38425 = state_38321__$1;
(statearr_38346_38425[(2)] = false);

(statearr_38346_38425[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (13))){
var inst_38194 = (state_38321[(22)]);
var inst_38198 = cljs.core.chunk_first.call(null,inst_38194);
var inst_38199 = cljs.core.chunk_rest.call(null,inst_38194);
var inst_38200 = cljs.core.count.call(null,inst_38198);
var inst_38181 = inst_38199;
var inst_38182 = inst_38198;
var inst_38183 = inst_38200;
var inst_38184 = (0);
var state_38321__$1 = (function (){var statearr_38347 = state_38321;
(statearr_38347[(7)] = inst_38181);

(statearr_38347[(8)] = inst_38184);

(statearr_38347[(9)] = inst_38183);

(statearr_38347[(10)] = inst_38182);

return statearr_38347;
})();
var statearr_38348_38426 = state_38321__$1;
(statearr_38348_38426[(2)] = null);

(statearr_38348_38426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (22))){
var inst_38238 = (state_38321[(23)]);
var inst_38242 = (state_38321[(24)]);
var inst_38237 = (state_38321[(25)]);
var inst_38234 = (state_38321[(19)]);
var inst_38237__$1 = (state_38321[(2)]);
var inst_38238__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38237__$1);
var inst_38239 = (function (){var all_files = inst_38234;
var res_SINGLEQUOTE_ = inst_38237__$1;
var res = inst_38238__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38238,inst_38242,inst_38237,inst_38234,inst_38237__$1,inst_38238__$1,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38163_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38163_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38238,inst_38242,inst_38237,inst_38234,inst_38237__$1,inst_38238__$1,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38240 = cljs.core.filter.call(null,inst_38239,inst_38237__$1);
var inst_38241 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38242__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38241);
var inst_38243 = cljs.core.not_empty.call(null,inst_38242__$1);
var state_38321__$1 = (function (){var statearr_38349 = state_38321;
(statearr_38349[(23)] = inst_38238__$1);

(statearr_38349[(24)] = inst_38242__$1);

(statearr_38349[(26)] = inst_38240);

(statearr_38349[(25)] = inst_38237__$1);

return statearr_38349;
})();
if(cljs.core.truth_(inst_38243)){
var statearr_38350_38427 = state_38321__$1;
(statearr_38350_38427[(1)] = (23));

} else {
var statearr_38351_38428 = state_38321__$1;
(statearr_38351_38428[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (36))){
var state_38321__$1 = state_38321;
var statearr_38352_38429 = state_38321__$1;
(statearr_38352_38429[(2)] = false);

(statearr_38352_38429[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (41))){
var inst_38296 = (state_38321[(20)]);
var inst_38300 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38301 = cljs.core.map.call(null,inst_38300,inst_38296);
var inst_38302 = cljs.core.pr_str.call(null,inst_38301);
var inst_38303 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38302)].join('');
var inst_38304 = figwheel.client.utils.log.call(null,inst_38303);
var state_38321__$1 = state_38321;
var statearr_38353_38430 = state_38321__$1;
(statearr_38353_38430[(2)] = inst_38304);

(statearr_38353_38430[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (43))){
var inst_38297 = (state_38321[(21)]);
var inst_38307 = (state_38321[(2)]);
var inst_38308 = cljs.core.not_empty.call(null,inst_38297);
var state_38321__$1 = (function (){var statearr_38354 = state_38321;
(statearr_38354[(27)] = inst_38307);

return statearr_38354;
})();
if(cljs.core.truth_(inst_38308)){
var statearr_38355_38431 = state_38321__$1;
(statearr_38355_38431[(1)] = (44));

} else {
var statearr_38356_38432 = state_38321__$1;
(statearr_38356_38432[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (29))){
var inst_38274 = (state_38321[(16)]);
var inst_38238 = (state_38321[(23)]);
var inst_38242 = (state_38321[(24)]);
var inst_38240 = (state_38321[(26)]);
var inst_38237 = (state_38321[(25)]);
var inst_38234 = (state_38321[(19)]);
var inst_38270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38273 = (function (){var all_files = inst_38234;
var res_SINGLEQUOTE_ = inst_38237;
var res = inst_38238;
var files_not_loaded = inst_38240;
var dependencies_that_loaded = inst_38242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38274,inst_38238,inst_38242,inst_38240,inst_38237,inst_38234,inst_38270,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38272){
var map__38357 = p__38272;
var map__38357__$1 = ((((!((map__38357 == null)))?((((map__38357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38357):map__38357);
var namespace = cljs.core.get.call(null,map__38357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38274,inst_38238,inst_38242,inst_38240,inst_38237,inst_38234,inst_38270,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38274__$1 = cljs.core.group_by.call(null,inst_38273,inst_38240);
var inst_38276 = (inst_38274__$1 == null);
var inst_38277 = cljs.core.not.call(null,inst_38276);
var state_38321__$1 = (function (){var statearr_38359 = state_38321;
(statearr_38359[(16)] = inst_38274__$1);

(statearr_38359[(28)] = inst_38270);

return statearr_38359;
})();
if(inst_38277){
var statearr_38360_38433 = state_38321__$1;
(statearr_38360_38433[(1)] = (32));

} else {
var statearr_38361_38434 = state_38321__$1;
(statearr_38361_38434[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (44))){
var inst_38297 = (state_38321[(21)]);
var inst_38310 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38297);
var inst_38311 = cljs.core.pr_str.call(null,inst_38310);
var inst_38312 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38311)].join('');
var inst_38313 = figwheel.client.utils.log.call(null,inst_38312);
var state_38321__$1 = state_38321;
var statearr_38362_38435 = state_38321__$1;
(statearr_38362_38435[(2)] = inst_38313);

(statearr_38362_38435[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (6))){
var inst_38215 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
var statearr_38363_38436 = state_38321__$1;
(statearr_38363_38436[(2)] = inst_38215);

(statearr_38363_38436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (28))){
var inst_38240 = (state_38321[(26)]);
var inst_38267 = (state_38321[(2)]);
var inst_38268 = cljs.core.not_empty.call(null,inst_38240);
var state_38321__$1 = (function (){var statearr_38364 = state_38321;
(statearr_38364[(29)] = inst_38267);

return statearr_38364;
})();
if(cljs.core.truth_(inst_38268)){
var statearr_38365_38437 = state_38321__$1;
(statearr_38365_38437[(1)] = (29));

} else {
var statearr_38366_38438 = state_38321__$1;
(statearr_38366_38438[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (25))){
var inst_38238 = (state_38321[(23)]);
var inst_38254 = (state_38321[(2)]);
var inst_38255 = cljs.core.not_empty.call(null,inst_38238);
var state_38321__$1 = (function (){var statearr_38367 = state_38321;
(statearr_38367[(30)] = inst_38254);

return statearr_38367;
})();
if(cljs.core.truth_(inst_38255)){
var statearr_38368_38439 = state_38321__$1;
(statearr_38368_38439[(1)] = (26));

} else {
var statearr_38369_38440 = state_38321__$1;
(statearr_38369_38440[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (34))){
var inst_38290 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
if(cljs.core.truth_(inst_38290)){
var statearr_38370_38441 = state_38321__$1;
(statearr_38370_38441[(1)] = (38));

} else {
var statearr_38371_38442 = state_38321__$1;
(statearr_38371_38442[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (17))){
var state_38321__$1 = state_38321;
var statearr_38372_38443 = state_38321__$1;
(statearr_38372_38443[(2)] = recompile_dependents);

(statearr_38372_38443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (3))){
var state_38321__$1 = state_38321;
var statearr_38373_38444 = state_38321__$1;
(statearr_38373_38444[(2)] = null);

(statearr_38373_38444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (12))){
var inst_38211 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
var statearr_38374_38445 = state_38321__$1;
(statearr_38374_38445[(2)] = inst_38211);

(statearr_38374_38445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (2))){
var inst_38173 = (state_38321[(13)]);
var inst_38180 = cljs.core.seq.call(null,inst_38173);
var inst_38181 = inst_38180;
var inst_38182 = null;
var inst_38183 = (0);
var inst_38184 = (0);
var state_38321__$1 = (function (){var statearr_38375 = state_38321;
(statearr_38375[(7)] = inst_38181);

(statearr_38375[(8)] = inst_38184);

(statearr_38375[(9)] = inst_38183);

(statearr_38375[(10)] = inst_38182);

return statearr_38375;
})();
var statearr_38376_38446 = state_38321__$1;
(statearr_38376_38446[(2)] = null);

(statearr_38376_38446[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (23))){
var inst_38238 = (state_38321[(23)]);
var inst_38242 = (state_38321[(24)]);
var inst_38240 = (state_38321[(26)]);
var inst_38237 = (state_38321[(25)]);
var inst_38234 = (state_38321[(19)]);
var inst_38245 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38247 = (function (){var all_files = inst_38234;
var res_SINGLEQUOTE_ = inst_38237;
var res = inst_38238;
var files_not_loaded = inst_38240;
var dependencies_that_loaded = inst_38242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38238,inst_38242,inst_38240,inst_38237,inst_38234,inst_38245,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38246){
var map__38377 = p__38246;
var map__38377__$1 = ((((!((map__38377 == null)))?((((map__38377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38377):map__38377);
var request_url = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38238,inst_38242,inst_38240,inst_38237,inst_38234,inst_38245,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38248 = cljs.core.reverse.call(null,inst_38242);
var inst_38249 = cljs.core.map.call(null,inst_38247,inst_38248);
var inst_38250 = cljs.core.pr_str.call(null,inst_38249);
var inst_38251 = figwheel.client.utils.log.call(null,inst_38250);
var state_38321__$1 = (function (){var statearr_38379 = state_38321;
(statearr_38379[(31)] = inst_38245);

return statearr_38379;
})();
var statearr_38380_38447 = state_38321__$1;
(statearr_38380_38447[(2)] = inst_38251);

(statearr_38380_38447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (35))){
var state_38321__$1 = state_38321;
var statearr_38381_38448 = state_38321__$1;
(statearr_38381_38448[(2)] = true);

(statearr_38381_38448[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (19))){
var inst_38224 = (state_38321[(12)]);
var inst_38230 = figwheel.client.file_reloading.expand_files.call(null,inst_38224);
var state_38321__$1 = state_38321;
var statearr_38382_38449 = state_38321__$1;
(statearr_38382_38449[(2)] = inst_38230);

(statearr_38382_38449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (11))){
var state_38321__$1 = state_38321;
var statearr_38383_38450 = state_38321__$1;
(statearr_38383_38450[(2)] = null);

(statearr_38383_38450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (9))){
var inst_38213 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
var statearr_38384_38451 = state_38321__$1;
(statearr_38384_38451[(2)] = inst_38213);

(statearr_38384_38451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (5))){
var inst_38184 = (state_38321[(8)]);
var inst_38183 = (state_38321[(9)]);
var inst_38186 = (inst_38184 < inst_38183);
var inst_38187 = inst_38186;
var state_38321__$1 = state_38321;
if(cljs.core.truth_(inst_38187)){
var statearr_38385_38452 = state_38321__$1;
(statearr_38385_38452[(1)] = (7));

} else {
var statearr_38386_38453 = state_38321__$1;
(statearr_38386_38453[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (14))){
var inst_38194 = (state_38321[(22)]);
var inst_38203 = cljs.core.first.call(null,inst_38194);
var inst_38204 = figwheel.client.file_reloading.eval_body.call(null,inst_38203,opts);
var inst_38205 = cljs.core.next.call(null,inst_38194);
var inst_38181 = inst_38205;
var inst_38182 = null;
var inst_38183 = (0);
var inst_38184 = (0);
var state_38321__$1 = (function (){var statearr_38387 = state_38321;
(statearr_38387[(7)] = inst_38181);

(statearr_38387[(32)] = inst_38204);

(statearr_38387[(8)] = inst_38184);

(statearr_38387[(9)] = inst_38183);

(statearr_38387[(10)] = inst_38182);

return statearr_38387;
})();
var statearr_38388_38454 = state_38321__$1;
(statearr_38388_38454[(2)] = null);

(statearr_38388_38454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (45))){
var state_38321__$1 = state_38321;
var statearr_38389_38455 = state_38321__$1;
(statearr_38389_38455[(2)] = null);

(statearr_38389_38455[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (26))){
var inst_38238 = (state_38321[(23)]);
var inst_38242 = (state_38321[(24)]);
var inst_38240 = (state_38321[(26)]);
var inst_38237 = (state_38321[(25)]);
var inst_38234 = (state_38321[(19)]);
var inst_38257 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38259 = (function (){var all_files = inst_38234;
var res_SINGLEQUOTE_ = inst_38237;
var res = inst_38238;
var files_not_loaded = inst_38240;
var dependencies_that_loaded = inst_38242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38238,inst_38242,inst_38240,inst_38237,inst_38234,inst_38257,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38258){
var map__38390 = p__38258;
var map__38390__$1 = ((((!((map__38390 == null)))?((((map__38390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38390):map__38390);
var namespace = cljs.core.get.call(null,map__38390__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38238,inst_38242,inst_38240,inst_38237,inst_38234,inst_38257,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38260 = cljs.core.map.call(null,inst_38259,inst_38238);
var inst_38261 = cljs.core.pr_str.call(null,inst_38260);
var inst_38262 = figwheel.client.utils.log.call(null,inst_38261);
var inst_38263 = (function (){var all_files = inst_38234;
var res_SINGLEQUOTE_ = inst_38237;
var res = inst_38238;
var files_not_loaded = inst_38240;
var dependencies_that_loaded = inst_38242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38238,inst_38242,inst_38240,inst_38237,inst_38234,inst_38257,inst_38259,inst_38260,inst_38261,inst_38262,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38238,inst_38242,inst_38240,inst_38237,inst_38234,inst_38257,inst_38259,inst_38260,inst_38261,inst_38262,state_val_38322,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38264 = setTimeout(inst_38263,(10));
var state_38321__$1 = (function (){var statearr_38392 = state_38321;
(statearr_38392[(33)] = inst_38262);

(statearr_38392[(34)] = inst_38257);

return statearr_38392;
})();
var statearr_38393_38456 = state_38321__$1;
(statearr_38393_38456[(2)] = inst_38264);

(statearr_38393_38456[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (16))){
var state_38321__$1 = state_38321;
var statearr_38394_38457 = state_38321__$1;
(statearr_38394_38457[(2)] = reload_dependents);

(statearr_38394_38457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (38))){
var inst_38274 = (state_38321[(16)]);
var inst_38292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38274);
var state_38321__$1 = state_38321;
var statearr_38395_38458 = state_38321__$1;
(statearr_38395_38458[(2)] = inst_38292);

(statearr_38395_38458[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (30))){
var state_38321__$1 = state_38321;
var statearr_38396_38459 = state_38321__$1;
(statearr_38396_38459[(2)] = null);

(statearr_38396_38459[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (10))){
var inst_38194 = (state_38321[(22)]);
var inst_38196 = cljs.core.chunked_seq_QMARK_.call(null,inst_38194);
var state_38321__$1 = state_38321;
if(inst_38196){
var statearr_38397_38460 = state_38321__$1;
(statearr_38397_38460[(1)] = (13));

} else {
var statearr_38398_38461 = state_38321__$1;
(statearr_38398_38461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (18))){
var inst_38228 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
if(cljs.core.truth_(inst_38228)){
var statearr_38399_38462 = state_38321__$1;
(statearr_38399_38462[(1)] = (19));

} else {
var statearr_38400_38463 = state_38321__$1;
(statearr_38400_38463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (42))){
var state_38321__$1 = state_38321;
var statearr_38401_38464 = state_38321__$1;
(statearr_38401_38464[(2)] = null);

(statearr_38401_38464[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (37))){
var inst_38287 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
var statearr_38402_38465 = state_38321__$1;
(statearr_38402_38465[(2)] = inst_38287);

(statearr_38402_38465[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (8))){
var inst_38181 = (state_38321[(7)]);
var inst_38194 = (state_38321[(22)]);
var inst_38194__$1 = cljs.core.seq.call(null,inst_38181);
var state_38321__$1 = (function (){var statearr_38403 = state_38321;
(statearr_38403[(22)] = inst_38194__$1);

return statearr_38403;
})();
if(inst_38194__$1){
var statearr_38404_38466 = state_38321__$1;
(statearr_38404_38466[(1)] = (10));

} else {
var statearr_38405_38467 = state_38321__$1;
(statearr_38405_38467[(1)] = (11));

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
});})(c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34481__auto__,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____0 = (function (){
var statearr_38406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38406[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__);

(statearr_38406[(1)] = (1));

return statearr_38406;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____1 = (function (state_38321){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_38321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e38407){if((e38407 instanceof Object)){
var ex__34485__auto__ = e38407;
var statearr_38408_38468 = state_38321;
(statearr_38408_38468[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38469 = state_38321;
state_38321 = G__38469;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__ = function(state_38321){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____1.call(this,state_38321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34573__auto__ = (function (){var statearr_38409 = f__34572__auto__.call(null);
(statearr_38409[(6)] = c__34571__auto__);

return statearr_38409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__,map__38166,map__38166__$1,opts,before_jsload,on_jsload,reload_dependents,map__38167,map__38167__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34571__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38472,link){
var map__38473 = p__38472;
var map__38473__$1 = ((((!((map__38473 == null)))?((((map__38473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38473):map__38473);
var file = cljs.core.get.call(null,map__38473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__38473,map__38473__$1,file){
return (function (p1__38470_SHARP_,p2__38471_SHARP_){
if(cljs.core._EQ_.call(null,p1__38470_SHARP_,p2__38471_SHARP_)){
return p1__38470_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__38473,map__38473__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38476){
var map__38477 = p__38476;
var map__38477__$1 = ((((!((map__38477 == null)))?((((map__38477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38477):map__38477);
var match_length = cljs.core.get.call(null,map__38477__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38477__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38475_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38475_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38479_SHARP_,p2__38480_SHARP_){
return cljs.core.assoc.call(null,p1__38479_SHARP_,cljs.core.get.call(null,p2__38480_SHARP_,key),p2__38480_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38481 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38481);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38481);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38482,p__38483){
var map__38484 = p__38482;
var map__38484__$1 = ((((!((map__38484 == null)))?((((map__38484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38484):map__38484);
var on_cssload = cljs.core.get.call(null,map__38484__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38485 = p__38483;
var map__38485__$1 = ((((!((map__38485 == null)))?((((map__38485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38485):map__38485);
var files_msg = map__38485__$1;
var files = cljs.core.get.call(null,map__38485__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1515667569333
