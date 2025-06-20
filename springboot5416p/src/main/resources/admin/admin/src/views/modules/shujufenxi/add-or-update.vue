<template>
	<div class="addEdit-block" :style='{"padding":"30px","alignItems":"flex-start","flexWrap":"wrap","justifyContent":"flex-start","display":"flex"}' style="width: 100%;">
		<el-form
			:style='{"minHeight":"100vh","padding":"30px","boxShadow":"0 0px 0px #999","borderRadius":"6px","background":"none"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="80px"
		>
			<template >
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="ID" prop="bianhao">
					<el-input v-model="ruleForm.bianhao" placeholder="ID" clearable  :readonly="ro.bianhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="ID" prop="bianhao">
					<el-input v-model="ruleForm.bianhao" placeholder="ID" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="天数" prop="tianshu">
					<el-input v-model="ruleForm.tianshu" placeholder="天数" clearable  :readonly="ro.tianshu"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="天数" prop="tianshu">
					<el-input v-model="ruleForm.tianshu" placeholder="天数" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie" placeholder="性别" clearable  :readonly="ro.xingbie"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie" placeholder="性别" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="身高" prop="shengao">
					<el-input v-model="ruleForm.shengao" placeholder="身高" clearable  :readonly="ro.shengao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="身高" prop="shengao">
					<el-input v-model="ruleForm.shengao" placeholder="身高" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="重量" prop="zhongliang">
					<el-input v-model="ruleForm.zhongliang" placeholder="重量" clearable  :readonly="ro.zhongliang"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="重量" prop="zhongliang">
					<el-input v-model="ruleForm.zhongliang" placeholder="重量" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="血压" prop="xueya">
					<el-input v-model="ruleForm.xueya" placeholder="血压" clearable  :readonly="ro.xueya"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="血压" prop="xueya">
					<el-input v-model="ruleForm.xueya" placeholder="血压" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="血糖" prop="xuetang">
					<el-input v-model="ruleForm.xuetang" placeholder="血糖" clearable  :readonly="ro.xuetang"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="血糖" prop="xuetang">
					<el-input v-model="ruleForm.xuetang" placeholder="血糖" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="胆固醇" prop="danguchun">
					<el-input v-model="ruleForm.danguchun" placeholder="胆固醇" clearable  :readonly="ro.danguchun"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="胆固醇" prop="danguchun">
					<el-input v-model="ruleForm.danguchun" placeholder="胆固醇" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="胰高血糖素" prop="yigaoxuetangsu">
					<el-input v-model="ruleForm.yigaoxuetangsu" placeholder="胰高血糖素" clearable  :readonly="ro.yigaoxuetangsu"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="胰高血糖素" prop="yigaoxuetangsu">
					<el-input v-model="ruleForm.yigaoxuetangsu" placeholder="胰高血糖素" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="是否吸烟" prop="shifouxiyan">
					<el-input v-model="ruleForm.shifouxiyan" placeholder="是否吸烟" clearable  :readonly="ro.shifouxiyan"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="是否吸烟" prop="shifouxiyan">
					<el-input v-model="ruleForm.shifouxiyan" placeholder="是否吸烟" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="是否饮酒" prop="shifouyinjiu">
					<el-input v-model="ruleForm.shifouyinjiu" placeholder="是否饮酒" clearable  :readonly="ro.shifouyinjiu"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="是否饮酒" prop="shifouyinjiu">
					<el-input v-model="ruleForm.shifouyinjiu" placeholder="是否饮酒" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="是否运动" prop="shifouyundong">
					<el-input v-model="ruleForm.shifouyundong" placeholder="是否运动" clearable  :readonly="ro.shifouyundong"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="是否运动" prop="shifouyundong">
					<el-input v-model="ruleForm.shifouyundong" placeholder="是否运动" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="心脏功能是否良好" prop="xinzanggongnengshifoulianghao">
					<el-input v-model="ruleForm.xinzanggongnengshifoulianghao" placeholder="心脏功能是否良好" clearable  :readonly="ro.xinzanggongnengshifoulianghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="心脏功能是否良好" prop="xinzanggongnengshifoulianghao">
					<el-input v-model="ruleForm.xinzanggongnengshifoulianghao" placeholder="心脏功能是否良好" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"1px solid #eee07e","cursor":"pointer","padding":"0 20px","margin":"0 20px 0 0","color":"#333","minWidth":"90px","outline":"none","borderRadius":"4px","background":"radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid #ff8735","cursor":"pointer","padding":"0 30px","margin":"0","outline":"none","color":"#333","borderRadius":"4px","background":"radial-gradient(circle, rgba(255,224,208,1) 0%, rgba(251,162,125,1) 69%, rgba(255,143,66,1) 100%)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid #ff8735","cursor":"pointer","padding":"0 30px","margin":"0","outline":"none","color":"#333","borderRadius":"4px","background":"radial-gradient(circle, rgba(255,224,208,1) 0%, rgba(251,162,125,1) 69%, rgba(255,143,66,1) 100%)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				bianhao : false,
				tianshu : false,
				xingbie : false,
				shengao : false,
				zhongliang : false,
				xueya : false,
				xuetang : false,
				danguchun : false,
				yigaoxuetangsu : false,
				shifouxiyan : false,
				shifouyinjiu : false,
				shifouyundong : false,
				xinzanggongnengshifoulianghao : false,
			},
			
			
			ruleForm: {
				bianhao: '',
				tianshu: '',
				xingbie: '',
				shengao: '',
				zhongliang: '',
				xueya: '',
				xuetang: '',
				danguchun: '',
				yigaoxuetangsu: '',
				shifouxiyan: '',
				shifouyinjiu: '',
				shifouyundong: '',
				xinzanggongnengshifoulianghao: '',
			},
		
			
			rules: {
				bianhao: [
				],
				tianshu: [
				],
				xingbie: [
				],
				shengao: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				zhongliang: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				xueya: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				xuetang: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				danguchun: [
				],
				yigaoxuetangsu: [
				],
				shifouxiyan: [
				],
				shifouyinjiu: [
				],
				shifouyundong: [
				],
				xinzanggongnengshifoulianghao: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='bianhao'){
							this.ruleForm.bianhao = obj[o];
							this.ro.bianhao = true;
							continue;
						}
						if(o=='tianshu'){
							this.ruleForm.tianshu = obj[o];
							this.ro.tianshu = true;
							continue;
						}
						if(o=='xingbie'){
							this.ruleForm.xingbie = obj[o];
							this.ro.xingbie = true;
							continue;
						}
						if(o=='shengao'){
							this.ruleForm.shengao = obj[o];
							this.ro.shengao = true;
							continue;
						}
						if(o=='zhongliang'){
							this.ruleForm.zhongliang = obj[o];
							this.ro.zhongliang = true;
							continue;
						}
						if(o=='xueya'){
							this.ruleForm.xueya = obj[o];
							this.ro.xueya = true;
							continue;
						}
						if(o=='xuetang'){
							this.ruleForm.xuetang = obj[o];
							this.ro.xuetang = true;
							continue;
						}
						if(o=='danguchun'){
							this.ruleForm.danguchun = obj[o];
							this.ro.danguchun = true;
							continue;
						}
						if(o=='yigaoxuetangsu'){
							this.ruleForm.yigaoxuetangsu = obj[o];
							this.ro.yigaoxuetangsu = true;
							continue;
						}
						if(o=='shifouxiyan'){
							this.ruleForm.shifouxiyan = obj[o];
							this.ro.shifouxiyan = true;
							continue;
						}
						if(o=='shifouyinjiu'){
							this.ruleForm.shifouyinjiu = obj[o];
							this.ro.shifouyinjiu = true;
							continue;
						}
						if(o=='shifouyundong'){
							this.ruleForm.shifouyundong = obj[o];
							this.ro.shifouyundong = true;
							continue;
						}
						if(o=='xinzanggongnengshifoulianghao'){
							this.ruleForm.xinzanggongnengshifoulianghao = obj[o];
							this.ro.xinzanggongnengshifoulianghao = true;
							continue;
						}
				}
				













			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `shujufenxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {



























var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "shujufenxi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `shujufenxi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.shujufenxiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `shujufenxi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.shujufenxiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.shujufenxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  text-shadow: 0 1px 10px #fff;
	  	  color: #666;
	  	  width: 80px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #eee07e;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #666;
	  	  background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%);
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #eee07e;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #666;
	  	  background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%);
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #eee07e;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #666;
	  	  background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%);
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px solid #eee07e;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #b8971c;
	  	  background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%);
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #eee07e;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #b8971c;
	  	  background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%);
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #eee07e;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #b8971c;
	  	  background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%);
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #eee07e;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #666;
	  	  background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%);
	  	  width: 400px;
	  	  font-size: 14px;
	  	  min-height: 120px;
	  	  height: auto;
	  	}
</style>
