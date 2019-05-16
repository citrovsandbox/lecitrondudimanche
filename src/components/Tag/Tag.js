export default ({
  name: 'Tag',
  props: {
    tag:{type:Object, default:function () {
      return {}
    }}
  },
  data() {
    return {
      isSelecting:false
    };
  },
  methods:{
    onTagExitPress () {
      this.$emit("delete", this.tag);
    }
  }
});
