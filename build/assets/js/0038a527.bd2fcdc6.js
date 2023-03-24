"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:9,description:"More models"},i="How to tag a whole corpus",s={unversionedId:"tutorial-basics/how-to-tag-corpus",id:"tutorial-basics/how-to-tag-corpus",title:"How to tag a whole corpus",description:"More models",source:"@site/docs/tutorial-basics/how-to-tag-corpus.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/how-to-tag-corpus",permalink:"/docs/tutorial-basics/how-to-tag-corpus",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/how-to-tag-corpus.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"More models"},sidebar:"tutorialSidebar",previous:{title:"Tagging parts-of-speech",permalink:"/docs/tutorial-basics/part-of-speech-tagging"},next:{title:"Tutorial 1+: Other models",permalink:"/docs/category/tutorial-1-other-models"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-tag-a-whole-corpus"},"How to tag a whole corpus"),(0,o.kt)("p",null,"Often, you may want to tag an entire text corpus. In this case, you need to split the corpus into sentences and pass a\nlist of ",(0,o.kt)("inlineCode",{parentName:"p"},"Sentence")," objects to the ",(0,o.kt)("inlineCode",{parentName:"p"},".predict()")," method."),(0,o.kt)("p",null,"For instance, you can use the sentence splitter of segtok to split your text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from flair.nn import Classifier\nfrom flair.splitter import SegtokSentenceSplitter\n\n# example text with many sentences\ntext = \"This is a sentence. This is another sentence. I love Berlin.\"\n\n# initialize sentence splitter\nsplitter = SegtokSentenceSplitter()\n\n# use splitter to split text into list of sentences\nsentences = splitter.split(text)\n\n# predict tags for sentences\ntagger = Classifier.load('ner')\ntagger.predict(sentences)\n\n# iterate through sentences and print predicted labels\nfor sentence in sentences:\n    print(sentence)\n")),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mini_batch_size")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},".predict()")," method, you can set the size of mini batches passed to the\ntagger. Depending on your resources, you might want to play around with this parameter to optimize speed."))}d.isMDXComponent=!0}}]);