(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{1031:function(e,t,n){},1068:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var a=n(17),c=n(3),u=n(36),r=(n(1031),n(0)),i=n.n(r),o=n(720),l=n(697),d=n(698),m=n(926),f=n(860),s=n(702),O=n(278),b=n(99),h=n(813),D=function(){var e=Object(s.a)(),t=Object(s.b)((function(e){return e.thucDonDuTruSetting})).khachHangsArray,n=Object(s.b)((function(e){return e.thucDon})).hienThiTatCaNoiPhucVu,a=Object(s.b)((function(e){return e.diaDiem})),c=a.diaDiems,u=a.yearId;var r=i.a.useMemo((function(){return 1===(t||[]).length||!n}),[n,t]);return i.a.createElement(l.a,{className:"justify-content-center",gutter:[5,5]},i.a.createElement(d.a,null,i.a.createElement(o.a,{style:{width:"170px"},onSelectDiaDiem:function(t){e(Object(O.d)(null===c||void 0===c?void 0:c[t])),e(Object(O.b)(null))}})),i.a.createElement(d.a,null,i.a.createElement(f.a,{style:{width:180,display:r?"block":"none"}})),i.a.createElement(d.a,null,i.a.createElement(m.a,{style:{width:"100px"},value:u,onChange:function(t){e(Object(O.f)(t))}},b.c.map((function(e){return i.a.createElement(m.a.Option,{key:e,value:e},e)})))),i.a.createElement(d.a,null,i.a.createElement(h.a,null)))},v=n(692),E=n(39),_=n(289),j=n(284),p=n(286),y=n(292),N=n(883),M=n(308),g=n(935),C=n(314),A=n(704),I=n(276),T=n(47);var L=Object(T.o)((function(e){var t=e.history,n=Object(s.a)(),a=Object(s.b)((function(e){return e.thucDonDuTruSetting})).khachHangsArray,c=Object(s.b)((function(e){return e.thucDon})).hienThiTatCaNoiPhucVu,u=i.a.useMemo((function(){return(a||[]).length>=2}),[a]);return i.a.createElement("div",{className:"dutru-header"},i.a.createElement("div",{className:"dutru-header__left"},i.a.createElement(y.a,{icon:i.a.createElement(N.a,null),className:"mr-1",type:"dashed",danger:!0,onClick:function(){t.push("/thucDonDuTru/capNhatDuTru")}},"C\u1eadp nh\u1eadt d\u1ef1 tr\xf9"),u?i.a.createElement(y.a,{icon:i.a.createElement(M.a,null),type:c?"primary":"",danger:c,onClick:function(){n(Object(C.d)(!c))}},c?"\u0110\xf3ng hi\u1ec3n":"Hi\u1ec3n"," th\u1ecb t\u1ea5t c\u1ea3 n\u01a1i ph\u1ee5c v\u1ee5"):""),i.a.createElement("div",{className:"dutru-header__right"},i.a.createElement(y.a,{icon:i.a.createElement(g.a,null),onClick:function(){n(Object(I.c)({modalId:A.a.thucDonModal}))}},"Ch\u1ee9c n\u0103ng kh\xe1c")))})),k=n(861),U=n(865),w=n(400),H=n(13),S=n.n(H),G=n(26),x=n(708),P=n(920),Y=function(e){var t=e.onAfterSelect;return i.a.createElement(m.a,{style:{width:"150px"},onChange:function(e){t&&t(e)},showSearch:!0},b.b.map((function(e){return i.a.createElement(m.a.Option,{key:e,value:e},"Tu\u1ea7n ",e)})))},V=function(e){var t=e.onAfterSelect;return i.a.createElement(m.a,{style:{width:"120px"},onChange:function(e){t&&t(e)},showSearch:!0},b.c.map((function(e){return i.a.createElement(m.a.Option,{key:e,value:e},"N\u0103m ",e)})))},W=n(9),F=(n(715),n(12)),K=n(717),R=Object(r.memo)((function(e){var t=e.classNames,n=e.disabled,a=e.onAfterSelect,c=Object(s.a)(),u=Object(s.b)((function(e){return e.diaDiem})).diaDiemsArray,r=i.a.useMemo((function(){if(!u)return[];var e=c(Object(K.a)()).diaDiemIds;return u.filter((function(t){return(e||[]).some((function(e){return e===t.id}))}))}),[u]);return i.a.createElement(m.a,{placeholder:"Ch\u1ecdn \u0111\u1ecba \u0111i\u1ec3m",onChange:function(e){a&&a(e)},filterOption:F.l,className:["selectCantin"].concat(Object(W.a)(t||[])).join(" "),disabled:n},r.map((function(e){return i.a.createElement(m.a.Option,{key:e.id,value:e.id},e.name)})))})),z=function(e){var t=e.modalId||A.a.copyWeekOfMenuModal,n=P.a.useForm(),a=Object(u.a)(n,1)[0],c=P.a.useForm(),r=Object(u.a)(c,1)[0],o=Object(s.a)(),l=Object(s.b)((function(e){return e.form})).modal,d=i.a.useMemo((function(){var e;return!!(null===l||void 0===l||null===(e=l[t])||void 0===e?void 0:e.open)}),[l[t]]);function m(){return(m=Object(G.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("ok");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement(x.MyModal,{title:i.a.createElement("div",null,"Ch\u1ee9c N\u0103ng Copy Th\u1ef1c \u0110\u01a1n Tu\u1ea7n"),visible:d,onClose:function(){o(Object(I.a)({modalId:t}))},onOkModal:function(){return m.apply(this,arguments)},width:1200,modalId:t,footer:!1},i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement("div",null,"Tu\u1ea7n mu\u1ed1n copy"),i.a.createElement(P.a,{form:a,layout:"inline"},i.a.createElement(P.a.Item,{name:"diaDiemId"},i.a.createElement(R,null)),i.a.createElement(P.a.Item,{name:"yearId"},i.a.createElement(V,null)),i.a.createElement(P.a.Item,{name:"weekId"},i.a.createElement(Y,null)))),i.a.createElement("div",null,i.a.createElement("div",null,"Tu\u1ea7n copy t\u1edbi"),i.a.createElement(P.a,{form:r,layout:"inline"},i.a.createElement(P.a.Item,{name:"diaDiemId"},i.a.createElement(R,null)),i.a.createElement(P.a.Item,{name:"yearId"},i.a.createElement(V,null)),i.a.createElement(P.a.Item,{name:"weekId"},i.a.createElement(Y,null))))))},B=i.a.lazy((function(){return Promise.all([n.e(1),n.e(5),n.e(36)]).then(n.bind(null,1059))})),X=i.a.lazy((function(){return n.e(27).then(n.bind(null,1079))}));function J(e){var t=e.history,n=Object(s.a)(),o=Object(s.b)((function(e){return e.thucDonDuTruSetting})),l=o.shiftsArray,d=o.nhomGiaMonAns,m=o.nhomGiaMonAnData,f=Object(s.b)((function(e){return e.diaDiem})),O=f.diaDiemData,b=f.customerId,h=f.yearId,y=f.weekId,N=null===O||void 0===O?void 0:O.id,M=Object(r.useState)({}),g=Object(u.a)(M,2),C=g[0],A=g[1],I=function(e){var t=!Object(E.get)(C,[e],!0);A(Object(c.a)(Object(c.a)({},C),{},Object(a.a)({},e,t)))};return i.a.useEffect((function(){n(Object(p.b)(b))}),[d,b]),i.a.useEffect((function(){n(Object(_.b)(null===m||void 0===m?void 0:m.id))}),[m]),i.a.useEffect((function(){return n(Object(U.a)(N,h,y)),function(){return Object(U.b)()}}),[N,h,y]),i.a.useEffect((function(){n(Object(j.c)()),n(Object(p.c)(N)),n(Object(p.f)(N)),n(Object(p.i)(N)),n(Object(p.g)(N))}),[N]),i.a.useEffect((function(){n(Object(_.e)()),n(Object(p.h)()),n(Object(w.b)())}),[]),i.a.createElement("div",null,i.a.createElement(L,null),i.a.createElement("div",{className:"mt-2"},i.a.createElement(D,null)),i.a.createElement("div",null,(l||[]).map((function(e){var t=!1===C[null===e||void 0===e?void 0:e.id]?{display:"none"}:{};return i.a.createElement(r.Suspense,{key:null===e||void 0===e?void 0:e.id,fallback:i.a.createElement(v.a,{className:"osac-spin"})},i.a.createElement(B,{isHideStyle:t,shiftData:e,onHideDuTru:I}))}))),i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Suspense,{fallback:i.a.createElement(v.a,{className:"osac-spin"})},i.a.createElement(X,{onCancel:function(){return t.push("?")}})),i.a.createElement(k.a,null)," ",i.a.createElement(z,null)," "))}},704:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={addDoanhThuThemBCC:"ADD_DOANH_THU_THEM_BCC_MODAL",addChiPhiMuaQuayNuoc:"ADD_CHI_PHI_MUA_QUAY_NUOC_MODAL",addTonCuoi:"ADD_TON_CUOI_MODAL",nguyenLieuModal:"NGUYEN_LIEU_MODAL",xuatNguyenLieuKhacModal:"XUAT_NGUYEN_LIEU_KHAC_MODAL",taoDonDatHangCom:"TAO_DON_DAT_HANG_COM_MODAL",donDangXuLyModal:"DON_DANG_XU_LY_MODAL",donDaNhanModal:"DON_DA_NHAN_MODAL",soLuongThuc:"SO_LUONG_THUC_MODAL",giaNguyenLieu:"GIA_NGUYEN_LIEU_MODAL",tongDinhLuong:"TONG_DINH_LUONG_MODAL",transferNhaCungCap:"TRANSFER_NHA_CUNG_CAP_MODAL",layNguyenLieuChung:"LAY_NGUYEN_LIEU_CHUNG_MODAL",nguyenLieuAddSoLuong:"NGUYEN_LIEU_ADD_SO_LUONG_MODAL",donDDHNMoiModal:"DON_DDHN_MOI_MODAL",donDatHangNuoc:"DON_DAT_HANG_NUOC_MODAL",addSoLuongDDHN:"ADD_SO_LUONG_DDHN_MODAL",thucDonModal:"THUC_DON_MODAL",layDuLieuDuTruModal:"LAY_DU_LIEU_DU_TRU_MODAL",copyWeekOfMenuModal:"COPY_WEEK_OF_MENU_MODAL"}},715:function(e,t,n){},717:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(12);function c(){return function(){return{diaDiemIds:(Object(a.g)()||{}).diaDiemId}}}},720:function(e,t,n){"use strict";var a=n(9),c=(n(715),n(0)),u=n.n(c),r=n(691),i=n(926),o=n(12),l=n(702),d=n(278),m=n(717),f=Object(c.memo)((function(e){var t=e.onSelectDiaDiem,n=e.classNames,c=e.disabled,f=Object(l.a)(),s=Object(l.b)((function(e){return e.diaDiem})),O=s.diaDiemData,b=s.diaDiems,h=s.diaDiemsArray,D=u.a.useMemo((function(){if(!h)return[];var e=f(Object(m.a)()).diaDiemIds;return h.filter((function(t){return(e||[]).some((function(e){return e===t.id}))}))}),[h]);return u.a.createElement(r.a,{title:"Ch\u1ecdn \u0111\u1ecba \u0111i\u1ec3m"},u.a.createElement(i.a,{value:null===O||void 0===O?void 0:O.id,placeholder:"Ch\u1ecdn \u0111\u1ecba \u0111i\u1ec3m",onChange:function(e){f(Object(d.d)(null===b||void 0===b?void 0:b[e])),t&&t(e)},filterOption:o.l,className:["selectCantin"].concat(Object(a.a)(n||[])).join(" "),disabled:c},D.map((function(e){return u.a.createElement(i.a.Option,{key:e.id,value:e.id},e.name)}))))}));t.a=f},769:function(e,t){},771:function(e,t){},772:function(e,t){},813:function(e,t,n){"use strict";var a=n(0),c=n.n(a),u=n(691),r=n(926),i=n(702),o=n(278),l=n(99);t.a=function(){var e=Object(i.a)(),t=Object(i.b)((function(e){return e.diaDiem})).weekId;return c.a.createElement(u.a,{title:"Ch\u1ecdn tu\u1ea7n"},c.a.createElement(r.a,{value:t,style:{width:"110px"},onChange:function(t){e(Object(o.e)(t))}},l.b.map((function(e){return c.a.createElement(r.a.Option,{key:e,value:e},"Tu\u1ea7n ",e)}))))}},824:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(314);function c(e){var t=e.customerId,n=e.shiftId,c=e.hienThiTatCaNoiPhucVu;return function(e){return e(c?Object(a.b)({shiftId:n}):Object(a.c)({customerId:t,shiftId:n}))}}},860:function(e,t,n){"use strict";var a=n(3),c=n(0),u=n.n(c),r=n(691),i=n(926),o=n(702),l=n(278);t.a=function(e){var t=e.style,n=Object(o.a)(),c=Object(o.b)((function(e){return e.thucDonDuTruSetting})).khachHangsArray,d=Object(o.b)((function(e){return e.diaDiem})).customerId,m=u.a.useMemo((function(){var e=c||[];return e=e.filter((function(e){return e.active}))}),[c]);return u.a.createElement(r.a,{title:"Ch\u1ecdn n\u01a1i ph\u1ee5c v\u1ee5"},u.a.createElement(i.a,{value:d,onChange:function(e){n(Object(l.b)(e))},style:Object(a.a)({width:"180px"},t)},m.map((function(e){return u.a.createElement(i.a.Option,{key:e.id,value:"".concat(e.id)},e.name)}))))}},861:function(e,t,n){"use strict";var a=n(13),c=n.n(a),u=n(9),r=n(26),i=n(0),o=n.n(i),l=n(708),d=n(276),m=n(704),f=n(702),s=n(292),O=n(65),b=n.n(O),h=n(99),D=n(25),v=n(278),E=n(152),_=n(862),j=n.n(_),p=n(824);t.a=function(e){var t=e.modalId||m.a.thucDonModal,n=Object(f.b)((function(e){return e.thucDonDuTruSetting})).shiftsArray,a=Object(f.b)((function(e){return e.diaDiem})).customerId,i=Object(f.b)((function(e){return e.thucDon})).hienThiTatCaNoiPhucVu,O=Object(f.a)(),_=Object(f.b)((function(e){return e.form})).modal,y=o.a.useMemo((function(){var e;return!!(null===_||void 0===_||null===(e=_[t])||void 0===e?void 0:e.open)}),[_[t]]),N=o.a.useMemo((function(){return Object(h.i)(b()())}),[]);function M(){return g.apply(this,arguments)}function g(){return(g=Object(r.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=N.layNguyenLieuNgayWeek,a=N.yearId,n&&a){e.next=3;break}return e.abrupt("return",Object(D.a)("Kh\xf4ng t\xecm th\u1ea5y tu\u1ea7n v\xe0 n\u0103m hi\u1ec7n t\u1ea1i!"));case 3:O(Object(v.e)(n)),O(Object(v.f)(a)),O(Object(d.a)({modalId:t})),Object(D.c)("\u0110\xe3 ch\u1ecdn tu\u1ea7n ".concat(n,", n\u0103m ").concat(a));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.a.createElement(l.MyModal,{title:o.a.createElement("div",null,"Ch\u1ee9c N\u0103ng Kh\xe1c Th\u1ef1c \u0110\u01a1n"),visible:y,onClose:function(){O(Object(d.a)({modalId:t}))},onOkModal:M,width:700,modalId:t,footer:!1},o.a.createElement(s.a,{onClick:M,block:!0},"Ch\u1ecdn tu\u1ea7n hi\u1ec7n t\u1ea1i: Tu\u1ea7n ",null===N||void 0===N?void 0:N.layNguyenLieuNgayWeek,", n\u0103m ",null===N||void 0===N?void 0:N.yearId),o.a.createElement(s.a,{onClick:function(){console.log(n);var e=n.reduce((function(e,t){var n=t.id,c=O(Object(p.a)({shiftId:n,customerId:a,hienThiTatCaNoiPhucVu:i}));return console.log(t.name),console.log(c),[].concat(Object(u.a)(e),Object(u.a)(c))}),[]);console.log(e,"dataSources")},block:!0,className:"mt-2",icon:o.a.createElement(j.a,null)},"Download Th\u1ef1c \u0110\u01a1n"),o.a.createElement("div",{className:"mt-2"},o.a.createElement(s.a,{onClick:function(){O(Object(d.c)({modalId:m.a.copyWeekOfMenuModal}))},block:!0,type:"primary",style:{backgroundColor:E.green[6],fontWeight:"bold",display:"none"}},"M\u1edf Copy th\u1ef1c \u0111\u01a1n tu\u1ea7n")))}},862:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=(a=n(863))&&a.__esModule?a:{default:a};t.default=c,e.exports=c},863:function(e,t,n){"use strict";var a=n(716),c=n(700);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=c(n(718)),r=a(n(0)),i=c(n(864)),o=c(n(758)),l=function(e,t){return r.createElement(o.default,(0,u.default)((0,u.default)({},e),{},{ref:t,icon:i.default}))};l.displayName="DownloadOutlined";var d=r.forwardRef(l);t.default=d},864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"}},865:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(13),c=n.n(a),u=n(9),r=n(26),i=n(8),o=n(106),l=null;function d(e,t,n){return function(){var a=Object(r.a)(c.a.mark((function a(r){var d;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&t&&n){a.next=2;break}return a.abrupt("return");case 2:d=[].concat(Object(u.a)(o.b),[e,t,n,"shiftIds"]),(l=i.a.database().ref(d.join("/"))).on("value",(function(e){var t=e.val()||{};r({type:o.a.GETS_THUC_DON_DU_TRU,payload:{thucDonDuTruWeek:t}})}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function m(){l&&l.off()}}}]);