(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2ac8c68"],{"7cd5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-layout",[n("h2",{staticClass:"text-center my-30px"},[e._v("抽卡")]),n("h3",{staticClass:"text-center"},[e._v(" 当前bnx 数量： "),n("b",[e._v(e._s(e.bnx)+" bnx ")])]),n("br"),n("a-card",{staticClass:"text-center"},[n("a-space",[n("a-button",{attrs:{type:"primary"},on:{click:e.getCard}},[e._v("单抽")]),n("a-button",{attrs:{type:"primary"},on:{click:e.batchGetCard}},[e._v("五连抽")])],1)],1)],1)},r=[],s=n("1da1"),i=(n("d3b7"),n("25f0"),n("96cf"),n("9c9e")),o=n("d63a"),u=n("5f76"),c=n("d8a1"),l=n("db49"),p={name:"Home",mixins:[i["a"]],data:function(){return{bnx:0,bnxContract:null,playContract:null,mageContract:null,warriorContract:null,rangerContract:null,robberContract:null,katrinaContract:null,pancakeContract:null}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initWeb3Account();case 2:if(e.account){t.next=4;break}return t.abrupt("return");case 4:return e.initContract(),t.next=7,e.updateBnx();case 7:return t.next=9,e.getCurrentCard();case 9:case"end":return t.stop()}}),t)})))()},methods:{initContract:function(){this.bnxContract=new this.web3.eth.Contract(o,l["a"].bnxContrAddr),this.playContract=new this.web3.eth.Contract(u,l["a"].playContrAddr),this.mageContract=new this.web3.eth.Contract(c,l["a"].mageContrAddr),this.warriorContract=new this.web3.eth.Contract(c,l["a"].warriorContrAddr),this.rangerContract=new this.web3.eth.Contract(c,l["a"].rangerContrAddr),this.robberContract=new this.web3.eth.Contract(c,l["a"].robberContrAddr),this.katrinaContract=new this.web3.eth.Contract(c,l["a"].katrinaContrAddr),this.pancakeContract=new this.web3.eth.Contract(c,l["a"].pancakeContrAddr)},updateBnx:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.bnxContract.methods.balanceOf(e.account).call();case 2:n=t.sent,console.log("bnx",n),e.rawBnx=n,e.bnx=e.web3.utils.fromWei(n.toString(),"ether");case 6:case"end":return t.stop()}}),t)})))()},getCard:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,i,o,u,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateBnx();case 2:return t.next=4,e.playContract.methods.payValue().call();case 4:return n=t.sent,t.next=7,e.playContract.methods.payBnxValue().call();case 7:return a=t.sent,t.next=10,e.playContract.methods.bnbValue().call();case 10:if(r=t.sent,s=new e.web3.utils.BN(a),i=new e.web3.utils.BN(e.rawBnx),!s.gt(i)){t.next=16;break}return e.$message.error("bnx 数量不足"),t.abrupt("return");case 16:return console.log("newPlayerTrade:",n,a,u),o=(new Date).getTime(),u=e.account+o+"",console.log(o),t.next=22,e.playContract.methods.newPlayerTrade(n,a,u).estimateGas({from:e.account,value:r});case 22:c=t.sent,console.log("gas:",c),e.playContract.methods.newPlayerTrade(n,a,u).send({from:e.account,value:r,gas:c+1e5});case 25:case"end":return t.stop()}}),t)})))()},batchGetCard:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<5)){t.next=7;break}return t.next=4,e.getCard();case 4:n++,t.next=1;break;case 7:case"end":return t.stop()}}),t)})))()},getCurrentCard:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.mageContract.methods.balanceOf(e.account).call();case 2:return n=t.sent,t.next=5,e.warriorContract.methods.balanceOf(e.account).call();case 5:return a=t.sent,t.next=8,e.rangerContract.methods.balanceOf(e.account).call();case 8:return r=t.sent,t.next=11,e.robberContract.methods.balanceOf(e.account).call();case 11:return s=t.sent,t.next=14,e.katrinaContract.methods.balanceOf(e.account).call();case 14:for(i=t.sent,console.log(n,r,s,a,i),o=0;o<n;o++);case 17:case"end":return t.stop()}}),t)})))()}}},d=p,y=n("2877"),m=Object(y["a"])(d,a,r,!1,null,null,null);t["default"]=m.exports},d63a:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}}]);
//# sourceMappingURL=chunk-a2ac8c68.072f7fd7.js.map