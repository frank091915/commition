<template>
	<div class="main-detail">
		<img :src="productdetail.img" class="headimg"/>
		<p>{{productdetail.name}}</p>
		<p>￥{{productdetail.price}}</p>
		<div class="btn">
			<button @click="addcar(productdetail)">加入购物车</button>
			<button>直接购买</button>
		</div>		
		<p class="detail">详情页</p>
		<div v-for="item in productdetail.imgs">
			<img :src="item" />
		</div>
		<div class="side">
			<div class="car" @click="gocar"><span>0</span></div>
			<div class="top" @click="gotop" ></div>
		</div>
	</div>
</template>

<script>
	//将mutations方法映射到组件，用的时候展开就可以
	import{
		mapMutations
	}from 'vuex';
	
	export default{
		name:"detail",
		data(){
			return{
				productdetail:{}
			}
		},
		created(){
			this.$http.getdetail(this.$route.params.productId).then((res)=>{
				this.productdetail=res.data.res_body.list[0]
				console.log(this.productdetail)
			})
			
		},
		/*mouted(){
			
			//添加事件监听 ：第一个参数绑定滚动事件，第二个参数事件处理函数，第三个是否冒泡
//			window.addEventListener("scroll",this.handlescroll(),true)
		},*/
		methods:{
			...mapMutations(['addcar']),
			
			gotop(){
				window.scrollTo(0,0)
			},
			gocar(){
				this.$router.push("/cart")
			}
			/*handlescroll(){
				if(document.Window.scrollTop>0){
					console.log(2)
				}
			}*/
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
.main-detail{
	position: relative;
}
img{
	height: 65vw;
	width: 82vw;
	margin-left: 8vw;
	
}
p{
	text-align: center;
	font-size: 14px;
	margin-top:5px ;
}
.detail{
	height: 35px;
	padding-left:10px ;
	margin:10px ;
	text-align: left;
	border-bottom: 1px solid gainsboro;
}
.btn{
	height: 40px;
	width: 100%;
	button{
	float: left;
	margin-left: 40px;	
	background: #ff699c;
	border: none;
	height: 30px;
	width: 100px;
}
}

.headimg{
	height: 95vw;
	width: 90vw;
	margin-left: 5vw;
}
.car{
	height: 42px;
	width: 40px;	
	background: url(../assets/upload_ie4tkodege4dkzrzhazdambqgqyde_80x180.png) no-repeat 0 0; 
	background-size:40px 90px ;
	position: fixed;
	top: 135vw;
	right: 0;
	span{
		position: absolute;
		right: 5px;
		color: #ff699c;
	}
}
.top{
	height: 42px;
	width: 40px;	
	background: url(../assets/upload_ie4tkodege4dkzrzhazdambqgqyde_80x180.png) no-repeat 0 -49px; 
	background-size:40px 90px ;
	position: fixed;
	top: 150vw;
	right: 0;
	
}

</style>