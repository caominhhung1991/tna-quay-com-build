(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[36],{1059:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(17),c=n(36),u=n(0),r=n.n(u),o=n(1061),s=n(923),l=n(702),d=n(305),m=n(824);t.default=function(e){var t=e.shiftData,n=e.isHideStyle,b=e.onHideDuTru,f=e.isView,h=Object(l.a)(),v=null===t||void 0===t?void 0:t.id,p=Object(l.b)((function(e){return e.thucDon})).hienThiTatCaNoiPhucVu,D=Object(l.b)((function(e){return e.thucDonDuTruSetting})),j=D.cauHinhDuTrus,O=D.recipeKinds,T=D.isLoading,w=D.khachHangsArray,g=Object(l.b)((function(e){return e.diaDiem})),k=g.diaDiemData,y=g.customerId,C=g.yearId,E=g.weekId,I=null===k||void 0===k?void 0:k.id,N=Object(u.useState)(!0),H=Object(c.a)(N,2),S=H[0],V=H[1],K=function(e,t){if(f)return null;h(Object(d.b)(I,C,E,v,t,e))},A=r.a.useMemo((function(){return(new s.a).getTableColumns({isView:f,yearId:C,weekId:E,onDelete:K,visibleCost:S,shiftData:t,recipeKinds:O})}),[C,f,E,S,t,O]),J=r.a.useMemo((function(){return j&&I?h(Object(m.a)({hienThiTatCaNoiPhucVu:p,shiftId:v,customerId:y})):[]}),[I,v,y,j,w,p]);return r.a.useEffect((function(){var e=Object(a.a)({},v,J);h(Object(d.d)(e))}),[J]),0===J.length?null:r.a.createElement("div",{className:"duTruBepChuyenDiAntTable"},r.a.createElement("div",{className:"display-4 mt-1 kind-title"},r.a.createElement("div",{className:"hoverClass",onClick:function(){return b(null===t||void 0===t?void 0:t.id)}},null===t||void 0===t?void 0:t.name),r.a.createElement("button",{className:"ml-2 btn btn-sm btn-warning",onClick:function(){return V(!S)}},S?"\u1ea8n":"Hi\u1ec7n"," cost")),r.a.createElement("div",{className:"mt-2",style:Object(i.a)({position:"relative"},n)},r.a.createElement(o.a,{columns:A,dataSource:J,loading:T,scroll:{x:1300},pagination:!1,rowKey:"id",bordered:!0})))}}}]);