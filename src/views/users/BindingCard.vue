<template>
    <div class="col-md-9 left-col">
        <div class="panel panel-default padding-md">
            <div class="panel-body">
                <h2><i class="fa fa-cog"></i> 绑定银行卡</h2>
                <hr>
                <div class="form-horizontal" data-validator-form>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">持卡人姓名</label>
                        <div class="col-sm-6">
                            <input v-model.trim="card_username" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">持卡人身份证号</label>
                        <div class="col-sm-6">
                            <input v-model.trim="card_id_card" v-validator:input.required="{ title: '身份证号', regex: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, error: '请填写正确格式的身份证信息' }" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">开户银行</label>
                        <div class="col-sm-6">
                          <input v-model.trim="card_bank_name" type="text" class="form-control">
                          <!-- <select v-model.trim="card_bank_name" class="form-control">
                            <option value="">请选择</option>
                            <option value="中国银行">中国银行</option>
                            <option value="工商银行">工商银行</option>
                            <option value="招商银行">招商银行</option>
                            <option value="农业银行">农业银行</option>
                            <option value="建设银行">建设银行</option>
                          </select> -->
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">银行卡号</label>
                        <div class="col-sm-6">
                            <input v-model.trim="card_bank_card" v-validator:input.required="{ title: '银行卡号', regex: /^\d{10,20}$/, error: '请填写正确格式的银行卡号' }" type="text" class="form-control">
                        </div>
                    </div>
                    <!-- <div class="form-group">
                        <label class="col-sm-2 control-label">性别</label>
                        <div class="col-sm-6">
                            <select v-model="sex" class="form-control">
                                <option value="">未选择</option>
                                <option value="male">男</option>
                                <option value="female">女</option>
                            </select>
                        </div>
                    </div> -->
                    <!-- <div class="form-group">
                        <label class="col-sm-2 control-label">兴趣</label>
                        <div class="col-sm-6">
                            <label class="checkbox-inline">
                                <input v-model="hobbies" value="泡网" type="checkbox"> 泡网
                            </label>
                            <label class="checkbox-inline">
                                <input v-model="hobbies" value="运动" type="checkbox"> 运动
                            </label>
                            <label class="checkbox-inline">
                                <input v-model="hobbies" value="健身" type="checkbox"> 健身
                            </label>
                            <label class="checkbox-inline">
                                <input v-model="hobbies" value="旅游" type="checkbox"> 旅游
                            </label>
                            <label class="checkbox-inline">
                                <input v-model="hobbies" value="游戏" type="checkbox"> 游戏
                            </label>
                        </div>
                    </div> -->
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-6">
                            <button type="submit" class="btn btn-primary btn-block" @click="updateProfile">提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BindingCard',
    data () {
        return {
            card_username: '', // 持卡人姓名
            card_id_card: '', // 身份证号
            card_bank_name: '', // 开户行
            card_bank_card: '', // 银行卡号
        }
    },
    // 在实例创建完成后，初始化表单值
    created () {
        const user = this.$store.state.user

        if (user && typeof user === 'object') {
            // 将仓库的个人信息赋值给对应的变量
            const { card_username, card_id_card, card_bank_name, card_bank_card } = user

            // 设置用户名初始值
            this.card_username = card_username
            this.card_id_card = card_id_card
            this.card_bank_name = card_bank_name
            this.card_bank_card = card_bank_card
        }
    },
    methods: {
        // 更新个人信息
        updateProfile (e) {
            this.$nextTick(() => {
                // 表单验证通过时
                if (e.target.canSubmit) {
                    // 分发 updateUser 事件以更新个人信息
                    this.$store.dispatch('updateUser', {
                        card_username: this.card_username,
                        card_id_card: this.card_id_card,
                        card_bank_name: this.card_bank_name,
                        card_bank_card: this.card_bank_card,
                    })
                    // alert('修改成功')
                    this.$message.show('修改成功')
                }
            })
        }
    }
}
</script>

<style scoped>
</style>
