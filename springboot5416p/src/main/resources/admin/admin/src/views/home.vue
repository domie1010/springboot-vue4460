<template>
<div class="content" :style='{"padding":"30px"}'>
	<div class="text" :style='{"margin":"100px auto","fontSize":"32px","color":"rgb(51, 51, 51)","textAlign":"center","background":"url() no-repeat center top","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"border":"1px solid #ccc","margin":"0 10px","borderRadius":"4px","background":"rgba(255,255,255,.6)","display":"flex"}' v-if="isAuth('shujufenxi','首页总数')">
				<div :style='{"borderColor":"#ddd","borderRadius":"4px 0px 0px 4px","background":"none","borderWidth":"0 1px 0 0","width":"80px","borderStyle":"solid","height":"80px"}'></div>
				<div :style='{"alignItems":"center","borderRadius":"0px 4px 4px 0px","flexDirection":"column","background":"none","display":"flex","width":"160px","justifyContent":"center"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#666","fontWeight":"bold","height":"24px"}'>{{shujufenxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"14px","color":"#666","height":"24px"}'>数据分析总数</div>
				</div>
			</div>
        </div>
    </div>
</div>
</template>
<script>
//0
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            shujufenxiCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getshujufenxiCount();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getshujufenxiCount() {
        this.$http({
            url: `shujufenxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.shujufenxiCount = data.data
            }
        })
    },
  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
