(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6868:function(e,a,s){Promise.resolve().then(s.bind(s,1969))},1969:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return l}});var t=s(7437),n=s(2265);function l(){let e=["Hi there!","My name is Michael Yan Petra.","I'm sorry, my website is currently under development","The old one kinda look meh~ \uD83D\uDE2C","Do you still need something?"],[a,s]=(0,n.useState)(0),[l,c]=(0,n.useState)([]),[r,u]=(0,n.useState)(""),[d,o]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let t=[];if(a<e.length){let n=e[a].length/5*1e3;t.push(setTimeout(()=>s(a+1),n))}else o(!0);return()=>t.forEach(e=>clearTimeout(e))},[a,e.length]),(0,t.jsxs)("div",{className:"p-5 max-w-md mx-auto flex flex-col space-y-4",children:[(0,t.jsxs)("div",{className:"flex flex-col space-y-2",children:[e.map((e,s)=>a>=s&&(0,t.jsxs)("div",{className:"chat-bubble ".concat(a===s?"fade-in":""),children:[a===s&&(0,t.jsx)(i,{}),a>s&&(0,t.jsx)("span",{children:e})]},s)),l.map((e,a)=>(0,t.jsx)("div",{className:"chat-bubble user-chat-bubble fade-in",children:(0,t.jsx)("span",{children:e})},a))]}),(0,t.jsx)("div",{className:"fixed bottom-0 left-0 w-full  p-4 ",children:(0,t.jsxs)("div",{className:"max-w-md mx-auto flex space-x-2",children:[(0,t.jsx)("input",{type:"text",value:r,onChange:e=>u(e.target.value),className:"flex-1 p-2 border rounded-lg text-black",placeholder:"Type a message..."}),(0,t.jsx)("button",{onClick:()=>{r.trim()&&d&&(c([...l,r]),u(""))},className:"".concat(d?"bg-blue-500 text-white cursor-pointer":"bg-gray-700 text-gray cursor-not-allowed"," px-4 py-2 rounded-lg"),children:"Send"})]})})]})}function i(){return(0,t.jsxs)("div",{className:"flex justify-center items-center h-5 space-x-1",children:[(0,t.jsx)("span",{className:"dot w-2 h-2 bg-gray-500 rounded-full animate-blink"}),(0,t.jsx)("span",{className:"dot w-2 h-2 bg-gray-500 rounded-full animate-blink animation-delay-200"}),(0,t.jsx)("span",{className:"dot w-2 h-2 bg-gray-500 rounded-full animate-blink animation-delay-400"})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=6868)}),_N_E=e.O()}]);