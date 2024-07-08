wpJsonpAmeliaBookingPlugin([21],{1530:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(689),i=a.n(s);e.default={data:function(){return{blogPosts:[],changelog:{version:"6.5",changes:[]},features:[{feature:"Domain",lite:"1",starter:"1",standard:"1",pro:"up to 3",elite:"up to 1000"},{feature:"Support",lite:"Limited",starter:"Premium",standard:"Premium",pro:"Premium",elite:"Premium"},{feature:"Unlimited Appointments and Events",lite:!0,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Customizable Design",lite:!0,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Automated Notification Management (SMS and Email)",lite:"Limited",starter:!0,standard:!0,pro:!0,elite:!0},{feature:"No-code Website Builder and Embeddable Booking Form",lite:!0,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Import Customers' data",lite:!0,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Multiple Booking Forms",lite:!0,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Group Appointment Bookings",lite:!1,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Unlimited Employees",lite:!1,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Employee and Customer Panel",lite:!1,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Discount coupons",lite:!1,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Service Extras",lite:!1,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Marketing Tools and Analytics (Google Analytics, Facebook Pixel)",lite:!1,starter:!0,standard:!0,pro:!0,elite:!0},{feature:"Management of Multiple Locations",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"Recurring Appointments and Events",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"Deposit Payments",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"Custom Service Duration",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"Multilingual Support",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"4 Payment Providers (Mollie, PayPal, Stripe, Razorpay)",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"WooCommerce Payments",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"Online Platforms (Zoom, GoogleMeet, LessonSpace)",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"Calendar Synchronizations (Google Calendar, Outlook)",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"WebHooks (Zapier and MailChimp)",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"Payment links",lite:!1,starter:!1,standard:!0,pro:!0,elite:!0},{feature:"WhatsApp integration",lite:!1,starter:!1,standard:!1,pro:!0,elite:!0,tag:"New"},{feature:"Packages of Services",lite:!1,starter:!1,standard:!1,pro:!0,elite:!0},{feature:"Resources",lite:!1,starter:!1,standard:!1,pro:!0,elite:!0,tag:"New"},{feature:"Refund option",lite:!1,starter:!1,standard:!1,pro:!0,elite:!0,tag:"New"},{feature:"Cart",lite:!1,starter:!1,standard:!1,pro:!0,elite:!0,tag:"New"},{feature:"REST API",lite:!1,starter:!1,standard:!1,pro:!1,elite:!0,tag:"New"}]}},methods:{getNews:function(){},getIconType:function(t){var e=t.toLowerCase();switch(e){case"improvement":case"bugfix":case"feature":case"translations":return e;default:return"plus"}}},created:function(){this.getNews()},components:{PageHeader:i.a}}},1531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"am-wrap",attrs:{id:"am-lite-vs-premium"}},[a("div",{staticClass:"am-body"},[a("page-header"),t._v(" "),a("div",{staticClass:"am-lite-vs-premium-welcome am-section am-lite-vs-premium-section"},[a("div",{staticClass:"am-lite-vs-premium-welcome-left"},[a("div",{staticClass:"am-lite-vs-premium-welcome-title"},[t._v(t._s(t.$root.labels.amelia_plans_comparison))]),t._v(" "),a("div",{staticClass:"am-lite-vs-premium-welcome-subtitle"},[t._v(t._s(t.$root.labels.upgrade_to_premium))]),t._v(" "),a("a",{staticClass:"am-lite-vs-premium-btn",attrs:{href:"https://wpamelia.com/pricing/?utm_source=amelia-lite&utm_medium=lite-upgrade&utm_content=amelia&utm_campaign=amelia-lite",target:"_blank",rel:"nofollow"}},[t._v("\n          "+t._s(t.$root.labels.upgrade_now)+"\n        ")])]),t._v(" "),a("div",{staticClass:"am-lite-vs-premium-welcome-right"},[a("img",{attrs:{src:t.$root.getUrl+"public/img/am-lite-vs-premium.webp"}})]),t._v(" "),a("div",{staticClass:"am-lite-vs-premium-welcome-border"})]),t._v(" "),a("div",{staticClass:"am-lite-vs-premium-table-wrapper"},[a("div",{staticClass:"am-lite-vs-premium-table am-section am-lite-vs-premium-section"},[a("el-row",{staticClass:"am-lite-vs-premium-table-row-header"},[a("el-col",{staticClass:"el-table_1_column_1 cell",attrs:{span:12,sm:8}},[a("div",[t._v("Features")])]),t._v(" "),a("el-col",{staticClass:"el-table_1_column_2 cell",attrs:{span:3,sm:4}},[a("div",[t._v("Lite")])]),t._v(" "),a("el-col",{staticClass:"el-table_1_column_3 cell",attrs:{span:3,sm:4}},[a("div",[t._v("Starter")])]),t._v(" "),a("el-col",{staticClass:"el-table_1_column_4 cell",attrs:{span:3,sm:4}},[a("div",[t._v("Standard")])]),t._v(" "),a("el-col",{staticClass:"el-table_1_column_5 cell",attrs:{span:3,sm:4}},[a("div",[t._v("Pro")])]),t._v(" "),a("el-col",{staticClass:"el-table_1_column_6 cell",attrs:{span:3,sm:4}},[a("div",[t._v("Elite")])])],1),t._v(" "),t._l(t.features,function(e){return a("el-row",{key:e.feature,staticClass:"am-lite-vs-premium-table-row"},[a("el-col",{staticClass:"am-lite-vs-premium-table-feature",attrs:{span:12,sm:8}},[a("div",{staticClass:"am-lite-vs-premium-table-feature-name"},[t._v(t._s(e.feature))]),t._v(" "),e.tag?a("el-tag",{attrs:{type:"Soon"===e.tag?"":"success","disable-transitions":""}},[t._v(t._s(e.tag)+"\n          ")]):t._e()],1),t._v(" "),a("el-col",{staticClass:"am-lite-vs-premium-table-col-lite",attrs:{span:3,sm:4}},[a("div",{class:"boolean"==typeof e.lite?e.lite?"am-blue-check":"am-minus":""},[t._v("\n              "+t._s("boolean"!=typeof e.lite?e.lite:"")+"\n              "),"Limited"==e.lite&&"Support"==e.feature?a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.$root.labels.lite_support_tooltip)},slot:"content"}),t._v(" "),a("i",{staticClass:"el-icon-info am-tooltip-icon"})]):t._e()],1)]),t._v(" "),a("el-col",{staticClass:"am-lite-vs-premium-table-col-starter",attrs:{span:3,sm:4}},[a("div",{class:"boolean"==typeof e.starter?e.starter?"am-blue-check":"am-minus":""},[t._v("\n            "+t._s("boolean"!=typeof e.starter?e.starter:"")+"\n          ")])]),t._v(" "),a("el-col",{staticClass:"am-lite-vs-premium-table-col-basic",attrs:{span:3,sm:4}},[a("div",{class:"boolean"==typeof e.standard?e.standard?"am-blue-check":"am-minus":""},[t._v("\n            "+t._s("boolean"!=typeof e.standard?e.standard:"")+"\n          ")])]),t._v(" "),a("el-col",{staticClass:"am-lite-vs-premium-table-col-pro",attrs:{span:3,sm:4}},[a("div",{class:"boolean"==typeof e.pro?e.pro?"am-blue-check":"am-minus":""},[t._v("\n            "+t._s("boolean"!=typeof e.pro?e.pro:"")+"\n          ")])]),t._v(" "),a("el-col",{staticClass:"am-lite-vs-premium-table-col-developer",attrs:{span:3,sm:4}},[a("div",{class:"boolean"==typeof e.elite?e.elite?"am-blue-check":"am-minus":""},[t._v("\n              "+t._s("boolean"!=typeof e.elite?e.elite:"")+"\n            ")])])],1)}),t._v(" "),a("div",{staticClass:"am-lite-vs-premium-table-btn-holder"},[a("a",{staticClass:"am-lite-vs-premium-btn",attrs:{href:"https://wpamelia.com/pricing/?utm_source=amelia-lite&utm_medium=lite-upgrade&utm_content=amelia&utm_campaign=amelia-lite",target:"_blank",rel:"nofollow"}},[t._v("\n          "+t._s(t.$root.labels.upgrade_now)+"\n        ")])])],2)])],1)])},staticRenderFns:[]}},1602:function(t,e,a){var s=a(140)(a(1530),a(1531),!1,null,null,null);t.exports=s.exports},654:function(t,e,a){"use strict";e.a={data:function(){return{colors:["1788FB","4BBEC6","FBC22D","FA3C52","D696B8","689BCA","26CC2B","FD7E35","E38587","774DFB","31CDF3","6AB76C","FD5FA1","A697C5"],usedColors:[]}},methods:{deleteImage:function(t){t.pictureThumbPath="",t.pictureFullPath=""},getAppropriateUrlParams:function(t){if(!this.$root.settings.activation.disableUrlParams)return t;var e=JSON.parse(JSON.stringify(t));return["categories","services","packages","employees","providers","providerIds","extras","locations","events","types","dates"].forEach(function(t){if("extras"===t&&t in e){e.extras=JSON.parse(e.extras);var a=[];e.extras.forEach(function(t){a.push(t.id+"-"+t.quantity)}),e.extras=a.length?a:null}t in e&&Array.isArray(e[t])&&e[t].length&&(e[t]=e[t].join(","))}),e},inlineSVG:function(){var t=a(661);t.init({svgSelector:"img.svg-amelia",initClass:"js-inlinesvg"})},inlineSVGCabinet:function(){setTimeout(function(){a(661).init({svgSelector:"img.svg-cabinet",initClass:"js-inlinesvg"})},100)},imageFromText:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=this.getNameInitials(t),i=Math.floor(Math.random()*this.colors.length),o=this.colors[i];return this.usedColors.push(this.colors[i]),this.colors.splice(i,1),0===this.colors.length&&(this.colors=this.usedColors,this.usedColors=[]),a?e.firstName?this.$root.getUrl+"public/img/default-employee.svg":e.latitude?this.$root.getUrl+"public/img/default-location.svg":this.$root.getUrl+"public/img/default-service.svg":location.protocol+"//via.placeholder.com/120/"+o+"/fff?text="+s},pictureLoad:function(t,e){if(null!==t){var a=!0===e?t.firstName+" "+t.lastName:t.name;if(void 0!==a)return t.pictureThumbPath=t.pictureThumbPath||this.imageFromText(a),t.pictureThumbPath}},imageLoadError:function(t,e){var a=!0===e?t.firstName+" "+t.lastName:t.name;void 0!==a&&(t.pictureThumbPath=this.imageFromText(a,t,!0))},getNameInitials:function(t){return t.split(" ").map(function(t){return t.charAt(0)}).join("").toUpperCase().substring(0,3).replace(/[^\w\s]/g,"")}}}},661:function(t,e,a){(function(a){var s,i,o,l;l=void 0!==a?a:this.window||this.global,i=[],s=function(t){var e,a={},s=!!document.querySelector&&!!t.addEventListener,i={initClass:"js-inlinesvg",svgSelector:"img.svg"},o=function(){var t={},e=!1,a=0,s=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],a++);for(var i=function(a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e&&"[object Object]"===Object.prototype.toString.call(a[s])?t[s]=o(!0,t[s],a[s]):t[s]=a[s])};s>a;a++){i(arguments[a])}return t},l=function(t){var a=document.querySelectorAll(e.svgSelector),s=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}}(a.length,t);Array.prototype.forEach.call(a,function(t,a){var i=t.src||t.getAttribute("data-src"),o=t.attributes,l=new XMLHttpRequest;l.open("GET",i,!0),l.onload=function(){if(l.status>=200&&l.status<400){var a=(new DOMParser).parseFromString(l.responseText,"text/xml").getElementsByTagName("svg")[0];if(a.removeAttribute("xmlns:a"),a.removeAttribute("width"),a.removeAttribute("height"),a.removeAttribute("x"),a.removeAttribute("y"),a.removeAttribute("enable-background"),a.removeAttribute("xmlns:xlink"),a.removeAttribute("xml:space"),a.removeAttribute("version"),Array.prototype.slice.call(o).forEach(function(t){"src"!==t.name&&"alt"!==t.name&&a.setAttribute(t.name,t.value)}),a.classList?a.classList.add("inlined-svg"):a.className+=" inlined-svg",a.setAttribute("role","img"),o.longdesc){var i=document.createElementNS("http://www.w3.org/2000/svg","desc"),r=document.createTextNode(o.longdesc.value);i.appendChild(r),a.insertBefore(i,a.firstChild)}if(o.alt){a.setAttribute("aria-labelledby","title");var n=document.createElementNS("http://www.w3.org/2000/svg","title"),c=document.createTextNode(o.alt.value);n.appendChild(c),a.insertBefore(n,a.firstChild)}t.parentNode.replaceChild(a,t),s(e.svgSelector)}else console.error("There was an error retrieving the source of the SVG.")},l.onerror=function(){console.error("There was an error connecting to the origin server.")},l.send()})};return a.init=function(t,a){s&&(e=o(i,t||{}),l(a||function(){}),document.documentElement.className+=" "+e.initClass)},a}(l),void 0===(o="function"==typeof s?s.apply(e,i):s)||(t.exports=o)}).call(e,a(37))},689:function(t,e,a){var s=a(140)(a(693),a(694),!1,null,null,null);t.exports=s.exports},693:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(141),i=a(336),o=a(654);e.default={mixins:[s.a,i.a,o.a],props:["oldCustomize","appointmentsApproved","appointmentsPending","employeesTotal","customersTotal","locationsTotal","packagesTotal","resourcesTotal","servicesTotal","categoriesTotal","financeTotal","addNewTaxBtnDisplay","addNewCouponBtnDisplay","addNewCustomFieldBtnDisplay","locations","categories","bookableType","params","fetched"],methods:{showMainCustomize:function(){this.$emit("showMainCustomize",null)},showDialogCustomer:function(){this.$emit("newCustomerBtnClicked",null)},showDialogAppointment:function(){this.$emit("newAppointmentBtnClicked",null)},showDialogEvent:function(){this.$emit("newEventBtnClicked",null)},showDialogEmployee:function(){this.$emit("newEmployeeBtnClicked")},showDialogLocation:function(){this.$emit("newLocationBtnClicked")},showDialogService:function(){this.$emit("newServiceBtnClicked")},showDialogPackage:function(){this.$emit("newPackageBtnClicked")},showDialogPackageBooking:function(){this.$emit("newPackageBookingBtnClicked")},showDialogResource:function(){this.$emit("newResourceBtnClicked")},showDialogTax:function(){this.$emit("newTaxBtnClicked")},showDialogCoupon:function(){this.$emit("newCouponBtnClicked")},showDialogCustomFields:function(){this.$emit("newCustomFieldBtnClicked")},selectAllInCategory:function(t){this.$emit("selectAllInCategory",t)},changeFilter:function(){this.$emit("changeFilter")}}}},694:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"am-page-header am-section"},[a("el-row",{attrs:{type:"wpamelia-calendar"===t.$router.currentRoute.name?"":"flex",align:"middle"}},[a("el-col",{attrs:{span:"wpamelia-calendar"===t.$router.currentRoute.name?6:18}},[a("div",{staticClass:"am-logo"},[a("img",{staticClass:"logo-big",attrs:{width:"92",src:t.$root.getUrl+"public/img/amelia-logo-horizontal.svg"}}),t._v(" "),a("img",{staticClass:"logo-small",attrs:{width:"28",src:t.$root.getUrl+"public/img/amelia-logo-symbol.svg"}})]),t._v(" "),a("h1",{staticClass:"am-page-title"},[t._v("\n        "+t._s(t.bookableType?t.$root.labels[t.bookableType]:t.$router.currentRoute.meta.title)+"\n\n        "),t._v(" "),t.appointmentsApproved>=0?a("span",{staticClass:"am-appointments-number approved"},[t._v("\n          "+t._s(t.appointmentsApproved)+"\n        ")]):t._e(),t._v(" "),t.appointmentsPending>=0?a("span",{staticClass:"am-appointments-number pending"},[t._v("\n          "+t._s(t.appointmentsPending)+"\n        ")]):t._e(),t._v(" "),t.employeesTotal>=0&&!0===t.$root.settings.capabilities.canReadOthers?a("span",[a("span",{staticClass:"total-number"},[t._v(t._s(t.employeesTotal))]),t._v(" "+t._s(t.$root.labels.total)+"\n        ")]):t._e(),t._v(" "),t.customersTotal>=0?a("span",[a("span",{staticClass:"total-number"},[t._v(t._s(t.customersTotal))]),t._v(" "+t._s(t.$root.labels.total)+"\n        ")]):t._e(),t._v(" "),t.locationsTotal>=0?a("span",[a("span",{staticClass:"total-number"},[t._v(t._s(t.locationsTotal))]),t._v(" "+t._s(t.$root.labels.total)+"\n        ")]):t._e(),t._v(" "),t.servicesTotal>=0&&"services"===t.bookableType?a("span",[a("span",{staticClass:"total-number"},[t._v(t._s(t.servicesTotal))]),t._v(" "+t._s(t.$root.labels.total)+"\n        ")]):t._e(),t._v(" "),t.packagesTotal>=0&&"packages"===t.bookableType?a("span",[a("span",{staticClass:"total-number"},[t._v(t._s(t.packagesTotal))]),t._v(" "+t._s(t.$root.labels.total)+"\n        ")]):t._e(),t._v(" "),t.resourcesTotal>=0&&"resources"===t.bookableType?a("span",[a("span",{staticClass:"total-number"},[t._v(t._s(t.resourcesTotal))]),t._v(" "+t._s(t.$root.labels.total)+"\n        ")]):t._e(),t._v(" "),t.financeTotal>=0?a("span",[a("span",{staticClass:"total-number"},[t._v(t._s(t.financeTotal))]),t._v(" "+t._s(t.$root.labels.total)+"\n        ")]):t._e()])]),t._v(" "),a("el-col",{staticClass:"align-right v-calendar-column",attrs:{span:"wpamelia-calendar"===t.$router.currentRoute.name?18:6}},["wpamelia-appointments"===t.$router.currentRoute.name&&(!0===t.$root.settings.capabilities.canWriteOthers||"provider"===this.$root.settings.role&&this.$root.settings.roles.allowWriteAppointments)?a("el-button",{staticClass:"am-dialog-create",attrs:{type:"primary"},on:{click:t.showDialogAppointment}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.new_appointment))])]):t._e(),t._v(" "),"wpamelia-events"===t.$router.currentRoute.name&&(!0===t.$root.settings.capabilities.canWriteOthers||"provider"===this.$root.settings.role&&this.$root.settings.roles.allowWriteEvents)?a("el-button",{staticClass:"am-dialog-create",attrs:{type:"primary"},on:{click:t.showDialogEvent}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.new_event))])]):t._e(),t._v(" "),"wpamelia-employees"===t.$router.currentRoute.name&&!0===t.$root.settings.capabilities.canWrite&&!0===t.$root.settings.capabilities.canWriteOthers?a("el-button",{staticClass:"am-dialog-create",attrs:{type:"primary"},on:{click:t.showDialogEmployee}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.add_employee))])]):t._e(),t._v(" "),"wpamelia-customers"===t.$router.currentRoute.name&&!0===t.$root.settings.capabilities.canWrite?a("el-button",{staticClass:"am-dialog-create",attrs:{type:"primary"},on:{click:t.showDialogCustomer}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.add_customer))])]):t._e(),t._v(" "),"wpamelia-locations"===t.$router.currentRoute.name&&!0===t.$root.settings.capabilities.canWrite?a("el-button",{staticClass:"am-dialog-create",class:t.licenceClassDisabled(),attrs:{type:"primary",disabled:t.notInLicence()},on:{click:t.showDialogLocation}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.add_location))])]):t._e(),t._v(" "),"wpamelia-services"===t.$router.currentRoute.name&&t.categoriesTotal>0&&!0===t.$root.settings.capabilities.canWrite&&"services"===t.bookableType?a("el-button",{staticClass:"am-dialog-create",attrs:{type:"primary"},on:{click:t.showDialogService}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.add_service))])]):t._e(),t._v(" "),"wpamelia-services"===t.$router.currentRoute.name&&!0===t.$root.settings.capabilities.canWrite&&"packages"===t.bookableType?a("el-button",{staticClass:"am-dialog-create",class:t.licenceClassDisabled("pro"),attrs:{type:"primary",disabled:t.notInLicence("pro")},on:{click:function(e){t.packagesTotal>=0?t.showDialogPackage():t.showDialogPackageBooking()}}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.packagesTotal>=0?t.$root.labels.add_package:t.$root.labels.book_package))])]):t._e(),t._v(" "),"wpamelia-services"===t.$router.currentRoute.name&&!0===t.$root.settings.capabilities.canWrite&&"resources"===t.bookableType?a("el-button",{staticClass:"am-dialog-create",class:t.licenceClassDisabled("pro"),attrs:{type:"primary",disabled:t.notInLicence("pro")},on:{click:function(e){return t.showDialogResource()}}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.add_resource))])]):t._e(),t._v(" "),"wpamelia-finance"===t.$router.currentRoute.name&&t.addNewTaxBtnDisplay&&!0===t.$root.settings.capabilities.canWrite?a("el-button",{staticClass:"am-dialog-create",class:t.licenceClassDisabled(),attrs:{type:"primary",disabled:t.notInLicence()},on:{click:t.showDialogTax}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.new_tax))])]):t._e(),t._v(" "),"wpamelia-finance"===t.$router.currentRoute.name&&t.addNewCouponBtnDisplay&&!0===t.$root.settings.capabilities.canWrite?a("el-button",{staticClass:"am-dialog-create",class:t.licenceClassDisabled("starter"),attrs:{type:"primary",disabled:t.notInLicence("starter")},on:{click:t.showDialogCoupon}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.new_coupon))])]):t._e(),t._v(" "),a("transition",{attrs:{name:"fade"}},["wpamelia-cf"===t.$router.currentRoute.name&&t.addNewCustomFieldBtnDisplay?a("el-button",{staticClass:"am-dialog-create",attrs:{type:"primary"},on:{click:t.showDialogCustomFields}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.add_custom_field))])]):t._e()],1),t._v(" "),"wpamelia-dashboard"===t.$router.currentRoute.name?a("div",{staticClass:"v-calendar-column"},[a("div",{staticClass:"el-form-item__content"},[a("v-date-picker",{attrs:{mode:"range","popover-visibility":"focus","popover-direction":"bottom","popover-align":"right","tint-color":"#1A84EE","show-day-popover":!1,"input-props":{class:"el-input__inner"},"is-expanded":!1,"is-required":!0,"input-class":"el-input__inner",formats:t.vCalendarFormats,"is-double-paned":!0},on:{input:t.changeFilter},model:{value:t.params.dates,callback:function(e){t.$set(t.params,"dates",e)},expression:"params.dates"}})],1)]):t._e(),t._v(" "),"wpamelia-calendar"===t.$router.currentRoute.name?a("div",{staticClass:"am-calendar-header-filters"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:t.$root.labels.services+":"}},[a("el-select",{attrs:{multiple:"",filterable:"","collapse-tags":"",loading:!t.fetched,placeholder:t.$root.labels.all_services},on:{change:t.changeFilter},model:{value:t.params.services,callback:function(e){t.$set(t.params,"services",e)},expression:"params.services"}},t._l(t.categories,function(e){return a("div",{key:e.id},[a("div",{staticClass:"am-drop-parent",on:{click:function(a){return t.selectAllInCategory(e.id)}}},[a("span",[t._v(t._s(e.name))])]),t._v(" "),t._l(e.serviceList,function(t){return a("el-option",{key:t.id,staticClass:"am-drop-child",attrs:{label:t.name,value:t.id}})})],2)}),0)],1),t._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.locations.length,expression:"locations.length"}],attrs:{label:t.$root.labels.locations+":"}},[a("el-select",{attrs:{multiple:"",clearable:"","collapse-tags":"",placeholder:t.$root.labels.all_locations,loading:!t.fetched},on:{change:t.changeFilter},model:{value:t.params.locations,callback:function(e){t.$set(t.params,"locations",e)},expression:"params.locations"}},t._l(t.locations,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1)],1),t._v(" "),"wpamelia-calendar"===t.$router.currentRoute.name&&("admin"===t.$root.settings.role||"manager"===t.$root.settings.role||"provider"===t.$root.settings.role&&t.$root.settings.roles.allowWriteAppointments)?a("el-button",{staticClass:"am-dialog-create",attrs:{type:"primary"},on:{click:t.showDialogAppointment}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.new_appointment))])]):t._e()],1):t._e(),t._v(" "),t.oldCustomize&&"wpamelia-customize"===t.$router.currentRoute.name?a("div",{staticClass:"am-calendar-header-filters"},[a("el-button",{staticClass:"am-dialog-create",attrs:{type:"primary"},on:{click:t.showMainCustomize}},[a("span",{staticClass:"button-text"},[t._v(t._s(t.$root.labels.go_back))])])],1):t._e()],1)],1)],1)},staticRenderFns:[]}}});