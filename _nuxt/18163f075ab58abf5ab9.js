(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1491:function(t,e,n){"use strict";n.r(e);n(41),n(30),n(26),n(22),n(37),n(35);var r=n(3),o=n(11),l=n(1),c=n.n(l),d=n(38);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={layout:"deadend",head:{bodyAttrs:{class:"no-bg"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)("provider",["getNetwork"]),{},Object(d.c)("token",["toDecimals"]),{},Object(d.d)("analytics",["data","config"]),{duration:function(){var t=c()(),e=c()(1519769902e3);return t.diff(e,"days")},lastTime:function(){return c()(this.config.lastUpdated).format("LLLL")}}),mounted:function(){this.fetchDataToShow()},methods:{fetchDataToShow:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://raw.githubusercontent.com/peppersec/multisender_statistics/master/multisended_stats.json");case 2:return data=e.sent,e.next=5,t.$axios.$get("https://raw.githubusercontent.com/peppersec/multisender_statistics/master/statisticsConfig.json");case 5:n=e.sent,t.$store.commit("analytics/SET_DATA",data),t.$store.commit("analytics/SET_CONFIG",n);case 8:case"end":return e.stop()}}),e)})))()},toUrlAddress:function(t){return"0x000000000000000000000000000000000000bEEF"===t?"Ether":t},explorerBaseUrl:function(t){var e=new window.URL(this.getNetwork.explorerUrl.tx).origin;return"".concat(e,"/address/").concat(this.toUrlAddress(t))},explorerBaseTxUrl:function(t){var e=new window.URL(this.getNetwork.explorerUrl.tx).origin;return"".concat(e,"/tx/").concat(this.toUrlAddress(t))}}},f=n(18),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns is-multiline has-token-info is-centered"},[n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v("$"+t._s(Number(t.config.totalUsd).toLocaleString()))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("totalUSD")))])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v(t._s(t.duration)+" "+t._s(t.$tc("day",2)))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("uptime")))])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value is-time"},[t._v("\n          "+t._s(t.$d(Date.parse(t.lastTime),"long",t.$i18n.locale))+"\n        ")]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("lastTimeEventsParsed")))])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v(t._s(t.data.length))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("totalNumberOfTokens")))])])])]),t._v(" "),n("b-table",{staticClass:"table-analytics",attrs:{data:t.data,hoverable:"",detailed:"","custom-detail-row":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{staticClass:"break",attrs:{label:t.$t("tokenName")}},[t._v("\n        "+t._s(e.row[1].name)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{label:t.$t("tokenSymbol")}},[t._v("\n        "+t._s(e.row[1].symbol)+"\n      ")]),t._v(" "),n("b-table-column",{staticClass:"address",attrs:{label:t.$t("address")}},[n("a",{attrs:{href:t.explorerBaseUrl(e.row[0]),target:"_blank",role:"button"}},[t._v(t._s(t.toUrlAddress(e.row[0])))])]),t._v(" "),n("b-table-column",{staticClass:"break",attrs:{label:t.$t("totalAmount")}},[t._v("\n        "+t._s(e.row[1].valueWithDecimals)+" "+t._s(e.row[1].symbol)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{label:t.$t("totalAmountInUSD"),numeric:""}},[e.row[1].usdValue?n("span",[t._v("$"+t._s(e.row[1].usdValue))]):t._e()])]}},{key:"detail",fn:function(e){return t._l(e.row[1].txs,(function(r){return n("tr",{key:r.hash},[n("td"),t._v(" "),n("td",{staticClass:"address",attrs:{colspan:"3"}},[n("a",{attrs:{href:t.explorerBaseTxUrl(r.txHash),target:"_blank",role:"button"}},[t._v("\n            "+t._s(t.toUrlAddress(r.txHash))+"\n          ")])]),t._v(" "),n("td",{staticClass:"break"},[n("span",[t._v(t._s(r.totalWithDecimals)+" "+t._s(e.row[1].symbol))])]),t._v(" "),n("td",{staticClass:"has-text-right"},[r.totalUsd?n("span",[t._v("$"+t._s(r.totalUsd))]):t._e()])])}))}}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);