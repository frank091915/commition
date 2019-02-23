/*路由懒加载:
打包构建的时候，JavaScript的包会非常大（如app.js）
如果我们能把不同路由对应的组件分割成不同的代码块，
然后当路由被访问的时候才加载对应组件，这样就更加高效了。*/
import commonHeader from "@/components/head";
import tabbar from "@/components/tabbar";
//共用组件可以不用分割代码块,因为每个页面都要用到请求次数多了也会影响性能
//通常将页面级的组件实现分片打包，共用组件一般不
/*import home from "@/pages/home";
import classify from "@/pages/classify";
import cart from "@/pages/cart";
import mine from "@/pages/mine";
import homelist from "@/pages/homelist";*/
const home =()=>import("@/pages/home");
const classify =()=>import("@/pages/classify");
const cart =()=>import("@/pages/cart");
const mine =()=>import("@/pages/mine");
const homelist =()=>import("@/pages/homelist");
const detail =()=>import("@/pages/detail");
const login =()=>import("@/pages/login");

const routes=[
	{
		path:"/",
		redirect:"/home",
		meta:{
			isnav:false
		}
		
	},		
	{
//		这里name可以通过this.$route.name得到name值
		path: '/home', 
		name:"home",
        components:{
        	head:commonHeader,
        	main:home,
        	tabbar:tabbar
        	
        },
        meta:{
        	navtitle:"首页",
        	isnav:true,
//      	动态绑定图片用require
        	src:require("../assets/upload_29e515a6k59k937a3ej3l5e6bfji2_36x39.png")
        },
        children:[     	
      	{
      	 path: ':homelistid', //动态路由参数传递
      	/* 一个组件这样用
		component: list*/
//		引入多个组件,若果<router-view/>没有命名就用默认的要加default
		components:{
			default:homelist
		}
      	}
      
      ]
	},
	{
		path: '/classify', 
		name:"classify",
        components:{
        	head:commonHeader,
        	main:classify,
        	tabbar:tabbar
        	
        },
        meta:{
        	navtitle:"分类",
        	isnav:true,
//      	动态绑定图片用require
        	src:require("../assets/upload_3egkhdd8460el241d98kcl706ke65_34x34.png")
        }
	},
	{
		path: '/cart', 
		name:"cart",
        components:{
        	head:commonHeader,
        	main:cart,
        	tabbar:tabbar
        	
        },
        meta:{
        	navtitle:"购物车",
        	isnav:true,
//      	动态绑定图片用require
        	src:require("../assets/upload_0eabagglh39aggl8jihfakfbf70a9_40x38.png")
        }
	},
	{
		path: '/mine', 
		name:"mine",
        components:{
        	head:commonHeader,
        	main:mine,
        	tabbar:tabbar
        	
        },
        meta:{
        	navtitle:"我的",
        	isnav:true,
//      	动态绑定图片用require
        	src:require("../assets/upload_5g85l55d280l94lfg678lcleegf5e_38x38.png")
        }
	},
	{
		path: '/detail/:productId', 
		name:"detail",
        components:{
        	head:commonHeader,
        	main:detail,       	        	
        },
        meta:{
        	navtitle:"详情",
        	isnav:false,
        }
	},
	{
		path: '/login', 
		name:"login",
        components:{
        	head:commonHeader,
        	main:login,       	        	
        },
        meta:{
        	navtitle:"登陆",
        	isnav:false,
        }
		
	}
	];
	
export default routes;