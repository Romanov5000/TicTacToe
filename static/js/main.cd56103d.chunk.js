(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),i=n(3),r=n.n(i),o=n(4),u=n(5),l=n(7),d=n(6),h=(n(13),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).ticTacToeList=function(){for(var t=[],e=0;e<9;e++){var n=Object(a.jsx)("div",{className:"ttt-grid",onClick:c.clickMandler,data:e,children:c.state.squares[e]});t.push(n)}return t},c.winnerName="May the best man win",c.isWinner=function(){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],e=c.state.count%2===0?"X":"O",n=0;n<t.length;n++){var a=t[n];c.state.squares[a[0]]===e&&c.state.squares[a[1]]===e&&c.state.squares[a[2]]===e&&(c.winnerName="WINNER ".concat(e))}},c.clickMandler=function(t){var e=t.target.getAttribute("data"),n=c.state.squares;null===n[e]&&"May the best man win"===c.winnerName&&(n[e]=c.state.count%2===0?"X":"O",c.setState((function(t){return{squares:n,count:c.state.count+1}}))),c.isWinner()},c.newGame=function(){c.setState((function(t){return{squares:Array(9).fill(null),count:0}})),c.winnerName="May the best man win"},c.state={squares:Array(9).fill(null),count:0},c}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"ticTacToe",children:[Object(a.jsx)("h1",{children:"Hello, this is my Tic Tac Toe game"}),Object(a.jsx)("p",{className:"winner",children:this.winnerName}),Object(a.jsx)("div",{className:"ticTacToeGame",children:Object(a.jsx)("div",{children:this.ticTacToeList()})}),Object(a.jsx)("button",{onClick:this.newGame,children:"New Game"}),Object(a.jsx)("footer",{children:"by Vlad Romanov"})]})}}]),n}(s.a.Component));r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cd56103d.chunk.js.map