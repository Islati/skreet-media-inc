import{f as u,E as f,af as z,o as m,h as v,w as g,r as y,ag as C,ah as S,ai as B,Z as _,y as b,aj as k,j as P,m as h,g as p,F as j,n as W}from"./BaQZY6jy.js";import{c as M,a as O}from"./DSLhBl-f.js";function R(a){let e=!1,t;const r=B(!0);return(...n)=>(e||(t=r.run(()=>a(...n)),e=!0),t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function x(a){return a?a.flatMap(e=>e.type===j?x(e.children):[e]):[]}const V=u({name:"PrimitiveSlot",inheritAttrs:!1,setup(a,{attrs:e,slots:t}){return()=>{var r,n;if(!t.default)return null;const o=x(t.default()),i=o.findIndex(d=>d.type!==_);if(i===-1)return o;const s=o[i];(r=s.props)==null||delete r.ref;const c=s.props?b(e,s.props):e;e.class&&(n=s.props)!=null&&n.class&&delete s.props.class;const l=k(s,c);for(const d in c)d.startsWith("on")&&(l.props||(l.props={}),l.props[d]=c[d]);return o.length===1?l:(o[i]=l,o)}}}),w=u({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(a,{attrs:e,slots:t}){const r=a.asChild?"template":a.as;return typeof r=="string"&&["area","img","input"].includes(r)?()=>f(r,e):r!=="template"?()=>f(a.as,e,{default:t.default}):()=>f(V,e,{default:t.default})}});z({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});R(()=>P([]));const $=u({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(a){const e=a,t=["horizontal","vertical"];function r(s){return t.includes(s)}const n=h(()=>r(e.orientation)?e.orientation:"horizontal"),o=h(()=>n.value==="vertical"?e.orientation:void 0),i=h(()=>e.decorative?{role:"none"}:{"aria-orientation":o.value,role:"separator"});return(s,c)=>(m(),v(p(w),b({as:s.as,"as-child":s.asChild,"data-orientation":n.value},i.value),{default:g(()=>[y(s.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),I=u({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(a){const e=a;return(t,r)=>(m(),v($,C(S(e)),{default:g(()=>[y(t.$slots,"default")]),_:3},16))}});function A(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}A();const N=u({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(a){const e=a;return(t,r)=>(m(),v(p(w),{as:t.as,"as-child":t.asChild,class:W(p(M)(p(E)({variant:t.variant,size:t.size}),e.class))},{default:g(()=>[y(t.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),E=O("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});export{N as _,I as g};
