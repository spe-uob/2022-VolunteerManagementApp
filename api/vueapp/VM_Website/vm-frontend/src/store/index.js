import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		status:-1,
		formData: {},
		tableData: [{
				name: 'Fliwood Food Centre',
				addressline1: '123Fakes',
				postcode: 'Bs9',
				contactname: '',
				email: '',
				phonenumber: ''
			},
			{
				name: "St.John's Surgery",
				addressline1: '123',
				postcode: 'Bs1',
				contactname: '-',
				email: '-',
				phonenumber: '-'
			},
			{
				name: 'Test referal org 1',
				addressline1: 'Address Line1',
				postcode: 'Fake',
				contactname: '-',
				email: '-',
				phonenumber: '-'
			},
		],
	},
	mutations: {
		receiveAMsg(state, payload) {
			// 将A组件的数据存放于state
			if (payload.formDate.index !== -1) {
				state.tableData[payload.formDate.index] = payload.formDate
			} else {
				state.tableData.push(payload.formDate)
			}
		},
		receiveBMsg(state, payload) {
			// 将A组件的数据存放于state
			state.formData = payload.formData
		},
		receiveStatus(state, payload) {
			// 将A组件的数据存放于state
			state.status= payload.status
		},
	},
})

export default store;
