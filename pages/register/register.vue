<template>
	<view class="login">
		<form @keyup.enter="toLogin">
			<legend class="title">用户注册</legend>
			<view class="form-group">
				<label>用户名:</label>
				<input type="text" placeholder="请输入用户名" v-model="username" />
			</view>
			<view class="form-group">
				<label>密&nbsp;&nbsp;码:</label>
				<input type="password" placeholder="请输入密码" v-model="password" />
			</view>
			<view class="form-group">
				<label>手机号:</label>
				<input type="number" placeholder="请输入手机号" v-model="phone" />
			</view>
			<view class="form-group">
				<view class="btn" @tap="register">注 册</view>
			</view>
			<view class="state">注册成功将直接登录</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				phone: ''
			}
		},
		methods: {
			register: function() {
				console.log(this.username, this.password, this.phone)
				if (this.username && this.password && this.phone) {
					if (/^1[3|4|5|8][0-9]\d{8}$/.test(this.phone)) {
						uni.setStorageSync('username', this.username);
						uni.setStorageSync('phone', this.phone);
						
						 uni.switchTab({
							url: '/pages/my/my'
					    })
					} else {
						console.log("输入的手机号格式不对")
					}

				} else {
					console.log("请输入完整登录信息")
				}
			}
		}
	}
</script>

<style>
	.login {
		width: 100%;
		height: 100%;
		/* background: #eee; */
		font-size: 16px;
	}

	.title {
		font-size: 24px;
		padding: 20px;
		text-align: center;
	}

	form {
		width: 100%;
		padding: 50px 0;
		margin: auto;
	}

	.form-group {
		padding: 20px 20px 20px 20px;
		display: flex;
		justify-content: center;
	}
	.form-group label{
		flex: 1;
		font-size: 18px;
		margin-top: 3px;
	}

	.form-group input {
		flex: 3;
		border: 1px solid #ccc;
		padding: 5px 0px;
		font-size: 16px;
		outline: none;
		text-indent: 6px;
	}

	.btn {
		display: inline-block;
		border: 1px solid #ccc;
		width: 50%;
		padding: 14px 0;
		text-align: center;
		border-radius: 14px;
		outline: none;
		background: #1e905f;
		color: white;
		font-size: 20px;
		font-weight: 500;
		margin-top: 30px;
	}
	.state{
		text-align: center;
		color: #666;
		margin-top: -15px;
	}
</style>
