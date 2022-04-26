export default {
    computed: {
        userDetail() {
            return this.$store.getters['userDetail/userInfo']
        }
    }
}