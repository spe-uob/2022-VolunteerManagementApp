<template>
	<div style="width: 100%;">
		<el-alert title="The organisation was added successfully.You may add another organisation below." type="success"
			show-icon :style="{display: n}">
		</el-alert>
		<el-alert title="The organisation was added successfully.You may edit it again below." type="success" show-icon
			:style="{display: e}">
		</el-alert>
		<div class="main" style="margin: 50px;">
			<el-form :model="formDate" label-position="left" label-width="200px">
				<el-form-item prop="name" label="Name">
					<div class="inputbox">
						<el-input v-model="formDate.name"></el-input>
						<div class="sub-title">Name of organisation</div>
					</div>
				</el-form-item>
				<el-form-item prop="addressline1" label="Address line1">
					<div class="inputbox">
						<el-input v-model="formDate.addressline1"></el-input>
						<div class="sub-title">First line of their address</div>
					</div>
				</el-form-item>
				<el-form-item prop="postcode" label="Assress line2">
					<div class="inputbox">
						<el-input v-model="formDate.postcode"></el-input>
						<div class="sub-title">Second line of their address</div>
					</div>
				</el-form-item>
				<el-form-item prop="contactname" label="Address line3">
					<div class="inputbox">
						<el-input v-model="formDate.contactname"></el-input>
						<div class="sub-title">Third line of their address</div>
					</div>
				</el-form-item>
				<el-form-item prop="email" label="Postcode">
					<div class="inputbox">
						<el-input v-model="formDate.email"></el-input>
						<div class="sub-title">Address postcode</div>
					</div>
				</el-form-item>
				<el-form-item prop="phonenumber" label="Email">
					<div class="inputbox">
						<el-input v-model="formDate.phonenumber"></el-input>
						<div class="sub-title">Main email fororganisation contact</div>
					</div>
				</el-form-item>
				<el-form-item label="Notes">
					<div class="inputbox">
						<el-input ></el-input>
						<div class="sub-title">Any other notes?</div>
					</div>
				</el-form-item>
				<el-form-item label="Contact name">
					<div class="inputbox">
						<el-input ></el-input>
						<div class="sub-title">Name of organisation contact</div>
					</div>
				</el-form-item>
				<el-form-item  label="Phone number">
					<div class="inputbox">
						<el-input ></el-input>
						<div class="sub-title">Main phone number for organisation contact</div>
					</div>
				</el-form-item>
       ///el-form-item>

				<div style="position: fixed;bottom: 10px;z-index: 100;right: 20px;">
					<el-button class="btn" style="color: white;background-color: #aa0000;font-size: 12px;margin-right: 910px;"
						@click="Delete()">Delete
					</el-button>
					<el-button class="btn" style="color: white;background-color: rgb(79 141 171);font-size: 12px;"
						@click="another()">Save and
						add another </el-button>
					<el-button class="btn" style="color: white;background-color: rgb(79 141 171);font-size: 12px;"
						@click="edit()">Save and
						continue editing </el-button>
					<el-button class="btn" style="color: white;background-color: rgb(68, 126, 155);font-size: 12px;"
						@click="dialongAdd()">SAVE
					</el-button>
				</div>
			</el-form>
		</div>
		<el-dialog
		  :visible.sync="dialogVisible"
		  width="90%">
		  <span class="title">
		   Are you sure?
		  </span>
		  <br />
		  <span class="title1">
		   Are you sure you want to delete the organisation "2"? All of the following related items will be deleted:
		  </span>
		  <br />
		  <span class="title2">
		   Summary
		  </span>
		   <br />
		  <span class="title3">
		   ·Organisations: 1
		  </span>
		  <br />
		  <span class="title2">
		   Objects
		  </span>
		  <br />
		  <span class="title3">
		   ·Organisations: 2
		  </span>
		  <div style="margin-left: 40px;">
		  	<el-button class="btn" style="color: white;background-color: #aa0000;font-size: 12px;"
		  		@click="agree()">Yes,I'm sure
		  	</el-button>
		  	<el-button class="btn" style="color: white;background-color: rgb(79 141 171);font-size: 12px;"
		  		@click="No()">No,take me back </el-button>
		  </div>
		  ///span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		props: {
			dialog: Object,
			formList: Object
		},
		data() {
			return {
				dialogVisible:false,
				n: 'none',
				e: 'none',
				formDate:{
					index:-1,
					name: '',
					addressline1: '',
					postcode: '',
					contactname: '',
					email: '',
					phonenumber: ''
				}
			};
		},
		created() {
			if(this.$store.state.status == -1){
				this.formDate=this.$store.state.formData
				
			}
		},
		methods: {
			dialongAdd() {
				this.$store.commit('receiveAMsg', {
				           formDate: this.formDate
				         })
				this.$router.push("/header/1-3")
			},
			Delete(){
				this.dialogVisible=true;
			},
			another() {
				this.n = ''
			},
			agree(){
				this.dialogVisible=false,
				this.formDate.name='';
				this.formDate.addressline1='',
				this.formDate.postcode='',
				this.formDate.contactname='',
				this.formDate.email='',
				this.formDate.phonenumber='';
			},
			No(){
				this.dialogVisible=false;
			},
			edit() {
				this.e = ''
			}
		}
	}
</script>

<style>
	.main {
		margin-left: 70px;
	}

	.sub-title {
		font-size: 10px;
		color: rgb(144, 147, 153);
	}

	.inputbox {
		margin-left: 70px;
	}

	.el-input {
		width: 400px;
	}

	.btn {
		margin-left: 20px;
		color: white;
	}
	.title {
		color: #909399;
		font-size: 25px;
		margin-top: 25px;
		margin-bottom: 25px;
		display: inline-block;
	}
	.title1 {
		color: #5d5f63;
		font-size: 20px;
		margin-bottom: 25px;
		display: inline-block;
	}
	.title2 {
		color: #0c0c0d;
		font-weight: bold;
		font-size: 25px;
		margin-bottom: 25px;
		display: inline-block;
	}
	.title3 {
		color: #909399;
		font-weight: bold;
		font-size: 20px;
		margin-bottom: 25px;
		display: inline-block;
		margin-left: 50px;
	}
</style>
