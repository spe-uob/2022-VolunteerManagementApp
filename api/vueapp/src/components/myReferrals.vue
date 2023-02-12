<template>
	<div>
		<table>
			<thead>
				<tr style="font-size: 17px;background-color: #f7f7f7;">
					<td rowspan="4" style="font-size: 17px;font-weight:bold;">Referrals</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				
				<tr>
					<th>Referral Type<div style="display: inline-block;position: absolute;top:55px;"><span class="arrow asc"></span><br /><span class="arrow dsc"></span></div></th>
					<th>Resident<div style="display: inline-block;position: absolute;top: 55px;"><span class="arrow asc"></span><br /><span class="arrow dsc"></span></div></th>
					<th>Created<div style="display: inline-block;position: absolute;top: 55px;"><span class="arrow asc"></span><br /><span class="arrow dsc"></span></div></th>
					<th>Satus<div style="display: inline-block;position: absolute;top: 55px;"><span class="arrow asc"></span><br /><span class="arrow dsc"></span></div></th>
				</tr>
				<!-- 用索引值除以 2 取余 -->
				<tr v-for="(item, index) in list" :class="'tr-color-' + index % 2" :key="index">
					<td style="color:  rgb(68, 126, 155);">{{item.type}}</td>
					<td style="color:  rgb(68, 126, 155);">{{item.resident}}</td>
					<td>{{item.created}}</td>
					<td>{{item.status}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						type: "1",
						resident: '1',
						created: '1',
						status: '1'
					},
					{
						type: '',
						resident: '',
						created:'' ,
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
					{
						type: '',
						resident: '',
						created: '',
						status: ''
					},
				]
			}
		},
methods:{
	
}

	}
</script>

<style>
	table {
		border: 1px solid #f5f5f5;
		border-radius: 5px;
		margin: 0 auto;
		border-spacing: 0px;
	}

	th {
		background-color: #ebecf0;
		color: rgba(31, 31, 31, 0.7);
		cursor: pointer;
		text-align: left;
	}


	td {
		font-size: 13px;
		height: 30px;
	}

	th,
	td {
		min-width: 90px;
		padding: 10px 10px;

	}

 /* 定义余数为 0 的行颜色 */
    .tr-color-0 {
        background: #f2f2f2;
    }
    /* 定义余数为 1 的行颜色 */
    .tr-color-1 {
        background: #fff;
    }

	.arrow {
		display: inline-block;
		vertical-align: middle;
		width: 0;
		height: 0;
		margin-left: 5px;
		opacity: 0.66;
	}

	.arrow.asc {
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-bottom: 4px solid #4c4b50;
	}

	.arrow.dsc {
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 4px solid #4c4b50;
	}
</style>
