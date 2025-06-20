<template>
	<div class="main-content" :style='{"padding":"30px","alignItems":"flex-start","flexWrap":"wrap","justifyContent":"flex-start","display":"flex"}'>
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"width":"100%","margin":"0 0 10px"}' :inline="true" :model="searchForm">
				<el-row :style='{"flexWrap":"wrap","justifyContent":"center","display":"flex"}' >
					<div :style='{"margin":"0 10px 0 0","display":"inline-block"}'>
						<label :style='{"margin":"0 10px 0 0","color":"#333","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"500","height":"40px"}' class="item-label">ID</label>
						<el-input v-model="searchForm.bianhao" placeholder="ID" clearable></el-input>
					</div>
					<el-button :style='{"border":"1px solid #f2cd41","cursor":"pointer","padding":"0 24px","boxShadow":"1px 2px 4px #e4d188","outline":"none","color":"#333","borderRadius":"4px","background":"radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%)","width":"80px","fontSize":"14px","height":"40px"}' type="success" @click="search()">查询</el-button>
				</el-row>

				<el-row :style='{"margin":"20px 0","display":"flex"}'>
					<el-button :style='{"border":"1px solid #000","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #eee","margin":"0 10px 0 0","color":"#000","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','新增')" type="success" @click="addOrUpdateHandler()">新增</el-button>
					<el-button :style='{"border":"1px solid #c00","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #f0d2d2","margin":"0 10px 0 0","color":"#c00","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','删除')" :disabled="dataListSelections.length <= 0" type="danger" @click="deleteHandler()">删除</el-button>

					<el-button :style='{"border":"1px solid #06c614","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #d2f0d4","margin":"0 10px 0 0","color":"#06c614","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','导入')" type="success" @click="importHandler()">导入</el-button>
                    <el-button :style='{"border":"1px solid #06c614","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #d2f0d4","margin":"0 10px 0 0","color":"#06c614","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','导入')" type="success" @click="importClcik">上传模板</el-button>
                    <el-button :style='{"border":"1px solid #06c614","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #d2f0d4","margin":"0 10px 0 0","color":"#06c614","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','导入')" type="success" @click="download($base.url + 'upload/shujufenxi_template.xlsx')">下载模板</el-button>




					<el-button :style='{"border":"1px solid #06c614","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #d2f0d4","margin":"0 10px 0 0","color":"#06c614","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','血压统计')" type="warning" @click="chartDialog1()">血压统计</el-button>
					<el-button :style='{"border":"1px solid #06c614","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #d2f0d4","margin":"0 10px 0 0","color":"#06c614","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','血糖统计')" type="warning" @click="chartDialog2()">血糖统计</el-button>
					<el-button :style='{"border":"1px solid #06c614","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #d2f0d4","margin":"0 10px 0 0","color":"#06c614","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','胆固醇')" type="warning" @click="chartDialog3()">胆固醇</el-button>
					<el-button :style='{"border":"1px solid #06c614","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #d2f0d4","margin":"0 10px 0 0","color":"#06c614","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','胰高血糖素')" type="warning" @click="chartDialog4()">胰高血糖素</el-button>
					<el-button :style='{"border":"1px solid #06c614","cursor":"pointer","padding":"0 12px","boxShadow":"inset 0px 0px 32px 0px #d2f0d4","margin":"0 10px 0 0","color":"#06c614","minWidth":"80px","outline":"none","borderRadius":"4px","background":"url() no-repeat center top / 100% 100%","width":"auto","fontSize":"14px","height":"36px"}' v-if="isAuth('shujufenxi','是否吸烟')" type="warning" @click="chartDialog5()">是否吸烟</el-button>
				</el-row>
			</el-form>
			
			<!-- <div> -->
				<el-table class="tables"
					:stripe='true'
					:style='{"padding":"0","borderColor":"#eee07e","margin":"0 0 20px","borderRadius":"0px","borderWidth":"1px 0 0 1px","background":"rgba(255,255,255,.6)","width":"100%","borderStyle":"solid"}' 
					v-if="isAuth('shujufenxi','查看')"
					:data="dataList"
					v-loading="dataListLoading"
				@selection-change="selectionChangeHandler">
					<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
					<el-table-column :resizable='true' :sortable='true' label="序号" type="index" width="50" />
					<el-table-column :resizable='true' :sortable='true'  
						prop="bianhao"
					label="ID">
						<template slot-scope="scope">
							{{scope.row.bianhao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="tianshu"
					label="天数">
						<template slot-scope="scope">
							{{scope.row.tianshu}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="xingbie"
					label="性别">
						<template slot-scope="scope">
							{{scope.row.xingbie}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="shengao"
					label="身高">
						<template slot-scope="scope">
							{{scope.row.shengao}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="zhongliang"
					label="重量">
						<template slot-scope="scope">
							{{scope.row.zhongliang}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="xueya"
					label="血压">
						<template slot-scope="scope">
							{{scope.row.xueya}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="xuetang"
					label="血糖">
						<template slot-scope="scope">
							{{scope.row.xuetang}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="danguchun"
					label="胆固醇">
						<template slot-scope="scope">
							{{scope.row.danguchun}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="yigaoxuetangsu"
					label="胰高血糖素">
						<template slot-scope="scope">
							{{scope.row.yigaoxuetangsu}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="shifouxiyan"
					label="是否吸烟">
						<template slot-scope="scope">
							{{scope.row.shifouxiyan}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="shifouyinjiu"
					label="是否饮酒">
						<template slot-scope="scope">
							{{scope.row.shifouyinjiu}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="shifouyundong"
					label="是否运动">
						<template slot-scope="scope">
							{{scope.row.shifouyundong}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='true'  
						prop="xinzanggongnengshifoulianghao"
					label="心脏功能是否良好">
						<template slot-scope="scope">
							{{scope.row.xinzanggongnengshifoulianghao}}
						</template>
					</el-table-column>
					<el-table-column width="300" label="操作">
						<template slot-scope="scope">
							<el-button :style='{"border":"1px solid #1e98f5","cursor":"pointer","padding":"0 16px","boxShadow":"inset 0px 0px 32px 0px #eff8fe","margin":"3px 6px 3px 0","outline":"none","color":"#1e98f5","borderRadius":"4px","background":"none","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('shujufenxi','查看')" type="success" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">详情</el-button>
							<el-button :style='{"border":"1px solid #06d5dd","cursor":"pointer","padding":"0 16px","boxShadow":"inset 0px 0px 32px 0px #f1feff","margin":"3px 6px 3px 0","outline":"none","color":"#06d5dd","borderRadius":"4px","background":"none","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('shujufenxi','修改')" type="primary" size="mini" @click="addOrUpdateHandler(scope.row.id)">修改</el-button>





							<el-button :style='{"border":"1px solid #c00","cursor":"pointer","padding":"0 16px","boxShadow":"inset 0px 0px 32px 0px #fef4f4","margin":"3px 6px 3px 0","outline":"none","color":"#c00","borderRadius":"4px","background":"none","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('shujufenxi','删除') " type="danger" size="mini" @click="deleteHandler(scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination
					@size-change="sizeChangeHandle"
					@current-change="currentChangeHandle"
					:current-page="pageIndex"
					background
					:page-sizes="[10, 20, 30, 50]"
					:page-size="pageSize"
					:layout="layouts.join()"
					:total="totalPage"
					prev-text="<"
					next-text=">"
					:hide-on-single-page="true"
					:style='{"width":"100%","padding":"0","margin":"20px 0 0","whiteSpace":"nowrap","color":"#eee","fontWeight":"500"}'
				></el-pagination>
			<!-- </div> -->
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>



		<el-dialog title="导入" :visible.sync="importVisiable" width="50%">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item class="upload" label="文件" prop="excelFile">
				  <excel-file-upload
				  tip="点击上传直接导入excel文件"
				  action="shujufenxi/importExcel"
				  :limit="1"
                  @change="importChange"
				  ></excel-file-upload>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="importHandler()">关 闭</el-button>
			</span>
		</el-dialog>
        <el-dialog title="上传模板" :visible.sync="importVis" width="50%">
            <el-form ref="form" :model="importForm" label-width="80px">
                <el-form-item class="upload" label="文件" prop="excelFile">
                    <el-upload class="upload-demo" drag :action="$base.url + 'file/upload?type=shujufenxi_template'"
                        :show-file-list="false" :on-success="importSuccess">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="importVis=false">关 闭</el-button>
            </span>
        </el-dialog>


		<el-dialog
		  :visible.sync="chartVisiable1"
		  width="800">
			<div id="xueyaChart1" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog1">返回</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  :visible.sync="chartVisiable2"
		  width="800">
			<div id="xuetangChart2" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog2">返回</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  :visible.sync="chartVisiable3"
		  width="800">
			<div id="danguchunChart3" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog3">返回</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  :visible.sync="chartVisiable4"
		  width="800">
			<div id="yigaoxuetangsuChart4" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog4">返回</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  :visible.sync="chartVisiable5"
		  width="800">
			<div id="shifouxiyanChart5" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog5">返回</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
//折
//血压统计
//[]
import * as echarts from 'echarts'
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
export default {
  data() {
    return {
      searchForm: {
        key: ""
      },
      form:{},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: true,
      sfshVisiable: false,
      shForm: {},
      importVisiable: false,
      importVis: false,
      importForm: {},
      chartVisiable: false,
      chartVisiable1: false,
      chartVisiable2: false,
      chartVisiable3: false,
      chartVisiable4: false,
      chartVisiable5: false,
      addOrUpdateFlag:false,
      layouts: ["total","prev","pager","next","sizes","jumper"],

    };
  },
  created() {
    this.init();
    this.getDataList();
    this.contentStyleChange()
  },
  mounted() {
  },
  filters: {
    htmlfilter: function (val) {
      return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
    }
  },
  components: {
    AddOrUpdate,
  },
  methods: {

    contentStyleChange() {
      this.contentPageStyleChange()
    },
    // 分页
    contentPageStyleChange(){
      let arr = []

      // if(this.contents.pageTotal) arr.push('total')
      // if(this.contents.pageSizes) arr.push('sizes')
      // if(this.contents.pagePrevNext){
      //   arr.push('prev')
      //   if(this.contents.pagePager) arr.push('pager')
      //   arr.push('next')
      // }
      // if(this.contents.pageJumper) arr.push('jumper')
      // this.layouts = arr.join()
      // this.contents.pageEachNum = 10
    },



//统计接口
    chartDialog1() {
      this.chartVisiable1 = !this.chartVisiable1;
      this.$nextTick(()=>{

        var xueyaChart1 = echarts.init(document.getElementById("xueyaChart1"),'macarons');
        this.$http({
            url: `shujufenxi/value/bianhao/xueya`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].bianhao);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].bianhao
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '血压统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'line',
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                xueyaChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    xueyaChart1.resize();
                };
            }
        });
      })
    },

//统计接口
    chartDialog2() {
      this.chartVisiable2 = !this.chartVisiable2;
      this.$nextTick(()=>{
        // bianhao bianhao
        //  xuetang

        var xuetangChart2 = echarts.init(document.getElementById("xuetangChart2"),'macarons');
        this.$http({
            url: `shujufenxi/value/bianhao/xuetang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].bianhao);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].bianhao
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '血糖统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'line',
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                xuetangChart2.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    xuetangChart2.resize();
                };
            }
        });
      })
    },

//统计接口
    chartDialog3() {
      this.chartVisiable3 = !this.chartVisiable3;
      this.$nextTick(()=>{

        var danguchunChart3 = echarts.init(document.getElementById("danguchunChart3"),'macarons');
        this.$http({
            url: "shujufenxi/group/danguchun",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].danguchun);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].danguchun
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '胆固醇',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        axisLabel : {
                            rotate:70
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                danguchunChart3.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    danguchunChart3.resize();
                };
            }
        });
      })
    },

//统计接口
    chartDialog4() {
      this.chartVisiable4 = !this.chartVisiable4;
      this.$nextTick(()=>{

        var yigaoxuetangsuChart4 = echarts.init(document.getElementById("yigaoxuetangsuChart4"),'macarons');
        this.$http({
            url: "shujufenxi/group/yigaoxuetangsu",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].yigaoxuetangsu);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].yigaoxuetangsu
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '胰高血糖素',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        axisLabel : {
                            rotate:70
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                yigaoxuetangsuChart4.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    yigaoxuetangsuChart4.resize();
                };
            }
        });
      })
    },

//统计接口
    chartDialog5() {
      this.chartVisiable5 = !this.chartVisiable5;
      this.$nextTick(()=>{

        var shifouxiyanChart5 = echarts.init(document.getElementById("shifouxiyanChart5"),'macarons');
        this.$http({
            url: "shujufenxi/group/shifouxiyan",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].shifouxiyan);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].shifouxiyan
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '是否吸烟',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        axisLabel : {
                            rotate:70
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                shifouxiyanChart5.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    shifouxiyanChart5.resize();
                };
            }
        });
      })
    },

    init () {
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
        order: 'desc',
      }
           if(this.searchForm.bianhao!='' && this.searchForm.bianhao!=undefined){
            params['bianhao'] = '%' + this.searchForm.bianhao + '%'
          }
      this.$http({
        url: "shujufenxi/page",
        method: "get",
        params: params
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    importChange(){
        this.importHandler()
        this.getDataList()
    },
    importClcik() {
        this.importVis = true
    },
    importSuccess(e) {
        if(e.code==0){
            this.$message.success('上传成功');
            this.importVis = false
            
        }
    },
    importHandler() {
        this.importVisiable = !this.importVisiable;
    },
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 删除
    deleteHandler(id) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "shujufenxi/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.search();
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },


  }

};
</script>
<style lang="scss" scoped>
	
	.center-form-pv {
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	.el-input {
	  width: auto;
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 3px double #333;
				border-radius: 4px;
				padding: 0 12px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: #333;
				background: #ffdc58;
				width: 178px;
				font-size: 14px;
				height: 41px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 3px double #333;
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: #333;
				background: #ffdc58;
				width: 178px;
				font-size: 14px;
				height: 41px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 3px double #333;
				border-radius: 4px;
				padding: 0 10px 0 30px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: #333;
				background: #ffdc58;
				width: 178px;
				font-size: 14px;
				height: 41px;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: #999;
				font-weight: 500;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: #fff;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 10px;
				color: #000;
				background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%);
				border-color: #eee07e;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				word-break: break-all;
				white-space: normal;
				font-weight: bold;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}

	
	.el-table /deep/ .el-table__body-wrapper tbody {
				border: 0;
				width: 100%;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr {
				border: 0;
				background: none;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 12px 0;
				color: #666;
				background: none;
				border-color: #eee07e;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}
	
		.el-table /deep/ .el-table__body-wrapper tbody tr.el-table__row--striped td {
		background: rgba(200,200,200,.1);
	}
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 12px 0;
				color: #666;
				background: rgba(245,221,53,.1);
				border-color: #eee07e;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 12px 0;
				color: #666;
				background: none;
				border-color: #eee07e;
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #333;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%),rgba(247,222,49,1);
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%),rgba(247,222,49,1);
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}

	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}

	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #333;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%),rgba(247,222,49,1);
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #d4bb0d;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #d4bb0d;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 0px solid #DCDFE6;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #333;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%),rgba(247,222,49,1);
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #333;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #333;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 0px solid #DCDFE6;
				cursor: pointer;
				padding: 0 3px;
				color: #333;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: radial-gradient(circle, rgba(255,251,222,1) 0%, rgba(247,222,49,1) 100%),rgba(247,222,49,1);
				width: 100%;
				text-align: center;
				height: 28px;
			}
</style>
