<template>
	<div style="width: 100%;">

		<div id="main">
			<span class="title">
				Select organisation to change
			</span>
			<el-button
				style="float: right;width: 160px;height: 20px;padding-top:3px;font-size: 10px;padding-left: 15px;margin-top: 20px;"
				type="info" round @click="Toadd()">ADD ORGANISATION<i style="font-weight: bolder"
					class="el-icon-plus"></i></el-button>
			<div>
				<span
					style="display: inline-block;margin-left: 10px;margin-right: 20px;font-size: 15px;color: #909399;">Action:</span>
				<el-select v-model="value" placeholder="please select" class="select">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-button type="info" plain style="width: 40px;padding-left: 10px;padding-top: 13px;">GO</el-button>
				<span
					style="display: inline-block;margin-left: 10px;margin-right: 20px;font-size: 15px;color: #909399;">{{multipleSelection.length}}
					of {{tableData.length}} selected</span>
			</div>
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
				@selection-change="handleSelectionChange" :cell-style="columnStyle">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="NAME">
					<template slot-scope="scope">
						<el-link style="color: rgb(68, 126, 155);" @click="handleEdit(scope.$index, scope.row)">
							{{ scope.row.name }}
						</el-link>
					</template>
				</el-table-column>
				<el-table-column prop="addressline1" label="ADDRESSLINE1">
				</el-table-column>
				<el-table-column prop="postcode" label="POSTCODE" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="contactname" label="CONTACT NAME" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="email" label="EMAIL" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="phonenumber" label="PHONE NUMBER" show-overflow-tooltip>
				</el-table-column>
				<el-table-column align="center" label="OPTION">
					<template slot-scope="scope">
						<el-button style="color: white;background-color: #aa0000;font-size: 12px;" @click="handleDelete(scope.$index, scope.row)">Delete
						</el-button>		
					</template>
				</el-table-column>
			</el-table>
			<span
				style="display: inline-block;margin-left: 10px;margin-top: 20px;font-size: 15px;color: #909399;">{{tableData.length}}
				organisations</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				multipleSelection: '',
				options: [{
					value: '选项1',
					label: "St.John's Surgery"
				}, {
					value: '选项2',
					label: 'Fliwood Food Centre'
				}, {
					value: '选项3',
					label: 'Test referal org 1'
				}],
				value: '',
			}
		},
		created() {
			this.tableData = this.$store.state.tableData

		},
		methods: {
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			Toadd() {
				this.$store.commit('receiveBMsg', {
					formData: {}
				})
				this.$store.commit('receiveStatus', {
					status: 0
				})
				this.$router.push("/addorganisations")
			},
			columnStyle({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				if (columnIndex == 1) { //第1的背景色就改变了1都是列数的下标（The background colour of the 1st changes 1 is the subscript of the column number）
					return 'color: rgb(68, 126, 155);'
				}
			},
			handleEdit(index, row) { //编辑信息（Editorial information）
				this.$store.commit('receiveBMsg', {
					formData: {
						index: index,
						name: row.name,
						addressline1: row.addressline1,
						postcode: row.postcode,
						contactname: row.contactname,
						email: row.email,
						phonenumber: row.phonenumber
					},
				})
				this.$store.commit('receiveStatus', {
					status: -1
				})
				this.$router.push("/addorganisations")
			},
			handleDelete(index, row) { //删除数据（Delete data）
				this.tableData.splice(index, 1);
			},
			getDeleteVisible(index, row) {
				this.visible = false; //隐藏弹出框（Hide pop-up boxes）
			},
			handleSizeChange: function(size) {
				this.pagesize = size;
				console.log(this.pagesize) //每页下拉显示数据（Drop-down display of data per page）
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				console.log(this.currentPage) //点击第几页（Click on the pages）
			},
		},
	}
</script>

<style scoped>
	#main {
		margin-left: 50px;
		margin-right: 50px;

	}

	.title {
		color: black;
		font-size: 30px;
		margin-top: 0px;
		margin-bottom: 40px;
		display: inline-block;
	}

	.select {
		width: 350px;
		max-height: 20px;
		margin-bottom: 20px;
	}

	/deep/ .el-breadcrumb__item:first-child .el-breadcrumb__inner {
		color: white;
	}

	/deep/ .el-breadcrumb__item .el-breadcrumb__inner {
		color: white;
	}

	/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner {
		color: white;
	}
</style>
