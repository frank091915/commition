import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
	strict:true,//写这句话就是严格模式 不能随意修改数据 要在mutations方法里修改
	state:{//数据
		car:[]
	},
	getters:{
		//相当于computed计算属性,根据state派生新的状态
		totalprice(state){
			return state.car.reduce(function(result,curr){
				return result+curr.count*curr.price
			},0)
		}
	},
	mutations:{//修改state数据，会将state数据作为参数传过去，使用方法的时候要用commit调用方法使用
		//mutations定义的方法有两个参数
		//第一个代表state，第二个代表要方法所需要的额外数据（对象数值等），没有第三个参数
		addcar(state,item){
		//存在加数量 不存在push进去
		const has=state.car.some(curr=>{
			return curr.id==item.id
		});
		if(has){
			state.car=state.car.filter(curr=>{
				if(curr.id==item.id){
					curr.count+=1;					
				}
				return true})
		}else{
			item.count=1;
			state.car.push(item)
			
				
		}
			
		},
		addcount(state,_id){
			state.car=state.car.filter(curr=>{
				if(curr.id==_id){
					curr.count+=1;					
				}
//				每个都返回true,因为只是修改数据，每个数据都在
				return true
				
			})
		},
		reducecount(state,_id){
			state.car=state.car.filter(curr=>{
				//小于1就不用再减了
				if(curr.id==_id&&curr.count>1){
					curr.count-=1;					
				}else if(curr.id==_id&&curr.count==1){
					alert("不能再减了哦")	
				}
				return true
		})
	
	},
		deletedata(state,_id){
			state.car=state.car.filter(curr=>{				
				if(curr.id==_id){
					return false				
				}
				return true
		})
		}
	},
	actions:{//异步方法
		//actions修改数据要提交mutations
		
		
	}

})