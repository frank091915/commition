<template>	
	<div>
		<mt-tabbar fixed v-model="selected">
			<!--引入组件再根据项目实际内容动态渲染修改组件内容-->
		<!-- ！！！记住：如果不加:就是不给vue指令（指令的属性值为表达式）
			就相当于等于个字符串（不能解析里面的内容）而不是表达式-->	
		  <mt-tab-item 
		  	 v-for="nav in navs"
		  	 :key="nav.path"		  	
		  	 :id="nav.name"
		  	 >
		  	 <!--<img slot="icon" src="../assets/upload_29e515a6k59k937a3ej3l5e6bfji2_36x39.png"/>-->
		    <img slot="icon" :src='nav.meta.src'/>
		    {{nav.meta.navtitle}}
		  </mt-tab-item>		 
		</mt-tabbar>
				
	</div>
	
</template>

<script>
	import routes from "@/router/routes";
	export default{
		name:"tabbar",
		data(){
			
//			console.log(this)
			return{
//				与v-model匹配selected,selected为什么值就默认选中哪项				
				/*!!!!每次都错:打引号为字符串不会解析数据
				selected:"this.$route.name",*/				
				selected:this.$route.name,
				navs:routes.filter(function(curr){
					return curr.meta.isnav
				})
			}
		},
//		监听方法：监听vue实例上数据的改变 就可以触发事件或方法
//		监听selected数据的变化,当有变化时触发push方法跳转路由
//      用watch监听来做点击页面挑转
		watch:{
			selected(newvalue,oldvalue){
//				push参数为字符串或者“描述”路径的对象
				this.$router.push({name:newvalue})
			}
		}
	}
</script>

<style>
</style>