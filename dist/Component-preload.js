//@ui5-bundle com/gr/customcontrol/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/gr/customcontrol/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/gr/customcontrol/model/models"],function(e,t,o){"use strict";return e.extend("com.gr.customcontrol.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(o.createDeviceModel(),"device")}})});
},
	"com/gr/customcontrol/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e){"use strict";return e.extend("com.gr.customcontrol.controller.App",{onInit:function(){},onRatingChange:function(e){var t=e.getParameter("value");var n=this.getView().getModel("i18n").getResourceBundle();MessageToast.show(n.getText("ratingConfirmation",[t]))}})});
},
	"com/gr/customcontrol/i18n/i18n.properties":'title=Title\nappTitle=App\nappDescription=App Description\n',
	"com/gr/customcontrol/localService/metadata.xml":'<?xml version="1.0" encoding="utf-8" standalone="yes"?><edmx:Edmx Version="1.0" xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx"><edmx:DataServices xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" m:DataServiceVersion="2.0"><Schema Namespace="ODataDemo" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns="http://schemas.microsoft.com/ado/2007/05/edm"><EntityType Name="Product"><Key><PropertyRef Name="ID" /></Key><Property Name="ID" Type="Edm.Int32" Nullable="false" /><Property Name="Name" Type="Edm.String" Nullable="true" m:FC_TargetPath="SyndicationTitle" m:FC_ContentKind="text" m:FC_KeepInContent="false" /><Property Name="Description" Type="Edm.String" Nullable="true" m:FC_TargetPath="SyndicationSummary" m:FC_ContentKind="text" m:FC_KeepInContent="false" /><Property Name="ReleaseDate" Type="Edm.DateTime" Nullable="false" /><Property Name="DiscontinuedDate" Type="Edm.DateTime" Nullable="true" /><Property Name="Rating" Type="Edm.Int32" Nullable="false" /><Property Name="Price" Type="Edm.Decimal" Nullable="false" /><NavigationProperty Name="Category" Relationship="ODataDemo.Product_Category_Category_Products" FromRole="Product_Category" ToRole="Category_Products" /><NavigationProperty Name="Supplier" Relationship="ODataDemo.Product_Supplier_Supplier_Products" FromRole="Product_Supplier" ToRole="Supplier_Products" /></EntityType><EntityType Name="Category"><Key><PropertyRef Name="ID" /></Key><Property Name="ID" Type="Edm.Int32" Nullable="false" /><Property Name="Name" Type="Edm.String" Nullable="true" m:FC_TargetPath="SyndicationTitle" m:FC_ContentKind="text" m:FC_KeepInContent="true" /><NavigationProperty Name="Products" Relationship="ODataDemo.Product_Category_Category_Products" FromRole="Category_Products" ToRole="Product_Category" /></EntityType><EntityType Name="Supplier"><Key><PropertyRef Name="ID" /></Key><Property Name="ID" Type="Edm.Int32" Nullable="false" /><Property Name="Name" Type="Edm.String" Nullable="true" m:FC_TargetPath="SyndicationTitle" m:FC_ContentKind="text" m:FC_KeepInContent="true" /><Property Name="Address" Type="ODataDemo.Address" Nullable="false" /><Property Name="Concurrency" Type="Edm.Int32" Nullable="false" ConcurrencyMode="Fixed" /><NavigationProperty Name="Products" Relationship="ODataDemo.Product_Supplier_Supplier_Products" FromRole="Supplier_Products" ToRole="Product_Supplier" /></EntityType><ComplexType Name="Address"><Property Name="Street" Type="Edm.String" Nullable="true" /><Property Name="City" Type="Edm.String" Nullable="true" /><Property Name="State" Type="Edm.String" Nullable="true" /><Property Name="ZipCode" Type="Edm.String" Nullable="true" /><Property Name="Country" Type="Edm.String" Nullable="true" /></ComplexType><Association Name="Product_Category_Category_Products"><End Role="Product_Category" Type="ODataDemo.Product" Multiplicity="*" /><End Role="Category_Products" Type="ODataDemo.Category" Multiplicity="0..1" /></Association><Association Name="Product_Supplier_Supplier_Products"><End Role="Product_Supplier" Type="ODataDemo.Product" Multiplicity="*" /><End Role="Supplier_Products" Type="ODataDemo.Supplier" Multiplicity="0..1" /></Association><EntityContainer Name="DemoService" m:IsDefaultEntityContainer="true"><EntitySet Name="Products" EntityType="ODataDemo.Product" /><EntitySet Name="Categories" EntityType="ODataDemo.Category" /><EntitySet Name="Suppliers" EntityType="ODataDemo.Supplier" /><AssociationSet Name="Products_Category_Categories" Association="ODataDemo.Product_Category_Category_Products"><End Role="Product_Category" EntitySet="Products" /><End Role="Category_Products" EntitySet="Categories" /></AssociationSet><AssociationSet Name="Products_Supplier_Suppliers" Association="ODataDemo.Product_Supplier_Supplier_Products"><End Role="Product_Supplier" EntitySet="Products" /><End Role="Supplier_Products" EntitySet="Suppliers" /></AssociationSet><FunctionImport Name="GetProductsByRating" EntitySet="Products" ReturnType="Collection(ODataDemo.Product)" m:HttpMethod="GET"><Parameter Name="rating" Type="Edm.Int32" Mode="In" /></FunctionImport></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>',
	"com/gr/customcontrol/localService/mockserver.js":function(){sap.ui.define(["sap/ui/core/util/MockServer","sap/ui/model/json/JSONModel","sap/base/util/UriParameters","sap/base/Log"],function(e,t,r,a){"use strict";var o,i="com.gr.customcontrol/",n=i+"localService/mockdata";var s={init:function(s){var u=s||{};return new Promise(function(s,c){var p=sap.ui.require.toUrl(i+"manifest.json"),l=new t(p);l.attachRequestCompleted(function(){var t=new r(window.location.href),c=sap.ui.require.toUrl(n),p=l.getProperty("/sap.app/dataSources/mainService"),f=sap.ui.require.toUrl(i+p.settings.localUri),d=p.uri&&new URI(p.uri).absoluteTo(sap.ui.require.toUrl(i)).toString();if(!o){o=new e({rootUri:d})}else{o.stop()}e.config({autoRespond:true,autoRespondAfter:u.delay||t.get("serverDelay")||500});o.simulate(f,{sMockdataBaseUrl:c,bGenerateMissingMockData:true});var m=o.getRequests();var g=function(e,t,r){r.response=function(r){r.respond(e,{"Content-Type":"text/plain;charset=utf-8"},t)}};if(u.metadataError||t.get("metadataError")){m.forEach(function(e){if(e.path.toString().indexOf("$metadata")>-1){g(500,"metadata Error",e)}})}var v=u.errorType||t.get("errorType"),h=v==="badRequest"?400:500;if(v){m.forEach(function(e){g(h,v,e)})}o.setRequests(m);o.start();a.info("Running the app with mock data");s()});l.attachRequestFailed(function(){var e="Failed to load application manifest";a.error(e);c(new Error(e))})})},getMockServer:function(){return o}};return s});
},
	"com/gr/customcontrol/manifest.json":'{"_version":"","sap.app":{"id":"com.gr.customcontrol","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"","description":"","resources":"resources.json","ach":"ach","dataSources":{"mainService":{"uri":"/V2/(S(gx0yzwcgfxgfqbejzu3jzg3c))/OData/OData.svc/","type":"OData","settings":{"odataVersion":"2.0","localUri":"localService/metadata.xml"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://task","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"com.gr.customcontrol.view.App","type":"XML","async":true,"id":"App"},"dependencies":{"minUI5Version":"1.66.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{},"com.gr.reuse":{"minVersion":"1.0.0"}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.gr.customcontrol.i18n.i18n"}},"":{"dataSource":"mainService","preload":true}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.gr.customcontrol.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteApp","pattern":"RouteApp","target":["TargetApp"]}],"targets":{"TargetApp":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"App","viewName":"App"}}}}}',
	"com/gr/customcontrol/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/gr/customcontrol/view/App.view.xml":'<mvc:View controllerName="com.gr.customcontrol.controller.App" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m" xmlns:wt="com.gr.reuse.controls"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><VBox><wt:ProductRating class="sapUiSmallMarginBeginEnd" change="onRatingChange" /><wt:Square class="sapUiSmallMargin" text="Test" /></VBox></content></Page></pages></App></mvc:View>\n'
}});