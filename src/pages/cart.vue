<template>
	<div >
		<div class="carlist" v-for="item in car" :key="item.id">
			<p class="amount">合计：￥{{(item.price*item.count).toFixed(2)}}</p>
			<img :src="item.img"/>
			<p class="name">{{item.name}}</p>
			<p>￥{{item.price}}</p>
			<div class="item-amount">
				<mt-button type="danger" @click="reducecount(item.id)">-</mt-button>{{item.count}}
				<mt-button type="danger"@click="addcount(item.id)">+</mt-button>
			</div>
			<div class="del" @click="deletedata(item.id)"></div>
		</div>
		<div class="totalprice">
			总价￥{{totalprice}}
		</div>
	</div>
	
</template>

<script>
//	可以映射也可以直接调用this.$store上的属性和方法
	import{
		mapState,
		mapMutations,
		mapActions,
		mapGetters
	}from 'vuex';
	
	export default{
		name:'cart',
		computed:{
			...mapState(['car']),
			...mapGetters(['totalprice'])
		},
		methods:{
			...mapMutations(['addcount','reducecount','deletedata'])
			
		}
	}
</script>

<style scoped lang="scss">
	.carlist{
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: relative;
		margin-top: 20px;
		.amount{
			position: absolute;
			top: -5vw;
			right: 0;
			font-size: 14px;
		}
		img{
		width: 60px;
		height: 60px;
		}
		.name{
			width:100px;
			font-size:12px ;
		}
		button{
			width: 20px;
			height: 20px;
			text-align: center;
		}
		.del{
			width: 25px;
			height: 25px;
			background: url(../assets/未标题-1.png) no-repeat center;
			background-size: 25px ;
			font-size: 12px;
		}
		}
		.totalprice{
			position: fixed;
			top: 152vw;
			line-height: 40px;
			width: 100%;
			text-align: right;
			background-color: #F4F4F4;
			height: 40px;
			right: 0;
		}
		
</style>