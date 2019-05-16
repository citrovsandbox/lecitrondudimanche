export default ({
  name: 'UserItem',
  props: {
    option:{type:Object, default:function () {
      return {}
    }}
  },
  data() {
    return {
      isSelecting:false
    };
  },
  methods:{
    onTagLineClick () {
      this.isSelecting = !this.isSelecting;
    },
    onUserItemPress () {
      this.$emit("selected", this.option);
    }
  }
});
