import{S as Ka,i as za,s as Ga,l as s,u as i,a as n,K as Qa,m as o,p as h,v as p,h as l,c as r,L as Va,q as u,b as Ya,J as e,n as Wa,o as Za}from"../chunks/index-750bfb3e.js";const Z={demo:'<a href={linkPage("foo")}>This works</a>',hardCoded:'<a href="/build/foo">This works</a>'};function es(re){let t,m,w,ee,T,le,ie,b,he,pa='{linkPage("foo")}',pe,ce,de,x,ue,me,be,fe,_,ve,ge,k,we,ye,E,ca=Z.demo+"",Te,xe,P,_e,ke,S,Ee,Pe,H,Se,He,L,Le,Me,M,Re,Ce,f,Be,De,Ae,Je,te,Xa=`
		<textarea readonly cols="80" rows="2">{textboxes.demo}</textarea> <br>
	`,ae,R,Oe,Ie,qe,$e,C,Ne,je,B,Fe,Ue,We,Xe,D,Ke,ze,y,Ge,Qe,Ve,Ye,A,Ze,et,tt,at,st,ot,J,nt,rt,O,lt,it,ht,pt,I,ct,dt,d,ut,mt,bt,q,ft,vt,gt,wt,$,yt,Tt,N,xt,j,_t,kt,Et,Pt,F,St,Ht,U,Lt,W,Mt,Rt,Ct,Bt,Dt,At,v,Jt,da="{`<content...>`}",Ot,It,qt,X,$t,Nt,jt,Ft,K,Ut,Wt,z,Xt,Kt,zt,Gt,G,Qt,Vt,Q,Yt,Zt,ea,ta,V,aa,sa,c,oa,na,ra,Y,la,ia,ha;return{c(){t=s("main"),m=s("p"),w=i("Here are a bunch of variations of escaped HTML anchor tags in textareas. Paragraphs and presumably most other HTML elements don't have the same issue, I guess because the angle brackets are escaped before the links are checked."),ee=n(),T=s("p"),le=i("Although it's just supposed to show off some code, when it's treated as literal html, the JavaScript will make the link start with the base path. But when it's being validatated, the code is often treated as the link itself, causing it to be invalid as it doesn't start with the base path. Although weirdly even a valid hardcoded link seems to be treated as invalid. See below..."),ie=n(),b=s("p"),he=i("The code that should be inside the various textareas is: <a href="),pe=i(pa),ce=i(">This works</a>"),de=n(),x=s("p"),ue=i("None of the HTML stored in strings in the JavaScript file result in parsing errors. And escaping by using concatination to break up things like <a> doesn't make a difference (as the issue isn't in that file)."),me=n(),be=s("br"),fe=n(),_=s("h1"),ve=i("The tests"),ge=n(),k=s("p"),we=i("Paragraph tag with the content (the HTML code that should be displayed as text) set using Svelte curly brackets to a string imported from a JavaScript file:"),ye=n(),E=s("p"),Te=i(ca),xe=n(),P=s("p"),_e=i("Compiles, which is presumably the same for most HTML elements (except some like textarea)"),ke=n(),S=s("p"),Ee=i("*Commented with HTML comment tag* textarea, with the content from an external script, using Svelte curly brackets in the (commented) HTML: (this is the most likely to compile, but won't show anything)"),Pe=n(),H=s("p"),Se=i("Compiles"),He=n(),L=s("p"),Le=i("Textarea with the content from an external script, using Svelte curly brackets in the HTML:"),Me=n(),M=s("p"),Re=i("*Doesn't* compile"),Ce=n(),f=s("p"),Be=i("The same but the whole thing in a string but using @html (using vanilla string template): "),De=s("br"),Ae=i(`
		The contents is commented out by removing the dollar sign as I can't use an HTML comment.`),Je=n(),te=new Qa(!1),ae=n(),R=s("p"),Oe=i("*Doesn't* compile (unless the contents is removed in this way)"),Ie=n(),qe=s("br"),$e=n(),C=s("p"),Ne=i("Same but the URL in the escaped string uses a hardcoded prefix (so the escaped HTML code would be valid if put unescaped without any JavaScript). Still loaded from an external script and put into this document with Svelte curly brackets:"),je=n(),B=s("p"),Fe=i("*Doesn't* compile, even when the page exists"),Ue=n(),We=s("br"),Xe=n(),D=s("p"),Ke=i("The same escaped HTML code but put *unescaped* into the HTML document:"),ze=n(),y=s("a"),Ge=i("This works"),Qe=n(),Ve=s("br"),Ye=n(),A=s("p"),Ze=i("Compiles if the page exists (expected)"),et=n(),tt=s("br"),at=n(),st=s("br"),ot=n(),J=s("p"),nt=i("Textarea with the content loaded using the value property (instead of inbetween the tags), from an external script, using Svelte curly brackets in the HTML:"),rt=n(),O=s("p"),lt=i("*Doesn't* compile, even with quotes around the value property"),it=n(),ht=s("br"),pt=n(),I=s("p"),ct=i("Same thing but using a non-existent property instead of the value property:"),dt=n(),d=s("textarea"),ut=n(),mt=s("br"),bt=n(),q=s("p"),ft=i("Compiles (although no content because it's not set properly)"),vt=n(),gt=s("br"),wt=n(),$=s("p"),yt=i('Same thing but using a non-existent element but the commonly used "value" property:'),Tt=n(),N=s("foo"),xt=n(),j=s("p"),_t=i("Compiles"),kt=n(),Et=s("br"),Pt=n(),F=s("p"),St=i("Same thing but using a non-existent element and property:"),Ht=n(),U=s("foo"),Lt=n(),W=s("p"),Mt=i("Compiles"),Rt=n(),Ct=s("br"),Bt=n(),Dt=s("br"),At=n(),v=s("p"),Jt=i("Content set without another script, using the "),Ot=i(da),It=i(" method:"),qt=n(),X=s("p"),$t=i("*Doesn't* compile"),Nt=n(),jt=s("br"),Ft=n(),K=s("p"),Ut=i("HTML string put directly in the document as the *inner content* of the tag:"),Wt=n(),z=s("p"),Xt=i("*Doesn't* compile, results in parse error"),Kt=n(),zt=s("br"),Gt=n(),G=s("p"),Qt=i("HTML string put directly in the document as the *value property* of the tag:"),Vt=n(),Q=s("p"),Yt=i("*Doesn't* compile"),Zt=n(),ea=s("br"),ta=n(),V=s("p"),aa=i("Wildcard: setting the content on mount with Svelte curly brackets:"),sa=n(),c=s("textarea"),oa=n(),na=s("br"),ra=n(),Y=s("p"),la=i("Compiles! Probably because it's not in the SSR so it can't be validated"),ia=n(),ha=s("br"),this.h()},l(g){t=o(g,"MAIN",{});var a=h(t);m=o(a,"P",{});var ua=h(m);w=p(ua,"Here are a bunch of variations of escaped HTML anchor tags in textareas. Paragraphs and presumably most other HTML elements don't have the same issue, I guess because the angle brackets are escaped before the links are checked."),ua.forEach(l),ee=r(a),T=o(a,"P",{});var ma=h(T);le=p(ma,"Although it's just supposed to show off some code, when it's treated as literal html, the JavaScript will make the link start with the base path. But when it's being validatated, the code is often treated as the link itself, causing it to be invalid as it doesn't start with the base path. Although weirdly even a valid hardcoded link seems to be treated as invalid. See below..."),ma.forEach(l),ie=r(a),b=o(a,"P",{});var se=h(b);he=p(se,"The code that should be inside the various textareas is: <a href="),pe=p(se,pa),ce=p(se,">This works</a>"),se.forEach(l),de=r(a),x=o(a,"P",{});var ba=h(x);ue=p(ba,"None of the HTML stored in strings in the JavaScript file result in parsing errors. And escaping by using concatination to break up things like <a> doesn't make a difference (as the issue isn't in that file)."),ba.forEach(l),me=r(a),be=o(a,"BR",{}),fe=r(a),_=o(a,"H1",{});var fa=h(_);ve=p(fa,"The tests"),fa.forEach(l),ge=r(a),k=o(a,"P",{});var va=h(k);we=p(va,"Paragraph tag with the content (the HTML code that should be displayed as text) set using Svelte curly brackets to a string imported from a JavaScript file:"),va.forEach(l),ye=r(a),E=o(a,"P",{});var ga=h(E);Te=p(ga,ca),ga.forEach(l),xe=r(a),P=o(a,"P",{});var wa=h(P);_e=p(wa,"Compiles, which is presumably the same for most HTML elements (except some like textarea)"),wa.forEach(l),ke=r(a),S=o(a,"P",{});var ya=h(S);Ee=p(ya,"*Commented with HTML comment tag* textarea, with the content from an external script, using Svelte curly brackets in the (commented) HTML: (this is the most likely to compile, but won't show anything)"),ya.forEach(l),Pe=r(a),H=o(a,"P",{});var Ta=h(H);Se=p(Ta,"Compiles"),Ta.forEach(l),He=r(a),L=o(a,"P",{});var xa=h(L);Le=p(xa,"Textarea with the content from an external script, using Svelte curly brackets in the HTML:"),xa.forEach(l),Me=r(a),M=o(a,"P",{});var _a=h(M);Re=p(_a,"*Doesn't* compile"),_a.forEach(l),Ce=r(a),f=o(a,"P",{});var oe=h(f);Be=p(oe,"The same but the whole thing in a string but using @html (using vanilla string template): "),De=o(oe,"BR",{}),Ae=p(oe,`
		The contents is commented out by removing the dollar sign as I can't use an HTML comment.`),oe.forEach(l),Je=r(a),te=Va(a,!1),ae=r(a),R=o(a,"P",{});var ka=h(R);Oe=p(ka,"*Doesn't* compile (unless the contents is removed in this way)"),ka.forEach(l),Ie=r(a),qe=o(a,"BR",{}),$e=r(a),C=o(a,"P",{});var Ea=h(C);Ne=p(Ea,"Same but the URL in the escaped string uses a hardcoded prefix (so the escaped HTML code would be valid if put unescaped without any JavaScript). Still loaded from an external script and put into this document with Svelte curly brackets:"),Ea.forEach(l),je=r(a),B=o(a,"P",{});var Pa=h(B);Fe=p(Pa,"*Doesn't* compile, even when the page exists"),Pa.forEach(l),Ue=r(a),We=o(a,"BR",{}),Xe=r(a),D=o(a,"P",{});var Sa=h(D);Ke=p(Sa,"The same escaped HTML code but put *unescaped* into the HTML document:"),Sa.forEach(l),ze=r(a),y=o(a,"A",{href:!0});var Ha=h(y);Ge=p(Ha,"This works"),Ha.forEach(l),Qe=r(a),Ve=o(a,"BR",{}),Ye=r(a),A=o(a,"P",{});var La=h(A);Ze=p(La,"Compiles if the page exists (expected)"),La.forEach(l),et=r(a),tt=o(a,"BR",{}),at=r(a),st=o(a,"BR",{}),ot=r(a),J=o(a,"P",{});var Ma=h(J);nt=p(Ma,"Textarea with the content loaded using the value property (instead of inbetween the tags), from an external script, using Svelte curly brackets in the HTML:"),Ma.forEach(l),rt=r(a),O=o(a,"P",{});var Ra=h(O);lt=p(Ra,"*Doesn't* compile, even with quotes around the value property"),Ra.forEach(l),it=r(a),ht=o(a,"BR",{}),pt=r(a),I=o(a,"P",{});var Ca=h(I);ct=p(Ca,"Same thing but using a non-existent property instead of the value property:"),Ca.forEach(l),dt=r(a),d=o(a,"TEXTAREA",{cols:!0,rows:!0,foo:!0}),h(d).forEach(l),ut=r(a),mt=o(a,"BR",{}),bt=r(a),q=o(a,"P",{});var Ba=h(q);ft=p(Ba,"Compiles (although no content because it's not set properly)"),Ba.forEach(l),vt=r(a),gt=o(a,"BR",{}),wt=r(a),$=o(a,"P",{});var Da=h($);yt=p(Da,'Same thing but using a non-existent element but the commonly used "value" property:'),Da.forEach(l),Tt=r(a),N=o(a,"FOO",{value:!0}),h(N).forEach(l),xt=r(a),j=o(a,"P",{});var Aa=h(j);_t=p(Aa,"Compiles"),Aa.forEach(l),kt=r(a),Et=o(a,"BR",{}),Pt=r(a),F=o(a,"P",{});var Ja=h(F);St=p(Ja,"Same thing but using a non-existent element and property:"),Ja.forEach(l),Ht=r(a),U=o(a,"FOO",{bar:!0}),h(U).forEach(l),Lt=r(a),W=o(a,"P",{});var Oa=h(W);Mt=p(Oa,"Compiles"),Oa.forEach(l),Rt=r(a),Ct=o(a,"BR",{}),Bt=r(a),Dt=o(a,"BR",{}),At=r(a),v=o(a,"P",{});var ne=h(v);Jt=p(ne,"Content set without another script, using the "),Ot=p(ne,da),It=p(ne," method:"),ne.forEach(l),qt=r(a),X=o(a,"P",{});var Ia=h(X);$t=p(Ia,"*Doesn't* compile"),Ia.forEach(l),Nt=r(a),jt=o(a,"BR",{}),Ft=r(a),K=o(a,"P",{});var qa=h(K);Ut=p(qa,"HTML string put directly in the document as the *inner content* of the tag:"),qa.forEach(l),Wt=r(a),z=o(a,"P",{});var $a=h(z);Xt=p($a,"*Doesn't* compile, results in parse error"),$a.forEach(l),Kt=r(a),zt=o(a,"BR",{}),Gt=r(a),G=o(a,"P",{});var Na=h(G);Qt=p(Na,"HTML string put directly in the document as the *value property* of the tag:"),Na.forEach(l),Vt=r(a),Q=o(a,"P",{});var ja=h(Q);Yt=p(ja,"*Doesn't* compile"),ja.forEach(l),Zt=r(a),ea=o(a,"BR",{}),ta=r(a),V=o(a,"P",{});var Fa=h(V);aa=p(Fa,"Wildcard: setting the content on mount with Svelte curly brackets:"),Fa.forEach(l),sa=r(a),c=o(a,"TEXTAREA",{cols:!0,rows:!0}),h(c).forEach(l),oa=r(a),na=o(a,"BR",{}),ra=r(a),Y=o(a,"P",{});var Ua=h(Y);la=p(Ua,"Compiles! Probably because it's not in the SSR so it can't be validated"),Ua.forEach(l),ia=r(a),ha=o(a,"BR",{}),a.forEach(l),this.h()},h(){te.a=ae,u(y,"href","/build/foo"),d.readOnly=!0,u(d,"cols","80"),u(d,"rows","2"),u(d,"foo",Z.demo),u(N,"value",Z.demo),u(U,"bar",Z.demo),c.readOnly=!0,u(c,"cols","80"),u(c,"rows","2"),c.value=re[0]},m(g,a){Ya(g,t,a),e(t,m),e(m,w),e(t,ee),e(t,T),e(T,le),e(t,ie),e(t,b),e(b,he),e(b,pe),e(b,ce),e(t,de),e(t,x),e(x,ue),e(t,me),e(t,be),e(t,fe),e(t,_),e(_,ve),e(t,ge),e(t,k),e(k,we),e(t,ye),e(t,E),e(E,Te),e(t,xe),e(t,P),e(P,_e),e(t,ke),e(t,S),e(S,Ee),e(t,Pe),e(t,H),e(H,Se),e(t,He),e(t,L),e(L,Le),e(t,Me),e(t,M),e(M,Re),e(t,Ce),e(t,f),e(f,Be),e(f,De),e(f,Ae),e(t,Je),te.m(Xa,t),e(t,ae),e(t,R),e(R,Oe),e(t,Ie),e(t,qe),e(t,$e),e(t,C),e(C,Ne),e(t,je),e(t,B),e(B,Fe),e(t,Ue),e(t,We),e(t,Xe),e(t,D),e(D,Ke),e(t,ze),e(t,y),e(y,Ge),e(t,Qe),e(t,Ve),e(t,Ye),e(t,A),e(A,Ze),e(t,et),e(t,tt),e(t,at),e(t,st),e(t,ot),e(t,J),e(J,nt),e(t,rt),e(t,O),e(O,lt),e(t,it),e(t,ht),e(t,pt),e(t,I),e(I,ct),e(t,dt),e(t,d),e(t,ut),e(t,mt),e(t,bt),e(t,q),e(q,ft),e(t,vt),e(t,gt),e(t,wt),e(t,$),e($,yt),e(t,Tt),e(t,N),e(t,xt),e(t,j),e(j,_t),e(t,kt),e(t,Et),e(t,Pt),e(t,F),e(F,St),e(t,Ht),e(t,U),e(t,Lt),e(t,W),e(W,Mt),e(t,Rt),e(t,Ct),e(t,Bt),e(t,Dt),e(t,At),e(t,v),e(v,Jt),e(v,Ot),e(v,It),e(t,qt),e(t,X),e(X,$t),e(t,Nt),e(t,jt),e(t,Ft),e(t,K),e(K,Ut),e(t,Wt),e(t,z),e(z,Xt),e(t,Kt),e(t,zt),e(t,Gt),e(t,G),e(G,Qt),e(t,Vt),e(t,Q),e(Q,Yt),e(t,Zt),e(t,ea),e(t,ta),e(t,V),e(V,aa),e(t,sa),e(t,c),e(t,oa),e(t,na),e(t,ra),e(t,Y),e(Y,la),e(t,ia),e(t,ha)},p(g,[a]){a&1&&(c.value=g[0])},i:Wa,o:Wa,d(g){g&&l(t)}}}function ts(re,t,m){let w="";return Za(ee=>{m(0,w=Z.demo)}),[w]}class ss extends Ka{constructor(t){super(),za(this,t,ts,es,Ga,{})}}export{ss as default};
