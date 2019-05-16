export default ({
  name: 'UserItem',
  props: {
    option:{type:Object, default:{}},
    index:Number
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
      this.$emit("selected", {user:this.option, index:this.index});
    }
  }
});
