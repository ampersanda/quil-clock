// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34631 = arguments.length;
switch (G__34631) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34632 = (function (f,blockable,meta34633){
this.f = f;
this.blockable = blockable;
this.meta34633 = meta34633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34634,meta34633__$1){
var self__ = this;
var _34634__$1 = this;
return (new cljs.core.async.t_cljs$core$async34632(self__.f,self__.blockable,meta34633__$1));
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34634){
var self__ = this;
var _34634__$1 = this;
return self__.meta34633;
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34633","meta34633",1427085019,null)], null);
});

cljs.core.async.t_cljs$core$async34632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34632";

cljs.core.async.t_cljs$core$async34632.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async34632");
});

cljs.core.async.__GT_t_cljs$core$async34632 = (function cljs$core$async$__GT_t_cljs$core$async34632(f__$1,blockable__$1,meta34633){
return (new cljs.core.async.t_cljs$core$async34632(f__$1,blockable__$1,meta34633));
});

}

return (new cljs.core.async.t_cljs$core$async34632(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34638 = arguments.length;
switch (G__34638) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34641 = arguments.length;
switch (G__34641) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34644 = arguments.length;
switch (G__34644) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34646 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34646);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34646,ret){
return (function (){
return fn1.call(null,val_34646);
});})(val_34646,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34648 = arguments.length;
switch (G__34648) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31128__auto___34650 = n;
var x_34651 = (0);
while(true){
if((x_34651 < n__31128__auto___34650)){
(a[x_34651] = (0));

var G__34652 = (x_34651 + (1));
x_34651 = G__34652;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34653 = (i + (1));
i = G__34653;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34654 = (function (flag,meta34655){
this.flag = flag;
this.meta34655 = meta34655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34656,meta34655__$1){
var self__ = this;
var _34656__$1 = this;
return (new cljs.core.async.t_cljs$core$async34654(self__.flag,meta34655__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34656){
var self__ = this;
var _34656__$1 = this;
return self__.meta34655;
});})(flag))
;

cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34654.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34655","meta34655",834729489,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34654";

cljs.core.async.t_cljs$core$async34654.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async34654");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34654 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34654(flag__$1,meta34655){
return (new cljs.core.async.t_cljs$core$async34654(flag__$1,meta34655));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34654(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34657 = (function (flag,cb,meta34658){
this.flag = flag;
this.cb = cb;
this.meta34658 = meta34658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34659,meta34658__$1){
var self__ = this;
var _34659__$1 = this;
return (new cljs.core.async.t_cljs$core$async34657(self__.flag,self__.cb,meta34658__$1));
});

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34659){
var self__ = this;
var _34659__$1 = this;
return self__.meta34658;
});

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34658","meta34658",465028553,null)], null);
});

cljs.core.async.t_cljs$core$async34657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34657";

cljs.core.async.t_cljs$core$async34657.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async34657");
});

cljs.core.async.__GT_t_cljs$core$async34657 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34657(flag__$1,cb__$1,meta34658){
return (new cljs.core.async.t_cljs$core$async34657(flag__$1,cb__$1,meta34658));
});

}

return (new cljs.core.async.t_cljs$core$async34657(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34660_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34660_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34661_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34661_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30083__auto__ = wport;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34662 = (i + (1));
i = G__34662;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30083__auto__ = ret;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30071__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30071__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___34668 = arguments.length;
var i__31363__auto___34669 = (0);
while(true){
if((i__31363__auto___34669 < len__31362__auto___34668)){
args__31369__auto__.push((arguments[i__31363__auto___34669]));

var G__34670 = (i__31363__auto___34669 + (1));
i__31363__auto___34669 = G__34670;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34665){
var map__34666 = p__34665;
var map__34666__$1 = ((((!((map__34666 == null)))?((((map__34666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34666):map__34666);
var opts = map__34666__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34663){
var G__34664 = cljs.core.first.call(null,seq34663);
var seq34663__$1 = cljs.core.next.call(null,seq34663);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34664,seq34663__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34672 = arguments.length;
switch (G__34672) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34571__auto___34718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___34718){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___34718){
return (function (state_34696){
var state_val_34697 = (state_34696[(1)]);
if((state_val_34697 === (7))){
var inst_34692 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34698_34719 = state_34696__$1;
(statearr_34698_34719[(2)] = inst_34692);

(statearr_34698_34719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (1))){
var state_34696__$1 = state_34696;
var statearr_34699_34720 = state_34696__$1;
(statearr_34699_34720[(2)] = null);

(statearr_34699_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (4))){
var inst_34675 = (state_34696[(7)]);
var inst_34675__$1 = (state_34696[(2)]);
var inst_34676 = (inst_34675__$1 == null);
var state_34696__$1 = (function (){var statearr_34700 = state_34696;
(statearr_34700[(7)] = inst_34675__$1);

return statearr_34700;
})();
if(cljs.core.truth_(inst_34676)){
var statearr_34701_34721 = state_34696__$1;
(statearr_34701_34721[(1)] = (5));

} else {
var statearr_34702_34722 = state_34696__$1;
(statearr_34702_34722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (13))){
var state_34696__$1 = state_34696;
var statearr_34703_34723 = state_34696__$1;
(statearr_34703_34723[(2)] = null);

(statearr_34703_34723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (6))){
var inst_34675 = (state_34696[(7)]);
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34696__$1,(11),to,inst_34675);
} else {
if((state_val_34697 === (3))){
var inst_34694 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34696__$1,inst_34694);
} else {
if((state_val_34697 === (12))){
var state_34696__$1 = state_34696;
var statearr_34704_34724 = state_34696__$1;
(statearr_34704_34724[(2)] = null);

(statearr_34704_34724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (2))){
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34696__$1,(4),from);
} else {
if((state_val_34697 === (11))){
var inst_34685 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
if(cljs.core.truth_(inst_34685)){
var statearr_34705_34725 = state_34696__$1;
(statearr_34705_34725[(1)] = (12));

} else {
var statearr_34706_34726 = state_34696__$1;
(statearr_34706_34726[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (9))){
var state_34696__$1 = state_34696;
var statearr_34707_34727 = state_34696__$1;
(statearr_34707_34727[(2)] = null);

(statearr_34707_34727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (5))){
var state_34696__$1 = state_34696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34708_34728 = state_34696__$1;
(statearr_34708_34728[(1)] = (8));

} else {
var statearr_34709_34729 = state_34696__$1;
(statearr_34709_34729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (14))){
var inst_34690 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34710_34730 = state_34696__$1;
(statearr_34710_34730[(2)] = inst_34690);

(statearr_34710_34730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (10))){
var inst_34682 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34711_34731 = state_34696__$1;
(statearr_34711_34731[(2)] = inst_34682);

(statearr_34711_34731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (8))){
var inst_34679 = cljs.core.async.close_BANG_.call(null,to);
var state_34696__$1 = state_34696;
var statearr_34712_34732 = state_34696__$1;
(statearr_34712_34732[(2)] = inst_34679);

(statearr_34712_34732[(1)] = (10));


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
});})(c__34571__auto___34718))
;
return ((function (switch__34481__auto__,c__34571__auto___34718){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_34713 = [null,null,null,null,null,null,null,null];
(statearr_34713[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_34713[(1)] = (1));

return statearr_34713;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_34696){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e34714){if((e34714 instanceof Object)){
var ex__34485__auto__ = e34714;
var statearr_34715_34733 = state_34696;
(statearr_34715_34733[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34734 = state_34696;
state_34696 = G__34734;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_34696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_34696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___34718))
})();
var state__34573__auto__ = (function (){var statearr_34716 = f__34572__auto__.call(null);
(statearr_34716[(6)] = c__34571__auto___34718);

return statearr_34716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___34718))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34735){
var vec__34736 = p__34735;
var v = cljs.core.nth.call(null,vec__34736,(0),null);
var p = cljs.core.nth.call(null,vec__34736,(1),null);
var job = vec__34736;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34571__auto___34907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___34907,res,vec__34736,v,p,job,jobs,results){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___34907,res,vec__34736,v,p,job,jobs,results){
return (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (1))){
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34743__$1,(2),res,v);
} else {
if((state_val_34744 === (2))){
var inst_34740 = (state_34743[(2)]);
var inst_34741 = cljs.core.async.close_BANG_.call(null,res);
var state_34743__$1 = (function (){var statearr_34745 = state_34743;
(statearr_34745[(7)] = inst_34740);

return statearr_34745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34743__$1,inst_34741);
} else {
return null;
}
}
});})(c__34571__auto___34907,res,vec__34736,v,p,job,jobs,results))
;
return ((function (switch__34481__auto__,c__34571__auto___34907,res,vec__34736,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_34746 = [null,null,null,null,null,null,null,null];
(statearr_34746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_34746[(1)] = (1));

return statearr_34746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_34743){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e34747){if((e34747 instanceof Object)){
var ex__34485__auto__ = e34747;
var statearr_34748_34908 = state_34743;
(statearr_34748_34908[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34909 = state_34743;
state_34743 = G__34909;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_34743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_34743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___34907,res,vec__34736,v,p,job,jobs,results))
})();
var state__34573__auto__ = (function (){var statearr_34749 = f__34572__auto__.call(null);
(statearr_34749[(6)] = c__34571__auto___34907);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___34907,res,vec__34736,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34750){
var vec__34751 = p__34750;
var v = cljs.core.nth.call(null,vec__34751,(0),null);
var p = cljs.core.nth.call(null,vec__34751,(1),null);
var job = vec__34751;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31128__auto___34910 = n;
var __34911 = (0);
while(true){
if((__34911 < n__31128__auto___34910)){
var G__34754_34912 = type;
var G__34754_34913__$1 = (((G__34754_34912 instanceof cljs.core.Keyword))?G__34754_34912.fqn:null);
switch (G__34754_34913__$1) {
case "compute":
var c__34571__auto___34915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34911,c__34571__auto___34915,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (__34911,c__34571__auto___34915,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async){
return (function (state_34767){
var state_val_34768 = (state_34767[(1)]);
if((state_val_34768 === (1))){
var state_34767__$1 = state_34767;
var statearr_34769_34916 = state_34767__$1;
(statearr_34769_34916[(2)] = null);

(statearr_34769_34916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (2))){
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34767__$1,(4),jobs);
} else {
if((state_val_34768 === (3))){
var inst_34765 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34767__$1,inst_34765);
} else {
if((state_val_34768 === (4))){
var inst_34757 = (state_34767[(2)]);
var inst_34758 = process.call(null,inst_34757);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34758)){
var statearr_34770_34917 = state_34767__$1;
(statearr_34770_34917[(1)] = (5));

} else {
var statearr_34771_34918 = state_34767__$1;
(statearr_34771_34918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (5))){
var state_34767__$1 = state_34767;
var statearr_34772_34919 = state_34767__$1;
(statearr_34772_34919[(2)] = null);

(statearr_34772_34919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (6))){
var state_34767__$1 = state_34767;
var statearr_34773_34920 = state_34767__$1;
(statearr_34773_34920[(2)] = null);

(statearr_34773_34920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (7))){
var inst_34763 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34774_34921 = state_34767__$1;
(statearr_34774_34921[(2)] = inst_34763);

(statearr_34774_34921[(1)] = (3));


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
});})(__34911,c__34571__auto___34915,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async))
;
return ((function (__34911,switch__34481__auto__,c__34571__auto___34915,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_34775 = [null,null,null,null,null,null,null];
(statearr_34775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_34775[(1)] = (1));

return statearr_34775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_34767){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e34776){if((e34776 instanceof Object)){
var ex__34485__auto__ = e34776;
var statearr_34777_34922 = state_34767;
(statearr_34777_34922[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34923 = state_34767;
state_34767 = G__34923;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_34767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_34767);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(__34911,switch__34481__auto__,c__34571__auto___34915,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async))
})();
var state__34573__auto__ = (function (){var statearr_34778 = f__34572__auto__.call(null);
(statearr_34778[(6)] = c__34571__auto___34915);

return statearr_34778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(__34911,c__34571__auto___34915,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async))
);


break;
case "async":
var c__34571__auto___34924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34911,c__34571__auto___34924,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (__34911,c__34571__auto___34924,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async){
return (function (state_34791){
var state_val_34792 = (state_34791[(1)]);
if((state_val_34792 === (1))){
var state_34791__$1 = state_34791;
var statearr_34793_34925 = state_34791__$1;
(statearr_34793_34925[(2)] = null);

(statearr_34793_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (2))){
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34791__$1,(4),jobs);
} else {
if((state_val_34792 === (3))){
var inst_34789 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34791__$1,inst_34789);
} else {
if((state_val_34792 === (4))){
var inst_34781 = (state_34791[(2)]);
var inst_34782 = async.call(null,inst_34781);
var state_34791__$1 = state_34791;
if(cljs.core.truth_(inst_34782)){
var statearr_34794_34926 = state_34791__$1;
(statearr_34794_34926[(1)] = (5));

} else {
var statearr_34795_34927 = state_34791__$1;
(statearr_34795_34927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (5))){
var state_34791__$1 = state_34791;
var statearr_34796_34928 = state_34791__$1;
(statearr_34796_34928[(2)] = null);

(statearr_34796_34928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (6))){
var state_34791__$1 = state_34791;
var statearr_34797_34929 = state_34791__$1;
(statearr_34797_34929[(2)] = null);

(statearr_34797_34929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34792 === (7))){
var inst_34787 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34798_34930 = state_34791__$1;
(statearr_34798_34930[(2)] = inst_34787);

(statearr_34798_34930[(1)] = (3));


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
});})(__34911,c__34571__auto___34924,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async))
;
return ((function (__34911,switch__34481__auto__,c__34571__auto___34924,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_34799 = [null,null,null,null,null,null,null];
(statearr_34799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_34799[(1)] = (1));

return statearr_34799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_34791){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e34800){if((e34800 instanceof Object)){
var ex__34485__auto__ = e34800;
var statearr_34801_34931 = state_34791;
(statearr_34801_34931[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34932 = state_34791;
state_34791 = G__34932;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_34791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_34791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(__34911,switch__34481__auto__,c__34571__auto___34924,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async))
})();
var state__34573__auto__ = (function (){var statearr_34802 = f__34572__auto__.call(null);
(statearr_34802[(6)] = c__34571__auto___34924);

return statearr_34802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(__34911,c__34571__auto___34924,G__34754_34912,G__34754_34913__$1,n__31128__auto___34910,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34754_34913__$1)].join('')));

}

var G__34933 = (__34911 + (1));
__34911 = G__34933;
continue;
} else {
}
break;
}

var c__34571__auto___34934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___34934,jobs,results,process,async){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___34934,jobs,results,process,async){
return (function (state_34824){
var state_val_34825 = (state_34824[(1)]);
if((state_val_34825 === (1))){
var state_34824__$1 = state_34824;
var statearr_34826_34935 = state_34824__$1;
(statearr_34826_34935[(2)] = null);

(statearr_34826_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (2))){
var state_34824__$1 = state_34824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34824__$1,(4),from);
} else {
if((state_val_34825 === (3))){
var inst_34822 = (state_34824[(2)]);
var state_34824__$1 = state_34824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34824__$1,inst_34822);
} else {
if((state_val_34825 === (4))){
var inst_34805 = (state_34824[(7)]);
var inst_34805__$1 = (state_34824[(2)]);
var inst_34806 = (inst_34805__$1 == null);
var state_34824__$1 = (function (){var statearr_34827 = state_34824;
(statearr_34827[(7)] = inst_34805__$1);

return statearr_34827;
})();
if(cljs.core.truth_(inst_34806)){
var statearr_34828_34936 = state_34824__$1;
(statearr_34828_34936[(1)] = (5));

} else {
var statearr_34829_34937 = state_34824__$1;
(statearr_34829_34937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (5))){
var inst_34808 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34824__$1 = state_34824;
var statearr_34830_34938 = state_34824__$1;
(statearr_34830_34938[(2)] = inst_34808);

(statearr_34830_34938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (6))){
var inst_34810 = (state_34824[(8)]);
var inst_34805 = (state_34824[(7)]);
var inst_34810__$1 = cljs.core.async.chan.call(null,(1));
var inst_34811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34812 = [inst_34805,inst_34810__$1];
var inst_34813 = (new cljs.core.PersistentVector(null,2,(5),inst_34811,inst_34812,null));
var state_34824__$1 = (function (){var statearr_34831 = state_34824;
(statearr_34831[(8)] = inst_34810__$1);

return statearr_34831;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34824__$1,(8),jobs,inst_34813);
} else {
if((state_val_34825 === (7))){
var inst_34820 = (state_34824[(2)]);
var state_34824__$1 = state_34824;
var statearr_34832_34939 = state_34824__$1;
(statearr_34832_34939[(2)] = inst_34820);

(statearr_34832_34939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (8))){
var inst_34810 = (state_34824[(8)]);
var inst_34815 = (state_34824[(2)]);
var state_34824__$1 = (function (){var statearr_34833 = state_34824;
(statearr_34833[(9)] = inst_34815);

return statearr_34833;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34824__$1,(9),results,inst_34810);
} else {
if((state_val_34825 === (9))){
var inst_34817 = (state_34824[(2)]);
var state_34824__$1 = (function (){var statearr_34834 = state_34824;
(statearr_34834[(10)] = inst_34817);

return statearr_34834;
})();
var statearr_34835_34940 = state_34824__$1;
(statearr_34835_34940[(2)] = null);

(statearr_34835_34940[(1)] = (2));


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
});})(c__34571__auto___34934,jobs,results,process,async))
;
return ((function (switch__34481__auto__,c__34571__auto___34934,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_34836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_34836[(1)] = (1));

return statearr_34836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_34824){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e34837){if((e34837 instanceof Object)){
var ex__34485__auto__ = e34837;
var statearr_34838_34941 = state_34824;
(statearr_34838_34941[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34942 = state_34824;
state_34824 = G__34942;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_34824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_34824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___34934,jobs,results,process,async))
})();
var state__34573__auto__ = (function (){var statearr_34839 = f__34572__auto__.call(null);
(statearr_34839[(6)] = c__34571__auto___34934);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___34934,jobs,results,process,async))
);


var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__,jobs,results,process,async){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__,jobs,results,process,async){
return (function (state_34877){
var state_val_34878 = (state_34877[(1)]);
if((state_val_34878 === (7))){
var inst_34873 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34879_34943 = state_34877__$1;
(statearr_34879_34943[(2)] = inst_34873);

(statearr_34879_34943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (20))){
var state_34877__$1 = state_34877;
var statearr_34880_34944 = state_34877__$1;
(statearr_34880_34944[(2)] = null);

(statearr_34880_34944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (1))){
var state_34877__$1 = state_34877;
var statearr_34881_34945 = state_34877__$1;
(statearr_34881_34945[(2)] = null);

(statearr_34881_34945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (4))){
var inst_34842 = (state_34877[(7)]);
var inst_34842__$1 = (state_34877[(2)]);
var inst_34843 = (inst_34842__$1 == null);
var state_34877__$1 = (function (){var statearr_34882 = state_34877;
(statearr_34882[(7)] = inst_34842__$1);

return statearr_34882;
})();
if(cljs.core.truth_(inst_34843)){
var statearr_34883_34946 = state_34877__$1;
(statearr_34883_34946[(1)] = (5));

} else {
var statearr_34884_34947 = state_34877__$1;
(statearr_34884_34947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (15))){
var inst_34855 = (state_34877[(8)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34877__$1,(18),to,inst_34855);
} else {
if((state_val_34878 === (21))){
var inst_34868 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34885_34948 = state_34877__$1;
(statearr_34885_34948[(2)] = inst_34868);

(statearr_34885_34948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (13))){
var inst_34870 = (state_34877[(2)]);
var state_34877__$1 = (function (){var statearr_34886 = state_34877;
(statearr_34886[(9)] = inst_34870);

return statearr_34886;
})();
var statearr_34887_34949 = state_34877__$1;
(statearr_34887_34949[(2)] = null);

(statearr_34887_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (6))){
var inst_34842 = (state_34877[(7)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(11),inst_34842);
} else {
if((state_val_34878 === (17))){
var inst_34863 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34863)){
var statearr_34888_34950 = state_34877__$1;
(statearr_34888_34950[(1)] = (19));

} else {
var statearr_34889_34951 = state_34877__$1;
(statearr_34889_34951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (3))){
var inst_34875 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34877__$1,inst_34875);
} else {
if((state_val_34878 === (12))){
var inst_34852 = (state_34877[(10)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(14),inst_34852);
} else {
if((state_val_34878 === (2))){
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(4),results);
} else {
if((state_val_34878 === (19))){
var state_34877__$1 = state_34877;
var statearr_34890_34952 = state_34877__$1;
(statearr_34890_34952[(2)] = null);

(statearr_34890_34952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (11))){
var inst_34852 = (state_34877[(2)]);
var state_34877__$1 = (function (){var statearr_34891 = state_34877;
(statearr_34891[(10)] = inst_34852);

return statearr_34891;
})();
var statearr_34892_34953 = state_34877__$1;
(statearr_34892_34953[(2)] = null);

(statearr_34892_34953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (9))){
var state_34877__$1 = state_34877;
var statearr_34893_34954 = state_34877__$1;
(statearr_34893_34954[(2)] = null);

(statearr_34893_34954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (5))){
var state_34877__$1 = state_34877;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34894_34955 = state_34877__$1;
(statearr_34894_34955[(1)] = (8));

} else {
var statearr_34895_34956 = state_34877__$1;
(statearr_34895_34956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (14))){
var inst_34857 = (state_34877[(11)]);
var inst_34855 = (state_34877[(8)]);
var inst_34855__$1 = (state_34877[(2)]);
var inst_34856 = (inst_34855__$1 == null);
var inst_34857__$1 = cljs.core.not.call(null,inst_34856);
var state_34877__$1 = (function (){var statearr_34896 = state_34877;
(statearr_34896[(11)] = inst_34857__$1);

(statearr_34896[(8)] = inst_34855__$1);

return statearr_34896;
})();
if(inst_34857__$1){
var statearr_34897_34957 = state_34877__$1;
(statearr_34897_34957[(1)] = (15));

} else {
var statearr_34898_34958 = state_34877__$1;
(statearr_34898_34958[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (16))){
var inst_34857 = (state_34877[(11)]);
var state_34877__$1 = state_34877;
var statearr_34899_34959 = state_34877__$1;
(statearr_34899_34959[(2)] = inst_34857);

(statearr_34899_34959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (10))){
var inst_34849 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34900_34960 = state_34877__$1;
(statearr_34900_34960[(2)] = inst_34849);

(statearr_34900_34960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (18))){
var inst_34860 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34901_34961 = state_34877__$1;
(statearr_34901_34961[(2)] = inst_34860);

(statearr_34901_34961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (8))){
var inst_34846 = cljs.core.async.close_BANG_.call(null,to);
var state_34877__$1 = state_34877;
var statearr_34902_34962 = state_34877__$1;
(statearr_34902_34962[(2)] = inst_34846);

(statearr_34902_34962[(1)] = (10));


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
});})(c__34571__auto__,jobs,results,process,async))
;
return ((function (switch__34481__auto__,c__34571__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_34903 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__);

(statearr_34903[(1)] = (1));

return statearr_34903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1 = (function (state_34877){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e34904){if((e34904 instanceof Object)){
var ex__34485__auto__ = e34904;
var statearr_34905_34963 = state_34877;
(statearr_34905_34963[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34964 = state_34877;
state_34877 = G__34964;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__ = function(state_34877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1.call(this,state_34877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__,jobs,results,process,async))
})();
var state__34573__auto__ = (function (){var statearr_34906 = f__34572__auto__.call(null);
(statearr_34906[(6)] = c__34571__auto__);

return statearr_34906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__,jobs,results,process,async))
);

return c__34571__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34966 = arguments.length;
switch (G__34966) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34969 = arguments.length;
switch (G__34969) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34972 = arguments.length;
switch (G__34972) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34571__auto___35021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___35021,tc,fc){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___35021,tc,fc){
return (function (state_34998){
var state_val_34999 = (state_34998[(1)]);
if((state_val_34999 === (7))){
var inst_34994 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35000_35022 = state_34998__$1;
(statearr_35000_35022[(2)] = inst_34994);

(statearr_35000_35022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (1))){
var state_34998__$1 = state_34998;
var statearr_35001_35023 = state_34998__$1;
(statearr_35001_35023[(2)] = null);

(statearr_35001_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (4))){
var inst_34975 = (state_34998[(7)]);
var inst_34975__$1 = (state_34998[(2)]);
var inst_34976 = (inst_34975__$1 == null);
var state_34998__$1 = (function (){var statearr_35002 = state_34998;
(statearr_35002[(7)] = inst_34975__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34976)){
var statearr_35003_35024 = state_34998__$1;
(statearr_35003_35024[(1)] = (5));

} else {
var statearr_35004_35025 = state_34998__$1;
(statearr_35004_35025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (13))){
var state_34998__$1 = state_34998;
var statearr_35005_35026 = state_34998__$1;
(statearr_35005_35026[(2)] = null);

(statearr_35005_35026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (6))){
var inst_34975 = (state_34998[(7)]);
var inst_34981 = p.call(null,inst_34975);
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34981)){
var statearr_35006_35027 = state_34998__$1;
(statearr_35006_35027[(1)] = (9));

} else {
var statearr_35007_35028 = state_34998__$1;
(statearr_35007_35028[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (3))){
var inst_34996 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34998__$1,inst_34996);
} else {
if((state_val_34999 === (12))){
var state_34998__$1 = state_34998;
var statearr_35008_35029 = state_34998__$1;
(statearr_35008_35029[(2)] = null);

(statearr_35008_35029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (2))){
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34998__$1,(4),ch);
} else {
if((state_val_34999 === (11))){
var inst_34975 = (state_34998[(7)]);
var inst_34985 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34998__$1,(8),inst_34985,inst_34975);
} else {
if((state_val_34999 === (9))){
var state_34998__$1 = state_34998;
var statearr_35009_35030 = state_34998__$1;
(statearr_35009_35030[(2)] = tc);

(statearr_35009_35030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (5))){
var inst_34978 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34979 = cljs.core.async.close_BANG_.call(null,fc);
var state_34998__$1 = (function (){var statearr_35010 = state_34998;
(statearr_35010[(8)] = inst_34978);

return statearr_35010;
})();
var statearr_35011_35031 = state_34998__$1;
(statearr_35011_35031[(2)] = inst_34979);

(statearr_35011_35031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (14))){
var inst_34992 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35012_35032 = state_34998__$1;
(statearr_35012_35032[(2)] = inst_34992);

(statearr_35012_35032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (10))){
var state_34998__$1 = state_34998;
var statearr_35013_35033 = state_34998__$1;
(statearr_35013_35033[(2)] = fc);

(statearr_35013_35033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (8))){
var inst_34987 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34987)){
var statearr_35014_35034 = state_34998__$1;
(statearr_35014_35034[(1)] = (12));

} else {
var statearr_35015_35035 = state_34998__$1;
(statearr_35015_35035[(1)] = (13));

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
});})(c__34571__auto___35021,tc,fc))
;
return ((function (switch__34481__auto__,c__34571__auto___35021,tc,fc){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_35016 = [null,null,null,null,null,null,null,null,null];
(statearr_35016[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_35016[(1)] = (1));

return statearr_35016;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_34998){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_34998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35017){if((e35017 instanceof Object)){
var ex__34485__auto__ = e35017;
var statearr_35018_35036 = state_34998;
(statearr_35018_35036[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35037 = state_34998;
state_34998 = G__35037;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_34998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_34998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___35021,tc,fc))
})();
var state__34573__auto__ = (function (){var statearr_35019 = f__34572__auto__.call(null);
(statearr_35019[(6)] = c__34571__auto___35021);

return statearr_35019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___35021,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__){
return (function (state_35058){
var state_val_35059 = (state_35058[(1)]);
if((state_val_35059 === (7))){
var inst_35054 = (state_35058[(2)]);
var state_35058__$1 = state_35058;
var statearr_35060_35078 = state_35058__$1;
(statearr_35060_35078[(2)] = inst_35054);

(statearr_35060_35078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (1))){
var inst_35038 = init;
var state_35058__$1 = (function (){var statearr_35061 = state_35058;
(statearr_35061[(7)] = inst_35038);

return statearr_35061;
})();
var statearr_35062_35079 = state_35058__$1;
(statearr_35062_35079[(2)] = null);

(statearr_35062_35079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (4))){
var inst_35041 = (state_35058[(8)]);
var inst_35041__$1 = (state_35058[(2)]);
var inst_35042 = (inst_35041__$1 == null);
var state_35058__$1 = (function (){var statearr_35063 = state_35058;
(statearr_35063[(8)] = inst_35041__$1);

return statearr_35063;
})();
if(cljs.core.truth_(inst_35042)){
var statearr_35064_35080 = state_35058__$1;
(statearr_35064_35080[(1)] = (5));

} else {
var statearr_35065_35081 = state_35058__$1;
(statearr_35065_35081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (6))){
var inst_35038 = (state_35058[(7)]);
var inst_35041 = (state_35058[(8)]);
var inst_35045 = (state_35058[(9)]);
var inst_35045__$1 = f.call(null,inst_35038,inst_35041);
var inst_35046 = cljs.core.reduced_QMARK_.call(null,inst_35045__$1);
var state_35058__$1 = (function (){var statearr_35066 = state_35058;
(statearr_35066[(9)] = inst_35045__$1);

return statearr_35066;
})();
if(inst_35046){
var statearr_35067_35082 = state_35058__$1;
(statearr_35067_35082[(1)] = (8));

} else {
var statearr_35068_35083 = state_35058__$1;
(statearr_35068_35083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (3))){
var inst_35056 = (state_35058[(2)]);
var state_35058__$1 = state_35058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35058__$1,inst_35056);
} else {
if((state_val_35059 === (2))){
var state_35058__$1 = state_35058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35058__$1,(4),ch);
} else {
if((state_val_35059 === (9))){
var inst_35045 = (state_35058[(9)]);
var inst_35038 = inst_35045;
var state_35058__$1 = (function (){var statearr_35069 = state_35058;
(statearr_35069[(7)] = inst_35038);

return statearr_35069;
})();
var statearr_35070_35084 = state_35058__$1;
(statearr_35070_35084[(2)] = null);

(statearr_35070_35084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (5))){
var inst_35038 = (state_35058[(7)]);
var state_35058__$1 = state_35058;
var statearr_35071_35085 = state_35058__$1;
(statearr_35071_35085[(2)] = inst_35038);

(statearr_35071_35085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (10))){
var inst_35052 = (state_35058[(2)]);
var state_35058__$1 = state_35058;
var statearr_35072_35086 = state_35058__$1;
(statearr_35072_35086[(2)] = inst_35052);

(statearr_35072_35086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (8))){
var inst_35045 = (state_35058[(9)]);
var inst_35048 = cljs.core.deref.call(null,inst_35045);
var state_35058__$1 = state_35058;
var statearr_35073_35087 = state_35058__$1;
(statearr_35073_35087[(2)] = inst_35048);

(statearr_35073_35087[(1)] = (10));


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
});})(c__34571__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34482__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34482__auto____0 = (function (){
var statearr_35074 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35074[(0)] = cljs$core$async$reduce_$_state_machine__34482__auto__);

(statearr_35074[(1)] = (1));

return statearr_35074;
});
var cljs$core$async$reduce_$_state_machine__34482__auto____1 = (function (state_35058){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35075){if((e35075 instanceof Object)){
var ex__34485__auto__ = e35075;
var statearr_35076_35088 = state_35058;
(statearr_35076_35088[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35089 = state_35058;
state_35058 = G__35089;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34482__auto__ = function(state_35058){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34482__auto____1.call(this,state_35058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34482__auto____0;
cljs$core$async$reduce_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34482__auto____1;
return cljs$core$async$reduce_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__))
})();
var state__34573__auto__ = (function (){var statearr_35077 = f__34572__auto__.call(null);
(statearr_35077[(6)] = c__34571__auto__);

return statearr_35077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__))
);

return c__34571__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__,f__$1){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__,f__$1){
return (function (state_35095){
var state_val_35096 = (state_35095[(1)]);
if((state_val_35096 === (1))){
var inst_35090 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35095__$1 = state_35095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35095__$1,(2),inst_35090);
} else {
if((state_val_35096 === (2))){
var inst_35092 = (state_35095[(2)]);
var inst_35093 = f__$1.call(null,inst_35092);
var state_35095__$1 = state_35095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35095__$1,inst_35093);
} else {
return null;
}
}
});})(c__34571__auto__,f__$1))
;
return ((function (switch__34481__auto__,c__34571__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34482__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34482__auto____0 = (function (){
var statearr_35097 = [null,null,null,null,null,null,null];
(statearr_35097[(0)] = cljs$core$async$transduce_$_state_machine__34482__auto__);

(statearr_35097[(1)] = (1));

return statearr_35097;
});
var cljs$core$async$transduce_$_state_machine__34482__auto____1 = (function (state_35095){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35098){if((e35098 instanceof Object)){
var ex__34485__auto__ = e35098;
var statearr_35099_35101 = state_35095;
(statearr_35099_35101[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35102 = state_35095;
state_35095 = G__35102;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34482__auto__ = function(state_35095){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34482__auto____1.call(this,state_35095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34482__auto____0;
cljs$core$async$transduce_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34482__auto____1;
return cljs$core$async$transduce_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__,f__$1))
})();
var state__34573__auto__ = (function (){var statearr_35100 = f__34572__auto__.call(null);
(statearr_35100[(6)] = c__34571__auto__);

return statearr_35100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__,f__$1))
);

return c__34571__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35104 = arguments.length;
switch (G__35104) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__){
return (function (state_35129){
var state_val_35130 = (state_35129[(1)]);
if((state_val_35130 === (7))){
var inst_35111 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35131_35152 = state_35129__$1;
(statearr_35131_35152[(2)] = inst_35111);

(statearr_35131_35152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (1))){
var inst_35105 = cljs.core.seq.call(null,coll);
var inst_35106 = inst_35105;
var state_35129__$1 = (function (){var statearr_35132 = state_35129;
(statearr_35132[(7)] = inst_35106);

return statearr_35132;
})();
var statearr_35133_35153 = state_35129__$1;
(statearr_35133_35153[(2)] = null);

(statearr_35133_35153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (4))){
var inst_35106 = (state_35129[(7)]);
var inst_35109 = cljs.core.first.call(null,inst_35106);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35129__$1,(7),ch,inst_35109);
} else {
if((state_val_35130 === (13))){
var inst_35123 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35134_35154 = state_35129__$1;
(statearr_35134_35154[(2)] = inst_35123);

(statearr_35134_35154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (6))){
var inst_35114 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35114)){
var statearr_35135_35155 = state_35129__$1;
(statearr_35135_35155[(1)] = (8));

} else {
var statearr_35136_35156 = state_35129__$1;
(statearr_35136_35156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (3))){
var inst_35127 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35129__$1,inst_35127);
} else {
if((state_val_35130 === (12))){
var state_35129__$1 = state_35129;
var statearr_35137_35157 = state_35129__$1;
(statearr_35137_35157[(2)] = null);

(statearr_35137_35157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (2))){
var inst_35106 = (state_35129[(7)]);
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35106)){
var statearr_35138_35158 = state_35129__$1;
(statearr_35138_35158[(1)] = (4));

} else {
var statearr_35139_35159 = state_35129__$1;
(statearr_35139_35159[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (11))){
var inst_35120 = cljs.core.async.close_BANG_.call(null,ch);
var state_35129__$1 = state_35129;
var statearr_35140_35160 = state_35129__$1;
(statearr_35140_35160[(2)] = inst_35120);

(statearr_35140_35160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (9))){
var state_35129__$1 = state_35129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35141_35161 = state_35129__$1;
(statearr_35141_35161[(1)] = (11));

} else {
var statearr_35142_35162 = state_35129__$1;
(statearr_35142_35162[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (5))){
var inst_35106 = (state_35129[(7)]);
var state_35129__$1 = state_35129;
var statearr_35143_35163 = state_35129__$1;
(statearr_35143_35163[(2)] = inst_35106);

(statearr_35143_35163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (10))){
var inst_35125 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35144_35164 = state_35129__$1;
(statearr_35144_35164[(2)] = inst_35125);

(statearr_35144_35164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (8))){
var inst_35106 = (state_35129[(7)]);
var inst_35116 = cljs.core.next.call(null,inst_35106);
var inst_35106__$1 = inst_35116;
var state_35129__$1 = (function (){var statearr_35145 = state_35129;
(statearr_35145[(7)] = inst_35106__$1);

return statearr_35145;
})();
var statearr_35146_35165 = state_35129__$1;
(statearr_35146_35165[(2)] = null);

(statearr_35146_35165[(1)] = (2));


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
});})(c__34571__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_35147 = [null,null,null,null,null,null,null,null];
(statearr_35147[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_35147[(1)] = (1));

return statearr_35147;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_35129){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35148){if((e35148 instanceof Object)){
var ex__34485__auto__ = e35148;
var statearr_35149_35166 = state_35129;
(statearr_35149_35166[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35167 = state_35129;
state_35129 = G__35167;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_35129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_35129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__))
})();
var state__34573__auto__ = (function (){var statearr_35150 = f__34572__auto__.call(null);
(statearr_35150[(6)] = c__34571__auto__);

return statearr_35150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__))
);

return c__34571__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30816__auto__ = (((_ == null))?null:_);
var m__30817__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,_);
} else {
var m__30817__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30817__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m);
} else {
var m__30817__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35168 = (function (ch,cs,meta35169){
this.ch = ch;
this.cs = cs;
this.meta35169 = meta35169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35170,meta35169__$1){
var self__ = this;
var _35170__$1 = this;
return (new cljs.core.async.t_cljs$core$async35168(self__.ch,self__.cs,meta35169__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35170){
var self__ = this;
var _35170__$1 = this;
return self__.meta35169;
});})(cs))
;

cljs.core.async.t_cljs$core$async35168.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35168.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35168.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35168.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35168.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35168.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35169","meta35169",-1084142185,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35168";

cljs.core.async.t_cljs$core$async35168.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35168");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35168 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35168(ch__$1,cs__$1,meta35169){
return (new cljs.core.async.t_cljs$core$async35168(ch__$1,cs__$1,meta35169));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35168(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34571__auto___35390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___35390,cs,m,dchan,dctr,done){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___35390,cs,m,dchan,dctr,done){
return (function (state_35305){
var state_val_35306 = (state_35305[(1)]);
if((state_val_35306 === (7))){
var inst_35301 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35307_35391 = state_35305__$1;
(statearr_35307_35391[(2)] = inst_35301);

(statearr_35307_35391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (20))){
var inst_35204 = (state_35305[(7)]);
var inst_35216 = cljs.core.first.call(null,inst_35204);
var inst_35217 = cljs.core.nth.call(null,inst_35216,(0),null);
var inst_35218 = cljs.core.nth.call(null,inst_35216,(1),null);
var state_35305__$1 = (function (){var statearr_35308 = state_35305;
(statearr_35308[(8)] = inst_35217);

return statearr_35308;
})();
if(cljs.core.truth_(inst_35218)){
var statearr_35309_35392 = state_35305__$1;
(statearr_35309_35392[(1)] = (22));

} else {
var statearr_35310_35393 = state_35305__$1;
(statearr_35310_35393[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (27))){
var inst_35253 = (state_35305[(9)]);
var inst_35246 = (state_35305[(10)]);
var inst_35173 = (state_35305[(11)]);
var inst_35248 = (state_35305[(12)]);
var inst_35253__$1 = cljs.core._nth.call(null,inst_35246,inst_35248);
var inst_35254 = cljs.core.async.put_BANG_.call(null,inst_35253__$1,inst_35173,done);
var state_35305__$1 = (function (){var statearr_35311 = state_35305;
(statearr_35311[(9)] = inst_35253__$1);

return statearr_35311;
})();
if(cljs.core.truth_(inst_35254)){
var statearr_35312_35394 = state_35305__$1;
(statearr_35312_35394[(1)] = (30));

} else {
var statearr_35313_35395 = state_35305__$1;
(statearr_35313_35395[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (1))){
var state_35305__$1 = state_35305;
var statearr_35314_35396 = state_35305__$1;
(statearr_35314_35396[(2)] = null);

(statearr_35314_35396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (24))){
var inst_35204 = (state_35305[(7)]);
var inst_35223 = (state_35305[(2)]);
var inst_35224 = cljs.core.next.call(null,inst_35204);
var inst_35182 = inst_35224;
var inst_35183 = null;
var inst_35184 = (0);
var inst_35185 = (0);
var state_35305__$1 = (function (){var statearr_35315 = state_35305;
(statearr_35315[(13)] = inst_35185);

(statearr_35315[(14)] = inst_35182);

(statearr_35315[(15)] = inst_35183);

(statearr_35315[(16)] = inst_35223);

(statearr_35315[(17)] = inst_35184);

return statearr_35315;
})();
var statearr_35316_35397 = state_35305__$1;
(statearr_35316_35397[(2)] = null);

(statearr_35316_35397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (39))){
var state_35305__$1 = state_35305;
var statearr_35320_35398 = state_35305__$1;
(statearr_35320_35398[(2)] = null);

(statearr_35320_35398[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (4))){
var inst_35173 = (state_35305[(11)]);
var inst_35173__$1 = (state_35305[(2)]);
var inst_35174 = (inst_35173__$1 == null);
var state_35305__$1 = (function (){var statearr_35321 = state_35305;
(statearr_35321[(11)] = inst_35173__$1);

return statearr_35321;
})();
if(cljs.core.truth_(inst_35174)){
var statearr_35322_35399 = state_35305__$1;
(statearr_35322_35399[(1)] = (5));

} else {
var statearr_35323_35400 = state_35305__$1;
(statearr_35323_35400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (15))){
var inst_35185 = (state_35305[(13)]);
var inst_35182 = (state_35305[(14)]);
var inst_35183 = (state_35305[(15)]);
var inst_35184 = (state_35305[(17)]);
var inst_35200 = (state_35305[(2)]);
var inst_35201 = (inst_35185 + (1));
var tmp35317 = inst_35182;
var tmp35318 = inst_35183;
var tmp35319 = inst_35184;
var inst_35182__$1 = tmp35317;
var inst_35183__$1 = tmp35318;
var inst_35184__$1 = tmp35319;
var inst_35185__$1 = inst_35201;
var state_35305__$1 = (function (){var statearr_35324 = state_35305;
(statearr_35324[(13)] = inst_35185__$1);

(statearr_35324[(18)] = inst_35200);

(statearr_35324[(14)] = inst_35182__$1);

(statearr_35324[(15)] = inst_35183__$1);

(statearr_35324[(17)] = inst_35184__$1);

return statearr_35324;
})();
var statearr_35325_35401 = state_35305__$1;
(statearr_35325_35401[(2)] = null);

(statearr_35325_35401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (21))){
var inst_35227 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35329_35402 = state_35305__$1;
(statearr_35329_35402[(2)] = inst_35227);

(statearr_35329_35402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (31))){
var inst_35253 = (state_35305[(9)]);
var inst_35257 = done.call(null,null);
var inst_35258 = cljs.core.async.untap_STAR_.call(null,m,inst_35253);
var state_35305__$1 = (function (){var statearr_35330 = state_35305;
(statearr_35330[(19)] = inst_35257);

return statearr_35330;
})();
var statearr_35331_35403 = state_35305__$1;
(statearr_35331_35403[(2)] = inst_35258);

(statearr_35331_35403[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (32))){
var inst_35247 = (state_35305[(20)]);
var inst_35245 = (state_35305[(21)]);
var inst_35246 = (state_35305[(10)]);
var inst_35248 = (state_35305[(12)]);
var inst_35260 = (state_35305[(2)]);
var inst_35261 = (inst_35248 + (1));
var tmp35326 = inst_35247;
var tmp35327 = inst_35245;
var tmp35328 = inst_35246;
var inst_35245__$1 = tmp35327;
var inst_35246__$1 = tmp35328;
var inst_35247__$1 = tmp35326;
var inst_35248__$1 = inst_35261;
var state_35305__$1 = (function (){var statearr_35332 = state_35305;
(statearr_35332[(20)] = inst_35247__$1);

(statearr_35332[(21)] = inst_35245__$1);

(statearr_35332[(22)] = inst_35260);

(statearr_35332[(10)] = inst_35246__$1);

(statearr_35332[(12)] = inst_35248__$1);

return statearr_35332;
})();
var statearr_35333_35404 = state_35305__$1;
(statearr_35333_35404[(2)] = null);

(statearr_35333_35404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (40))){
var inst_35273 = (state_35305[(23)]);
var inst_35277 = done.call(null,null);
var inst_35278 = cljs.core.async.untap_STAR_.call(null,m,inst_35273);
var state_35305__$1 = (function (){var statearr_35334 = state_35305;
(statearr_35334[(24)] = inst_35277);

return statearr_35334;
})();
var statearr_35335_35405 = state_35305__$1;
(statearr_35335_35405[(2)] = inst_35278);

(statearr_35335_35405[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (33))){
var inst_35264 = (state_35305[(25)]);
var inst_35266 = cljs.core.chunked_seq_QMARK_.call(null,inst_35264);
var state_35305__$1 = state_35305;
if(inst_35266){
var statearr_35336_35406 = state_35305__$1;
(statearr_35336_35406[(1)] = (36));

} else {
var statearr_35337_35407 = state_35305__$1;
(statearr_35337_35407[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (13))){
var inst_35194 = (state_35305[(26)]);
var inst_35197 = cljs.core.async.close_BANG_.call(null,inst_35194);
var state_35305__$1 = state_35305;
var statearr_35338_35408 = state_35305__$1;
(statearr_35338_35408[(2)] = inst_35197);

(statearr_35338_35408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (22))){
var inst_35217 = (state_35305[(8)]);
var inst_35220 = cljs.core.async.close_BANG_.call(null,inst_35217);
var state_35305__$1 = state_35305;
var statearr_35339_35409 = state_35305__$1;
(statearr_35339_35409[(2)] = inst_35220);

(statearr_35339_35409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (36))){
var inst_35264 = (state_35305[(25)]);
var inst_35268 = cljs.core.chunk_first.call(null,inst_35264);
var inst_35269 = cljs.core.chunk_rest.call(null,inst_35264);
var inst_35270 = cljs.core.count.call(null,inst_35268);
var inst_35245 = inst_35269;
var inst_35246 = inst_35268;
var inst_35247 = inst_35270;
var inst_35248 = (0);
var state_35305__$1 = (function (){var statearr_35340 = state_35305;
(statearr_35340[(20)] = inst_35247);

(statearr_35340[(21)] = inst_35245);

(statearr_35340[(10)] = inst_35246);

(statearr_35340[(12)] = inst_35248);

return statearr_35340;
})();
var statearr_35341_35410 = state_35305__$1;
(statearr_35341_35410[(2)] = null);

(statearr_35341_35410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (41))){
var inst_35264 = (state_35305[(25)]);
var inst_35280 = (state_35305[(2)]);
var inst_35281 = cljs.core.next.call(null,inst_35264);
var inst_35245 = inst_35281;
var inst_35246 = null;
var inst_35247 = (0);
var inst_35248 = (0);
var state_35305__$1 = (function (){var statearr_35342 = state_35305;
(statearr_35342[(20)] = inst_35247);

(statearr_35342[(21)] = inst_35245);

(statearr_35342[(27)] = inst_35280);

(statearr_35342[(10)] = inst_35246);

(statearr_35342[(12)] = inst_35248);

return statearr_35342;
})();
var statearr_35343_35411 = state_35305__$1;
(statearr_35343_35411[(2)] = null);

(statearr_35343_35411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (43))){
var state_35305__$1 = state_35305;
var statearr_35344_35412 = state_35305__$1;
(statearr_35344_35412[(2)] = null);

(statearr_35344_35412[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (29))){
var inst_35289 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35345_35413 = state_35305__$1;
(statearr_35345_35413[(2)] = inst_35289);

(statearr_35345_35413[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (44))){
var inst_35298 = (state_35305[(2)]);
var state_35305__$1 = (function (){var statearr_35346 = state_35305;
(statearr_35346[(28)] = inst_35298);

return statearr_35346;
})();
var statearr_35347_35414 = state_35305__$1;
(statearr_35347_35414[(2)] = null);

(statearr_35347_35414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (6))){
var inst_35237 = (state_35305[(29)]);
var inst_35236 = cljs.core.deref.call(null,cs);
var inst_35237__$1 = cljs.core.keys.call(null,inst_35236);
var inst_35238 = cljs.core.count.call(null,inst_35237__$1);
var inst_35239 = cljs.core.reset_BANG_.call(null,dctr,inst_35238);
var inst_35244 = cljs.core.seq.call(null,inst_35237__$1);
var inst_35245 = inst_35244;
var inst_35246 = null;
var inst_35247 = (0);
var inst_35248 = (0);
var state_35305__$1 = (function (){var statearr_35348 = state_35305;
(statearr_35348[(30)] = inst_35239);

(statearr_35348[(20)] = inst_35247);

(statearr_35348[(21)] = inst_35245);

(statearr_35348[(29)] = inst_35237__$1);

(statearr_35348[(10)] = inst_35246);

(statearr_35348[(12)] = inst_35248);

return statearr_35348;
})();
var statearr_35349_35415 = state_35305__$1;
(statearr_35349_35415[(2)] = null);

(statearr_35349_35415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (28))){
var inst_35245 = (state_35305[(21)]);
var inst_35264 = (state_35305[(25)]);
var inst_35264__$1 = cljs.core.seq.call(null,inst_35245);
var state_35305__$1 = (function (){var statearr_35350 = state_35305;
(statearr_35350[(25)] = inst_35264__$1);

return statearr_35350;
})();
if(inst_35264__$1){
var statearr_35351_35416 = state_35305__$1;
(statearr_35351_35416[(1)] = (33));

} else {
var statearr_35352_35417 = state_35305__$1;
(statearr_35352_35417[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (25))){
var inst_35247 = (state_35305[(20)]);
var inst_35248 = (state_35305[(12)]);
var inst_35250 = (inst_35248 < inst_35247);
var inst_35251 = inst_35250;
var state_35305__$1 = state_35305;
if(cljs.core.truth_(inst_35251)){
var statearr_35353_35418 = state_35305__$1;
(statearr_35353_35418[(1)] = (27));

} else {
var statearr_35354_35419 = state_35305__$1;
(statearr_35354_35419[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (34))){
var state_35305__$1 = state_35305;
var statearr_35355_35420 = state_35305__$1;
(statearr_35355_35420[(2)] = null);

(statearr_35355_35420[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (17))){
var state_35305__$1 = state_35305;
var statearr_35356_35421 = state_35305__$1;
(statearr_35356_35421[(2)] = null);

(statearr_35356_35421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (3))){
var inst_35303 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35305__$1,inst_35303);
} else {
if((state_val_35306 === (12))){
var inst_35232 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35357_35422 = state_35305__$1;
(statearr_35357_35422[(2)] = inst_35232);

(statearr_35357_35422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (2))){
var state_35305__$1 = state_35305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35305__$1,(4),ch);
} else {
if((state_val_35306 === (23))){
var state_35305__$1 = state_35305;
var statearr_35358_35423 = state_35305__$1;
(statearr_35358_35423[(2)] = null);

(statearr_35358_35423[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (35))){
var inst_35287 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35359_35424 = state_35305__$1;
(statearr_35359_35424[(2)] = inst_35287);

(statearr_35359_35424[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (19))){
var inst_35204 = (state_35305[(7)]);
var inst_35208 = cljs.core.chunk_first.call(null,inst_35204);
var inst_35209 = cljs.core.chunk_rest.call(null,inst_35204);
var inst_35210 = cljs.core.count.call(null,inst_35208);
var inst_35182 = inst_35209;
var inst_35183 = inst_35208;
var inst_35184 = inst_35210;
var inst_35185 = (0);
var state_35305__$1 = (function (){var statearr_35360 = state_35305;
(statearr_35360[(13)] = inst_35185);

(statearr_35360[(14)] = inst_35182);

(statearr_35360[(15)] = inst_35183);

(statearr_35360[(17)] = inst_35184);

return statearr_35360;
})();
var statearr_35361_35425 = state_35305__$1;
(statearr_35361_35425[(2)] = null);

(statearr_35361_35425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (11))){
var inst_35182 = (state_35305[(14)]);
var inst_35204 = (state_35305[(7)]);
var inst_35204__$1 = cljs.core.seq.call(null,inst_35182);
var state_35305__$1 = (function (){var statearr_35362 = state_35305;
(statearr_35362[(7)] = inst_35204__$1);

return statearr_35362;
})();
if(inst_35204__$1){
var statearr_35363_35426 = state_35305__$1;
(statearr_35363_35426[(1)] = (16));

} else {
var statearr_35364_35427 = state_35305__$1;
(statearr_35364_35427[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (9))){
var inst_35234 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35365_35428 = state_35305__$1;
(statearr_35365_35428[(2)] = inst_35234);

(statearr_35365_35428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (5))){
var inst_35180 = cljs.core.deref.call(null,cs);
var inst_35181 = cljs.core.seq.call(null,inst_35180);
var inst_35182 = inst_35181;
var inst_35183 = null;
var inst_35184 = (0);
var inst_35185 = (0);
var state_35305__$1 = (function (){var statearr_35366 = state_35305;
(statearr_35366[(13)] = inst_35185);

(statearr_35366[(14)] = inst_35182);

(statearr_35366[(15)] = inst_35183);

(statearr_35366[(17)] = inst_35184);

return statearr_35366;
})();
var statearr_35367_35429 = state_35305__$1;
(statearr_35367_35429[(2)] = null);

(statearr_35367_35429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (14))){
var state_35305__$1 = state_35305;
var statearr_35368_35430 = state_35305__$1;
(statearr_35368_35430[(2)] = null);

(statearr_35368_35430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (45))){
var inst_35295 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35369_35431 = state_35305__$1;
(statearr_35369_35431[(2)] = inst_35295);

(statearr_35369_35431[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (26))){
var inst_35237 = (state_35305[(29)]);
var inst_35291 = (state_35305[(2)]);
var inst_35292 = cljs.core.seq.call(null,inst_35237);
var state_35305__$1 = (function (){var statearr_35370 = state_35305;
(statearr_35370[(31)] = inst_35291);

return statearr_35370;
})();
if(inst_35292){
var statearr_35371_35432 = state_35305__$1;
(statearr_35371_35432[(1)] = (42));

} else {
var statearr_35372_35433 = state_35305__$1;
(statearr_35372_35433[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (16))){
var inst_35204 = (state_35305[(7)]);
var inst_35206 = cljs.core.chunked_seq_QMARK_.call(null,inst_35204);
var state_35305__$1 = state_35305;
if(inst_35206){
var statearr_35373_35434 = state_35305__$1;
(statearr_35373_35434[(1)] = (19));

} else {
var statearr_35374_35435 = state_35305__$1;
(statearr_35374_35435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (38))){
var inst_35284 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35375_35436 = state_35305__$1;
(statearr_35375_35436[(2)] = inst_35284);

(statearr_35375_35436[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (30))){
var state_35305__$1 = state_35305;
var statearr_35376_35437 = state_35305__$1;
(statearr_35376_35437[(2)] = null);

(statearr_35376_35437[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (10))){
var inst_35185 = (state_35305[(13)]);
var inst_35183 = (state_35305[(15)]);
var inst_35193 = cljs.core._nth.call(null,inst_35183,inst_35185);
var inst_35194 = cljs.core.nth.call(null,inst_35193,(0),null);
var inst_35195 = cljs.core.nth.call(null,inst_35193,(1),null);
var state_35305__$1 = (function (){var statearr_35377 = state_35305;
(statearr_35377[(26)] = inst_35194);

return statearr_35377;
})();
if(cljs.core.truth_(inst_35195)){
var statearr_35378_35438 = state_35305__$1;
(statearr_35378_35438[(1)] = (13));

} else {
var statearr_35379_35439 = state_35305__$1;
(statearr_35379_35439[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (18))){
var inst_35230 = (state_35305[(2)]);
var state_35305__$1 = state_35305;
var statearr_35380_35440 = state_35305__$1;
(statearr_35380_35440[(2)] = inst_35230);

(statearr_35380_35440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (42))){
var state_35305__$1 = state_35305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35305__$1,(45),dchan);
} else {
if((state_val_35306 === (37))){
var inst_35264 = (state_35305[(25)]);
var inst_35273 = (state_35305[(23)]);
var inst_35173 = (state_35305[(11)]);
var inst_35273__$1 = cljs.core.first.call(null,inst_35264);
var inst_35274 = cljs.core.async.put_BANG_.call(null,inst_35273__$1,inst_35173,done);
var state_35305__$1 = (function (){var statearr_35381 = state_35305;
(statearr_35381[(23)] = inst_35273__$1);

return statearr_35381;
})();
if(cljs.core.truth_(inst_35274)){
var statearr_35382_35441 = state_35305__$1;
(statearr_35382_35441[(1)] = (39));

} else {
var statearr_35383_35442 = state_35305__$1;
(statearr_35383_35442[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35306 === (8))){
var inst_35185 = (state_35305[(13)]);
var inst_35184 = (state_35305[(17)]);
var inst_35187 = (inst_35185 < inst_35184);
var inst_35188 = inst_35187;
var state_35305__$1 = state_35305;
if(cljs.core.truth_(inst_35188)){
var statearr_35384_35443 = state_35305__$1;
(statearr_35384_35443[(1)] = (10));

} else {
var statearr_35385_35444 = state_35305__$1;
(statearr_35385_35444[(1)] = (11));

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
});})(c__34571__auto___35390,cs,m,dchan,dctr,done))
;
return ((function (switch__34481__auto__,c__34571__auto___35390,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34482__auto__ = null;
var cljs$core$async$mult_$_state_machine__34482__auto____0 = (function (){
var statearr_35386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35386[(0)] = cljs$core$async$mult_$_state_machine__34482__auto__);

(statearr_35386[(1)] = (1));

return statearr_35386;
});
var cljs$core$async$mult_$_state_machine__34482__auto____1 = (function (state_35305){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35387){if((e35387 instanceof Object)){
var ex__34485__auto__ = e35387;
var statearr_35388_35445 = state_35305;
(statearr_35388_35445[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35446 = state_35305;
state_35305 = G__35446;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34482__auto__ = function(state_35305){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34482__auto____1.call(this,state_35305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34482__auto____0;
cljs$core$async$mult_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34482__auto____1;
return cljs$core$async$mult_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___35390,cs,m,dchan,dctr,done))
})();
var state__34573__auto__ = (function (){var statearr_35389 = f__34572__auto__.call(null);
(statearr_35389[(6)] = c__34571__auto___35390);

return statearr_35389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___35390,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35448 = arguments.length;
switch (G__35448) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m);
} else {
var m__30817__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,state_map);
} else {
var m__30817__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,mode);
} else {
var m__30817__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___35460 = arguments.length;
var i__31363__auto___35461 = (0);
while(true){
if((i__31363__auto___35461 < len__31362__auto___35460)){
args__31369__auto__.push((arguments[i__31363__auto___35461]));

var G__35462 = (i__31363__auto___35461 + (1));
i__31363__auto___35461 = G__35462;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((3) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31370__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35454){
var map__35455 = p__35454;
var map__35455__$1 = ((((!((map__35455 == null)))?((((map__35455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35455):map__35455);
var opts = map__35455__$1;
var statearr_35457_35463 = state;
(statearr_35457_35463[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35455,map__35455__$1,opts){
return (function (val){
var statearr_35458_35464 = state;
(statearr_35458_35464[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35455,map__35455__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35459_35465 = state;
(statearr_35459_35465[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35450){
var G__35451 = cljs.core.first.call(null,seq35450);
var seq35450__$1 = cljs.core.next.call(null,seq35450);
var G__35452 = cljs.core.first.call(null,seq35450__$1);
var seq35450__$2 = cljs.core.next.call(null,seq35450__$1);
var G__35453 = cljs.core.first.call(null,seq35450__$2);
var seq35450__$3 = cljs.core.next.call(null,seq35450__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35451,G__35452,G__35453,seq35450__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35466 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35467){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35467 = meta35467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35468,meta35467__$1){
var self__ = this;
var _35468__$1 = this;
return (new cljs.core.async.t_cljs$core$async35466(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35467__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35468){
var self__ = this;
var _35468__$1 = this;
return self__.meta35467;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35467","meta35467",1055454181,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35466";

cljs.core.async.t_cljs$core$async35466.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35466");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35466 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35466(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35467){
return (new cljs.core.async.t_cljs$core$async35466(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35467));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35466(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34571__auto___35630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___35630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___35630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35570){
var state_val_35571 = (state_35570[(1)]);
if((state_val_35571 === (7))){
var inst_35485 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35572_35631 = state_35570__$1;
(statearr_35572_35631[(2)] = inst_35485);

(statearr_35572_35631[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (20))){
var inst_35497 = (state_35570[(7)]);
var state_35570__$1 = state_35570;
var statearr_35573_35632 = state_35570__$1;
(statearr_35573_35632[(2)] = inst_35497);

(statearr_35573_35632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (27))){
var state_35570__$1 = state_35570;
var statearr_35574_35633 = state_35570__$1;
(statearr_35574_35633[(2)] = null);

(statearr_35574_35633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (1))){
var inst_35472 = (state_35570[(8)]);
var inst_35472__$1 = calc_state.call(null);
var inst_35474 = (inst_35472__$1 == null);
var inst_35475 = cljs.core.not.call(null,inst_35474);
var state_35570__$1 = (function (){var statearr_35575 = state_35570;
(statearr_35575[(8)] = inst_35472__$1);

return statearr_35575;
})();
if(inst_35475){
var statearr_35576_35634 = state_35570__$1;
(statearr_35576_35634[(1)] = (2));

} else {
var statearr_35577_35635 = state_35570__$1;
(statearr_35577_35635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (24))){
var inst_35544 = (state_35570[(9)]);
var inst_35521 = (state_35570[(10)]);
var inst_35530 = (state_35570[(11)]);
var inst_35544__$1 = inst_35521.call(null,inst_35530);
var state_35570__$1 = (function (){var statearr_35578 = state_35570;
(statearr_35578[(9)] = inst_35544__$1);

return statearr_35578;
})();
if(cljs.core.truth_(inst_35544__$1)){
var statearr_35579_35636 = state_35570__$1;
(statearr_35579_35636[(1)] = (29));

} else {
var statearr_35580_35637 = state_35570__$1;
(statearr_35580_35637[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (4))){
var inst_35488 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35488)){
var statearr_35581_35638 = state_35570__$1;
(statearr_35581_35638[(1)] = (8));

} else {
var statearr_35582_35639 = state_35570__$1;
(statearr_35582_35639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (15))){
var inst_35515 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35515)){
var statearr_35583_35640 = state_35570__$1;
(statearr_35583_35640[(1)] = (19));

} else {
var statearr_35584_35641 = state_35570__$1;
(statearr_35584_35641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (21))){
var inst_35520 = (state_35570[(12)]);
var inst_35520__$1 = (state_35570[(2)]);
var inst_35521 = cljs.core.get.call(null,inst_35520__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35522 = cljs.core.get.call(null,inst_35520__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35523 = cljs.core.get.call(null,inst_35520__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35570__$1 = (function (){var statearr_35585 = state_35570;
(statearr_35585[(12)] = inst_35520__$1);

(statearr_35585[(10)] = inst_35521);

(statearr_35585[(13)] = inst_35522);

return statearr_35585;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35570__$1,(22),inst_35523);
} else {
if((state_val_35571 === (31))){
var inst_35552 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35552)){
var statearr_35586_35642 = state_35570__$1;
(statearr_35586_35642[(1)] = (32));

} else {
var statearr_35587_35643 = state_35570__$1;
(statearr_35587_35643[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (32))){
var inst_35529 = (state_35570[(14)]);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35570__$1,(35),out,inst_35529);
} else {
if((state_val_35571 === (33))){
var inst_35520 = (state_35570[(12)]);
var inst_35497 = inst_35520;
var state_35570__$1 = (function (){var statearr_35588 = state_35570;
(statearr_35588[(7)] = inst_35497);

return statearr_35588;
})();
var statearr_35589_35644 = state_35570__$1;
(statearr_35589_35644[(2)] = null);

(statearr_35589_35644[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (13))){
var inst_35497 = (state_35570[(7)]);
var inst_35504 = inst_35497.cljs$lang$protocol_mask$partition0$;
var inst_35505 = (inst_35504 & (64));
var inst_35506 = inst_35497.cljs$core$ISeq$;
var inst_35507 = (cljs.core.PROTOCOL_SENTINEL === inst_35506);
var inst_35508 = (inst_35505) || (inst_35507);
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35508)){
var statearr_35590_35645 = state_35570__$1;
(statearr_35590_35645[(1)] = (16));

} else {
var statearr_35591_35646 = state_35570__$1;
(statearr_35591_35646[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (22))){
var inst_35529 = (state_35570[(14)]);
var inst_35530 = (state_35570[(11)]);
var inst_35528 = (state_35570[(2)]);
var inst_35529__$1 = cljs.core.nth.call(null,inst_35528,(0),null);
var inst_35530__$1 = cljs.core.nth.call(null,inst_35528,(1),null);
var inst_35531 = (inst_35529__$1 == null);
var inst_35532 = cljs.core._EQ_.call(null,inst_35530__$1,change);
var inst_35533 = (inst_35531) || (inst_35532);
var state_35570__$1 = (function (){var statearr_35592 = state_35570;
(statearr_35592[(14)] = inst_35529__$1);

(statearr_35592[(11)] = inst_35530__$1);

return statearr_35592;
})();
if(cljs.core.truth_(inst_35533)){
var statearr_35593_35647 = state_35570__$1;
(statearr_35593_35647[(1)] = (23));

} else {
var statearr_35594_35648 = state_35570__$1;
(statearr_35594_35648[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (36))){
var inst_35520 = (state_35570[(12)]);
var inst_35497 = inst_35520;
var state_35570__$1 = (function (){var statearr_35595 = state_35570;
(statearr_35595[(7)] = inst_35497);

return statearr_35595;
})();
var statearr_35596_35649 = state_35570__$1;
(statearr_35596_35649[(2)] = null);

(statearr_35596_35649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (29))){
var inst_35544 = (state_35570[(9)]);
var state_35570__$1 = state_35570;
var statearr_35597_35650 = state_35570__$1;
(statearr_35597_35650[(2)] = inst_35544);

(statearr_35597_35650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (6))){
var state_35570__$1 = state_35570;
var statearr_35598_35651 = state_35570__$1;
(statearr_35598_35651[(2)] = false);

(statearr_35598_35651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (28))){
var inst_35540 = (state_35570[(2)]);
var inst_35541 = calc_state.call(null);
var inst_35497 = inst_35541;
var state_35570__$1 = (function (){var statearr_35599 = state_35570;
(statearr_35599[(7)] = inst_35497);

(statearr_35599[(15)] = inst_35540);

return statearr_35599;
})();
var statearr_35600_35652 = state_35570__$1;
(statearr_35600_35652[(2)] = null);

(statearr_35600_35652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (25))){
var inst_35566 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35601_35653 = state_35570__$1;
(statearr_35601_35653[(2)] = inst_35566);

(statearr_35601_35653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (34))){
var inst_35564 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35602_35654 = state_35570__$1;
(statearr_35602_35654[(2)] = inst_35564);

(statearr_35602_35654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (17))){
var state_35570__$1 = state_35570;
var statearr_35603_35655 = state_35570__$1;
(statearr_35603_35655[(2)] = false);

(statearr_35603_35655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (3))){
var state_35570__$1 = state_35570;
var statearr_35604_35656 = state_35570__$1;
(statearr_35604_35656[(2)] = false);

(statearr_35604_35656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (12))){
var inst_35568 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35570__$1,inst_35568);
} else {
if((state_val_35571 === (2))){
var inst_35472 = (state_35570[(8)]);
var inst_35477 = inst_35472.cljs$lang$protocol_mask$partition0$;
var inst_35478 = (inst_35477 & (64));
var inst_35479 = inst_35472.cljs$core$ISeq$;
var inst_35480 = (cljs.core.PROTOCOL_SENTINEL === inst_35479);
var inst_35481 = (inst_35478) || (inst_35480);
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35481)){
var statearr_35605_35657 = state_35570__$1;
(statearr_35605_35657[(1)] = (5));

} else {
var statearr_35606_35658 = state_35570__$1;
(statearr_35606_35658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (23))){
var inst_35529 = (state_35570[(14)]);
var inst_35535 = (inst_35529 == null);
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35535)){
var statearr_35607_35659 = state_35570__$1;
(statearr_35607_35659[(1)] = (26));

} else {
var statearr_35608_35660 = state_35570__$1;
(statearr_35608_35660[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (35))){
var inst_35555 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35555)){
var statearr_35609_35661 = state_35570__$1;
(statearr_35609_35661[(1)] = (36));

} else {
var statearr_35610_35662 = state_35570__$1;
(statearr_35610_35662[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (19))){
var inst_35497 = (state_35570[(7)]);
var inst_35517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35497);
var state_35570__$1 = state_35570;
var statearr_35611_35663 = state_35570__$1;
(statearr_35611_35663[(2)] = inst_35517);

(statearr_35611_35663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (11))){
var inst_35497 = (state_35570[(7)]);
var inst_35501 = (inst_35497 == null);
var inst_35502 = cljs.core.not.call(null,inst_35501);
var state_35570__$1 = state_35570;
if(inst_35502){
var statearr_35612_35664 = state_35570__$1;
(statearr_35612_35664[(1)] = (13));

} else {
var statearr_35613_35665 = state_35570__$1;
(statearr_35613_35665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (9))){
var inst_35472 = (state_35570[(8)]);
var state_35570__$1 = state_35570;
var statearr_35614_35666 = state_35570__$1;
(statearr_35614_35666[(2)] = inst_35472);

(statearr_35614_35666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (5))){
var state_35570__$1 = state_35570;
var statearr_35615_35667 = state_35570__$1;
(statearr_35615_35667[(2)] = true);

(statearr_35615_35667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (14))){
var state_35570__$1 = state_35570;
var statearr_35616_35668 = state_35570__$1;
(statearr_35616_35668[(2)] = false);

(statearr_35616_35668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (26))){
var inst_35530 = (state_35570[(11)]);
var inst_35537 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35530);
var state_35570__$1 = state_35570;
var statearr_35617_35669 = state_35570__$1;
(statearr_35617_35669[(2)] = inst_35537);

(statearr_35617_35669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (16))){
var state_35570__$1 = state_35570;
var statearr_35618_35670 = state_35570__$1;
(statearr_35618_35670[(2)] = true);

(statearr_35618_35670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (38))){
var inst_35560 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35619_35671 = state_35570__$1;
(statearr_35619_35671[(2)] = inst_35560);

(statearr_35619_35671[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (30))){
var inst_35521 = (state_35570[(10)]);
var inst_35530 = (state_35570[(11)]);
var inst_35522 = (state_35570[(13)]);
var inst_35547 = cljs.core.empty_QMARK_.call(null,inst_35521);
var inst_35548 = inst_35522.call(null,inst_35530);
var inst_35549 = cljs.core.not.call(null,inst_35548);
var inst_35550 = (inst_35547) && (inst_35549);
var state_35570__$1 = state_35570;
var statearr_35620_35672 = state_35570__$1;
(statearr_35620_35672[(2)] = inst_35550);

(statearr_35620_35672[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (10))){
var inst_35472 = (state_35570[(8)]);
var inst_35493 = (state_35570[(2)]);
var inst_35494 = cljs.core.get.call(null,inst_35493,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35495 = cljs.core.get.call(null,inst_35493,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35496 = cljs.core.get.call(null,inst_35493,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35497 = inst_35472;
var state_35570__$1 = (function (){var statearr_35621 = state_35570;
(statearr_35621[(16)] = inst_35495);

(statearr_35621[(17)] = inst_35496);

(statearr_35621[(18)] = inst_35494);

(statearr_35621[(7)] = inst_35497);

return statearr_35621;
})();
var statearr_35622_35673 = state_35570__$1;
(statearr_35622_35673[(2)] = null);

(statearr_35622_35673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (18))){
var inst_35512 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35623_35674 = state_35570__$1;
(statearr_35623_35674[(2)] = inst_35512);

(statearr_35623_35674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (37))){
var state_35570__$1 = state_35570;
var statearr_35624_35675 = state_35570__$1;
(statearr_35624_35675[(2)] = null);

(statearr_35624_35675[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (8))){
var inst_35472 = (state_35570[(8)]);
var inst_35490 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35472);
var state_35570__$1 = state_35570;
var statearr_35625_35676 = state_35570__$1;
(statearr_35625_35676[(2)] = inst_35490);

(statearr_35625_35676[(1)] = (10));


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
});})(c__34571__auto___35630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34481__auto__,c__34571__auto___35630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34482__auto__ = null;
var cljs$core$async$mix_$_state_machine__34482__auto____0 = (function (){
var statearr_35626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35626[(0)] = cljs$core$async$mix_$_state_machine__34482__auto__);

(statearr_35626[(1)] = (1));

return statearr_35626;
});
var cljs$core$async$mix_$_state_machine__34482__auto____1 = (function (state_35570){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35627){if((e35627 instanceof Object)){
var ex__34485__auto__ = e35627;
var statearr_35628_35677 = state_35570;
(statearr_35628_35677[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35678 = state_35570;
state_35570 = G__35678;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34482__auto__ = function(state_35570){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34482__auto____1.call(this,state_35570);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34482__auto____0;
cljs$core$async$mix_$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34482__auto____1;
return cljs$core$async$mix_$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___35630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34573__auto__ = (function (){var statearr_35629 = f__34572__auto__.call(null);
(statearr_35629[(6)] = c__34571__auto___35630);

return statearr_35629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___35630,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30817__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35680 = arguments.length;
switch (G__35680) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35684 = arguments.length;
switch (G__35684) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30083__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30083__auto__,mults){
return (function (p1__35682_SHARP_){
if(cljs.core.truth_(p1__35682_SHARP_.call(null,topic))){
return p1__35682_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35682_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30083__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35685 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35686){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35686 = meta35686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35687,meta35686__$1){
var self__ = this;
var _35687__$1 = this;
return (new cljs.core.async.t_cljs$core$async35685(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35686__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35687){
var self__ = this;
var _35687__$1 = this;
return self__.meta35686;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35685.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35686","meta35686",-1787900969,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35685";

cljs.core.async.t_cljs$core$async35685.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35685");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35685 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35685(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35686){
return (new cljs.core.async.t_cljs$core$async35685(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35686));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35685(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34571__auto___35805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___35805,mults,ensure_mult,p){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___35805,mults,ensure_mult,p){
return (function (state_35759){
var state_val_35760 = (state_35759[(1)]);
if((state_val_35760 === (7))){
var inst_35755 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35761_35806 = state_35759__$1;
(statearr_35761_35806[(2)] = inst_35755);

(statearr_35761_35806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (20))){
var state_35759__$1 = state_35759;
var statearr_35762_35807 = state_35759__$1;
(statearr_35762_35807[(2)] = null);

(statearr_35762_35807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (1))){
var state_35759__$1 = state_35759;
var statearr_35763_35808 = state_35759__$1;
(statearr_35763_35808[(2)] = null);

(statearr_35763_35808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (24))){
var inst_35738 = (state_35759[(7)]);
var inst_35747 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35738);
var state_35759__$1 = state_35759;
var statearr_35764_35809 = state_35759__$1;
(statearr_35764_35809[(2)] = inst_35747);

(statearr_35764_35809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (4))){
var inst_35690 = (state_35759[(8)]);
var inst_35690__$1 = (state_35759[(2)]);
var inst_35691 = (inst_35690__$1 == null);
var state_35759__$1 = (function (){var statearr_35765 = state_35759;
(statearr_35765[(8)] = inst_35690__$1);

return statearr_35765;
})();
if(cljs.core.truth_(inst_35691)){
var statearr_35766_35810 = state_35759__$1;
(statearr_35766_35810[(1)] = (5));

} else {
var statearr_35767_35811 = state_35759__$1;
(statearr_35767_35811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (15))){
var inst_35732 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35768_35812 = state_35759__$1;
(statearr_35768_35812[(2)] = inst_35732);

(statearr_35768_35812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (21))){
var inst_35752 = (state_35759[(2)]);
var state_35759__$1 = (function (){var statearr_35769 = state_35759;
(statearr_35769[(9)] = inst_35752);

return statearr_35769;
})();
var statearr_35770_35813 = state_35759__$1;
(statearr_35770_35813[(2)] = null);

(statearr_35770_35813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (13))){
var inst_35714 = (state_35759[(10)]);
var inst_35716 = cljs.core.chunked_seq_QMARK_.call(null,inst_35714);
var state_35759__$1 = state_35759;
if(inst_35716){
var statearr_35771_35814 = state_35759__$1;
(statearr_35771_35814[(1)] = (16));

} else {
var statearr_35772_35815 = state_35759__$1;
(statearr_35772_35815[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (22))){
var inst_35744 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35744)){
var statearr_35773_35816 = state_35759__$1;
(statearr_35773_35816[(1)] = (23));

} else {
var statearr_35774_35817 = state_35759__$1;
(statearr_35774_35817[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (6))){
var inst_35690 = (state_35759[(8)]);
var inst_35740 = (state_35759[(11)]);
var inst_35738 = (state_35759[(7)]);
var inst_35738__$1 = topic_fn.call(null,inst_35690);
var inst_35739 = cljs.core.deref.call(null,mults);
var inst_35740__$1 = cljs.core.get.call(null,inst_35739,inst_35738__$1);
var state_35759__$1 = (function (){var statearr_35775 = state_35759;
(statearr_35775[(11)] = inst_35740__$1);

(statearr_35775[(7)] = inst_35738__$1);

return statearr_35775;
})();
if(cljs.core.truth_(inst_35740__$1)){
var statearr_35776_35818 = state_35759__$1;
(statearr_35776_35818[(1)] = (19));

} else {
var statearr_35777_35819 = state_35759__$1;
(statearr_35777_35819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (25))){
var inst_35749 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35778_35820 = state_35759__$1;
(statearr_35778_35820[(2)] = inst_35749);

(statearr_35778_35820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (17))){
var inst_35714 = (state_35759[(10)]);
var inst_35723 = cljs.core.first.call(null,inst_35714);
var inst_35724 = cljs.core.async.muxch_STAR_.call(null,inst_35723);
var inst_35725 = cljs.core.async.close_BANG_.call(null,inst_35724);
var inst_35726 = cljs.core.next.call(null,inst_35714);
var inst_35700 = inst_35726;
var inst_35701 = null;
var inst_35702 = (0);
var inst_35703 = (0);
var state_35759__$1 = (function (){var statearr_35779 = state_35759;
(statearr_35779[(12)] = inst_35700);

(statearr_35779[(13)] = inst_35703);

(statearr_35779[(14)] = inst_35702);

(statearr_35779[(15)] = inst_35701);

(statearr_35779[(16)] = inst_35725);

return statearr_35779;
})();
var statearr_35780_35821 = state_35759__$1;
(statearr_35780_35821[(2)] = null);

(statearr_35780_35821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (3))){
var inst_35757 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35759__$1,inst_35757);
} else {
if((state_val_35760 === (12))){
var inst_35734 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35781_35822 = state_35759__$1;
(statearr_35781_35822[(2)] = inst_35734);

(statearr_35781_35822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (2))){
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35759__$1,(4),ch);
} else {
if((state_val_35760 === (23))){
var state_35759__$1 = state_35759;
var statearr_35782_35823 = state_35759__$1;
(statearr_35782_35823[(2)] = null);

(statearr_35782_35823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (19))){
var inst_35690 = (state_35759[(8)]);
var inst_35740 = (state_35759[(11)]);
var inst_35742 = cljs.core.async.muxch_STAR_.call(null,inst_35740);
var state_35759__$1 = state_35759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35759__$1,(22),inst_35742,inst_35690);
} else {
if((state_val_35760 === (11))){
var inst_35700 = (state_35759[(12)]);
var inst_35714 = (state_35759[(10)]);
var inst_35714__$1 = cljs.core.seq.call(null,inst_35700);
var state_35759__$1 = (function (){var statearr_35783 = state_35759;
(statearr_35783[(10)] = inst_35714__$1);

return statearr_35783;
})();
if(inst_35714__$1){
var statearr_35784_35824 = state_35759__$1;
(statearr_35784_35824[(1)] = (13));

} else {
var statearr_35785_35825 = state_35759__$1;
(statearr_35785_35825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (9))){
var inst_35736 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35786_35826 = state_35759__$1;
(statearr_35786_35826[(2)] = inst_35736);

(statearr_35786_35826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (5))){
var inst_35697 = cljs.core.deref.call(null,mults);
var inst_35698 = cljs.core.vals.call(null,inst_35697);
var inst_35699 = cljs.core.seq.call(null,inst_35698);
var inst_35700 = inst_35699;
var inst_35701 = null;
var inst_35702 = (0);
var inst_35703 = (0);
var state_35759__$1 = (function (){var statearr_35787 = state_35759;
(statearr_35787[(12)] = inst_35700);

(statearr_35787[(13)] = inst_35703);

(statearr_35787[(14)] = inst_35702);

(statearr_35787[(15)] = inst_35701);

return statearr_35787;
})();
var statearr_35788_35827 = state_35759__$1;
(statearr_35788_35827[(2)] = null);

(statearr_35788_35827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (14))){
var state_35759__$1 = state_35759;
var statearr_35792_35828 = state_35759__$1;
(statearr_35792_35828[(2)] = null);

(statearr_35792_35828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (16))){
var inst_35714 = (state_35759[(10)]);
var inst_35718 = cljs.core.chunk_first.call(null,inst_35714);
var inst_35719 = cljs.core.chunk_rest.call(null,inst_35714);
var inst_35720 = cljs.core.count.call(null,inst_35718);
var inst_35700 = inst_35719;
var inst_35701 = inst_35718;
var inst_35702 = inst_35720;
var inst_35703 = (0);
var state_35759__$1 = (function (){var statearr_35793 = state_35759;
(statearr_35793[(12)] = inst_35700);

(statearr_35793[(13)] = inst_35703);

(statearr_35793[(14)] = inst_35702);

(statearr_35793[(15)] = inst_35701);

return statearr_35793;
})();
var statearr_35794_35829 = state_35759__$1;
(statearr_35794_35829[(2)] = null);

(statearr_35794_35829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (10))){
var inst_35700 = (state_35759[(12)]);
var inst_35703 = (state_35759[(13)]);
var inst_35702 = (state_35759[(14)]);
var inst_35701 = (state_35759[(15)]);
var inst_35708 = cljs.core._nth.call(null,inst_35701,inst_35703);
var inst_35709 = cljs.core.async.muxch_STAR_.call(null,inst_35708);
var inst_35710 = cljs.core.async.close_BANG_.call(null,inst_35709);
var inst_35711 = (inst_35703 + (1));
var tmp35789 = inst_35700;
var tmp35790 = inst_35702;
var tmp35791 = inst_35701;
var inst_35700__$1 = tmp35789;
var inst_35701__$1 = tmp35791;
var inst_35702__$1 = tmp35790;
var inst_35703__$1 = inst_35711;
var state_35759__$1 = (function (){var statearr_35795 = state_35759;
(statearr_35795[(12)] = inst_35700__$1);

(statearr_35795[(13)] = inst_35703__$1);

(statearr_35795[(14)] = inst_35702__$1);

(statearr_35795[(17)] = inst_35710);

(statearr_35795[(15)] = inst_35701__$1);

return statearr_35795;
})();
var statearr_35796_35830 = state_35759__$1;
(statearr_35796_35830[(2)] = null);

(statearr_35796_35830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (18))){
var inst_35729 = (state_35759[(2)]);
var state_35759__$1 = state_35759;
var statearr_35797_35831 = state_35759__$1;
(statearr_35797_35831[(2)] = inst_35729);

(statearr_35797_35831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35760 === (8))){
var inst_35703 = (state_35759[(13)]);
var inst_35702 = (state_35759[(14)]);
var inst_35705 = (inst_35703 < inst_35702);
var inst_35706 = inst_35705;
var state_35759__$1 = state_35759;
if(cljs.core.truth_(inst_35706)){
var statearr_35798_35832 = state_35759__$1;
(statearr_35798_35832[(1)] = (10));

} else {
var statearr_35799_35833 = state_35759__$1;
(statearr_35799_35833[(1)] = (11));

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
});})(c__34571__auto___35805,mults,ensure_mult,p))
;
return ((function (switch__34481__auto__,c__34571__auto___35805,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_35800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35800[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_35800[(1)] = (1));

return statearr_35800;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_35759){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35801){if((e35801 instanceof Object)){
var ex__34485__auto__ = e35801;
var statearr_35802_35834 = state_35759;
(statearr_35802_35834[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35835 = state_35759;
state_35759 = G__35835;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_35759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_35759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___35805,mults,ensure_mult,p))
})();
var state__34573__auto__ = (function (){var statearr_35803 = f__34572__auto__.call(null);
(statearr_35803[(6)] = c__34571__auto___35805);

return statearr_35803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___35805,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35837 = arguments.length;
switch (G__35837) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35840 = arguments.length;
switch (G__35840) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35843 = arguments.length;
switch (G__35843) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34571__auto___35910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___35910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___35910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35882){
var state_val_35883 = (state_35882[(1)]);
if((state_val_35883 === (7))){
var state_35882__$1 = state_35882;
var statearr_35884_35911 = state_35882__$1;
(statearr_35884_35911[(2)] = null);

(statearr_35884_35911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (1))){
var state_35882__$1 = state_35882;
var statearr_35885_35912 = state_35882__$1;
(statearr_35885_35912[(2)] = null);

(statearr_35885_35912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (4))){
var inst_35846 = (state_35882[(7)]);
var inst_35848 = (inst_35846 < cnt);
var state_35882__$1 = state_35882;
if(cljs.core.truth_(inst_35848)){
var statearr_35886_35913 = state_35882__$1;
(statearr_35886_35913[(1)] = (6));

} else {
var statearr_35887_35914 = state_35882__$1;
(statearr_35887_35914[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (15))){
var inst_35878 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35888_35915 = state_35882__$1;
(statearr_35888_35915[(2)] = inst_35878);

(statearr_35888_35915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (13))){
var inst_35871 = cljs.core.async.close_BANG_.call(null,out);
var state_35882__$1 = state_35882;
var statearr_35889_35916 = state_35882__$1;
(statearr_35889_35916[(2)] = inst_35871);

(statearr_35889_35916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (6))){
var state_35882__$1 = state_35882;
var statearr_35890_35917 = state_35882__$1;
(statearr_35890_35917[(2)] = null);

(statearr_35890_35917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (3))){
var inst_35880 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35882__$1,inst_35880);
} else {
if((state_val_35883 === (12))){
var inst_35868 = (state_35882[(8)]);
var inst_35868__$1 = (state_35882[(2)]);
var inst_35869 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35868__$1);
var state_35882__$1 = (function (){var statearr_35891 = state_35882;
(statearr_35891[(8)] = inst_35868__$1);

return statearr_35891;
})();
if(cljs.core.truth_(inst_35869)){
var statearr_35892_35918 = state_35882__$1;
(statearr_35892_35918[(1)] = (13));

} else {
var statearr_35893_35919 = state_35882__$1;
(statearr_35893_35919[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (2))){
var inst_35845 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35846 = (0);
var state_35882__$1 = (function (){var statearr_35894 = state_35882;
(statearr_35894[(9)] = inst_35845);

(statearr_35894[(7)] = inst_35846);

return statearr_35894;
})();
var statearr_35895_35920 = state_35882__$1;
(statearr_35895_35920[(2)] = null);

(statearr_35895_35920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (11))){
var inst_35846 = (state_35882[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35882,(10),Object,null,(9));
var inst_35855 = chs__$1.call(null,inst_35846);
var inst_35856 = done.call(null,inst_35846);
var inst_35857 = cljs.core.async.take_BANG_.call(null,inst_35855,inst_35856);
var state_35882__$1 = state_35882;
var statearr_35896_35921 = state_35882__$1;
(statearr_35896_35921[(2)] = inst_35857);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35882__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (9))){
var inst_35846 = (state_35882[(7)]);
var inst_35859 = (state_35882[(2)]);
var inst_35860 = (inst_35846 + (1));
var inst_35846__$1 = inst_35860;
var state_35882__$1 = (function (){var statearr_35897 = state_35882;
(statearr_35897[(7)] = inst_35846__$1);

(statearr_35897[(10)] = inst_35859);

return statearr_35897;
})();
var statearr_35898_35922 = state_35882__$1;
(statearr_35898_35922[(2)] = null);

(statearr_35898_35922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (5))){
var inst_35866 = (state_35882[(2)]);
var state_35882__$1 = (function (){var statearr_35899 = state_35882;
(statearr_35899[(11)] = inst_35866);

return statearr_35899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35882__$1,(12),dchan);
} else {
if((state_val_35883 === (14))){
var inst_35868 = (state_35882[(8)]);
var inst_35873 = cljs.core.apply.call(null,f,inst_35868);
var state_35882__$1 = state_35882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35882__$1,(16),out,inst_35873);
} else {
if((state_val_35883 === (16))){
var inst_35875 = (state_35882[(2)]);
var state_35882__$1 = (function (){var statearr_35900 = state_35882;
(statearr_35900[(12)] = inst_35875);

return statearr_35900;
})();
var statearr_35901_35923 = state_35882__$1;
(statearr_35901_35923[(2)] = null);

(statearr_35901_35923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (10))){
var inst_35850 = (state_35882[(2)]);
var inst_35851 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35882__$1 = (function (){var statearr_35902 = state_35882;
(statearr_35902[(13)] = inst_35850);

return statearr_35902;
})();
var statearr_35903_35924 = state_35882__$1;
(statearr_35903_35924[(2)] = inst_35851);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35882__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (8))){
var inst_35864 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35904_35925 = state_35882__$1;
(statearr_35904_35925[(2)] = inst_35864);

(statearr_35904_35925[(1)] = (5));


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
});})(c__34571__auto___35910,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34481__auto__,c__34571__auto___35910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_35905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35905[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_35905[(1)] = (1));

return statearr_35905;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_35882){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35906){if((e35906 instanceof Object)){
var ex__34485__auto__ = e35906;
var statearr_35907_35926 = state_35882;
(statearr_35907_35926[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35927 = state_35882;
state_35882 = G__35927;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_35882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_35882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___35910,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34573__auto__ = (function (){var statearr_35908 = f__34572__auto__.call(null);
(statearr_35908[(6)] = c__34571__auto___35910);

return statearr_35908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___35910,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35930 = arguments.length;
switch (G__35930) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34571__auto___35984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___35984,out){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___35984,out){
return (function (state_35962){
var state_val_35963 = (state_35962[(1)]);
if((state_val_35963 === (7))){
var inst_35942 = (state_35962[(7)]);
var inst_35941 = (state_35962[(8)]);
var inst_35941__$1 = (state_35962[(2)]);
var inst_35942__$1 = cljs.core.nth.call(null,inst_35941__$1,(0),null);
var inst_35943 = cljs.core.nth.call(null,inst_35941__$1,(1),null);
var inst_35944 = (inst_35942__$1 == null);
var state_35962__$1 = (function (){var statearr_35964 = state_35962;
(statearr_35964[(7)] = inst_35942__$1);

(statearr_35964[(8)] = inst_35941__$1);

(statearr_35964[(9)] = inst_35943);

return statearr_35964;
})();
if(cljs.core.truth_(inst_35944)){
var statearr_35965_35985 = state_35962__$1;
(statearr_35965_35985[(1)] = (8));

} else {
var statearr_35966_35986 = state_35962__$1;
(statearr_35966_35986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (1))){
var inst_35931 = cljs.core.vec.call(null,chs);
var inst_35932 = inst_35931;
var state_35962__$1 = (function (){var statearr_35967 = state_35962;
(statearr_35967[(10)] = inst_35932);

return statearr_35967;
})();
var statearr_35968_35987 = state_35962__$1;
(statearr_35968_35987[(2)] = null);

(statearr_35968_35987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (4))){
var inst_35932 = (state_35962[(10)]);
var state_35962__$1 = state_35962;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35962__$1,(7),inst_35932);
} else {
if((state_val_35963 === (6))){
var inst_35958 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_35969_35988 = state_35962__$1;
(statearr_35969_35988[(2)] = inst_35958);

(statearr_35969_35988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (3))){
var inst_35960 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35962__$1,inst_35960);
} else {
if((state_val_35963 === (2))){
var inst_35932 = (state_35962[(10)]);
var inst_35934 = cljs.core.count.call(null,inst_35932);
var inst_35935 = (inst_35934 > (0));
var state_35962__$1 = state_35962;
if(cljs.core.truth_(inst_35935)){
var statearr_35971_35989 = state_35962__$1;
(statearr_35971_35989[(1)] = (4));

} else {
var statearr_35972_35990 = state_35962__$1;
(statearr_35972_35990[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (11))){
var inst_35932 = (state_35962[(10)]);
var inst_35951 = (state_35962[(2)]);
var tmp35970 = inst_35932;
var inst_35932__$1 = tmp35970;
var state_35962__$1 = (function (){var statearr_35973 = state_35962;
(statearr_35973[(10)] = inst_35932__$1);

(statearr_35973[(11)] = inst_35951);

return statearr_35973;
})();
var statearr_35974_35991 = state_35962__$1;
(statearr_35974_35991[(2)] = null);

(statearr_35974_35991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (9))){
var inst_35942 = (state_35962[(7)]);
var state_35962__$1 = state_35962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35962__$1,(11),out,inst_35942);
} else {
if((state_val_35963 === (5))){
var inst_35956 = cljs.core.async.close_BANG_.call(null,out);
var state_35962__$1 = state_35962;
var statearr_35975_35992 = state_35962__$1;
(statearr_35975_35992[(2)] = inst_35956);

(statearr_35975_35992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (10))){
var inst_35954 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_35976_35993 = state_35962__$1;
(statearr_35976_35993[(2)] = inst_35954);

(statearr_35976_35993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (8))){
var inst_35942 = (state_35962[(7)]);
var inst_35932 = (state_35962[(10)]);
var inst_35941 = (state_35962[(8)]);
var inst_35943 = (state_35962[(9)]);
var inst_35946 = (function (){var cs = inst_35932;
var vec__35937 = inst_35941;
var v = inst_35942;
var c = inst_35943;
return ((function (cs,vec__35937,v,c,inst_35942,inst_35932,inst_35941,inst_35943,state_val_35963,c__34571__auto___35984,out){
return (function (p1__35928_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35928_SHARP_);
});
;})(cs,vec__35937,v,c,inst_35942,inst_35932,inst_35941,inst_35943,state_val_35963,c__34571__auto___35984,out))
})();
var inst_35947 = cljs.core.filterv.call(null,inst_35946,inst_35932);
var inst_35932__$1 = inst_35947;
var state_35962__$1 = (function (){var statearr_35977 = state_35962;
(statearr_35977[(10)] = inst_35932__$1);

return statearr_35977;
})();
var statearr_35978_35994 = state_35962__$1;
(statearr_35978_35994[(2)] = null);

(statearr_35978_35994[(1)] = (2));


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
});})(c__34571__auto___35984,out))
;
return ((function (switch__34481__auto__,c__34571__auto___35984,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_35979 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35979[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_35979[(1)] = (1));

return statearr_35979;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_35962){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_35962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e35980){if((e35980 instanceof Object)){
var ex__34485__auto__ = e35980;
var statearr_35981_35995 = state_35962;
(statearr_35981_35995[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35996 = state_35962;
state_35962 = G__35996;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_35962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_35962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___35984,out))
})();
var state__34573__auto__ = (function (){var statearr_35982 = f__34572__auto__.call(null);
(statearr_35982[(6)] = c__34571__auto___35984);

return statearr_35982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___35984,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35998 = arguments.length;
switch (G__35998) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34571__auto___36043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___36043,out){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___36043,out){
return (function (state_36022){
var state_val_36023 = (state_36022[(1)]);
if((state_val_36023 === (7))){
var inst_36004 = (state_36022[(7)]);
var inst_36004__$1 = (state_36022[(2)]);
var inst_36005 = (inst_36004__$1 == null);
var inst_36006 = cljs.core.not.call(null,inst_36005);
var state_36022__$1 = (function (){var statearr_36024 = state_36022;
(statearr_36024[(7)] = inst_36004__$1);

return statearr_36024;
})();
if(inst_36006){
var statearr_36025_36044 = state_36022__$1;
(statearr_36025_36044[(1)] = (8));

} else {
var statearr_36026_36045 = state_36022__$1;
(statearr_36026_36045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (1))){
var inst_35999 = (0);
var state_36022__$1 = (function (){var statearr_36027 = state_36022;
(statearr_36027[(8)] = inst_35999);

return statearr_36027;
})();
var statearr_36028_36046 = state_36022__$1;
(statearr_36028_36046[(2)] = null);

(statearr_36028_36046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (4))){
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36022__$1,(7),ch);
} else {
if((state_val_36023 === (6))){
var inst_36017 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
var statearr_36029_36047 = state_36022__$1;
(statearr_36029_36047[(2)] = inst_36017);

(statearr_36029_36047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (3))){
var inst_36019 = (state_36022[(2)]);
var inst_36020 = cljs.core.async.close_BANG_.call(null,out);
var state_36022__$1 = (function (){var statearr_36030 = state_36022;
(statearr_36030[(9)] = inst_36019);

return statearr_36030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36022__$1,inst_36020);
} else {
if((state_val_36023 === (2))){
var inst_35999 = (state_36022[(8)]);
var inst_36001 = (inst_35999 < n);
var state_36022__$1 = state_36022;
if(cljs.core.truth_(inst_36001)){
var statearr_36031_36048 = state_36022__$1;
(statearr_36031_36048[(1)] = (4));

} else {
var statearr_36032_36049 = state_36022__$1;
(statearr_36032_36049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (11))){
var inst_35999 = (state_36022[(8)]);
var inst_36009 = (state_36022[(2)]);
var inst_36010 = (inst_35999 + (1));
var inst_35999__$1 = inst_36010;
var state_36022__$1 = (function (){var statearr_36033 = state_36022;
(statearr_36033[(8)] = inst_35999__$1);

(statearr_36033[(10)] = inst_36009);

return statearr_36033;
})();
var statearr_36034_36050 = state_36022__$1;
(statearr_36034_36050[(2)] = null);

(statearr_36034_36050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (9))){
var state_36022__$1 = state_36022;
var statearr_36035_36051 = state_36022__$1;
(statearr_36035_36051[(2)] = null);

(statearr_36035_36051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (5))){
var state_36022__$1 = state_36022;
var statearr_36036_36052 = state_36022__$1;
(statearr_36036_36052[(2)] = null);

(statearr_36036_36052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (10))){
var inst_36014 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
var statearr_36037_36053 = state_36022__$1;
(statearr_36037_36053[(2)] = inst_36014);

(statearr_36037_36053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (8))){
var inst_36004 = (state_36022[(7)]);
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36022__$1,(11),out,inst_36004);
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
});})(c__34571__auto___36043,out))
;
return ((function (switch__34481__auto__,c__34571__auto___36043,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36038[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36038[(1)] = (1));

return statearr_36038;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36022){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36039){if((e36039 instanceof Object)){
var ex__34485__auto__ = e36039;
var statearr_36040_36054 = state_36022;
(statearr_36040_36054[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36055 = state_36022;
state_36022 = G__36055;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___36043,out))
})();
var state__34573__auto__ = (function (){var statearr_36041 = f__34572__auto__.call(null);
(statearr_36041[(6)] = c__34571__auto___36043);

return statearr_36041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___36043,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36057 = (function (f,ch,meta36058){
this.f = f;
this.ch = ch;
this.meta36058 = meta36058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36059,meta36058__$1){
var self__ = this;
var _36059__$1 = this;
return (new cljs.core.async.t_cljs$core$async36057(self__.f,self__.ch,meta36058__$1));
});

cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36059){
var self__ = this;
var _36059__$1 = this;
return self__.meta36058;
});

cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36060 = (function (f,ch,meta36058,_,fn1,meta36061){
this.f = f;
this.ch = ch;
this.meta36058 = meta36058;
this._ = _;
this.fn1 = fn1;
this.meta36061 = meta36061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36062,meta36061__$1){
var self__ = this;
var _36062__$1 = this;
return (new cljs.core.async.t_cljs$core$async36060(self__.f,self__.ch,self__.meta36058,self__._,self__.fn1,meta36061__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36062){
var self__ = this;
var _36062__$1 = this;
return self__.meta36061;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36060.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36060.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36056_SHARP_){
return f1.call(null,(((p1__36056_SHARP_ == null))?null:self__.f.call(null,p1__36056_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36060.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36058","meta36058",-1254671117,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36057","cljs.core.async/t_cljs$core$async36057",-987591536,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36061","meta36061",-383030682,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36060";

cljs.core.async.t_cljs$core$async36060.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36060");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36060 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36060(f__$1,ch__$1,meta36058__$1,___$2,fn1__$1,meta36061){
return (new cljs.core.async.t_cljs$core$async36060(f__$1,ch__$1,meta36058__$1,___$2,fn1__$1,meta36061));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36060(self__.f,self__.ch,self__.meta36058,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30071__auto__ = ret;
if(cljs.core.truth_(and__30071__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30071__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36058","meta36058",-1254671117,null)], null);
});

cljs.core.async.t_cljs$core$async36057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36057";

cljs.core.async.t_cljs$core$async36057.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36057");
});

cljs.core.async.__GT_t_cljs$core$async36057 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36057(f__$1,ch__$1,meta36058){
return (new cljs.core.async.t_cljs$core$async36057(f__$1,ch__$1,meta36058));
});

}

return (new cljs.core.async.t_cljs$core$async36057(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36063 = (function (f,ch,meta36064){
this.f = f;
this.ch = ch;
this.meta36064 = meta36064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36065,meta36064__$1){
var self__ = this;
var _36065__$1 = this;
return (new cljs.core.async.t_cljs$core$async36063(self__.f,self__.ch,meta36064__$1));
});

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36065){
var self__ = this;
var _36065__$1 = this;
return self__.meta36064;
});

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36064","meta36064",-943054672,null)], null);
});

cljs.core.async.t_cljs$core$async36063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36063";

cljs.core.async.t_cljs$core$async36063.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36063");
});

cljs.core.async.__GT_t_cljs$core$async36063 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36063(f__$1,ch__$1,meta36064){
return (new cljs.core.async.t_cljs$core$async36063(f__$1,ch__$1,meta36064));
});

}

return (new cljs.core.async.t_cljs$core$async36063(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36066 = (function (p,ch,meta36067){
this.p = p;
this.ch = ch;
this.meta36067 = meta36067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36068,meta36067__$1){
var self__ = this;
var _36068__$1 = this;
return (new cljs.core.async.t_cljs$core$async36066(self__.p,self__.ch,meta36067__$1));
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36068){
var self__ = this;
var _36068__$1 = this;
return self__.meta36067;
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36067","meta36067",-2067796835,null)], null);
});

cljs.core.async.t_cljs$core$async36066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36066";

cljs.core.async.t_cljs$core$async36066.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36066");
});

cljs.core.async.__GT_t_cljs$core$async36066 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36066(p__$1,ch__$1,meta36067){
return (new cljs.core.async.t_cljs$core$async36066(p__$1,ch__$1,meta36067));
});

}

return (new cljs.core.async.t_cljs$core$async36066(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36070 = arguments.length;
switch (G__36070) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34571__auto___36110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___36110,out){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___36110,out){
return (function (state_36091){
var state_val_36092 = (state_36091[(1)]);
if((state_val_36092 === (7))){
var inst_36087 = (state_36091[(2)]);
var state_36091__$1 = state_36091;
var statearr_36093_36111 = state_36091__$1;
(statearr_36093_36111[(2)] = inst_36087);

(statearr_36093_36111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (1))){
var state_36091__$1 = state_36091;
var statearr_36094_36112 = state_36091__$1;
(statearr_36094_36112[(2)] = null);

(statearr_36094_36112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (4))){
var inst_36073 = (state_36091[(7)]);
var inst_36073__$1 = (state_36091[(2)]);
var inst_36074 = (inst_36073__$1 == null);
var state_36091__$1 = (function (){var statearr_36095 = state_36091;
(statearr_36095[(7)] = inst_36073__$1);

return statearr_36095;
})();
if(cljs.core.truth_(inst_36074)){
var statearr_36096_36113 = state_36091__$1;
(statearr_36096_36113[(1)] = (5));

} else {
var statearr_36097_36114 = state_36091__$1;
(statearr_36097_36114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (6))){
var inst_36073 = (state_36091[(7)]);
var inst_36078 = p.call(null,inst_36073);
var state_36091__$1 = state_36091;
if(cljs.core.truth_(inst_36078)){
var statearr_36098_36115 = state_36091__$1;
(statearr_36098_36115[(1)] = (8));

} else {
var statearr_36099_36116 = state_36091__$1;
(statearr_36099_36116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (3))){
var inst_36089 = (state_36091[(2)]);
var state_36091__$1 = state_36091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36091__$1,inst_36089);
} else {
if((state_val_36092 === (2))){
var state_36091__$1 = state_36091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36091__$1,(4),ch);
} else {
if((state_val_36092 === (11))){
var inst_36081 = (state_36091[(2)]);
var state_36091__$1 = state_36091;
var statearr_36100_36117 = state_36091__$1;
(statearr_36100_36117[(2)] = inst_36081);

(statearr_36100_36117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (9))){
var state_36091__$1 = state_36091;
var statearr_36101_36118 = state_36091__$1;
(statearr_36101_36118[(2)] = null);

(statearr_36101_36118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (5))){
var inst_36076 = cljs.core.async.close_BANG_.call(null,out);
var state_36091__$1 = state_36091;
var statearr_36102_36119 = state_36091__$1;
(statearr_36102_36119[(2)] = inst_36076);

(statearr_36102_36119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (10))){
var inst_36084 = (state_36091[(2)]);
var state_36091__$1 = (function (){var statearr_36103 = state_36091;
(statearr_36103[(8)] = inst_36084);

return statearr_36103;
})();
var statearr_36104_36120 = state_36091__$1;
(statearr_36104_36120[(2)] = null);

(statearr_36104_36120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36092 === (8))){
var inst_36073 = (state_36091[(7)]);
var state_36091__$1 = state_36091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36091__$1,(11),out,inst_36073);
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
});})(c__34571__auto___36110,out))
;
return ((function (switch__34481__auto__,c__34571__auto___36110,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36105 = [null,null,null,null,null,null,null,null,null];
(statearr_36105[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36105[(1)] = (1));

return statearr_36105;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36091){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36106){if((e36106 instanceof Object)){
var ex__34485__auto__ = e36106;
var statearr_36107_36121 = state_36091;
(statearr_36107_36121[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36122 = state_36091;
state_36091 = G__36122;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36091);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___36110,out))
})();
var state__34573__auto__ = (function (){var statearr_36108 = f__34572__auto__.call(null);
(statearr_36108[(6)] = c__34571__auto___36110);

return statearr_36108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___36110,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36124 = arguments.length;
switch (G__36124) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto__){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto__){
return (function (state_36187){
var state_val_36188 = (state_36187[(1)]);
if((state_val_36188 === (7))){
var inst_36183 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36189_36227 = state_36187__$1;
(statearr_36189_36227[(2)] = inst_36183);

(statearr_36189_36227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (20))){
var inst_36153 = (state_36187[(7)]);
var inst_36164 = (state_36187[(2)]);
var inst_36165 = cljs.core.next.call(null,inst_36153);
var inst_36139 = inst_36165;
var inst_36140 = null;
var inst_36141 = (0);
var inst_36142 = (0);
var state_36187__$1 = (function (){var statearr_36190 = state_36187;
(statearr_36190[(8)] = inst_36139);

(statearr_36190[(9)] = inst_36140);

(statearr_36190[(10)] = inst_36142);

(statearr_36190[(11)] = inst_36141);

(statearr_36190[(12)] = inst_36164);

return statearr_36190;
})();
var statearr_36191_36228 = state_36187__$1;
(statearr_36191_36228[(2)] = null);

(statearr_36191_36228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (1))){
var state_36187__$1 = state_36187;
var statearr_36192_36229 = state_36187__$1;
(statearr_36192_36229[(2)] = null);

(statearr_36192_36229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (4))){
var inst_36128 = (state_36187[(13)]);
var inst_36128__$1 = (state_36187[(2)]);
var inst_36129 = (inst_36128__$1 == null);
var state_36187__$1 = (function (){var statearr_36193 = state_36187;
(statearr_36193[(13)] = inst_36128__$1);

return statearr_36193;
})();
if(cljs.core.truth_(inst_36129)){
var statearr_36194_36230 = state_36187__$1;
(statearr_36194_36230[(1)] = (5));

} else {
var statearr_36195_36231 = state_36187__$1;
(statearr_36195_36231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (15))){
var state_36187__$1 = state_36187;
var statearr_36199_36232 = state_36187__$1;
(statearr_36199_36232[(2)] = null);

(statearr_36199_36232[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (21))){
var state_36187__$1 = state_36187;
var statearr_36200_36233 = state_36187__$1;
(statearr_36200_36233[(2)] = null);

(statearr_36200_36233[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (13))){
var inst_36139 = (state_36187[(8)]);
var inst_36140 = (state_36187[(9)]);
var inst_36142 = (state_36187[(10)]);
var inst_36141 = (state_36187[(11)]);
var inst_36149 = (state_36187[(2)]);
var inst_36150 = (inst_36142 + (1));
var tmp36196 = inst_36139;
var tmp36197 = inst_36140;
var tmp36198 = inst_36141;
var inst_36139__$1 = tmp36196;
var inst_36140__$1 = tmp36197;
var inst_36141__$1 = tmp36198;
var inst_36142__$1 = inst_36150;
var state_36187__$1 = (function (){var statearr_36201 = state_36187;
(statearr_36201[(8)] = inst_36139__$1);

(statearr_36201[(9)] = inst_36140__$1);

(statearr_36201[(10)] = inst_36142__$1);

(statearr_36201[(11)] = inst_36141__$1);

(statearr_36201[(14)] = inst_36149);

return statearr_36201;
})();
var statearr_36202_36234 = state_36187__$1;
(statearr_36202_36234[(2)] = null);

(statearr_36202_36234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (22))){
var state_36187__$1 = state_36187;
var statearr_36203_36235 = state_36187__$1;
(statearr_36203_36235[(2)] = null);

(statearr_36203_36235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (6))){
var inst_36128 = (state_36187[(13)]);
var inst_36137 = f.call(null,inst_36128);
var inst_36138 = cljs.core.seq.call(null,inst_36137);
var inst_36139 = inst_36138;
var inst_36140 = null;
var inst_36141 = (0);
var inst_36142 = (0);
var state_36187__$1 = (function (){var statearr_36204 = state_36187;
(statearr_36204[(8)] = inst_36139);

(statearr_36204[(9)] = inst_36140);

(statearr_36204[(10)] = inst_36142);

(statearr_36204[(11)] = inst_36141);

return statearr_36204;
})();
var statearr_36205_36236 = state_36187__$1;
(statearr_36205_36236[(2)] = null);

(statearr_36205_36236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (17))){
var inst_36153 = (state_36187[(7)]);
var inst_36157 = cljs.core.chunk_first.call(null,inst_36153);
var inst_36158 = cljs.core.chunk_rest.call(null,inst_36153);
var inst_36159 = cljs.core.count.call(null,inst_36157);
var inst_36139 = inst_36158;
var inst_36140 = inst_36157;
var inst_36141 = inst_36159;
var inst_36142 = (0);
var state_36187__$1 = (function (){var statearr_36206 = state_36187;
(statearr_36206[(8)] = inst_36139);

(statearr_36206[(9)] = inst_36140);

(statearr_36206[(10)] = inst_36142);

(statearr_36206[(11)] = inst_36141);

return statearr_36206;
})();
var statearr_36207_36237 = state_36187__$1;
(statearr_36207_36237[(2)] = null);

(statearr_36207_36237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (3))){
var inst_36185 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36187__$1,inst_36185);
} else {
if((state_val_36188 === (12))){
var inst_36173 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36208_36238 = state_36187__$1;
(statearr_36208_36238[(2)] = inst_36173);

(statearr_36208_36238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (2))){
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36187__$1,(4),in$);
} else {
if((state_val_36188 === (23))){
var inst_36181 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36209_36239 = state_36187__$1;
(statearr_36209_36239[(2)] = inst_36181);

(statearr_36209_36239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (19))){
var inst_36168 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36210_36240 = state_36187__$1;
(statearr_36210_36240[(2)] = inst_36168);

(statearr_36210_36240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (11))){
var inst_36139 = (state_36187[(8)]);
var inst_36153 = (state_36187[(7)]);
var inst_36153__$1 = cljs.core.seq.call(null,inst_36139);
var state_36187__$1 = (function (){var statearr_36211 = state_36187;
(statearr_36211[(7)] = inst_36153__$1);

return statearr_36211;
})();
if(inst_36153__$1){
var statearr_36212_36241 = state_36187__$1;
(statearr_36212_36241[(1)] = (14));

} else {
var statearr_36213_36242 = state_36187__$1;
(statearr_36213_36242[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (9))){
var inst_36175 = (state_36187[(2)]);
var inst_36176 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36187__$1 = (function (){var statearr_36214 = state_36187;
(statearr_36214[(15)] = inst_36175);

return statearr_36214;
})();
if(cljs.core.truth_(inst_36176)){
var statearr_36215_36243 = state_36187__$1;
(statearr_36215_36243[(1)] = (21));

} else {
var statearr_36216_36244 = state_36187__$1;
(statearr_36216_36244[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (5))){
var inst_36131 = cljs.core.async.close_BANG_.call(null,out);
var state_36187__$1 = state_36187;
var statearr_36217_36245 = state_36187__$1;
(statearr_36217_36245[(2)] = inst_36131);

(statearr_36217_36245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (14))){
var inst_36153 = (state_36187[(7)]);
var inst_36155 = cljs.core.chunked_seq_QMARK_.call(null,inst_36153);
var state_36187__$1 = state_36187;
if(inst_36155){
var statearr_36218_36246 = state_36187__$1;
(statearr_36218_36246[(1)] = (17));

} else {
var statearr_36219_36247 = state_36187__$1;
(statearr_36219_36247[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (16))){
var inst_36171 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36220_36248 = state_36187__$1;
(statearr_36220_36248[(2)] = inst_36171);

(statearr_36220_36248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (10))){
var inst_36140 = (state_36187[(9)]);
var inst_36142 = (state_36187[(10)]);
var inst_36147 = cljs.core._nth.call(null,inst_36140,inst_36142);
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36187__$1,(13),out,inst_36147);
} else {
if((state_val_36188 === (18))){
var inst_36153 = (state_36187[(7)]);
var inst_36162 = cljs.core.first.call(null,inst_36153);
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36187__$1,(20),out,inst_36162);
} else {
if((state_val_36188 === (8))){
var inst_36142 = (state_36187[(10)]);
var inst_36141 = (state_36187[(11)]);
var inst_36144 = (inst_36142 < inst_36141);
var inst_36145 = inst_36144;
var state_36187__$1 = state_36187;
if(cljs.core.truth_(inst_36145)){
var statearr_36221_36249 = state_36187__$1;
(statearr_36221_36249[(1)] = (10));

} else {
var statearr_36222_36250 = state_36187__$1;
(statearr_36222_36250[(1)] = (11));

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
});})(c__34571__auto__))
;
return ((function (switch__34481__auto__,c__34571__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____0 = (function (){
var statearr_36223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36223[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__);

(statearr_36223[(1)] = (1));

return statearr_36223;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____1 = (function (state_36187){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36224){if((e36224 instanceof Object)){
var ex__34485__auto__ = e36224;
var statearr_36225_36251 = state_36187;
(statearr_36225_36251[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36252 = state_36187;
state_36187 = G__36252;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__ = function(state_36187){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____1.call(this,state_36187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34482__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto__))
})();
var state__34573__auto__ = (function (){var statearr_36226 = f__34572__auto__.call(null);
(statearr_36226[(6)] = c__34571__auto__);

return statearr_36226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto__))
);

return c__34571__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36254 = arguments.length;
switch (G__36254) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36257 = arguments.length;
switch (G__36257) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36260 = arguments.length;
switch (G__36260) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34571__auto___36307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___36307,out){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___36307,out){
return (function (state_36284){
var state_val_36285 = (state_36284[(1)]);
if((state_val_36285 === (7))){
var inst_36279 = (state_36284[(2)]);
var state_36284__$1 = state_36284;
var statearr_36286_36308 = state_36284__$1;
(statearr_36286_36308[(2)] = inst_36279);

(statearr_36286_36308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36285 === (1))){
var inst_36261 = null;
var state_36284__$1 = (function (){var statearr_36287 = state_36284;
(statearr_36287[(7)] = inst_36261);

return statearr_36287;
})();
var statearr_36288_36309 = state_36284__$1;
(statearr_36288_36309[(2)] = null);

(statearr_36288_36309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36285 === (4))){
var inst_36264 = (state_36284[(8)]);
var inst_36264__$1 = (state_36284[(2)]);
var inst_36265 = (inst_36264__$1 == null);
var inst_36266 = cljs.core.not.call(null,inst_36265);
var state_36284__$1 = (function (){var statearr_36289 = state_36284;
(statearr_36289[(8)] = inst_36264__$1);

return statearr_36289;
})();
if(inst_36266){
var statearr_36290_36310 = state_36284__$1;
(statearr_36290_36310[(1)] = (5));

} else {
var statearr_36291_36311 = state_36284__$1;
(statearr_36291_36311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36285 === (6))){
var state_36284__$1 = state_36284;
var statearr_36292_36312 = state_36284__$1;
(statearr_36292_36312[(2)] = null);

(statearr_36292_36312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36285 === (3))){
var inst_36281 = (state_36284[(2)]);
var inst_36282 = cljs.core.async.close_BANG_.call(null,out);
var state_36284__$1 = (function (){var statearr_36293 = state_36284;
(statearr_36293[(9)] = inst_36281);

return statearr_36293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36284__$1,inst_36282);
} else {
if((state_val_36285 === (2))){
var state_36284__$1 = state_36284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36284__$1,(4),ch);
} else {
if((state_val_36285 === (11))){
var inst_36264 = (state_36284[(8)]);
var inst_36273 = (state_36284[(2)]);
var inst_36261 = inst_36264;
var state_36284__$1 = (function (){var statearr_36294 = state_36284;
(statearr_36294[(7)] = inst_36261);

(statearr_36294[(10)] = inst_36273);

return statearr_36294;
})();
var statearr_36295_36313 = state_36284__$1;
(statearr_36295_36313[(2)] = null);

(statearr_36295_36313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36285 === (9))){
var inst_36264 = (state_36284[(8)]);
var state_36284__$1 = state_36284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36284__$1,(11),out,inst_36264);
} else {
if((state_val_36285 === (5))){
var inst_36261 = (state_36284[(7)]);
var inst_36264 = (state_36284[(8)]);
var inst_36268 = cljs.core._EQ_.call(null,inst_36264,inst_36261);
var state_36284__$1 = state_36284;
if(inst_36268){
var statearr_36297_36314 = state_36284__$1;
(statearr_36297_36314[(1)] = (8));

} else {
var statearr_36298_36315 = state_36284__$1;
(statearr_36298_36315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36285 === (10))){
var inst_36276 = (state_36284[(2)]);
var state_36284__$1 = state_36284;
var statearr_36299_36316 = state_36284__$1;
(statearr_36299_36316[(2)] = inst_36276);

(statearr_36299_36316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36285 === (8))){
var inst_36261 = (state_36284[(7)]);
var tmp36296 = inst_36261;
var inst_36261__$1 = tmp36296;
var state_36284__$1 = (function (){var statearr_36300 = state_36284;
(statearr_36300[(7)] = inst_36261__$1);

return statearr_36300;
})();
var statearr_36301_36317 = state_36284__$1;
(statearr_36301_36317[(2)] = null);

(statearr_36301_36317[(1)] = (2));


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
});})(c__34571__auto___36307,out))
;
return ((function (switch__34481__auto__,c__34571__auto___36307,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36302[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36302[(1)] = (1));

return statearr_36302;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36284){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36303){if((e36303 instanceof Object)){
var ex__34485__auto__ = e36303;
var statearr_36304_36318 = state_36284;
(statearr_36304_36318[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36319 = state_36284;
state_36284 = G__36319;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36284);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___36307,out))
})();
var state__34573__auto__ = (function (){var statearr_36305 = f__34572__auto__.call(null);
(statearr_36305[(6)] = c__34571__auto___36307);

return statearr_36305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___36307,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36321 = arguments.length;
switch (G__36321) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34571__auto___36387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___36387,out){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___36387,out){
return (function (state_36359){
var state_val_36360 = (state_36359[(1)]);
if((state_val_36360 === (7))){
var inst_36355 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
var statearr_36361_36388 = state_36359__$1;
(statearr_36361_36388[(2)] = inst_36355);

(statearr_36361_36388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (1))){
var inst_36322 = (new Array(n));
var inst_36323 = inst_36322;
var inst_36324 = (0);
var state_36359__$1 = (function (){var statearr_36362 = state_36359;
(statearr_36362[(7)] = inst_36324);

(statearr_36362[(8)] = inst_36323);

return statearr_36362;
})();
var statearr_36363_36389 = state_36359__$1;
(statearr_36363_36389[(2)] = null);

(statearr_36363_36389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (4))){
var inst_36327 = (state_36359[(9)]);
var inst_36327__$1 = (state_36359[(2)]);
var inst_36328 = (inst_36327__$1 == null);
var inst_36329 = cljs.core.not.call(null,inst_36328);
var state_36359__$1 = (function (){var statearr_36364 = state_36359;
(statearr_36364[(9)] = inst_36327__$1);

return statearr_36364;
})();
if(inst_36329){
var statearr_36365_36390 = state_36359__$1;
(statearr_36365_36390[(1)] = (5));

} else {
var statearr_36366_36391 = state_36359__$1;
(statearr_36366_36391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (15))){
var inst_36349 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
var statearr_36367_36392 = state_36359__$1;
(statearr_36367_36392[(2)] = inst_36349);

(statearr_36367_36392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (13))){
var state_36359__$1 = state_36359;
var statearr_36368_36393 = state_36359__$1;
(statearr_36368_36393[(2)] = null);

(statearr_36368_36393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (6))){
var inst_36324 = (state_36359[(7)]);
var inst_36345 = (inst_36324 > (0));
var state_36359__$1 = state_36359;
if(cljs.core.truth_(inst_36345)){
var statearr_36369_36394 = state_36359__$1;
(statearr_36369_36394[(1)] = (12));

} else {
var statearr_36370_36395 = state_36359__$1;
(statearr_36370_36395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (3))){
var inst_36357 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36359__$1,inst_36357);
} else {
if((state_val_36360 === (12))){
var inst_36323 = (state_36359[(8)]);
var inst_36347 = cljs.core.vec.call(null,inst_36323);
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36359__$1,(15),out,inst_36347);
} else {
if((state_val_36360 === (2))){
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36359__$1,(4),ch);
} else {
if((state_val_36360 === (11))){
var inst_36339 = (state_36359[(2)]);
var inst_36340 = (new Array(n));
var inst_36323 = inst_36340;
var inst_36324 = (0);
var state_36359__$1 = (function (){var statearr_36371 = state_36359;
(statearr_36371[(7)] = inst_36324);

(statearr_36371[(10)] = inst_36339);

(statearr_36371[(8)] = inst_36323);

return statearr_36371;
})();
var statearr_36372_36396 = state_36359__$1;
(statearr_36372_36396[(2)] = null);

(statearr_36372_36396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (9))){
var inst_36323 = (state_36359[(8)]);
var inst_36337 = cljs.core.vec.call(null,inst_36323);
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36359__$1,(11),out,inst_36337);
} else {
if((state_val_36360 === (5))){
var inst_36324 = (state_36359[(7)]);
var inst_36332 = (state_36359[(11)]);
var inst_36327 = (state_36359[(9)]);
var inst_36323 = (state_36359[(8)]);
var inst_36331 = (inst_36323[inst_36324] = inst_36327);
var inst_36332__$1 = (inst_36324 + (1));
var inst_36333 = (inst_36332__$1 < n);
var state_36359__$1 = (function (){var statearr_36373 = state_36359;
(statearr_36373[(11)] = inst_36332__$1);

(statearr_36373[(12)] = inst_36331);

return statearr_36373;
})();
if(cljs.core.truth_(inst_36333)){
var statearr_36374_36397 = state_36359__$1;
(statearr_36374_36397[(1)] = (8));

} else {
var statearr_36375_36398 = state_36359__$1;
(statearr_36375_36398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (14))){
var inst_36352 = (state_36359[(2)]);
var inst_36353 = cljs.core.async.close_BANG_.call(null,out);
var state_36359__$1 = (function (){var statearr_36377 = state_36359;
(statearr_36377[(13)] = inst_36352);

return statearr_36377;
})();
var statearr_36378_36399 = state_36359__$1;
(statearr_36378_36399[(2)] = inst_36353);

(statearr_36378_36399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (10))){
var inst_36343 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
var statearr_36379_36400 = state_36359__$1;
(statearr_36379_36400[(2)] = inst_36343);

(statearr_36379_36400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (8))){
var inst_36332 = (state_36359[(11)]);
var inst_36323 = (state_36359[(8)]);
var tmp36376 = inst_36323;
var inst_36323__$1 = tmp36376;
var inst_36324 = inst_36332;
var state_36359__$1 = (function (){var statearr_36380 = state_36359;
(statearr_36380[(7)] = inst_36324);

(statearr_36380[(8)] = inst_36323__$1);

return statearr_36380;
})();
var statearr_36381_36401 = state_36359__$1;
(statearr_36381_36401[(2)] = null);

(statearr_36381_36401[(1)] = (2));


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
});})(c__34571__auto___36387,out))
;
return ((function (switch__34481__auto__,c__34571__auto___36387,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36382[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36382[(1)] = (1));

return statearr_36382;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36359){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36383){if((e36383 instanceof Object)){
var ex__34485__auto__ = e36383;
var statearr_36384_36402 = state_36359;
(statearr_36384_36402[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36403 = state_36359;
state_36359 = G__36403;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___36387,out))
})();
var state__34573__auto__ = (function (){var statearr_36385 = f__34572__auto__.call(null);
(statearr_36385[(6)] = c__34571__auto___36387);

return statearr_36385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___36387,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36405 = arguments.length;
switch (G__36405) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34571__auto___36475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34571__auto___36475,out){
return (function (){
var f__34572__auto__ = (function (){var switch__34481__auto__ = ((function (c__34571__auto___36475,out){
return (function (state_36447){
var state_val_36448 = (state_36447[(1)]);
if((state_val_36448 === (7))){
var inst_36443 = (state_36447[(2)]);
var state_36447__$1 = state_36447;
var statearr_36449_36476 = state_36447__$1;
(statearr_36449_36476[(2)] = inst_36443);

(statearr_36449_36476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (1))){
var inst_36406 = [];
var inst_36407 = inst_36406;
var inst_36408 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36447__$1 = (function (){var statearr_36450 = state_36447;
(statearr_36450[(7)] = inst_36408);

(statearr_36450[(8)] = inst_36407);

return statearr_36450;
})();
var statearr_36451_36477 = state_36447__$1;
(statearr_36451_36477[(2)] = null);

(statearr_36451_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (4))){
var inst_36411 = (state_36447[(9)]);
var inst_36411__$1 = (state_36447[(2)]);
var inst_36412 = (inst_36411__$1 == null);
var inst_36413 = cljs.core.not.call(null,inst_36412);
var state_36447__$1 = (function (){var statearr_36452 = state_36447;
(statearr_36452[(9)] = inst_36411__$1);

return statearr_36452;
})();
if(inst_36413){
var statearr_36453_36478 = state_36447__$1;
(statearr_36453_36478[(1)] = (5));

} else {
var statearr_36454_36479 = state_36447__$1;
(statearr_36454_36479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (15))){
var inst_36437 = (state_36447[(2)]);
var state_36447__$1 = state_36447;
var statearr_36455_36480 = state_36447__$1;
(statearr_36455_36480[(2)] = inst_36437);

(statearr_36455_36480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (13))){
var state_36447__$1 = state_36447;
var statearr_36456_36481 = state_36447__$1;
(statearr_36456_36481[(2)] = null);

(statearr_36456_36481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (6))){
var inst_36407 = (state_36447[(8)]);
var inst_36432 = inst_36407.length;
var inst_36433 = (inst_36432 > (0));
var state_36447__$1 = state_36447;
if(cljs.core.truth_(inst_36433)){
var statearr_36457_36482 = state_36447__$1;
(statearr_36457_36482[(1)] = (12));

} else {
var statearr_36458_36483 = state_36447__$1;
(statearr_36458_36483[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (3))){
var inst_36445 = (state_36447[(2)]);
var state_36447__$1 = state_36447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36447__$1,inst_36445);
} else {
if((state_val_36448 === (12))){
var inst_36407 = (state_36447[(8)]);
var inst_36435 = cljs.core.vec.call(null,inst_36407);
var state_36447__$1 = state_36447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36447__$1,(15),out,inst_36435);
} else {
if((state_val_36448 === (2))){
var state_36447__$1 = state_36447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36447__$1,(4),ch);
} else {
if((state_val_36448 === (11))){
var inst_36411 = (state_36447[(9)]);
var inst_36415 = (state_36447[(10)]);
var inst_36425 = (state_36447[(2)]);
var inst_36426 = [];
var inst_36427 = inst_36426.push(inst_36411);
var inst_36407 = inst_36426;
var inst_36408 = inst_36415;
var state_36447__$1 = (function (){var statearr_36459 = state_36447;
(statearr_36459[(11)] = inst_36425);

(statearr_36459[(7)] = inst_36408);

(statearr_36459[(8)] = inst_36407);

(statearr_36459[(12)] = inst_36427);

return statearr_36459;
})();
var statearr_36460_36484 = state_36447__$1;
(statearr_36460_36484[(2)] = null);

(statearr_36460_36484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (9))){
var inst_36407 = (state_36447[(8)]);
var inst_36423 = cljs.core.vec.call(null,inst_36407);
var state_36447__$1 = state_36447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36447__$1,(11),out,inst_36423);
} else {
if((state_val_36448 === (5))){
var inst_36411 = (state_36447[(9)]);
var inst_36408 = (state_36447[(7)]);
var inst_36415 = (state_36447[(10)]);
var inst_36415__$1 = f.call(null,inst_36411);
var inst_36416 = cljs.core._EQ_.call(null,inst_36415__$1,inst_36408);
var inst_36417 = cljs.core.keyword_identical_QMARK_.call(null,inst_36408,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36418 = (inst_36416) || (inst_36417);
var state_36447__$1 = (function (){var statearr_36461 = state_36447;
(statearr_36461[(10)] = inst_36415__$1);

return statearr_36461;
})();
if(cljs.core.truth_(inst_36418)){
var statearr_36462_36485 = state_36447__$1;
(statearr_36462_36485[(1)] = (8));

} else {
var statearr_36463_36486 = state_36447__$1;
(statearr_36463_36486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (14))){
var inst_36440 = (state_36447[(2)]);
var inst_36441 = cljs.core.async.close_BANG_.call(null,out);
var state_36447__$1 = (function (){var statearr_36465 = state_36447;
(statearr_36465[(13)] = inst_36440);

return statearr_36465;
})();
var statearr_36466_36487 = state_36447__$1;
(statearr_36466_36487[(2)] = inst_36441);

(statearr_36466_36487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (10))){
var inst_36430 = (state_36447[(2)]);
var state_36447__$1 = state_36447;
var statearr_36467_36488 = state_36447__$1;
(statearr_36467_36488[(2)] = inst_36430);

(statearr_36467_36488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36448 === (8))){
var inst_36411 = (state_36447[(9)]);
var inst_36415 = (state_36447[(10)]);
var inst_36407 = (state_36447[(8)]);
var inst_36420 = inst_36407.push(inst_36411);
var tmp36464 = inst_36407;
var inst_36407__$1 = tmp36464;
var inst_36408 = inst_36415;
var state_36447__$1 = (function (){var statearr_36468 = state_36447;
(statearr_36468[(7)] = inst_36408);

(statearr_36468[(14)] = inst_36420);

(statearr_36468[(8)] = inst_36407__$1);

return statearr_36468;
})();
var statearr_36469_36489 = state_36447__$1;
(statearr_36469_36489[(2)] = null);

(statearr_36469_36489[(1)] = (2));


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
});})(c__34571__auto___36475,out))
;
return ((function (switch__34481__auto__,c__34571__auto___36475,out){
return (function() {
var cljs$core$async$state_machine__34482__auto__ = null;
var cljs$core$async$state_machine__34482__auto____0 = (function (){
var statearr_36470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36470[(0)] = cljs$core$async$state_machine__34482__auto__);

(statearr_36470[(1)] = (1));

return statearr_36470;
});
var cljs$core$async$state_machine__34482__auto____1 = (function (state_36447){
while(true){
var ret_value__34483__auto__ = (function (){try{while(true){
var result__34484__auto__ = switch__34481__auto__.call(null,state_36447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34484__auto__;
}
break;
}
}catch (e36471){if((e36471 instanceof Object)){
var ex__34485__auto__ = e36471;
var statearr_36472_36490 = state_36447;
(statearr_36472_36490[(5)] = ex__34485__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36491 = state_36447;
state_36447 = G__36491;
continue;
} else {
return ret_value__34483__auto__;
}
break;
}
});
cljs$core$async$state_machine__34482__auto__ = function(state_36447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34482__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34482__auto____1.call(this,state_36447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34482__auto____0;
cljs$core$async$state_machine__34482__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34482__auto____1;
return cljs$core$async$state_machine__34482__auto__;
})()
;})(switch__34481__auto__,c__34571__auto___36475,out))
})();
var state__34573__auto__ = (function (){var statearr_36473 = f__34572__auto__.call(null);
(statearr_36473[(6)] = c__34571__auto___36475);

return statearr_36473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34573__auto__);
});})(c__34571__auto___36475,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515667561816
